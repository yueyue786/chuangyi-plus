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
  villageAdvisor,
  villageBanner,
  villageBasicInfo,
  villageCultureResources,
  villageCurrentStage,
  villageCycle,
  villageDeliverables,
  villageDesignNeed,
  villageDesignProblem,
  villageIntro,
  villageMembers,
  villagePreviewImages,
  villageRecruitMajors,
  villageSecondInfo,
  villageStages,
  villageStatus,
  villageSubtitle,
  villageSummary,
  villageTagSections,
  villageTitle,
} from "@/mocks/villageProject";

export default function VillageProjectDetail() {
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
            status={villageStatus}
            title={villageTitle}
            subtitle={villageSubtitle}
            banner={villageBanner}
          />
          <VillageTagBar items={villageTagSections} onSelect={scrollToSection} />
          <VillageOverview
            summary={villageSummary}
            basicInfo={villageBasicInfo}
            secondInfo={villageSecondInfo}
          />
          <VillageTimeline stages={villageStages} current={villageCurrentStage} />
          <VillageContext
            villageIntro={villageIntro}
            cultureResources={villageCultureResources}
            designProblem={villageDesignProblem}
            designNeed={villageDesignNeed}
          />
          <VillageRecruit
            majors={villageRecruitMajors}
            cycle={villageCycle}
            advisor={villageAdvisor}
          />
          <VillageTeam members={villageMembers} />
          <VillageDeliverables
            deliverables={villageDeliverables}
            previewImages={villagePreviewImages}
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