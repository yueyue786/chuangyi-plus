import { flowSteps } from "@/mocks/coCreate";

export default function FlowSteps() {
  return (
    <section className="pt-6">
      <div className="flex items-start gap-2.5 px-4 md:px-8 lg:px-10">
        <span className="mt-0.5 h-8 w-1 rounded-full bg-primary-500" />
        <div>
          <h2 className="text-[16px] font-bold text-foreground-950">六步共创流程</h2>
          <p className="mt-1 text-[11.5px] text-foreground-500">
            从需求征集到评估归档，全流程一条主线
          </p>
        </div>
      </div>

      <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto px-4 pb-2 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-8 lg:grid-cols-6 lg:gap-5 lg:px-10">
        {flowSteps.map((step) => (
          <article
            key={step.step}
            className="relative w-[180px] flex-shrink-0 overflow-hidden rounded-card border border-background-200 bg-background-50 p-3.5 shadow-card md:w-full"
          >
            <span className="absolute -right-2 -top-3 font-heading text-[54px] font-black leading-none text-background-200">
              {step.step}
            </span>

            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <i className={`${step.icon} text-[21px] leading-none`}></i>
            </span>

            <div className="relative mt-3 flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 font-heading text-[9px] font-bold text-background-50">
                {step.step}
              </span>
              <h3 className="text-[14px] font-bold text-foreground-950">{step.title}</h3>
            </div>

            <p className="relative mt-2 text-[11px] leading-relaxed text-foreground-500">
              {step.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}