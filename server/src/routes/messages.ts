import { Router } from "express";
import { authMiddleware, type AuthRequest } from "../middleware/auth.js";
import { listMessages, markMessageRead, markAllMessagesRead } from "../db.js";

const router = Router();

router.get("/", authMiddleware, (req: AuthRequest, res) => {
  const unreadOnly = req.query.unread === "1";
  const messages = listMessages(req.user!.id, unreadOnly);
  res.json({ messages });
});

router.put("/:id/read", authMiddleware, (req: AuthRequest, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "无效的消息 ID" });
    return;
  }
  markMessageRead(id, req.user!.id);
  res.json({ success: true });
});

router.put("/read-all", authMiddleware, (req: AuthRequest, res) => {
  markAllMessagesRead(req.user!.id);
  res.json({ success: true });
});

export default router;
