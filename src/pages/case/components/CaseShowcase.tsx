import type { CaseShowcaseSection } from "@/mocks/caseDetail";
import CaseFlipbook from "@/pages/case/components/CaseFlipbook";
import CaseStaggerGallery from "@/pages/case/components/CaseStaggerGallery";
import CaseWaterfallGallery from "@/pages/case/components/CaseWaterfallGallery";

interface CaseShowcaseProps {
  sections: CaseShowcaseSection[];
}

export default function CaseShowcase({ sections }: CaseShowcaseProps) {
  return (
    <section className="px-4 pt-8 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">独立设计板块</h2>
      </div>
      <p className="mt-1.5 text-[12px] text-foreground-500">
        食品包装 · 生活文创 · 旅游纪念品，三类单品各自成章
      </p>

      <div className="mt-6 flex flex-col gap-10 md:gap-12">
        {sections.map((section, index) => (
          <article key={section.tag}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 font-heading text-[12.5px] font-bold text-background-50">
                {index + 1}
              </span>
              <h3 className="text-[15px] font-bold text-foreground-950 md:text-[16px]">
                {section.name}
              </h3>
              <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[10.5px] font-medium text-accent-700">
                {section.tag}
              </span>
            </div>

            <p className="mt-2 text-[12.5px] leading-relaxed text-foreground-600 md:text-[13px]">
              {section.desc}
            </p>

            <div className="mt-3.5">
              {section.layout === "flipbook" && <CaseFlipbook images={section.images} />}
              {section.layout === "stagger" && <CaseStaggerGallery images={section.images} />}
              {section.layout === "waterfall" && <CaseWaterfallGallery images={section.images} />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}