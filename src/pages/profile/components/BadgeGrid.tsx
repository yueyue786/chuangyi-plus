import { badges } from "@/mocks/profile";

const toneMap: Record<string, string> = {
  primary: "bg-primary-100 text-primary-600",
  accent: "bg-accent-100 text-accent-600",
  secondary: "bg-secondary-100 text-secondary-600",
};

export default function BadgeGrid() {
  return (
    <section className="px-4 pt-5 md:px-8 lg:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-accent-500" />
          <h2 className="text-[15px] font-bold text-foreground-950">公益设计徽章</h2>
        </div>
        <span className="text-[11.5px] text-foreground-500">已获得 6 枚</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2.5 md:grid-cols-6 md:gap-4 lg:gap-5">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center rounded-card border border-background-200 bg-background-50 px-2 py-3 text-center shadow-card"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${toneMap[badge.tone]}`}
            >
              <i className={`${badge.icon} text-[21px] leading-none`}></i>
            </span>
            <h3 className="mt-2 text-[11.5px] font-bold text-foreground-950">{badge.name}</h3>
            <p className="mt-1 text-[9.5px] leading-tight text-foreground-400">{badge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}