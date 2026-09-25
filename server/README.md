# 创艺+ 后端服务

Express + TypeScript + SQLite 后端，支持双角色（乡村 / 设计师）登录、需求发布、报名申请、项目进度与站内消息。

## 本地开发

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

服务运行在 `http://localhost:4000`，接口前缀 `/api`。

## 环境变量

| 变量 | 说明 |
|---|---|
| `PORT` | 服务端口，默认 4000 |
| `JWT_SECRET` | JWT 签名密钥，生产环境必须修改 |
| `SQLITE_PATH` | SQLite 文件路径，默认 `./data.sqlite` |
| `ALLOWED_ORIGINS` | 允许跨域的前端域名，逗号分隔 |

## 部署到 Render

1. 将 `server` 目录推送到 GitHub
2. Render 选择 **New > Web Service**，连接仓库
3. Root Directory 填写 `server`
4. 添加环境变量：
   - `JWT_SECRET`：生成一个强随机字符串
   - `ALLOWED_ORIGINS`：填入前端 Vercel 域名，如 `https://your-app.vercel.app`
   - `SQLITE_PATH`：如使用 Render Disk，填写 `/var/lib/data/data.sqlite`
5. 免费实例无磁盘持久化，重启会丢数据；如需保留数据，请挂载 Render Disk 或使用外部 PostgreSQL。
