// Netlify Function 入口：把 Express 应用包装成 Serverless 处理函数
import serverless from "serverless-http";
import { ready } from "../../server/dist/index.js";

// 冷启动时先完成建表，再初始化一次 serverless-http 处理器
const handlerPromise = ready.then(async () => {
  const mod = await import("../../server/dist/index.js");
  return serverless(mod.default);
});

export const handler = async (event, context) => {
  const h = await handlerPromise;
  return h(event, context);
};
