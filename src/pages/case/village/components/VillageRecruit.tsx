import VillageSectionHead from "@/pages/case/village/components/VillageSectionHead";
import type { VillageInfoItem, VillageMajor } from "@/mocks/villageProject";

interface VillageRecruitProps {
  majors: VillageMajor[];
  cycle: VillageInfoItem;
  advisor: VillageInfoItem;
}

export default function VillageRecruit({ majors, cycle, advisor }: VillageRecruitProps) {
  return (
    <section className="mx-auto w-full max-w-[960px] px-4 pt-8 md:px-10">
      <VillageSectionHead title="招募专业" />
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {majors.map((item) => (
          <div
            key={item.major}
            className="flex items-center gap-3 rounded-card border border-background-200 bg-background-50 p-4"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
              <i className={`${item.icon} text-[20px] leading-none`}></i>
            </span>
            <div className="min-w-0">
              <p className="text-[14.5px] font-bold text-foreground-950">{item.major}</p>
              <p className="mt-0.5 text-[12.5px] text-foreground-500">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[cycle, advisor].map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 rounded-card border border-background-200 bg-background-50 p-4"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <i className={`${item.icon} text-[19px] leading-none`}></i>
            </span>
            <div className="min-w-0">
              <p className="text-[12px] text-foreground-500">{item.label}</p>
              <p className="mt-1 text-[14px] font-semibold leading-snug text-foreground-950">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}