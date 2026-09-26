import { createClient, type Client, type InValue } from "@libsql/client";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { UserRow, DemandRow, ApplicationRow, ProjectRow, MessageRow } from "./types.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = process.env.SQLITE_PATH || path.join(__dirname, "../data.sqlite");

// 远程优先（Turso 等 libsql 协议），未配置 DATABASE_URL 时回退到本地文件
const url = process.env.DATABASE_URL || pathToFileURL(dbPath).href;
const authToken = process.env.TURSO_AUTH_TOKEN;

const db: Client = createClient(authToken ? { url, authToken } : { url });

async function all<T>(sql: string, args: InValue[] = []): Promise<T[]> {
  const rs = await db.execute({ sql, args });
  return rs.rows as unknown as T[];
}

async function get<T>(sql: string, args: InValue[] = []): Promise<T | undefined> {
  const rs = await db.execute({ sql, args });
  return rs.rows[0] as T | undefined;
}

async function run(sql: string, args: InValue[] = []): Promise<number> {
  const rs = await db.execute({ sql, args });
  return Number(rs.lastInsertRowid);
}

export async function initDb() {
  const statements = [
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      phone TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('village', 'designer')),
      avatar TEXT,
      title TEXT,
      school TEXT,
      village TEXT,
      bio TEXT,
      portfolio TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS demands (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      village_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      location TEXT NOT NULL,
      description TEXT NOT NULL,
      budget TEXT,
      cycle TEXT,
      majors TEXT,
      cover TEXT,
      status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed', 'in_progress', 'completed')),
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      demand_id INTEGER NOT NULL REFERENCES demands(id) ON DELETE CASCADE,
      designer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      message TEXT,
      portfolio_url TEXT,
      status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'selected', 'rejected', 'completed')),
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(demand_id, designer_id)
    )`,
    `CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      demand_id INTEGER NOT NULL REFERENCES demands(id) ON DELETE CASCADE,
      village_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      designer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'communicating' CHECK (status IN ('communicating', 'in_progress', 'landed')),
      stage INTEGER NOT NULL DEFAULT 0,
      note TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(demand_id, designer_id)
    )`,
    `CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      related_id INTEGER,
      is_read INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`,
    "CREATE INDEX IF NOT EXISTS idx_demands_village ON demands(village_id)",
    "CREATE INDEX IF NOT EXISTS idx_applications_demand ON applications(demand_id)",
    "CREATE INDEX IF NOT EXISTS idx_applications_designer ON applications(designer_id)",
    "CREATE INDEX IF NOT EXISTS idx_projects_village ON projects(village_id)",
    "CREATE INDEX IF NOT EXISTS idx_projects_designer ON projects(designer_id)",
    "CREATE INDEX IF NOT EXISTS idx_messages_user ON messages(user_id)",
  ];

  // 本地文件连接显式开启外键；Turso 远程默认已开启
  if (url.startsWith("file:")) {
    statements.unshift("PRAGMA foreign_keys = ON");
  }
  await db.batch(statements, "write");
}

export async function getUserByPhone(phone: string): Promise<UserRow | undefined> {
  return get<UserRow>("SELECT * FROM users WHERE phone = ?", [phone]);
}

export async function getUserById(id: number): Promise<UserRow | undefined> {
  return get<UserRow>("SELECT * FROM users WHERE id = ?", [id]);
}

export async function createUser(data: {
  phone: string;
  passwordHash: string;
  name: string;
  role: "village" | "designer";
  village?: string;
  school?: string;
  title?: string;
}) {
  const id = await run(
    `INSERT INTO users (phone, password_hash, name, role, village, school, title)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [data.phone, data.passwordHash, data.name, data.role, data.village ?? null, data.school ?? null, data.title ?? null]
  );
  return (await getUserById(id))!;
}

export async function updateUser(
  id: number,
  data: Partial<Pick<UserRow, "name" | "avatar" | "title" | "school" | "village" | "bio" | "portfolio">>
) {
  const fields = Object.keys(data) as Array<keyof typeof data>;
  if (fields.length === 0) return getUserById(id);
  const setClause = fields.map((f) => `${f} = ?`).join(", ");
  const values = fields.map((f) => data[f] ?? null);
  await run(`UPDATE users SET ${setClause}, updated_at = datetime('now') WHERE id = ?`, [...values, id]);
  return getUserById(id);
}

export async function createDemand(data: {
  villageId: number;
  title: string;
  category: string;
  location: string;
  description: string;
  budget?: string;
  cycle?: string;
  majors?: string;
  cover?: string;
}) {
  const id = await run(
    `INSERT INTO demands (village_id, title, category, location, description, budget, cycle, majors, cover)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.villageId,
      data.title,
      data.category,
      data.location,
      data.description,
      data.budget ?? null,
      data.cycle ?? null,
      data.majors ?? null,
      data.cover ?? null,
    ]
  );
  return (await get<DemandRow>("SELECT * FROM demands WHERE id = ?", [id]))!;
}

export async function listDemands(options?: {
  status?: DemandRow["status"];
  category?: string;
  villageId?: number;
}) {
  let sql = `
    SELECT d.*, u.name as village_name, u.village as village_village
    FROM demands d
    JOIN users u ON u.id = d.village_id
    WHERE 1=1
  `;
  const params: InValue[] = [];
  if (options?.status) {
    sql += " AND d.status = ?";
    params.push(options.status);
  }
  if (options?.category) {
    sql += " AND d.category = ?";
    params.push(options.category);
  }
  if (options?.villageId) {
    sql += " AND d.village_id = ?";
    params.push(options.villageId);
  }
  sql += " ORDER BY d.created_at DESC";
  return all<DemandRow & { village_name: string; village_village: string | null }>(sql, params);
}

export async function getDemandById(id: number) {
  return get<DemandRow & { village_name: string; village_village: string | null }>(
    `SELECT d.*, u.name as village_name, u.village as village_village
     FROM demands d JOIN users u ON u.id = d.village_id WHERE d.id = ?`,
    [id]
  );
}

export async function updateDemand(
  id: number,
  villageId: number,
  data: Partial<
    Pick<DemandRow, "title" | "category" | "location" | "description" | "budget" | "cycle" | "majors" | "cover" | "status">
  >
) {
  const existing = await getDemandById(id);
  if (!existing || existing.village_id !== villageId) return null;
  const fields = Object.keys(data) as Array<keyof typeof data>;
  if (fields.length === 0) return existing;
  const setClause = fields.map((f) => `${f} = ?`).join(", ");
  const values = fields.map((f) => data[f] ?? null);
  await run(`UPDATE demands SET ${setClause}, updated_at = datetime('now') WHERE id = ?`, [...values, id]);
  return getDemandById(id);
}

export async function createApplication(data: {
  demandId: number;
  designerId: number;
  message?: string;
  portfolioUrl?: string;
}) {
  const id = await run(
    `INSERT INTO applications (demand_id, designer_id, message, portfolio_url)
     VALUES (?, ?, ?, ?)`,
    [data.demandId, data.designerId, data.message ?? null, data.portfolioUrl ?? null]
  );
  return (await get<ApplicationRow>("SELECT * FROM applications WHERE id = ?", [id]))!;
}

export async function getApplicationById(id: number) {
  return get<
    ApplicationRow & {
      demand_title: string;
      designer_name: string;
      designer_school: string | null;
      designer_title: string | null;
    }
  >(
    `SELECT a.*, d.title as demand_title, u.name as designer_name, u.school as designer_school, u.title as designer_title
     FROM applications a
     JOIN demands d ON d.id = a.demand_id
     JOIN users u ON u.id = a.designer_id
     WHERE a.id = ?`,
    [id]
  );
}

export async function listApplications(options?: { demandId?: number; designerId?: number; villageId?: number }) {
  let sql = `
    SELECT a.*, d.title as demand_title, d.village_id,
           u.name as designer_name, u.school as designer_school, u.title as designer_title, u.avatar as designer_avatar
    FROM applications a
    JOIN demands d ON d.id = a.demand_id
    JOIN users u ON u.id = a.designer_id
    WHERE 1=1
  `;
  const params: InValue[] = [];
  if (options?.demandId) {
    sql += " AND a.demand_id = ?";
    params.push(options.demandId);
  }
  if (options?.designerId) {
    sql += " AND a.designer_id = ?";
    params.push(options.designerId);
  }
  if (options?.villageId) {
    sql += " AND d.village_id = ?";
    params.push(options.villageId);
  }
  sql += " ORDER BY a.created_at DESC";
  return all<
    ApplicationRow & {
      demand_title: string;
      village_id: number;
      designer_name: string;
      designer_school: string | null;
      designer_title: string | null;
      designer_avatar: string | null;
    }
  >(sql, params);
}

export async function updateApplicationStatus(id: number, status: ApplicationRow["status"]) {
  await run("UPDATE applications SET status = ?, updated_at = datetime('now') WHERE id = ?", [status, id]);
  return getApplicationById(id);
}

export async function getApplication(demandId: number, designerId: number) {
  return get<ApplicationRow>("SELECT * FROM applications WHERE demand_id = ? AND designer_id = ?", [demandId, designerId]);
}

export async function createProject(data: { demandId: number; villageId: number; designerId: number; title: string }) {
  const id = await run(
    `INSERT INTO projects (demand_id, village_id, designer_id, title)
     VALUES (?, ?, ?, ?)`,
    [data.demandId, data.villageId, data.designerId, data.title]
  );
  return (await get<ProjectRow>("SELECT * FROM projects WHERE id = ?", [id]))!;
}

export async function getProjectById(id: number) {
  return get<
    ProjectRow & {
      demand_title: string;
      village_name: string;
      designer_name: string;
      designer_avatar: string | null;
    }
  >(
    `SELECT p.*, d.title as demand_title,
            v.name as village_name, d2.name as designer_name, d2.avatar as designer_avatar
     FROM projects p
     JOIN demands d ON d.id = p.demand_id
     JOIN users v ON v.id = p.village_id
     JOIN users d2 ON d2.id = p.designer_id
     WHERE p.id = ?`,
    [id]
  );
}

export async function listProjects(options?: { villageId?: number; designerId?: number; status?: ProjectRow["status"] }) {
  let sql = `
    SELECT p.*, d.title as demand_title,
           v.name as village_name, d2.name as designer_name, d2.avatar as designer_avatar
    FROM projects p
    JOIN demands d ON d.id = p.demand_id
    JOIN users v ON v.id = p.village_id
    JOIN users d2 ON d2.id = p.designer_id
    WHERE 1=1
  `;
  const params: InValue[] = [];
  if (options?.villageId) {
    sql += " AND p.village_id = ?";
    params.push(options.villageId);
  }
  if (options?.designerId) {
    sql += " AND p.designer_id = ?";
    params.push(options.designerId);
  }
  if (options?.status) {
    sql += " AND p.status = ?";
    params.push(options.status);
  }
  sql += " ORDER BY p.updated_at DESC";
  return all<
    ProjectRow & {
      demand_title: string;
      village_name: string;
      designer_name: string;
      designer_avatar: string | null;
    }
  >(sql, params);
}

export async function updateProject(
  id: number,
  data: Partial<Pick<ProjectRow, "status" | "stage" | "note" | "title">>
) {
  const fields = Object.keys(data) as Array<keyof typeof data>;
  if (fields.length === 0) return getProjectById(id);
  const setClause = fields.map((f) => `${f} = ?`).join(", ");
  const values = fields.map((f) => data[f] ?? null);
  await run(`UPDATE projects SET ${setClause}, updated_at = datetime('now') WHERE id = ?`, [...values, id]);
  return getProjectById(id);
}

export async function createMessage(data: {
  userId: number;
  type: string;
  title: string;
  content: string;
  relatedId?: number;
}) {
  const id = await run(
    `INSERT INTO messages (user_id, type, title, content, related_id)
     VALUES (?, ?, ?, ?, ?)`,
    [data.userId, data.type, data.title, data.content, data.relatedId ?? null]
  );
  return (await get<MessageRow>("SELECT * FROM messages WHERE id = ?", [id]))!;
}

export async function listMessages(userId: number, unreadOnly = false) {
  let sql = "SELECT * FROM messages WHERE user_id = ?";
  const params: InValue[] = [userId];
  if (unreadOnly) {
    sql += " AND is_read = 0";
  }
  sql += " ORDER BY created_at DESC";
  return all<MessageRow>(sql, params);
}

export async function markMessageRead(id: number, userId: number) {
  await run("UPDATE messages SET is_read = 1 WHERE id = ? AND user_id = ?", [id, userId]);
}

export async function markAllMessagesRead(userId: number) {
  await run("UPDATE messages SET is_read = 1 WHERE user_id = ?", [userId]);
}

export async function getDesignerWithPortfolio(id: number) {
  return get<Omit<UserRow, "password_hash" | "updated_at">>(
    `SELECT id, phone, name, role, avatar, title, school, bio, portfolio, created_at
     FROM users WHERE id = ? AND role = 'designer'`,
    [id]
  );
}

export async function listDesigners() {
  return all<Omit<UserRow, "password_hash" | "updated_at">>(
    `SELECT id, phone, name, role, avatar, title, school, bio, portfolio, created_at
     FROM users WHERE role = 'designer' ORDER BY created_at DESC`
  );
}
