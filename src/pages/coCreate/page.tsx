import AppShell from "@/components/feature/AppShell";
import PageBanner from "@/components/feature/PageBanner";
import CoStats from "@/pages/coCreate/components/CoStats";
import FlowSteps from "@/pages/coCreate/components/FlowSteps";
import CoProjectList from "@/pages/coCreate/components/CoProjectList";

export default function CoCreate() {
  return (
    <AppShell>
      <main>
        <PageBanner
          badge="青年设计共创"
          title="把创意，种进乡村"
          subtitle="高校设计学生与乡村一起，从田野调研到方案落地，把每一个好想法真正留在村里。"
          primaryCta={{ to: "/demands", label: "参与共创" }}
          image="/images/cy-banner-cocreate-12.jpg"
          imageAlt="设计师在乡村院落中研讨共创方案"
        />
        <CoStats />
        <FlowSteps />
        <CoProjectList />
        <p className="px-4 pb-4 pt-6 text-center text-[11px] text-foreground-400 md:px-8 lg:px-10">
          每一个好想法，都值得被认真对待
        </p>
      </main>
    </AppShell>
  );
}