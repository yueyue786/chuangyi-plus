import { Router } from "express";
import { applicationSchema, applicationStatusSchema } from "../validators.js";
import { authMiddleware, requireRole, type AuthRequest } from "../middleware/auth.js";
import {
  createApplication,
  getApplication,
  getDemandById,
  listApplications,
  getApplicationById,
  updateApplicationStatus,
  createMessage,
  createProject,
} from "../db.js";

const router = Router();

router.post("/", authMiddleware, requireRole("designer"), (req: AuthRequest, res) => {
  const parsed = applicationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const { demandId, message, portfolioUrl } = parsed.data;

  const demand = getDemandById(demandId);
  if (!demand) {
    res.status(404).json({ error: "需求不存在" });
    return;
  }
  if (demand.status !== "open") {
    res.status(400).json({ error: "该需求已停止报名" });
    return;
  }

  const existing = getApplication(demandId, req.user!.id);
  if (existing) {
    res.status(409).json({ error: "你已报名过该需求" });
    return;
  }

  const application = createApplication({
    demandId,
    designerId: req.user!.id,
    message,
    portfolioUrl,
  });

  createMessage({
    userId: demand.village_id,
    type: "application",
    title: "收到新的报名申请",
    content: `设计师「${req.user!.name}」报名了你的需求「${demand.title}」`,
    relatedId: application.id,
  });

  res.status(201).json({ application });
});

router.get("/my", authMiddleware, requireRole("designer"), (req: AuthRequest, res) => {
  const applications = listApplications({ designerId: req.user!.id });
  res.json({ applications });
});

router.get("/received", authMiddleware, requireRole("village"), (req: AuthRequest, res) => {
  const applications = listApplications({ villageId: req.user!.id });
  res.json({ applications });
});

router.put("/:id/status", authMiddleware, requireRole("village"), (req: AuthRequest, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的报名 ID" });
    return;
  }
  const parsed = applicationStatusSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const { status } = parsed.data;

  const application = getApplicationById(id);
  if (!application) {
    res.status(404).json({ error: "报名不存在" });
    return;
  }
  const demand = getDemandById(application.demand_id);
  if (!demand || demand.village_id !== req.user!.id) {
    res.status(403).json({ error: "无权限操作该报名" });
    return;
  }

  const updated = updateApplicationStatus(id, status);

  if (status === "selected") {
    createProject({
      demandId: demand.id,
      villageId: demand.village_id,
      designerId: application.designer_id,
      title: demand.title,
    });
    createMessage({
      userId: application.designer_id,
      type: "application",
      title: "报名已通过",
      content: `你报名的需求「${demand.title}」已被乡村方选中，项目已创建`,
      relatedId: application.id,
    });
  } else if (status === "rejected") {
    createMessage({
      userId: application.designer_id,
      type: "application",
      title: "报名未通过",
      content: `很抱歉，你报名的需求「${demand.title}」未被选中`,
      relatedId: application.id,
    });
  }

  res.json({ application: updated });
});

router.get("/:id", authMiddleware, (req: AuthRequest, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的报名 ID" });
    return;
  }
  const application = getApplicationById(id);
  if (!application) {
    res.status(404).json({ error: "报名不存在" });
    return;
  }
  const demand = getDemandById(application.demand_id);
  const isDesigner = application.designer_id === req.user!.id;
  const isVillage = demand?.village_id === req.user!.id;
  if (!isDesigner && !isVillage) {
    res.status(403).json({ error: "无权限查看" });
    return;
  }
  res.json({ application, demand });
});

export default router;
