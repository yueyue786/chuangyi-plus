import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../db.js";
import type { Role } from "../types.js";

const JWT_SECRET = process.env.JWT_SECRET || "chuangyi-dev-secret-change-in-production";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    phone: string;
    name: string;
    role: Role;
  };
}

export function signToken(payload: { id: number; phone: string; name: string; role: Role }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export async function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "未登录" });
    return;
  }
  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { id: number; phone: string; name: string; role: Role };
    const user = await getUserById(payload.id);
    if (!user) {
      res.status(401).json({ error: "用户不存在" });
      return;
    }
    req.user = { id: user.id, phone: user.phone, name: user.name, role: user.role };
    next();
  } catch {
    res.status(401).json({ error: "登录已过期，请重新登录" });
  }
}

export function requireRole(role: Role) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ error: "未登录" });
      return;
    }
    if (req.user.role !== role) {
      res.status(403).json({ error: "无权访问" });
      return;
    }
    next();
  };
}
