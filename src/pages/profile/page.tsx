import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import NoticeModal from "@/components/base/NoticeModal";
import SkillTags from "@/pages/profile/components/SkillTags";
import BadgeGrid from "@/pages/profile/components/BadgeGrid";
import WorkGrid from "@/pages/profile/components/WorkGrid";
import ListGroups from "@/pages/profile/components/ListGroups";
import useAuth from "@/hooks/useAuth";

const routeMap: Record<string, string> = {
  报名中的需求: "/my-applications",
  我的作品集: "/my-works",
  我的工作台: "/workbench",
  站内消息: "/messages",
  浏览需求大厅: "/demands",
};

const villageQuickLinks = [
  { label: "发布新需求", icon: "ri-file-add-line", hint: "寻找设计人才", to: "/demand/publish" },
  { label: "我的工作台", icon: "ri-dashboard-line", hint: "需求与项目总览", to: "/workbench" },
  { label: "站内消息", icon: "ri-notification-3-line", hint: "报名与项目通知", to: "/messages" },
];

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const [comingSoon, setComingSoon] = useState("");

  const handleSelect = (label: string) => {
    const to = routeMap[label];
    if (to) {
      navigate(to);
      return;
    }
    setComingSoon(label);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return (
      <AppShell>
        <main className="px-4 pt-5 md:px-8 lg:px-10">
          <div className="animate-pulse">
            <div className="h-[180px] rounded-card bg-background-200/70" />
            <div className="mt-4 h-[120px] rounded-card bg-background-200/70" />
          </div>
        </main>
      </AppShell>
    );
  }

  if (!user) {
    return (
      <AppShell>
        <main className="flex min-h-[calc(100vh-260px)] items-center justify-center px-4 py-12">
          <div className="w-full max-w-[420px] rounded-card border border-background-200 bg-background-50 p-8 text-center shadow-card">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
              <i className="ri-user-smile-line text-[26px] leading-none"></i>
            </span>
            <h1 className="mt-5 font-heading text-[19px] font-black text-foreground-950">
              登录后查看个人中心
            </h1>
            <p className="mt-2.5 text-[13px] leading-relaxed text-foreground-500">
              登录创艺+，管理你的需求、报名、共创项目与站内消息。
            </p>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="mt-6 inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
            >
              去登录 / 注册
              <i className="ri-arrow-right-line text-[15px] leading-none"></i>
            </button>
          </div>
        </main>
      </AppShell>
    );
  }

  const roleLabel = user.role === "village" ? "乡村用户" : "设计师";
  const subLine =
    user.role === "village"
      ? user.village || "未填写所在乡村 / 项目"
      : [user.school, user.title].filter(Boolean).join(" · ") || "未填写学校 / 头衔";

  return (
    <AppShell>
      <main className="pt-5">
        <div className="px-4 md:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-primary-500" />
              <h2 className="text-[15px] font-bold text-foreground-950">个人中心</h2>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-background-200 bg-background-50 px-4 py-1.5 text-[12.5px] font-medium text-foreground-600 transition-colors hover:border-accent-300 hover:text-accent-700"
            >
              <i className="ri-logout-box-r-line text-[14px] leading-none"></i>
              退出登录
            </button>
          </div>

          <section className="relative mt-3 overflow-hidden rounded-card bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 px-6 py-7 text-background-50 md:px-9 md:py-8">
            <div className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-primary-400/25 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl" />

            <div className="relative flex items-center gap-5">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={`${user.name} 头像`}
                  className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-background-50/40 object-cover"
                />
              ) : (
                <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-background-50/40 bg-background-50/20 font-heading text-[30px] font-black">
                  {user.name?.slice(0, 1) || "友"}
                </span>
              )}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="font-heading text-[21px] font-black leading-none">{user.name}</h1>
                  <span className="rounded-full bg-accent-500 px-2.5 py-0.5 text-[11px] font-semibold">
                    {roleLabel}
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] text-background-50/85">{subLine}</p>
                <p className="mt-1.5 text-[12px] text-background-50/70">
                  <i className="ri-smartphone-line mr-1 text-[12px] leading-none"></i>
                  {user.phone}
                </p>
                {user.bio && (
                  <p className="mt-1.5 text-[12px] italic text-background-50/70">“{user.bio}”</p>
                )}
              </div>
            </div>
          </section>
        </div>

        {user.role === "village" ? (
          <section className="px-4 pt-5 md:px-8 lg:px-10">
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-accent-500" />
              <h2 className="text-[15px] font-bold text-foreground-950">快捷入口</h2>
            </div>
            <div className="mt-3 overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card">
              {villageQuickLinks.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => navigate(item.to)}
                  className={[
                    "flex w-full cursor-pointer items-center gap-3 px-3.5 py-3 text-left transition-colors hover:bg-background-100",
                    index !== 0 ? "border-t border-background-100" : "",
                  ].join(" ")}
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <i className={`${item.icon} text-[16px] leading-none`}></i>
                  </span>
                  <span className="flex-1 whitespace-nowrap text-[13.5px] font-medium text-foreground-900">
                    {item.label}
                  </span>
                  <span className="whitespace-nowrap text-[11px] text-foreground-400">
                    {item.hint}
                  </span>
                  <i className="ri-arrow-right-s-line text-[17px] leading-none text-foreground-300"></i>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <>
            <SkillTags />
            <BadgeGrid />
            <WorkGrid />
            <ListGroups onSelect={handleSelect} />
          </>
        )}

        <p className="px-6 pb-4 pt-7 text-center text-[10.5px] leading-relaxed text-foreground-400 md:px-8 lg:px-10">
          创艺+ v1.0.0 · 设计人才驱动乡村文化振兴
        </p>
      </main>

      <NoticeModal
        open={Boolean(comingSoon)}
        message={`「${comingSoon}」正在加紧开发中，敬请期待。`}
        onClose={() => setComingSoon("")}
      />
    </AppShell>
  );
}
