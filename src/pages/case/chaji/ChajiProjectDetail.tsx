import { useState } from "react";
import AppShell from "@/components/feature/AppShell";
import ApplyFormModal from "@/components/base/ApplyFormModal";
import VillageHero from "@/pages/case/village/components/VillageHero";
import VillageTagBar from "@/pages/case/village/components/VillageTagBar";
import VillageOverview from "@/pages/case/village/components/VillageOverview";
import VillageTimeline from "@/pages/case/village/components/VillageTimeline";
import VillageContext from "@/pages/case/village/components/VillageContext";
import VillageRecruit from "@/pages/case/village/components/VillageRecruit";
import VillageTeam from "@/pages/case/village/components/VillageTeam";
import VillageDeliverables from "@/pages/case/village/components/VillageDeliverables";
import VillageBottomBar from "@/pages/case/village/components/VillageBottomBar";
import {
  chajiAdvisor,
  chajiBanner,
  chajiBasicInfo,
  chajiCultureResources,
  chajiCurrentStage,
  chajiCycle,
  chajiDeliverables,
  chajiDesignNeed,
  chajiDesignProblem,
  chajiIntro,
  chajiMembers,
  chajiPreviewImages,
  chajiRecruitMajors,
  chajiSecondInfo,
  chajiStages,
  chajiStatus,
  chajiSubtitle,
  chajiSummary,
  chajiTagSections,
  chajiTitle,
} from "@/mocks/chajiProject";

export default function ChajiProjectDetail() {
  const [followed, setFollowed] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <AppShell withNav={false} withTopNav={false} withFooter={false} contentPadding="pb-28">
      <div className="min-h-screen w-full bg-background-50">
        <main>
          <VillageHero
            status={chajiStatus}
            title={chajiTitle}
            subtitle={chajiSubtitle}
            banner={chajiBanner}
          />
          <VillageTagBar items={chajiTagSections} onSelect={scrollToSection} />
          <VillageOverview
            summary={chajiSummary}
            basicInfo={chajiBasicInfo}
            secondInfo={chajiSecondInfo}
          />
          <VillageTimeline stages={chajiStages} current={chajiCurrentStage} />
          <VillageContext
            villageIntro={chajiIntro}
            cultureResources={chajiCultureResources}
            designProblem={chajiDesignProblem}
            designNeed={chajiDesignNeed}
          />
          <VillageRecruit
            majors={chajiRecruitMajors}
            cycle={chajiCycle}
            advisor={chajiAdvisor}
          />
          <VillageTeam members={chajiMembers} />
          <VillageDeliverables
            deliverables={chajiDeliverables}
            previewImages={chajiPreviewImages}
          />

          <p className="px-6 pb-8 pt-8 text-center text-[10.5px] leading-relaxed text-foreground-400">
            创艺+ · 设计人才驱动乡村文化振兴
          </p>
        </main>
      </div>

      <VillageBottomBar
        followed={followed}
        applyLabel="申请参与共创"
        onToggleFollow={() => setFollowed((prev) => !prev)}
        onApply={() => setApplyOpen(true)}
      />

      <ApplyFormModal
        open={applyOpen}
        subtitle="填写以下信息，项目负责人将在 2 个工作日内与你联系。"
        onClose={() => setApplyOpen(false)}
        onSuccess={() => undefined}
      />
    </AppShell>
  );
}