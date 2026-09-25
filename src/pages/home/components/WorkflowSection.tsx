import { Fragment } from "react";
import SectionTitle from "@/pages/home/components/SectionTitle";
import { workflowSteps, impactStats } from "@/mocks/homeOfficial";

export default function WorkflowSection() {
  return (
    <section className="bg-background-50 py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[7fr_3fr] lg:items-stretch">
          {/* 左：共创流程（70%） */}
          <div>
            <SectionTitle title="共创流程" subtitle="从需求发布到跟踪反馈，每一步都有设计人才陪伴乡村" />

            <div className="mt-10 flex items-start gap-1">
              {workflowSteps.map((step, index) => (
                <Fragment key={step.id}>
                  <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 text-primary-600 lg:h-16 lg:w-16">
                      <i className={`${step.icon} text-[26px] leading-none lg:text-[28px]`}></i>
                    </span>
                    <h3 className="mt-4 text-[13.5px] font-bold text-primary-700 lg:text-[14.5px]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 hidden text-[11px] leading-relaxed text-foreground-500 sm:block">
                      {step.desc}
                    </p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <span className="mt-5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-accent-500">
                      <i className="ri-arrow-right-s-line text-[22px] leading-none"></i>
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* 右：深绿色数据卡片（30%） */}
          <div className="rounded-card bg-primary-700 p-7 text-background-50">
            <h3 className="font-heading text-[22px] font-black leading-tight">数据见证影响力</h3>
            <p className="mt-2 text-[13px] text-background-50/70">用设计的力量，点亮乡村的未来</p>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8">
              {impactStats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-background-50/15 pl-4">
                  <p className="font-heading text-[34px] font-black leading-none text-accent-400">
                    {stat.value}
                    <span className="ml-0.5 text-[16px] font-bold">{stat.unit}</span>
                  </p>
                  <p className="mt-2.5 text-[13px] text-background-50/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}