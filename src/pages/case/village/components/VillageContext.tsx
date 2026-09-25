import VillageSectionHead from "@/pages/case/village/components/VillageSectionHead";

interface VillageContextProps {
  villageIntro: string;
  cultureResources: string[];
  designProblem: string;
  designNeed: string;
}

export default function VillageContext({
  villageIntro,
  cultureResources,
  designProblem,
  designNeed,
}: VillageContextProps) {
  return (
    <section className="mx-auto w-full max-w-[960px] px-4 pt-8 md:px-10">
      <VillageSectionHead title="村庄介绍" />
      <p className="mt-3 rounded-card border border-background-200 bg-background-50 p-4 text-[14px] leading-relaxed text-foreground-700 md:p-5">
        {villageIntro}
      </p>

      <div id="culture" className="scroll-mt-20 pt-8">
        <VillageSectionHead title="在地文化资源" />
        <div className="mt-3 flex flex-wrap gap-2">
          {cultureResources.map((resource) => (
            <span
              key={resource}
              className="rounded-full bg-secondary-100 px-3.5 py-1.5 text-[13px] font-medium text-secondary-900"
            >
              {resource}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-8">
        <VillageSectionHead title="当前设计问题" />
        <div className="mt-3 rounded-card border border-accent-200 bg-accent-50 p-4 text-[14px] leading-relaxed text-accent-900 md:p-5">
          {designProblem}
        </div>
      </div>

      <div id="needs" className="scroll-mt-20 pt-8">
        <VillageSectionHead title="设计需求" />
        <p className="mt-3 rounded-card border border-background-200 bg-background-50 p-4 text-[14px] leading-relaxed text-foreground-700 md:p-5">
          {designNeed}
        </p>
      </div>
    </section>
  );
}