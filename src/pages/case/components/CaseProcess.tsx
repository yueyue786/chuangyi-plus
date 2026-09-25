import type { CaseProcessStep } from "@/mocks/caseDetail";

interface CaseProcessProps {
  steps: CaseProcessStep[];
}

export default function CaseProcess({ steps }: CaseProcessProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">设计过程</h2>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {steps.map((step, index) => (
          <div
            key={step.phase}
            className="relative rounded-card border border-background-200 bg-background-50 px-3.5 py-3.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 font-heading text-[13px] font-bold text-background-50">
              {index + 1}
            </span>
            <h3 className="mt-2.5 text-[13.5px] font-bold text-foreground-950">
              {step.phase}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-foreground-600">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}