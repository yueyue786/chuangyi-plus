import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDb } from "./db.js";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import demandsRouter from "./routes/demands.js";
import applicationsRouter from "./routes/applications.js";
import projectsRouter from "./routes/projects.js";
import messagesRouter from "./routes/messages.js";

dotenv.config();
initDb();

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  "http://localhost:5173,http://localhost:3000,http://localhost:4000,http://127.0.0.1:3000"
)
  .split(",")
  .map((s) => s.trim());

app.use(
  cors({
    origin(origin, callback) {
      // 无 Origin（服务器间请求/同源代理）或在白名单内则放行
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(null, false);
    },
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/demands", demandsRouter);
app.use("/api/applications", applicationsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/messages", messagesRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "接口不存在" });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "服务器内部错误" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
