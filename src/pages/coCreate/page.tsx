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
          image="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(180)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%232d6a4f%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%2374c69d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22360%22%20cy%3D%22320%22%20r%3D%22200%22%20fill%3D%22rgba(255%2C255%2C255%2C0.10)%22%2F%3E%3Ccircle%20cx%3D%22840%22%20cy%3D%22520%22%20r%3D%22160%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E"
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