import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import useAuth from "@/hooks/useAuth";
import { apiCreateDemand } from "@/lib/api";

const categories = ["品牌包装", "文化导览", "非遗文创", "空间改造"];

export default function PublishDemand() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [cycle, setCycle] = useState("");
  const [majors, setMajors] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  if (!loading && (!user || user.role !== "village")) {
    return (
      <AppShell>
        <main className="flex min-h-[calc(100vh-260px)] items-center justify-center px-4 py-12">
          <div className="w-full max-w-[420px] rounded-card border border-background-200 bg-background-50 px-7 py-9 text-center shadow-card">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
              <i className="ri-lock-2-line text-[26px] leading-none"></i>
            </span>
            <h1 className="mt-4 font-heading text-[20px] font-black text-foreground-950">
              仅乡村用户可发布需求
            </h1>
            <p className="mt-2 text-[12.5px] leading-relaxed text-foreground-500">
              {user
                ? "当前账号是设计师身份，发布需求请使用乡村账号登录。"
                : "请先登录乡村账号，登录后即可发布你的乡村设计需求。"}
            </p>
            <Link
              to={user ? "/" : "/login"}
              className="mt-6 inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[14px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
            >
              {user ? "返回首页" : "去登录 / 注册"}
              <i className="ri-arrow-right-line text-[15px] leading-none"></i>
            </Link>
          </div>
        </main>
      </AppShell>
    );
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) {
      setError("请输入需求标题");
      return;
    }
    if (!category) {
      setError("请选择需求分类");
      return;
    }
    if (!location.trim()) {
      setError("请输入所在地区");
      return;
    }
    if (description.trim().length < 10) {
      setError("需求描述至少 10 个字");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await apiCreateDemand({
        title: title.trim(),
        category,
        location: location.trim(),
        description: description.trim(),
        budget: budget.trim() || undefined,
        cycle: cycle.trim() || undefined,
        majors: majors.trim() || undefined,
      });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "发布失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <AppShell>
        <main className="flex min-h-[calc(100vh-260px)] items-center justify-center px-4 py-12">
          <div className="w-full max-w-[420px] animate-fade-up rounded-card border border-background-200 bg-background-50 px-7 py-9 text-center shadow-card">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <i className="ri-checkbox-circle-fill text-[34px] leading-none"></i>
            </span>
            <h1 className="mt-4 font-heading text-[20px] font-black text-foreground-950">
              需求发布成功
            </h1>
            <p className="mt-2 text-[12.5px] leading-relaxed text-foreground-500">
              你的需求已进入需求大厅，设计师报名后会在工作台提醒你。
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                to="/demands"
                className="w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3 text-[14.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
              >
                查看需求大厅
              </Link>
              <Link
                to="/workbench"
                className="w-full cursor-pointer whitespace-nowrap rounded-full border border-background-200 bg-background-50 py-3 text-[14.5px] font-semibold text-foreground-700 transition-colors hover:border-primary-300 hover:text-primary-700"
              >
                去工作台管理
              </Link>
            </div>
          </div>
        </main>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <main className="px-4 py-8 md:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[640px]">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-1 text-[13px] font-medium text-foreground-500 transition-colors hover:text-foreground-900"
          >
            <i className="ri-arrow-left-s-line text-[18px] leading-none"></i>
            返回
          </button>

          <div className="mt-3 animate-fade-up rounded-card border border-background-200 bg-background-50 px-6 py-7 shadow-card md:px-8">
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-primary-500" />
              <h1 className="font-heading text-[20px] font-black text-foreground-950">
                发布乡村设计需求
              </h1>
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-foreground-500">
              填写真实的乡村设计需求，发布后高校设计师即可在需求大厅看到并报名参与。
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">
                  需求标题<span className="ml-0.5 text-accent-600">*</span>
                </span>
                <input
                  type="text"
                  maxLength={100}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="如：宏村研学基地视觉导览系统设计"
                  className="w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[14px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                />
              </label>

              <div className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">
                  需求分类<span className="ml-0.5 text-accent-600">*</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      className={`cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                        category === c
                          ? "border-primary-500 bg-primary-500 text-background-50"
                          : "border-background-200 bg-background-100/70 text-foreground-700 hover:border-primary-300"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">
                  所在地区<span className="ml-0.5 text-accent-600">*</span>
                </span>
                <input
                  type="text"
                  maxLength={100}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="如：安徽省黄山市黟县宏村"
                  className="w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[14px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">
                  需求描述<span className="ml-0.5 text-accent-600">*</span>
                </span>
                <textarea
                  maxLength={2000}
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="介绍乡村背景、希望解决的设计问题、现有资源与期望成果（至少 10 个字）"
                  className="w-full resize-none rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[13.5px] leading-relaxed text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                />
              </label>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-medium text-foreground-700">预算说明</span>
                  <input
                    type="text"
                    maxLength={100}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="如：公益共创，提供食宿"
                    className="w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[14px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-medium text-foreground-700">项目周期</span>
                  <input
                    type="text"
                    maxLength={100}
                    value={cycle}
                    onChange={(e) => setCycle(e.target.value)}
                    placeholder="如：2 个月"
                    className="w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[14px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-medium text-foreground-700">招募专业</span>
                  <input
                    type="text"
                    maxLength={200}
                    value={majors}
                    onChange={(e) => setMajors(e.target.value)}
                    placeholder="如：视觉传达、环境设计"
                    className="w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[14px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                  />
                </label>
              </div>

              {error && (
                <p className="rounded-xl bg-accent-100 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-accent-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3.5 text-[15px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "发布中…" : "发布需求"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
