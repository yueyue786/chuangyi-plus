import { coStats } from "@/mocks/coCreate";

export default function CoStats() {
  return (
    <div className="px-4 pt-3 md:px-8 lg:px-10">
      <div className="grid grid-cols-3 gap-1 rounded-card border border-background-200 bg-background-50 p-3 shadow-card">
        {coStats.map((stat, index) => (
          <div
            key={stat.label}
            className={[
              "flex flex-col items-center justify-center text-center",
              index !== coStats.length - 1 ? "border-r border-background-200" : "",
            ].join(" ")}
          >
            <p className="font-heading text-[20px] font-black leading-none text-primary-600">
              {stat.value}
              <span className="ml-0.5 text-[10px] font-semibold text-primary-500">
                {stat.unit}
              </span>
            </p>
            <p className="mt-1.5 text-[11px] text-foreground-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}