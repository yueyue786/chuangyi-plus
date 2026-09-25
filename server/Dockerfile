# --- 构建阶段 ---
FROM node:20-bookworm-slim AS builder
WORKDIR /app

# 优先复制依赖清单，利用 Docker 层缓存
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund || npm install --no-audit --no-fund

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# --- 运行阶段 ---
FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# better-sqlite3 运行时所需的原生依赖在 node:20-bookworm-slim 中已具备
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --no-audit --no-fund || npm install --omit=dev --no-audit --no-fund

COPY --from=builder /app/dist ./dist

# 数据卷（Railway Volume / Render Disk 挂载到 /data）
ENV SQLITE_PATH=/data/data.sqlite
RUN mkdir -p /data
VOLUME ["/data"]

EXPOSE 4000
CMD ["node", "dist/index.js"]
