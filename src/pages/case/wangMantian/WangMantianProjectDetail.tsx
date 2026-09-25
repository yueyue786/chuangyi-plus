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
  wmAdvisor,
  wmBanner,
  wmBasicInfo,
  wmCultureResources,
  wmCurrentStage,
  wmCycle,
  wmDeliverables,
  wmDesignNeed,
  wmDesignProblem,
  wmIntro,
  wmMembers,
  wmPreviewImages,
  wmRecruitMajors,
  wmSecondInfo,
  wmStages,
  wmStatus,
  wmSubtitle,
  wmSummary,
  wmTagSections,
  wmTitle,
} from "@/mocks/wangMantianProject";

export default function WangMantianProjectDetail() {
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
            status={wmStatus}
            title={wmTitle}
            subtitle={wmSubtitle}
            banner={wmBanner}
          />
          <VillageTagBar items={wmTagSections} onSelect={scrollToSection} />
          <VillageOverview
            summary={wmSummary}
            basicInfo={wmBasicInfo}
            secondInfo={wmSecondInfo}
          />
          <VillageTimeline stages={wmStages} current={wmCurrentStage} />
          <VillageContext
            villageIntro={wmIntro}
            cultureResources={wmCultureResources}
            designProblem={wmDesignProblem}
            designNeed={wmDesignNeed}
          />
          <VillageRecruit
            majors={wmRecruitMajors}
            cycle={wmCycle}
            advisor={wmAdvisor}
          />
          <VillageTeam members={wmMembers} />
          <VillageDeliverables
            deliverables={wmDeliverables}
            previewImages={wmPreviewImages}
          />

          <p className="px-6 pb-8 pt-8 text-center text-[10.5px] leading-relaxed text-foreground-400">
            创艺+ · 设计人才驱动乡村文化振兴
          </p>
        </main>
      </div>

      <VillageBottomBar
        followed={followed}
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