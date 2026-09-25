import { Router } from "express";
import { projectStatusSchema } from "../validators.js";
import { authMiddleware, requireRole, type AuthRequest } from "../middleware/auth.js";
import {
  listProjects,
  getProjectById,
  updateProject,
  createMessage,
} from "../db.js";

const router = Router();

router.get("/", authMiddleware, (req: AuthRequest, res) => {
  const { status } = req.query;
  const projects =
    req.user!.role === "village"
      ? listProjects({ villageId: req.user!.id, status: typeof status === "string" ? (status as never) : undefined })
      : listProjects({ designerId: req.user!.id, status: typeof status === "string" ? (status as never) : undefined });
  res.json({ projects });
});

router.get("/:id", authMiddleware, (req: AuthRequest, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的项目 ID" });
    return;
  }
  const project = getProjectById(id);
  if (!project) {
    res.status(404).json({ error: "项目不存在" });
    return;
  }
  const isVillage = project.village_id === req.user!.id;
  const isDesigner = project.designer_id === req.user!.id;
  if (!isVillage && !isDesigner) {
    res.status(403).json({ error: "无权限查看" });
    return;
  }
  res.json({ project });
});

router.put("/:id/status", authMiddleware, requireRole("village"), (req: AuthRequest, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的项目 ID" });
    return;
  }
  const parsed = projectStatusSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const project = getProjectById(id);
  if (!project || project.village_id !== req.user!.id) {
    res.status(404).json({ error: "项目不存在或无权限" });
    return;
  }

  const updated = updateProject(id, parsed.data);

  if (parsed.data.status || parsed.data.stage !== undefined) {
    const statusText =
      parsed.data.status === "communicating"
        ? "沟通中"
        : parsed.data.status === "in_progress"
          ? "进行中"
          : parsed.data.status === "landed"
            ? "已落地"
            : `阶段 ${parsed.data.stage}`;
    createMessage({
      userId: project.designer_id,
      type: "project",
      title: "项目进度更新",
      content: `项目「${project.demand_title}」进度已更新为：${statusText}`,
      relatedId: project.id,
    });
  }

  res.json({ project: updated });
});

export default router;
