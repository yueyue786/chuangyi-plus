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
          image="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(180)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23344e41%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23b7e4c7%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E"
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