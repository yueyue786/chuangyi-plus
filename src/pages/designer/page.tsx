import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import { apiGetDesigner, type User } from "@/lib/api";

type DesignerProfile = User & { created_at?: string };

function formatDate(input?: string | null): string {
  if (!input) return "-";
  const normalized = input.includes("T") ? input : `${input.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return input;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export default function Designer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [designer, setDesigner] = useState<DesignerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const designerId = Number(id);
    if (!Number.isInteger(designerId)) {
      setError("设计师不存在或已被移除");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await apiGetDesigner(designerId);
      setDesigner(res.designer);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <AppShell>
      <main className="px-4 pt-5 md:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-background-200 bg-background-50 px-4 py-1.5 text-[12.5px] font-medium text-foreground-600 transition-colors hover:border-primary-300 hover:text-primary-700"
        >
          <i className="ri-arrow-left-line text-[14px] leading-none"></i>
          返回
        </button>

        {loading && (
          <div className="mt-4 animate-pulse">
            <div className="h-[180px] rounded-card bg-background-200/70" />
            <div className="mt-4 h-[120px] rounded-card bg-background-200/70" />
          </div>
        )}

        {!loading && error && (
          <div className="mt-4 rounded-card border border-background-200 bg-background-50 p-8 text-center shadow-card">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
              <i className="ri-user-unfollow-line text-[22px] leading-none"></i>
            </span>
            <p className="mt-3 text-[13px] text-foreground-600">{error}</p>
            <button
              type="button"
              onClick={() => void load()}
              className="mt-4 cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[13.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
            >
              重试
            </button>
          </div>
        )}

        {!loading && !error && designer && (
          <>
            <section className="relative mt-4 overflow-hidden rounded-card bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 px-6 py-7 text-background-50 md:px-9 md:py-8">
              <div className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-primary-400/25 blur-2xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl" />

              <div className="relative flex items-center gap-5">
                {designer.avatar ? (
                  <img
                    src={designer.avatar}
                    alt={`${designer.name} 头像`}
                    className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-background-50/40 object-cover"
                  />
                ) : (
                  <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-background-50/40 bg-background-50/20 font-heading text-[30px] font-black">
                    {designer.name?.slice(0, 1) || "设"}
                  </span>
                )}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h1 className="font-heading text-[21px] font-black leading-none">
                      {designer.name}
                    </h1>
                    {designer.title && (
                      <span className="rounded-full bg-accent-500 px-2.5 py-0.5 text-[11px] font-semibold">
                        {designer.title}
                      </span>
                    )}
                  </div>
                  {designer.school && (
                    <p className="mt-2 text-[12.5px] text-background-50/85">
                      <i className="ri-graduation-cap-line mr-1 text-[13px] leading-none"></i>
                      {designer.school}
                    </p>
                  )}
                  <p className="mt-1.5 text-[11.5px] text-background-50/70">
                    注册时间：{formatDate(designer.created_at)}
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-4 rounded-card border border-background-200 bg-background-50 p-5 shadow-card md:p-6">
              <div className="flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-primary-500" />
                <h2 className="text-[14.5px] font-bold text-foreground-950">个人简介</h2>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-foreground-600">
                {designer.bio || "这位设计师还没有填写个人简介。"}
              </p>
            </section>

            {designer.portfolio && (
              <section className="mt-4 rounded-card border border-background-200 bg-background-50 p-5 shadow-card md:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-accent-500" />
                  <h2 className="text-[14.5px] font-bold text-foreground-950">作品集</h2>
                </div>
                {/^https?:\/\//.test(designer.portfolio) ? (
                  <a
                    href={designer.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex cursor-pointer items-center gap-1.5 break-all text-[13px] font-medium text-primary-600 hover:text-primary-700"
                  >
                    <i className="ri-external-link-line text-[14px] leading-none"></i>
                    {designer.portfolio}
                  </a>
                ) : (
                  <p className="mt-3 whitespace-pre-wrap text-[13px] leading-relaxed text-foreground-600">
                    {designer.portfolio}
                  </p>
                )}
              </section>
            )}
          </>
        )}
      </main>
    </AppShell>
  );
}
