import { Router } from "express";
import bcrypt from "bcryptjs";
import { registerSchema, loginSchema } from "../validators.js";
import { getUserByPhone, createUser, getUserById } from "../db.js";
import { signToken, authMiddleware, type AuthRequest } from "../middleware/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const { phone, password, name, role, village, school, title } = parsed.data;

  const existing = await getUserByPhone(phone);
  if (existing) {
    res.status(409).json({ error: "该手机号已注册" });
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser({ phone, passwordHash, name, role, village, school, title });

  const token = signToken({ id: user.id, phone: user.phone, name: user.name, role: user.role });
  res.status(201).json({
    token,
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

router.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.errors[0]?.message || "参数错误" });
    return;
  }
  const { phone, password } = parsed.data;

  const user = await getUserByPhone(phone);
  if (!user) {
    res.status(401).json({ error: "手机号或密码错误" });
    return;
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    res.status(401).json({ error: "手机号或密码错误" });
    return;
  }

  const token = signToken({ id: user.id, phone: user.phone, name: user.name, role: user.role });
  res.json({
    token,
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

router.get("/me", authMiddleware, async (req: AuthRequest, res) => {
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

export default router;
