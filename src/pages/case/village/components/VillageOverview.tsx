import VillageSectionHead from "@/pages/case/village/components/VillageSectionHead";
import type { VillageInfoItem } from "@/mocks/villageProject";

interface VillageOverviewProps {
  summary: string;
  basicInfo: VillageInfoItem[];
  secondInfo: VillageInfoItem[];
}

function InfoCard({ item }: { item: VillageInfoItem }) {
  return (
    <div className="flex items-start gap-3 rounded-card border border-background-200 bg-background-50 p-4">
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
  );
}

export default function VillageOverview({
  summary,
  basicInfo,
  secondInfo,
}: VillageOverviewProps) {
  return (
    <section id="intro" className="mx-auto w-full max-w-[960px] scroll-mt-20 px-4 pt-6 md:px-10">
      <VillageSectionHead title="项目简介" />
      <p className="mt-3 rounded-card border border-background-200 bg-background-50 p-4 text-[14px] leading-relaxed text-foreground-700 md:p-5">
        {summary}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {basicInfo.map((item) => (
          <InfoCard key={item.label} item={item} />
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {secondInfo.map((item) => (
          <InfoCard key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}