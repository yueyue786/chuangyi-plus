// Netlify Function 入口（CJS）：把 Express 应用包装成 Serverless 处理函数
const serverless = require("serverless-http");

// 冷启动时先完成建表，再初始化一次 serverless-http 处理器
const handlerPromise = import("../../server/dist/index.js").then(async (mod) => {
  await mod.ready;
  return serverless(mod.default);
});

exports.handler = async (event, context) => {
  const h = await handlerPromise;
  return h(event, context);
};
