import { activeRegions } from "@/mocks/workbench";

const maxValue = Math.max(...activeRegions.map((item) => item.value));

export default function ActiveRegions() {
  return (
    <section className="flex h-full flex-col rounded-card border border-background-200 bg-background-50 p-5">
      <h2 className="font-heading text-[16px] font-black text-foreground-950">
        本月活跃地区 TOP5
      </h2>

      <ul className="mt-5 flex flex-1 flex-col justify-center gap-4">
        {activeRegions.map((item, index) => (
          <li key={item.id} className="flex items-center gap-3">
            <span
              className={[
                "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[12px] font-bold",
                index === 0
                  ? "bg-accent-500 text-background-50"
                  : "bg-background-100 text-foreground-600",
              ].join(" ")}
            >
              {index + 1}
            </span>
            <span className="w-16 flex-shrink-0 whitespace-nowrap text-[12.5px] text-foreground-700">
              {item.name}
            </span>
            <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-background-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-400"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
            <span className="w-9 flex-shrink-0 text-right font-heading text-[12.5px] font-bold text-foreground-900">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}