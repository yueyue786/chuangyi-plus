import { useParams } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import VillageProjectDetail from "@/pages/case/village/VillageProjectDetail";
import WangMantianProjectDetail from "@/pages/case/wangMantian/WangMantianProjectDetail";
import MayingProjectDetail from "@/pages/case/maying/MayingProjectDetail";
import ChajiProjectDetail from "@/pages/case/chaji/ChajiProjectDetail";
import CaseHero from "@/pages/case/components/CaseHero";
import CaseStory from "@/pages/case/components/CaseStory";
import CaseCultural from "@/pages/case/components/CaseCultural";
import CaseVisualMix from "@/pages/case/components/CaseVisualMix";
import CaseProcess from "@/pages/case/components/CaseProcess";
import CaseShowcase from "@/pages/case/components/CaseShowcase";
import CaseFinalOutcome from "@/pages/case/components/CaseFinalOutcome";
import CaseOutcomes from "@/pages/case/components/CaseOutcomes";
import CaseGallery from "@/pages/case/components/CaseGallery";
import CaseTeam from "@/pages/case/components/CaseTeam";
import MiniProgramCaseContent from "@/pages/case/components/MiniProgramCaseContent";
import { caseList } from "@/mocks/cases";
import { caseDetails, defaultCaseContent } from "@/mocks/caseDetail";

const VILLAGE_CASE_ID = "8";
const FISH_CASE_ID = "9";
const MAYING_CASE_ID = "10";
const CHAJI_CASE_ID = "11";

export default function CaseDetail() {
  const { id } = useParams();
  const numericId = String(Number(id) || 1);

  if (numericId === FISH_CASE_ID) {
    return <WangMantianProjectDetail />;
  }

  if (numericId === MAYING_CASE_ID) {
    return <MayingProjectDetail />;
  }

  if (numericId === CHAJI_CASE_ID) {
    return <ChajiProjectDetail />;
  }

  if (numericId === VILLAGE_CASE_ID) {
    return <VillageProjectDetail />;
  }

  const base = caseList.find((item) => item.id === `c${numericId}`) ?? caseList[0];
  const content = caseDetails[numericId] ?? defaultCaseContent;

  return (
    <AppShell withNav={false} contentPadding="pb-16 md:pb-20">
      {content.variant === "miniprogram" ? (
        <MiniProgramCaseContent base={base} content={content} />
      ) : (
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
          <CaseStory paragraphs={content.background} />
          <CaseCultural items={content.cultural} />
          <CaseVisualMix
            image={content.verticalCover}
            title={base.title}
            text={content.verticalText}
          />
          <CaseProcess steps={content.process} />
          {content.showcase && content.showcase.length > 0 && (
            <CaseShowcase sections={content.showcase} />
          )}
          <CaseFinalOutcome paragraphs={content.finalOutcome} />
          <CaseOutcomes outcomes={content.outcomes} />
          <CaseGallery items={content.gallery} />
          <CaseTeam members={content.members} />

          <p className="px-6 pb-2 pt-7 text-center text-[10.5px] leading-relaxed text-foreground-400">
            创艺+ · 设计人才驱动乡村文化振兴
          </p>
        </main>
      )}
    </AppShell>
  );
}