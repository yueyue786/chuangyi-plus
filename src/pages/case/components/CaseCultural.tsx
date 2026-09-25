import type { CaseCulturalElement } from "@/mocks/caseDetail";

interface CaseCulturalProps {
  items: CaseCulturalElement[];
}

export default function CaseCultural({ items }: CaseCulturalProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-secondary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">文化元素提取</h2>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-card border border-background-200 bg-background-50 px-3.5 py-3.5"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <i className="ri-price-tag-3-line text-[15px] leading-none"></i>
              </span>
              <h3 className="text-[13.5px] font-bold text-foreground-950">
                {item.name}
              </h3>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-foreground-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}