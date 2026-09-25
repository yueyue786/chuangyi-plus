import VillageSectionHead from "@/pages/case/village/components/VillageSectionHead";
import type { VillageStage } from "@/mocks/villageProject";

interface VillageTimelineProps {
  stages: VillageStage[];
  current: number;
}

const dotClass: Record<VillageStage["status"], string> = {
  done: "flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-background-50",
  active:
    "flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-accent-50",
  todo: "flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border border-background-300 bg-background-100",
};

const badgeClass: Record<VillageStage["status"], string> = {
  done: "bg-primary-100 text-primary-700",
  active: "bg-accent-100 text-accent-700",
  todo: "bg-background-200 text-foreground-500",
};

const statusText: Record<VillageStage["status"], string> = {
  done: "已完成",
  active: "进行中",
  todo: "待开始",
};

export default function VillageTimeline({ stages, current }: VillageTimelineProps) {
  return (
    <section className="mx-auto w-full max-w-[960px] px-4 pt-8 md:px-10">
      <VillageSectionHead title="项目进度" badge={`第 ${current}/${stages.length} 阶段`} />

      <div className="mt-3 rounded-card border border-background-200 bg-background-50 p-4 md:p-5">
        {stages.map((stage, index) => {
          const isLast = index === stages.length - 1;
          const titleTone =
            stage.status === "active"
              ? "text-accent-700"
              : stage.status === "done"
                ? "text-foreground-900"
                : "text-foreground-500";
          return (
            <div key={stage.phase} className="flex gap-3.5">
              <div className="flex flex-col items-center">
                <span className={dotClass[stage.status]}>
                  {stage.status === "done" && (
                    <i className="ri-check-line text-[15px] leading-none"></i>
                  )}
                  {stage.status === "active" && (
                    <span className="h-2 w-2 rounded-full bg-accent-600" />
                  )}
                  {stage.status === "todo" && (
                    <span className="h-2 w-2 rounded-full bg-background-400" />
                  )}
                </span>
                {!isLast && <span className="my-1 w-[2px] flex-1 rounded-full bg-background-200" />}
              </div>

              <div className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-5"}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className={`text-[14.5px] font-bold ${titleTone}`}>{stage.phase}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeClass[stage.status]}`}
                  >
                    {statusText[stage.status]}
                  </span>
                </div>
                <p className="mt-1 text-[12.5px] leading-relaxed text-foreground-500">
                  {stage.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}