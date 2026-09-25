import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import FixedBottomBar from "@/components/feature/FixedBottomBar";
import ApplyFormModal from "@/components/base/ApplyFormModal";
import RealApplyModal from "@/components/base/RealApplyModal";
import DemandHero from "@/pages/demand/components/DemandHero";
import DemandBackground from "@/pages/demand/components/DemandBackground";
import DemandSchedule from "@/pages/demand/components/DemandSchedule";
import DemandMajors from "@/pages/demand/components/DemandMajors";
import { demandList } from "@/mocks/demands";
import { defaultDemandContent, demandDetails } from "@/mocks/demandDetail";
import useAuth from "@/hooks/useAuth";
import {
  apiGetDemand,
  apiMyApplications,
  type Application,
  type ApplicationStatus,
  type Demand,
  type DemandStatus,
} from "@/lib/api";

const realStatusLabel: Record<DemandStatus, string> = {
  open: "招募中",
  in_progress: "共创中",
  closed: "已截止",
  completed: "已完成",
};

const realStatusTone: Record<DemandStatus, string> = {
  open: "bg-primary-600 text-background-50",
  in_progress: "bg-accent-500 text-background-50",
  closed: "bg-secondary-600 text-background-50",
  completed: "bg-secondary-600 text-background-50",
};

const appliedStatusLabel: Record<ApplicationStatus, string> = {
  pending: "已报名 · 等待审核",
  selected: "已选中",
  rejected: "未通过",
  completed: "已完成",
};

function RealDemandDetail({ demandId }: { demandId: number }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [demand, setDemand] = useState<Demand | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [myApplication, setMyApplication] = useState<Application | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    apiGetDemand(demandId)
      .then(({ demand: d }) => {
        if (!cancelled) setDemand(d);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "加载失败，请稍后重试");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [demandId]);

  const refreshMyApplication = useCallback(() => {
    apiMyApplications()
      .then(({ applications }) => {
        setMyApplication(applications.find((app) => app.demand_id === demandId) ?? null);
      })
      .catch(() => {
        /* 忽略报名状态拉取失败 */
      });
  }, [demandId]);

  useEffect(() => {
    if (user?.role !== "designer") {
      setMyApplication(null);
      return;
    }
    refreshMyApplication();
  }, [user?.role, refreshMyApplication]);

  if (loading) {
    return (
      <AppShell withNav={false}>
        <main className="flex min-h-[50vh] items-center justify-center text-[13.5px] text-foreground-500">
          加载中…
        </main>
      </AppShell>
    );
  }

  if (error || !demand) {
    return (
      <AppShell withNav={false}>
        <main className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-accent-700">
            <i className="ri-error-warning-line text-[26px] leading-none"></i>
          </span>
          <p className="mt-3 text-[14px] font-medium text-foreground-700">
            {error || "需求不存在或已删除"}
          </p>
          <Link
            to="/demands"
            className="mt-5 cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[13.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
          >
            返回需求大厅
          </Link>
        </main>
      </AppShell>
    );
  }

  const isOpen = demand.status === "open";

  let bottomContent: ReactNode;
  if (!isOpen) {
    bottomContent = (
      <button
        type="button"
        disabled
        className="mb-3 w-full cursor-default whitespace-nowrap rounded-full bg-secondary-200 py-3 text-[15px] font-semibold text-secondary-700"
      >
        该需求已停止报名
      </button>
    );
  } else if (!user) {
    bottomContent = (
      <button
        type="button"
        onClick={() => navigate("/login")}
        className="mb-3 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3 text-[15px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.99]"
      >
        登录后报名
      </button>
    );
  } else if (user.role === "village") {
    bottomContent = (
      <p className="mb-3 flex w-full items-center justify-center rounded-full bg-background-100 py-3 text-[13.5px] font-medium text-foreground-500">
        乡村用户可前往工作台管理需求
      </p>
    );
  } else if (myApplication) {
    bottomContent = (
      <button
        type="button"
        disabled
        className="mb-3 w-full cursor-default whitespace-nowrap rounded-full bg-secondary-200 py-3 text-[15px] font-semibold text-secondary-700"
      >
        {appliedStatusLabel[myApplication.status]}
      </button>
    );
  } else {
    bottomContent = (
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="mb-3 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3 text-[15px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.99]"
      >
        立即报名
      </button>
    );
  }

  const infoItems = [
    { label: "预算说明", value: demand.budget || "面议" },
    { label: "项目周期", value: demand.cycle || "灵活安排" },
    { label: "招募专业", value: demand.majors || "专业不限" },
    { label: "发布时间", value: demand.created_at ? demand.created_at.slice(0, 10) : "-" },
  ];

  return (
    <AppShell
      withNav={false}
      contentPadding="pb-28 md:pb-32"
      bottomBar={<FixedBottomBar>{bottomContent}</FixedBottomBar>}
    >
      <main className="px-4 pt-5 md:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex cursor-pointer items-center gap-1 text-[13px] font-medium text-foreground-500 transition-colors hover:text-foreground-900"
        >
          <i className="ri-arrow-left-s-line text-[18px] leading-none"></i>
          返回
        </button>

        <section className="mt-3 rounded-card border border-background-200 bg-background-50 p-4 shadow-card md:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-medium text-secondary-700">
              {demand.category}
            </span>
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${realStatusTone[demand.status]}`}
            >
              {realStatusLabel[demand.status]}
            </span>
          </div>

          <h1 className="mt-2.5 text-[19px] font-bold leading-snug text-foreground-950">
            {demand.title}
          </h1>
          <p className="mt-2 flex items-center gap-1 text-[12.5px] text-foreground-500">
            <i className="ri-map-pin-2-line text-[14px] leading-none"></i>
            {demand.location}
          </p>
          <p className="mt-1.5 flex items-center gap-1 text-[12.5px] text-foreground-500">
            <i className="ri-home-smile-2-line text-[14px] leading-none"></i>
            发布方：{demand.village_name || "乡村用户"}
            {demand.village_village ? ` · ${demand.village_village}` : ""}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-background-200 bg-background-50 px-3 py-2.5"
              >
                <p className="text-[11px] text-foreground-500">{item.label}</p>
                <p className="mt-0.5 text-[13px] font-semibold text-foreground-950">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-6">
          <div className="flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary-500" />
            <h2 className="text-[16px] font-bold text-foreground-950">需求描述</h2>
          </div>
          <p className="mt-3 whitespace-pre-line rounded-card border border-background-200 bg-background-50 px-3.5 py-3 text-[13px] leading-relaxed text-foreground-700">
            {demand.description}
          </p>
        </section>

        <p className="px-6 pb-2 pt-7 text-center text-[10.5px] leading-relaxed text-foreground-400">
          创艺+ · 设计人才驱动乡村文化振兴
        </p>
      </main>

      <RealApplyModal
        open={modalOpen}
        demandId={demand.id}
        demandTitle={demand.title}
        onClose={() => setModalOpen(false)}
        onSuccess={refreshMyApplication}
      />
    </AppShell>
  );
}

export default function DemandDetail() {
  const { id } = useParams();
  const realMatch = id ? /^real-(\d+)$/.exec(id) : null;
  const numericId = String(Number(id) || 1);

  if (realMatch) {
    return <RealDemandDetail demandId={Number(realMatch[1])} />;
  }

  return <MockDemandDetail numericId={numericId} />;
}

function MockDemandDetail({ numericId }: { numericId: string }) {
  const base =
    demandList.find((item) => item.id === `d${numericId}`) ?? demandList[0];
  const content = demandDetails[numericId] ?? defaultDemandContent;

  const [applied, setApplied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppShell
      withNav={false}
      contentPadding="pb-28 md:pb-32"
      bottomBar={
        <FixedBottomBar>
          <button
            type="button"
            disabled={applied}
            onClick={() => setModalOpen(true)}
            className={[
              "mb-3 w-full whitespace-nowrap rounded-full py-3 text-[15px] font-semibold transition-colors",
              applied
                ? "cursor-default bg-secondary-200 text-secondary-700"
                : "cursor-pointer bg-primary-500 text-background-50 hover:bg-primary-600 active:scale-[0.99]",
            ].join(" ")}
          >
            {applied ? "已报名 · 等待导师联系" : "立即参与"}
          </button>
        </FixedBottomBar>
      }
    >
      <main>
        <DemandHero
          title={base.title}
          village={base.village}
          location={base.location}
          type={base.category}
          status={base.status}
          applicants={applied ? base.applicants + 1 : base.applicants}
          quota={base.quota}
          cover={base.cover}
          summary={content.summary}
          highlights={content.highlights}
        />
        <DemandBackground paragraphs={content.background} />
        <DemandSchedule schedule={content.schedule} />
        <DemandMajors majors={content.majors} skills={content.skills} />

        <p className="px-6 pb-2 pt-7 text-center text-[10.5px] leading-relaxed text-foreground-400">
          创艺+ · 设计人才驱动乡村文化振兴
        </p>
      </main>

      <ApplyFormModal
        open={modalOpen}
        title={`申请参与「${base.title}」`}
        onClose={() => setModalOpen(false)}
        onSuccess={() => setApplied(true)}
      />
    </AppShell>
  );
}
