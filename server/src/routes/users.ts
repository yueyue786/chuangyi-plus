import { Router } from "express";
import { profileSchema } from "../validators.js";
import { authMiddleware, type AuthRequest } from "../middleware/auth.js";
import { getUserById, updateUser, getDesignerWithPortfolio, listDesigners } from "../db.js";

const router = Router();

router.get("/profile", authMiddleware, async (req: AuthRequest, res) => {
  const user = await getUserById(req.user!.id);
  if (!user) {
    res.status(404).json({ error: "用户不存在" });
    return;
  }
  res.json({
    user: {
      id: user.id,
      phone: user.phone,
      name: user.name,
      role: user.role,
      avatar: user.avatar,
      title: user.title,
      school: user.school,
      village: user.village,
      bio: user.bio,
      portfolio: user.portfolio,
    },
  });
});

router.put("/profile", authMiddleware, async (req: AuthRequest, res) => {
  const parsed = profileSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const user = await updateUser(req.user!.id, parsed.data);
  if (!user) {
    res.status(404).json({ error: "用户不存在" });
    return;
  }
  res.json({
    user: {
      id: user.id,
      phone: user.phone,
      name: user.name,
      role: user.role,
      avatar: user.avatar,
      title: user.title,
      school: user.school,
      village: user.village,
      bio: user.bio,
      portfolio: user.portfolio,
    },
  });
});

router.get("/designers", async (_req, res) => {
  const designers = await listDesigners();
  res.json({ designers });
});

router.get("/designers/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的用户 ID" });
    return;
  }
  const designer = await getDesignerWithPortfolio(id);
  if (!designer) {
    res.status(404).json({ error: "设计师不存在" });
    return;
  }
  res.json({ designer });
});

export default router;
