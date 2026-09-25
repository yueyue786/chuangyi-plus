import type { DemandScheduleItem } from "@/mocks/demandDetail";

interface DemandScheduleProps {
  schedule: DemandScheduleItem[];
}

export default function DemandSchedule({ schedule }: DemandScheduleProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">具体需求与周期</h2>
      </div>

      <ol className="mt-3 flex flex-col gap-2.5">
        {schedule.map((item, index) => (
          <li
            key={item.phase}
            className="flex gap-3 rounded-card border border-background-200 bg-background-50 px-3.5 py-3"
          >
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-100 text-[11.5px] font-bold text-accent-700">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[13.5px] font-bold text-foreground-950">{item.phase}</h3>
                <span className="flex-shrink-0 rounded-full bg-background-100 px-2 py-0.5 text-[10.5px] text-foreground-600">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 flex items-start gap-1 text-[12px] leading-relaxed text-foreground-500">
                <i className="ri-flag-2-line mt-0.5 text-[13px] leading-none"></i>
                交付：{item.deliverable}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}