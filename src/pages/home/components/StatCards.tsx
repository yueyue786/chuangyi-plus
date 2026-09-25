import { workbenchStats } from "@/mocks/workbench";

export default function StatCards() {
  return (
    <section className="grid h-full grid-cols-2 gap-3.5">
      {workbenchStats.map((stat) => (
        <div
          key={stat.id}
          className="flex min-w-0 items-center gap-3 rounded-card border border-background-200 bg-background-50 px-4 py-4"
        >
          <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${stat.tone}`}>
            <i className={`${stat.icon} text-[21px] leading-none`}></i>
          </span>
          <div className="min-w-0">
            <p className="font-heading text-[24px] font-black leading-none text-foreground-950">
              {stat.value}
              <span className="ml-0.5 text-[12px] font-bold text-foreground-500">{stat.unit}</span>
            </p>
            <p className="mt-1.5 whitespace-nowrap text-[12px] text-foreground-600">{stat.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}