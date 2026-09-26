import { Router } from "express";
import { demandSchema } from "../validators.js";
import { authMiddleware, requireRole, type AuthRequest } from "../middleware/auth.js";
import {
  createDemand,
  listDemands,
  getDemandById,
  updateDemand,
  listApplications,
} from "../db.js";

const router = Router();

router.get(
  "/",
  (req: AuthRequest, res, next) => {
    // mine=1 需要登录态，公开列表则直接放行
    if (req.query.mine === "1") {
      authMiddleware(req, res, next);
      return;
    }
    next();
  },
  async (req: AuthRequest, res) => {
    const { status, category, mine } = req.query;
    if (mine === "1") {
      if (!req.user || req.user.role !== "village") {
        res.status(403).json({ error: "无权访问" });
        return;
      }
      const demands = await listDemands({
        status: typeof status === "string" ? (status as never) : undefined,
        category: typeof category === "string" ? category : undefined,
        villageId: req.user.id,
      });
      res.json({ demands });
      return;
    }
    const demands = await listDemands({
      status: typeof status === "string" ? (status as never) : undefined,
      category: typeof category === "string" ? category : undefined,
    });
    res.json({ demands });
  }
);

router.get("/mine/list", authMiddleware, requireRole("village"), async (req: AuthRequest, res) => {
  const demands = await listDemands({ villageId: req.user!.id });
  res.json({ demands });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的需求 ID" });
    return;
  }
  const demand = await getDemandById(id);
  if (!demand) {
    res.status(404).json({ error: "需求不存在" });
    return;
  }
  res.json({ demand });
});

router.post("/", authMiddleware, requireRole("village"), async (req: AuthRequest, res) => {
  const parsed = demandSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const demand = await createDemand({ villageId: req.user!.id, ...parsed.data });
  res.status(201).json({ demand });
});

router.put("/:id", authMiddleware, requireRole("village"), async (req: AuthRequest, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的需求 ID" });
    return;
  }
  const parsed = demandSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const demand = await updateDemand(id, req.user!.id, parsed.data);
  if (!demand) {
    res.status(404).json({ error: "需求不存在或无权限" });
    return;
  }
  res.json({ demand });
});

router.get("/:id/applications", authMiddleware, requireRole("village"), async (req: AuthRequest, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的需求 ID" });
    return;
  }
  const demand = await getDemandById(id);
  if (!demand || demand.village_id !== req.user!.id) {
    res.status(404).json({ error: "需求不存在或无权限" });
    return;
  }
  const applications = await listApplications({ demandId: id });
  res.json({ applications });
});

export default router;
