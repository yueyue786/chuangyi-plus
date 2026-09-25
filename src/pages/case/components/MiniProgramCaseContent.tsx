import type { CaseItem } from "@/mocks/cases";
import type { CaseDetailContent } from "@/mocks/caseDetail";
import CaseHero from "@/pages/case/components/CaseHero";
import CaseAuthorBanner from "@/pages/case/components/CaseAuthorBanner";
import CaseMiniProgramScreens from "@/pages/case/components/CaseMiniProgramScreens";
import CaseWaterfallGallery from "@/pages/case/components/CaseWaterfallGallery";

interface MiniProgramCaseContentProps {
  base: CaseItem;
  content: CaseDetailContent;
}

export default function MiniProgramCaseContent({
  base,
  content,
}: MiniProgramCaseContentProps) {
  const banner = content.authorBanner;
  const iconSheet = content.iconSheet ?? base.cover;
  const popupCards = content.popupCards ?? [];
  const landingImages = content.landingImages ?? [];

  return (
    <main>
      <CaseHero
        title={base.title}
        type={base.type}
        stage={base.stage}
        location={base.location}
        team={base.team}
        cover={base.cover}
        views={base.views}
        tags={base.tags}
        summary={content.summary}
        highlights={content.highlights}
      />

      {banner && (
        <CaseAuthorBanner
          leftLabel={banner.leftLabel}
          leftValue={banner.leftValue}
          rightLabel={banner.rightLabel}
          rightValue={banner.rightValue}
        />
      )}

      <CaseMiniProgramScreens iconSheet={iconSheet} popupCards={popupCards} />

      <section className="px-4 pt-8 md:px-8 lg:px-10">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-secondary-500" />
          <h2 className="text-[16px] font-bold text-foreground-950">线下展板与落地效果</h2>
        </div>
        <p className="mt-1.5 text-[12px] text-foreground-500">
          从线上界面到线下展台，设计成果的完整落地
        </p>

        <div className="mt-4">
          <CaseWaterfallGallery images={landingImages} />
        </div>
      </section>

      <p className="px-6 pb-2 pt-8 text-center text-[10.5px] leading-relaxed text-foreground-400">
        © 2026 歙县德和山庄民宿小程序界面设计 · 保留所有权利
      </p>
    </main>
  );
}