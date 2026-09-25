export type Role = "village" | "designer";
export type DemandStatus = "open" | "closed" | "in_progress" | "completed";
export type ApplicationStatus = "pending" | "selected" | "rejected" | "completed";
export type ProjectStatus = "communicating" | "in_progress" | "landed";

export interface UserRow {
  id: number;
  phone: string;
  password_hash: string;
  name: string;
  role: Role;
  avatar: string | null;
  title: string | null;
  school: string | null;
  village: string | null;
  bio: string | null;
  portfolio: string | null;
  created_at: string;
  updated_at: string;
}

export interface DemandRow {
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
}

export interface ApplicationRow {
  id: number;
  demand_id: number;
  designer_id: number;
  message: string | null;
  portfolio_url: string | null;
  status: ApplicationStatus;
  created_at: string;
  updated_at: string;
}

export interface ProjectRow {
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
}

export interface MessageRow {
  id: number;
  user_id: number;
  type: string;
  title: string;
  content: string;
  related_id: number | null;
  is_read: number;
  created_at: string;
}
