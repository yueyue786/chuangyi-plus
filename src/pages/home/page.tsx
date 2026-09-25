import SiteHeader from "@/components/feature/SiteHeader";
import HomeHero from "@/pages/home/components/HomeHero";
import WorkflowSection from "@/pages/home/components/WorkflowSection";
import PlatformDashboard from "@/pages/home/components/PlatformDashboard";
import HomeFooter from "@/pages/home/components/HomeFooter";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background-50">
      <SiteHeader fixed />
      <main>
        <HomeHero />
        <WorkflowSection />
        <PlatformDashboard />
      </main>
      <HomeFooter />
    </div>
  );
}