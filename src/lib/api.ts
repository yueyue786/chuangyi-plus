/**
 * 创艺+ 后端 API 客户端
 * - 开发环境通过 Vite 代理访问 /api
 * - 生产环境使用 VITE_API_URL 指向 Render 上的后端
 */

const BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? "/api";

const TOKEN_KEY = "cy-auth-token";

export function getToken(): string | null {
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null) {
  try {
    if (token) {
      window.localStorage.setItem(TOKEN_KEY, token);
    } else {
      window.localStorage.removeItem(TOKEN_KEY);
    }
  } catch {
    /* ignore */
  }
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> | undefined),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers });
  const data = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new ApiError(data.error || `请求失败（${res.status}）`, res.status);
  }
  return data as T;
}

// ---------- 类型定义 ----------

export type Role = "village" | "designer";
export type DemandStatus = "open" | "closed" | "in_progress" | "completed";
export type ApplicationStatus = "pending" | "selected" | "rejected" | "completed";
export type ProjectStatus = "communicating" | "in_progress" | "landed";

export interface User {
  id: number;
  phone: string;
  name: string;
  role: Role;
  avatar: string | null;
  title: string | null;
  school: string | null;
  village: string | null;
  bio: string | null;
  portfolio: string | null;
}

export interface Demand {
  id: number;
  village_id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  budget: string | null;
  cycle: string | null;
  majors: string | null;
  cover: string | null;
  status: DemandStatus;
  created_at: string;
  updated_at: string;
  village_name?: string;
  village_village?: string | null;
}

export interface Application {
  id: number;
  demand_id: number;
  designer_id: number;
  message: string | null;
  portfolio_url: string | null;
  status: ApplicationStatus;
  created_at: string;
  demand_title?: string;
  village_id?: number;
  designer_name?: string;
  designer_school?: string | null;
  designer_title?: string | null;
  designer_avatar?: string | null;
}

export interface Project {
  id: number;
  demand_id: number;
  village_id: number;
  designer_id: number;
  title: string;
  status: ProjectStatus;
  stage: number;
  note: string | null;
  created_at: string;
  updated_at: string;
  demand_title?: string;
  village_name?: string;
  designer_name?: string;
  designer_avatar?: string | null;
}

export interface Message {
  id: number;
  user_id: number;
  type: string;
  title: string;
  content: string;
  related_id: number | null;
  is_read: number;
  created_at: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

// ---------- 认证 ----------

export async function apiRegister(input: {
  phone: string;
  password: string;
  name: string;
  role: Role;
  village?: string;
  school?: string;
  title?: string;
}): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function apiLogin(phone: string, password: string): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ phone, password }),
  });
}

export async function apiMe(): Promise<{ user: User }> {
  return request<{ user: User }>("/auth/me");
}

export async function apiUpdateProfile(input: Partial<Pick<User, "name" | "avatar" | "title" | "school" | "village" | "bio" | "portfolio">>): Promise<{ user: User }> {
  return request<{ user: User }>("/users/profile", {
    method: "PUT",
    body: JSON.stringify(input),
  });
}

// ---------- 需求 ----------

export async function apiListDemands(params?: { status?: DemandStatus; category?: string }): Promise<{ demands: Demand[] }> {
  const search = new URLSearchParams();
  if (params?.status) search.set("status", params.status);
  if (params?.category) search.set("category", params.category);
  const qs = search.toString();
  return request<{ demands: Demand[] }>(`/demands${qs ? `?${qs}` : ""}`);
}

export async function apiMyDemands(): Promise<{ demands: Demand[] }> {
  return request<{ demands: Demand[] }>("/demands/mine/list");
}

export async function apiGetDemand(id: number): Promise<{ demand: Demand }> {
  return request<{ demand: Demand }>(`/demands/${id}`);
}

export async function apiCreateDemand(input: {
  title: string;
  category: string;
  location: string;
  description: string;
  budget?: string;
  cycle?: string;
  majors?: string;
  cover?: string;
}): Promise<{ demand: Demand }> {
  return request<{ demand: Demand }>("/demands", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function apiUpdateDemand(
  id: number,
  input: Partial<{
    title: string;
    category: string;
    location: string;
    description: string;
    budget: string;
    cycle: string;
    majors: string;
    cover: string;
    status: DemandStatus;
  }>
): Promise<{ demand: Demand }> {
  return request<{ demand: Demand }>(`/demands/${id}`, {
    method: "PUT",
    body: JSON.stringify(input),
  });
}

// ---------- 报名 ----------

export async function apiApply(input: { demandId: number; message?: string; portfolioUrl?: string }): Promise<{ application: Application }> {
  return request<{ application: Application }>("/applications", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function apiMyApplications(): Promise<{ applications: Application[] }> {
  return request<{ applications: Application[] }>("/applications/my");
}

export async function apiReceivedApplications(): Promise<{ applications: Application[] }> {
  return request<{ applications: Application[] }>("/applications/received");
}

export async function apiSetApplicationStatus(id: number, status: ApplicationStatus): Promise<{ application: Application }> {
  return request<{ application: Application }>(`/applications/${id}/status`, {
    method: "PUT",
    body: JSON.stringify({ status }),
  });
}

export async function apiGetDesigner(id: number): Promise<{ designer: User }> {
  return request<{ designer: User }>(`/users/designers/${id}`);
}

// ---------- 项目 ----------

export async function apiListProjects(): Promise<{ projects: Project[] }> {
  return request<{ projects: Project[] }>("/projects");
}

export async function apiUpdateProject(
  id: number,
  input: { status?: ProjectStatus; stage?: number; note?: string; title?: string }
): Promise<{ project: Project }> {
  return request<{ project: Project }>(`/projects/${id}/status`, {
    method: "PUT",
    body: JSON.stringify(input),
  });
}

// ---------- 消息 ----------

export async function apiListMessages(unreadOnly = false): Promise<{ messages: Message[] }> {
  return request<{ messages: Message[] }>(`/messages${unreadOnly ? "?unread=1" : ""}`);
}

export async function apiMarkMessageRead(id: number): Promise<void> {
  await request(`/messages/${id}/read`, { method: "PUT" });
}

export async function apiMarkAllMessagesRead(): Promise<void> {
  await request("/messages/read-all", { method: "PUT" });
}
