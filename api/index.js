// Vercel Serverless 入口：复用 server/dist 中编译好的 Express 应用
import app, { ready } from "../server/dist/index.js";

export default async function handler(req, res) {
  // 冷启动时等待建表完成（已完成则立即返回）
  await ready;
  return app(req, res);
}
