import { useMemo, useState } from "react";
import AppShell from "@/components/feature/AppShell";
import PageBanner from "@/components/feature/PageBanner";
import FilterPills from "@/components/base/FilterPills";
import CaseCard from "@/pages/cases/components/CaseCard";
import { caseList, caseTypes } from "@/mocks/cases";

export default function Cases() {
  const [type, setType] = useState("全部");

  const filtered = useMemo(
    () => (type === "全部" ? caseList : caseList.filter((item) => item.type === type)),
    [type],
  );

  return (
    <AppShell>
      <main>
        <PageBanner
          badge="CASE LIBRARY"
          title="乡村设计案例库"
          subtitle="每一个落地的项目，都会沉淀为可复用的案例、方法与调研报告，供更多乡村与设计团队参考。"
          primaryCta={{ to: "/demands", label: "去认领一个需求" }}
          image="/images/cy-banner-cases-11.jpg"
          imageAlt="焕新的乡村墙绘与整洁民居全景"
        />

        <div className="pt-6">
          <FilterPills options={caseTypes} value={type} onChange={setType} />
        </div>

        <div className="px-4 md:px-8 lg:px-10">
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[13px] text-foreground-500">
              共{" "}
              <strong className="font-heading text-[16px] font-bold text-primary-600">
                {filtered.length}
              </strong>{" "}
              件落地成果
            </p>
            <span className="flex items-center gap-1 text-[12px] text-foreground-400">
              <i className="ri-sort-desc text-[14px] leading-none"></i>
              按最新排序
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </AppShell>
  );
}