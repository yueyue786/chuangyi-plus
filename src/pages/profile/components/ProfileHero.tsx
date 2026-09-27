import { profileStats } from "@/mocks/profile";

const AVATAR_IMG =
  "/images/cy-avatar-lin.jpg";

export default function ProfileHero() {
  return (
    <section className="relative overflow-hidden rounded-card bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 px-6 py-7 text-background-50 md:px-9 md:py-8">
      <div className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full bg-primary-400/25 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl" />

      <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-50/20 p-[3px]">
            <img
              src={AVATAR_IMG}
              alt="林小满 头像"
              title="林小满 高校设计师"
              className="h-full w-full rounded-full object-cover"
            />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="font-heading text-[21px] font-black leading-none">林小满</h1>
              <span className="rounded-full bg-accent-500 px-2.5 py-0.5 text-[11px] font-semibold">
                高校设计师
              </span>
            </div>
            <p className="mt-2 text-[12.5px] text-background-50/85">
              安徽农业大学 林学与园林学院 · 视觉传达设计 大三
            </p>
            <p className="mt-1.5 text-[12px] italic text-background-50/70">
              “在真实的乡村里，做一次真正有人用的设计。”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2.5 rounded-card bg-background-50/10 px-4 py-3.5 lg:gap-6">
          {profileStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-[18px] font-black leading-none text-accent-400">
                {stat.value}
              </p>
              <p className="mt-1.5 whitespace-nowrap text-[10.5px] text-background-50/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}