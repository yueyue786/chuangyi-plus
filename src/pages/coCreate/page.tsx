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
          image="https://readdy.ai/api/search-image?query=Wide%20panoramic%20stylized%20illustration%20of%20young%20designers%20sketching%20and%20mapping%20ideas%20at%20a%20wooden%20table%20in%20a%20rural%20village%20courtyard%2C%20bamboo%20baskets%20and%20green%20plants%2C%20draft%20papers%20and%20color%20swatches%2C%20warm%20natural%20light%2C%20green%20and%20amber%20tones%2C%20clean%20minimal%20artistic%20composition%2C%20high%20detail&width=1600&height=680&seq=cy-banner-cocreate-12&orientation=landscape"
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