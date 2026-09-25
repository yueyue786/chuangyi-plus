import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import WorkbenchSidebar from "@/pages/workbench/components/WorkbenchSidebar";
import WorkbenchTopBar from "@/pages/workbench/components/WorkbenchTopBar";
import useAuth from "@/hooks/useAuth";
import {
  apiListProjects,
  apiMyApplications,
  apiMyDemands,
  apiReceivedApplications,
  apiSetApplicationStatus,
  apiUpdateDemand,
  apiUpdateProject,
  type Application,
  type ApplicationStatus,
  type Demand,
  type DemandStatus,
  type Project,
  type ProjectStatus,
} from "@/lib/api";

const STAGES = ["需求确认", "田野调研", "概念方案", "深化设计", "打样制作", "落地运营"];

const DEMAND_BADGE: Record<DemandStatus, { label: string; className: string }> = {
  open: { label: "招募中", className: "bg-primary-100 text-primary-700" },
  closed: { label: "已关闭", className: "bg-background-200 text-foreground-500" },
  in_progress: { label: "进行中", className: "bg-accent-100 text-accent-700" },
  completed: { label: "已完成", className: "bg-secondary-100 text-secondary-700" },
};

const APPLICATION_BADGE: Record<ApplicationStatus, { label: string; className: string }> = {
  pending: { label: "待审核", className: "bg-accent-100 text-accent-700" },
  selected: { label: "已选中", className: "bg-primary-100 text-primary-700" },
  rejected: { label: "未通过", className: "bg-background-200 text-foreground-500" },
  completed: { label: "已完成", className: "bg-secondary-100 text-secondary-700" },
};

const PROJECT_BADGE: Record<ProjectStatus, { label: string; className: string }> = {
  communicating: { label: "沟通中", className: "bg-accent-100 text-accent-700" },
  in_progress: { label: "进行中", className: "bg-primary-100 text-primary-700" },
  landed: { label: "已落地", className: "bg-secondary-100 text-secondary-700" },
};

function formatTime(input?: string | null): string {
  if (!input) return "-";
  const normalized = input.includes("T") ? input : `${input.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return input;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}`;
}

const PRIMARY_BTN =
  "cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-4 py-1.5 text-[12.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60";
const GHOST_BTN =
  "cursor-pointer whitespace-nowrap rounded-full border border-background-200 bg-background-50 px-4 py-1.5 text-[12.5px] font-medium text-foreground-600 transition-colors hover:border-primary-300 hover:text-primary-700 disabled:cursor-not-allowed disabled:opacity-60";

function StatusBadge({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold ${className}`}
    >
      {label}
    </span>
  );
}

function StatCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: string;
  label: string;
  value: number;
  tone: string;
}) {
  return (
    <div className="rounded-card border border-background-200 bg-background-50 p-4 shadow-card">
      <div className="flex items-center justify-between gap-2">
        <p className="whitespace-nowrap text-[12px] text-foreground-500">{label}</p>
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl ${tone}`}>
          <i className={`${icon} text-[16px] leading-none`}></i>
        </span>
      </div>
      <p className="mt-2 font-heading text-[26px] font-black leading-none text-foreground-950">
        {value}
      </p>
    </div>
  );
}

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mt-5 rounded-card border border-background-200 bg-background-50 p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-primary-500" />
          <h2 className="text-[15px] font-bold text-foreground-950">{title}</h2>
        </div>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function EmptyBox({ text = "暂无数据" }: { text?: string }) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background-100 text-foreground-400">
        <i className="ri-inbox-line text-[22px] leading-none"></i>
      </span>
      <p className="mt-3 text-[12.5px] text-foreground-400">{text}</p>
    </div>
  );
}

function ErrorBox({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="rounded-card border border-background-200 bg-background-50 p-8 text-center shadow-card">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
        <i className="ri-error-warning-line text-[22px] leading-none"></i>
      </span>
      <p className="mt-3 text-[13px] leading-relaxed text-foreground-600">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[13.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
      >
        重试
      </button>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-7 w-40 rounded-lg bg-background-200/80" />
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-[86px] rounded-card bg-background-200/70" />
        ))}
      </div>
      <div className="mt-5 h-[240px] rounded-card bg-background-200/70" />
      <div className="mt-5 h-[200px] rounded-card bg-background-200/70" />
    </div>
  );
}

function StageDots({ stage }: { stage: number }) {
  const current = Math.min(STAGES.length - 1, Math.max(0, stage));
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <div className="flex items-center">
        {STAGES.map((label, index) => (
          <div key={label} className="flex items-center">
            <span
              title={label}
              className={`h-2.5 w-2.5 rounded-full ${
                index <= current ? "bg-primary-500" : "bg-background-200"
              }`}
            />
            {index < STAGES.length - 1 && (
              <span
                className={`h-[2px] w-3.5 ${
                  index < current ? "bg-primary-400" : "bg-background-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <span className="whitespace-nowrap text-[11.5px] font-medium text-primary-700">
        {STAGES[current]}
      </span>
    </div>
  );
}

function LoginPrompt() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-[420px] rounded-card border border-background-200 bg-background-50 p-8 text-center shadow-card">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
          <i className="ri-user-3-line text-[26px] leading-none"></i>
        </span>
        <h1 className="mt-5 font-heading text-[19px] font-black text-foreground-950">请先登录</h1>
        <p className="mt-2.5 text-[13px] leading-relaxed text-foreground-500">
          登录后即可查看专属工作台，管理需求、报名与共创项目。
        </p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-6 inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
        >
          去登录
          <i className="ri-arrow-right-line text-[15px] leading-none"></i>
        </button>
      </div>
    </div>
  );
}

function VillageDashboard() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [demands, setDemands] = useState<Demand[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [actingKey, setActingKey] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [demandRes, applicationRes, projectRes] = await Promise.all([
        apiMyDemands(),
        apiReceivedApplications(),
        apiListProjects(),
      ]);
      setDemands(demandRes.demands);
      setApplications(applicationRes.applications);
      setProjects(projectRes.projects);
      setLoaded(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const handleCloseDemand = async (id: number) => {
    const key = `demand-${id}`;
    if (actingKey === key) return;
    setActingKey(key);
    setError("");
    try {
      await apiUpdateDemand(id, { status: "closed" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "操作失败，请稍后重试");
    } finally {
      setActingKey(null);
    }
  };

  const handleApplication = async (id: number, status: ApplicationStatus) => {
    const key = `app-${id}`;
    if (actingKey === key) return;
    setActingKey(key);
    setError("");
    try {
      await apiSetApplicationStatus(id, status);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "操作失败，请稍后重试");
    } finally {
      setActingKey(null);
    }
  };

  const handleAdvanceStage = async (project: Project) => {
    const key = `proj-${project.id}`;
    if (actingKey === key) return;
    setActingKey(key);
    setError("");
    try {
      await apiUpdateProject(project.id, { stage: Math.min(5, project.stage + 1) });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "操作失败，请稍后重试");
    } finally {
      setActingKey(null);
    }
  };

  const handleLand = async (project: Project) => {
    const key = `proj-${project.id}`;
    if (actingKey === key) return;
    setActingKey(key);
    setError("");
    try {
      await apiUpdateProject(project.id, { status: "landed" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "操作失败，请稍后重试");
    } finally {
      setActingKey(null);
    }
  };

  if (!loaded) {
    if (loading) return <DashboardSkeleton />;
    if (error) return <ErrorBox message={error} onRetry={() => void load()} />;
  }

  const inProgressCount = projects.filter((p) => p.status === "in_progress").length;
  const landedCount = projects.filter((p) => p.status === "landed").length;

  return (
    <div>
      {error && (
        <div className="mb-4 rounded-xl bg-accent-100 px-4 py-2.5 text-[12.5px] leading-relaxed text-accent-800">
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-[18px] font-black text-foreground-950">乡村工作台</h1>
          <p className="mt-1 text-[12px] text-foreground-500">
            管理你发布的需求、收到的报名与共创项目进度
          </p>
        </div>
        <Link
          to="/demand/publish"
          className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-5 py-2.5 text-[13.5px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
        >
          <i className="ri-add-line text-[15px] leading-none"></i>
          发布新需求
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          icon="ri-file-list-3-line"
          label="我发布的需求"
          value={demands.length}
          tone="bg-primary-100 text-primary-600"
        />
        <StatCard
          icon="ri-mail-line"
          label="收到的报名"
          value={applications.length}
          tone="bg-accent-100 text-accent-600"
        />
        <StatCard
          icon="ri-loader-2-line"
          label="进行中项目"
          value={inProgressCount}
          tone="bg-secondary-100 text-secondary-600"
        />
        <StatCard
          icon="ri-flag-line"
          label="已落地项目"
          value={landedCount}
          tone="bg-primary-100 text-primary-700"
        />
      </div>

      <Section title="我发布的需求">
        {demands.length === 0 ? (
          <EmptyBox text="暂无数据，点击右上角发布新需求" />
        ) : (
          demands.map((demand) => {
            const badge = DEMAND_BADGE[demand.status] ?? DEMAND_BADGE.open;
            const busy = actingKey === `demand-${demand.id}`;
            return (
              <div
                key={demand.id}
                className="flex flex-col gap-3 border-b border-background-100 py-3.5 last:border-b-0 md:flex-row md:items-center"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/demand/${demand.id}`}
                      className="cursor-pointer text-[13.5px] font-bold text-foreground-950 transition-colors hover:text-primary-700"
                    >
                      {demand.title}
                    </Link>
                    <StatusBadge label={badge.label} className={badge.className} />
                  </div>
                  <p className="mt-1 text-[12.5px] text-foreground-500">
                    {demand.category} · {demand.location}
                  </p>
                  <p className="mt-0.5 text-[11px] text-foreground-400">
                    发布于 {formatTime(demand.created_at)}
                  </p>
                </div>
                {demand.status === "open" && (
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => void handleCloseDemand(demand.id)}
                    className={GHOST_BTN}
                  >
                    关闭报名
                  </button>
                )}
              </div>
            );
          })
        )}
      </Section>

      <Section title="收到的报名申请">
        {applications.length === 0 ? (
          <EmptyBox text="暂无报名申请" />
        ) : (
          applications.map((app) => {
            const badge = APPLICATION_BADGE[app.status] ?? APPLICATION_BADGE.pending;
            const busy = actingKey === `app-${app.id}`;
            return (
              <div
                key={app.id}
                className="flex flex-col gap-3 border-b border-background-100 py-3.5 last:border-b-0 md:flex-row md:items-center"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/designer/${app.designer_id}`}
                      className="cursor-pointer text-[13.5px] font-bold text-foreground-950 transition-colors hover:text-primary-700"
                    >
                      {app.designer_name || "匿名设计师"}
                    </Link>
                    {app.designer_school && (
                      <span className="text-[11.5px] text-foreground-400">
                        {app.designer_school}
                      </span>
                    )}
                    <StatusBadge label={badge.label} className={badge.className} />
                  </div>
                  <p className="mt-1 text-[12.5px] text-foreground-500">
                    报名需求：{app.demand_title || `#${app.demand_id}`}
                  </p>
                  {app.message && (
                    <p className="mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-foreground-600">
                      {app.message}
                    </p>
                  )}
                  <p className="mt-0.5 text-[11px] text-foreground-400">
                    {formatTime(app.created_at)}
                  </p>
                </div>
                {app.status === "pending" && (
                  <div className="flex flex-shrink-0 items-center gap-2">
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void handleApplication(app.id, "selected")}
                      className={PRIMARY_BTN}
                    >
                      通过
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void handleApplication(app.id, "rejected")}
                      className={GHOST_BTN}
                    >
                      婉拒
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </Section>

      <Section title="共创项目管理">
        {projects.length === 0 ? (
          <EmptyBox text="暂无共创项目，通过报名后会自动生成项目" />
        ) : (
          projects.map((project) => {
            const badge = PROJECT_BADGE[project.status] ?? PROJECT_BADGE.communicating;
            const stage = Math.min(5, Math.max(0, project.stage));
            const busy = actingKey === `proj-${project.id}`;
            return (
              <div
                key={project.id}
                className="border-b border-background-100 py-4 last:border-b-0"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[13.5px] font-bold text-foreground-950">{project.title}</p>
                  <StatusBadge label={badge.label} className={badge.className} />
                </div>
                <p className="mt-1 text-[12.5px] text-foreground-500">
                  合作设计师：{project.designer_name || "待确认"}
                </p>
                <div className="mt-2.5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <StageDots stage={stage} />
                  <div className="flex flex-shrink-0 items-center gap-2">
                    {stage < 5 && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void handleAdvanceStage(project)}
                        className={PRIMARY_BTN}
                      >
                        推进到下一阶段
                      </button>
                    )}
                    {project.status !== "landed" && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void handleLand(project)}
                        className={GHOST_BTN}
                      >
                        标记已落地
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </Section>
    </div>
  );
}

function DesignerDashboard() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [applicationRes, projectRes] = await Promise.all([
        apiMyApplications(),
        apiListProjects(),
      ]);
      setApplications(applicationRes.applications);
      setProjects(projectRes.projects);
      setLoaded(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  if (!loaded) {
    if (loading) return <DashboardSkeleton />;
    if (error) return <ErrorBox message={error} onRetry={() => void load()} />;
  }

  const selectedCount = applications.filter(
    (a) => a.status === "selected" || a.status === "completed"
  ).length;
  const inProgressCount = projects.filter((p) => p.status === "in_progress").length;
  const landedCount = projects.filter((p) => p.status === "landed").length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-[18px] font-black text-foreground-950">
            设计师工作台
          </h1>
          <p className="mt-1 text-[12px] text-foreground-500">
            跟踪你的报名进度与共创项目阶段
          </p>
        </div>
        <Link
          to="/demands"
          className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-5 py-2.5 text-[13.5px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
        >
          <i className="ri-search-eye-line text-[15px] leading-none"></i>
          浏览需求大厅
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          icon="ri-mail-send-line"
          label="我的报名"
          value={applications.length}
          tone="bg-primary-100 text-primary-600"
        />
        <StatCard
          icon="ri-checkbox-circle-line"
          label="已选中"
          value={selectedCount}
          tone="bg-accent-100 text-accent-600"
        />
        <StatCard
          icon="ri-loader-2-line"
          label="进行中项目"
          value={inProgressCount}
          tone="bg-secondary-100 text-secondary-600"
        />
        <StatCard
          icon="ri-flag-line"
          label="已落地项目"
          value={landedCount}
          tone="bg-primary-100 text-primary-700"
        />
      </div>

      <Section title="我的报名记录">
        {applications.length === 0 ? (
          <EmptyBox text="暂无报名记录，去需求大厅看看吧" />
        ) : (
          applications.map((app) => {
            const badge = APPLICATION_BADGE[app.status] ?? APPLICATION_BADGE.pending;
            const highlighted = app.status === "selected";
            return (
              <div
                key={app.id}
                className={[
                  "-mx-2 flex flex-col gap-1 border-b border-background-100 px-2 py-3.5 last:border-b-0",
                  highlighted ? "rounded-xl bg-primary-50/70" : "",
                ].join(" ")}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to={`/demand/${app.demand_id}`}
                    className="cursor-pointer text-[13.5px] font-bold text-foreground-950 transition-colors hover:text-primary-700"
                  >
                    {app.demand_title || `需求 #${app.demand_id}`}
                  </Link>
                  <StatusBadge label={badge.label} className={badge.className} />
                </div>
                {app.message && (
                  <p className="line-clamp-2 text-[12.5px] leading-relaxed text-foreground-600">
                    {app.message}
                  </p>
                )}
                <p className="text-[11.5px] text-foreground-400">
                  报名时间：{formatTime(app.created_at)}
                </p>
              </div>
            );
          })
        )}
      </Section>

      <Section title="我参与的项目">
        {projects.length === 0 ? (
          <EmptyBox text="暂无参与的项目" />
        ) : (
          projects.map((project) => {
            const badge = PROJECT_BADGE[project.status] ?? PROJECT_BADGE.communicating;
            return (
              <div
                key={project.id}
                className="border-b border-background-100 py-4 last:border-b-0"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[13.5px] font-bold text-foreground-950">{project.title}</p>
                  <StatusBadge label={badge.label} className={badge.className} />
                </div>
                <p className="mt-1 text-[12.5px] text-foreground-500">
                  乡村方：{project.village_name || "未知"}
                </p>
                <div className="mt-2.5">
                  <StageDots stage={project.stage} />
                </div>
                <p className="mt-2 text-[11.5px] text-foreground-400">
                  最近更新：{formatTime(project.updated_at)}
                </p>
              </div>
            );
          })
        )}
      </Section>
    </div>
  );
}

export default function Workbench() {
  const { user, loading: authLoading } = useAuth();

  let content: ReactNode;
  if (authLoading) {
    content = <DashboardSkeleton />;
  } else if (!user) {
    content = <LoginPrompt />;
  } else if (user.role === "village") {
    content = <VillageDashboard />;
  } else {
    content = <DesignerDashboard />;
  }

  return (
    <div className="min-h-screen w-full bg-background-100 px-3 py-4 md:px-6 md:py-6">
      <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[22px] border border-background-200 bg-background-50 shadow-soft">
        <div className="flex w-full items-stretch">
          <WorkbenchSidebar />

          <div className="flex min-w-0 flex-1 flex-col">
            <WorkbenchTopBar />

            <main className="flex flex-1 flex-col bg-background-100/60 p-4 md:p-6">
              {content}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
