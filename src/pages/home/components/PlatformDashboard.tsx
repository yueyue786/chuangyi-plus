import WelcomeBanner from "@/pages/home/components/WelcomeBanner";
import StatCards from "@/pages/home/components/StatCards";
import OverviewCharts from "@/pages/home/components/OverviewCharts";
import LatestDemands from "@/pages/home/components/LatestDemands";
import TopCases from "@/pages/home/components/TopCases";
import ActiveRegions from "@/pages/home/components/ActiveRegions";
import CoMap from "@/pages/home/components/CoMap";

export default function PlatformDashboard() {
  return (
    <section id="platform" className="bg-background-100 py-14 md:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-6">
        {/* 欢迎横幅 + 统计卡片 */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[54fr_46fr]">
          <WelcomeBanner />
          <StatCards />
        </div>

        {/* 左侧 65% / 右侧 35% */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[65fr_35fr]">
          <div className="flex min-w-0 flex-col gap-5">
            <OverviewCharts />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <LatestDemands />
              <TopCases />
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <ActiveRegions />
            <CoMap />
          </div>
        </div>
      </div>
    </section>
  );
}