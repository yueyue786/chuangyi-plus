import { useState } from "react";
import { useParams } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import FixedBottomBar from "@/components/feature/FixedBottomBar";
import ApplyFormModal from "@/components/base/ApplyFormModal";
import ProjectHero from "@/pages/project/components/ProjectHero";
import ProjectTimeline from "@/pages/project/components/ProjectTimeline";
import ProjectMembers from "@/pages/project/components/ProjectMembers";
import ProjectOutcomes from "@/pages/project/components/ProjectOutcomes";
import { coProjects } from "@/mocks/coCreate";
import { defaultProjectContent, projectDetails } from "@/mocks/projectDetail";

export default function ProjectDetail() {
  const { id } = useParams();
  const numericId = String(Number(id) || 1);

  const base =
    coProjects.find((item) => item.id === `p${numericId}`) ?? coProjects[0];
  const content = projectDetails[numericId] ?? defaultProjectContent;

  const [joined, setJoined] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppShell
      withNav={false}
      contentPadding="pb-28 md:pb-32"
      bottomBar={
        <FixedBottomBar>
          <button
            type="button"
            disabled={joined}
            onClick={() => setModalOpen(true)}
            className={[
              "mb-3 w-full whitespace-nowrap rounded-full py-3 text-[15px] font-semibold transition-colors",
              joined
                ? "cursor-default bg-secondary-200 text-secondary-700"
                : "cursor-pointer bg-primary-500 text-background-50 hover:bg-primary-600 active:scale-[0.99]",
            ].join(" ")}
          >
            {joined ? "已申请加入 · 等待审核" : "申请加入项目"}
          </button>
        </FixedBottomBar>
      }
    >
      <main>
        <ProjectHero
          title={base.title}
          location={base.location}
          status={base.status}
          stage={base.stage}
          stageTotal={base.stageTotal}
          cover={base.cover}
          summary={content.summary}
          progressNote={content.progressNote}
        />
        <ProjectTimeline steps={content.timeline} />
        <ProjectOutcomes outcomes={content.outcomes} />
        <ProjectMembers
          students={content.students}
          mentors={content.mentors}
          villagePartners={content.villagePartners}
        />

        <p className="px-6 pb-2 pt-7 text-center text-[10.5px] leading-relaxed text-foreground-400">
          创艺+ · 把创意，种进乡村
        </p>
      </main>

      <ApplyFormModal
        open={modalOpen}
        title={`申请加入「${base.title}」`}
        subtitle="填写以下信息，项目导师将在 2 个工作日内与你联系。"
        onClose={() => setModalOpen(false)}
        onSuccess={() => setJoined(true)}
      />
    </AppShell>
  );
}