import { profileStats } from "@/mocks/profile";

const AVATAR_IMG =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20800%22%20width%3D%22800%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(180)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233a5a40%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23e9edc9%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L120%2C400%20L240%2C496%20L360%2C336%20L480%2C463.99999999999994%20L600%2C360%20L720%2C440.00000000000006%20L800%2C400%20L800%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L160%2C528%20L304%2C608%20L440.00000000000006%2C480%20L576%2C576%20L704%2C512%20L800%2C576%20L800%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

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