import { z } from "zod";

export const phoneRegex = /^1[3-9]\d{9}$/;

export const registerSchema = z.object({
  phone: z.string().regex(phoneRegex, "请输入正确的 11 位手机号"),
  password: z.string().min(6, "密码至少需要 6 位"),
  name: z.string().min(1, "请输入姓名").max(30),
  role: z.enum(["village", "designer"]),
  village: z.string().max(100).optional(),
  school: z.string().max(100).optional(),
  title: z.string().max(100).optional(),
});

export const loginSchema = z.object({
  phone: z.string().regex(phoneRegex, "请输入正确的 11 位手机号"),
  password: z.string().min(1, "请输入密码"),
});

export const demandSchema = z.object({
  title: z.string().min(1, "请输入需求标题").max(100),
  category: z.string().min(1, "请选择需求分类"),
  location: z.string().min(1, "请输入所在地区"),
  description: z.string().min(10, "需求描述至少 10 个字").max(2000),
  budget: z.string().max(100).optional(),
  cycle: z.string().max(100).optional(),
  majors: z.string().max(200).optional(),
  cover: z.string().url().optional(),
});

export const applicationSchema = z.object({
  demandId: z.number().int().positive(),
  message: z.string().max(1000).optional(),
  portfolioUrl: z.string().url().optional().or(z.literal("")),
});

export const applicationStatusSchema = z.object({
  status: z.enum(["pending", "selected", "rejected", "completed"]),
});

export const projectStatusSchema = z.object({
  status: z.enum(["communicating", "in_progress", "landed"]).optional(),
  stage: z.number().int().min(0).max(5).optional(),
  note: z.string().max(500).optional(),
  title: z.string().min(1).max(100).optional(),
});

export const profileSchema = z.object({
  name: z.string().min(1).max(30).optional(),
  avatar: z.string().url().optional().or(z.literal("")),
  title: z.string().max(100).optional(),
  school: z.string().max(100).optional(),
  village: z.string().max(100).optional(),
  bio: z.string().max(500).optional(),
  portfolio: z.string().max(500).optional(),
});
