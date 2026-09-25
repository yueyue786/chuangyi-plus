import type { ProjectTimelineStep } from "@/mocks/projectDetail";

interface ProjectTimelineProps {
  steps: ProjectTimelineStep[];
}

const statusMeta: Record<
  ProjectTimelineStep["status"],
  { dot: string; badge: string; label: string }
> = {
  done: {
    dot: "bg-primary-500 text-background-50",
    badge: "bg-primary-100 text-primary-700",
    label: "已完成",
  },
  active: {
    dot: "bg-accent-500 text-background-50",
    badge: "bg-accent-100 text-accent-800",
    label: "进行中",
  },
  pending: {
    dot: "bg-background-300 text-background-50",
    badge: "bg-background-100 text-foreground-500",
    label: "待启动",
  },
};

export default function ProjectTimeline({ steps }: ProjectTimelineProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-primary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">六步共创流程</h2>
      </div>
      <p className="mt-1.5 pl-3 text-[12px] text-foreground-500">
        从需求征集到评估归档，全流程一条主线
      </p>

      <ol className="relative mt-4 flex flex-col gap-4 pl-1">
        {steps.map((step, index) => {
          const meta = statusMeta[step.status];
          const isLast = index === steps.length - 1;
          return (
            <li key={step.step} className="relative flex gap-3.5">
              <div className="relative flex flex-col items-center">
                <span
                  className={`z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[12.5px] font-bold ${meta.dot}`}
                >
                  {step.step}
                </span>
                {!isLast && (
                  <span className="mt-1 w-px flex-1 bg-background-300" />
                )}
              </div>

              <div className="flex-1 rounded-card border border-background-200 bg-background-50 px-3.5 py-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[13.5px] font-bold text-foreground-950">
                    {step.title}
                  </h3>
                  <span
                    className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-medium ${meta.badge}`}
                  >
                    {meta.label}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-foreground-400">{step.date}</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-foreground-600">
                  {step.desc}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}