import { Link } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import PageBanner from "@/components/feature/PageBanner";

const values = [
  {
    icon: "ri-plant-line",
    title: "回到乡土",
    desc: "让设计走进真实的乡村现场，用田野调研替代凭空想象。",
    tone: "bg-primary-100 text-primary-600",
  },
  {
    icon: "ri-hand-heart-line",
    title: "公益共创",
    desc: "高校设计力量与乡村需求彼此回应，共同完成一件作品。",
    tone: "bg-secondary-100 text-secondary-700",
  },
  {
    icon: "ri-ancient-gate-line",
    title: "文化转译",
    desc: "把地方非遗与村落记忆，转译成当代人愿意使用与传播的设计。",
    tone: "bg-accent-100 text-accent-700",
  },
  {
    icon: "ri-seedling-line",
    title: "持续生长",
    desc: "每个落地成果都会沉淀为可复用的方法与案例，供更多村落参考。",
    tone: "bg-primary-100 text-primary-600",
  },
];

const stats = [
  { value: "52", label: "累计服务乡村" },
  { value: "23", label: "入驻高校" },
  { value: "1,940", label: "青年设计师" },
  { value: "143", label: "落地设计成果" },
];

const milestones = [
  { year: "2023", title: "平台发起", desc: "由安徽农业大学师生团队发起，启动首个乡村墙绘共创项目。" },
  { year: "2024", title: "高校联动", desc: "联合省内 12 所高校设计院系，建立公益共创协作机制。" },
  { year: "2025", title: "成果沉淀", desc: "案例库上线，累计沉淀百余件可复用乡村设计成果。" },
  { year: "2026", title: "面向全国", desc: "服务范围扩展至多省乡村，持续连接设计师与真实需求。" },
];

export default function About() {
  return (
    <AppShell>
      <main>
        <PageBanner
          badge="ABOUT US"
          title="让设计，回到乡土"
          subtitle="创艺+ 是一个由高校设计力量驱动的乡村文化振兴公益共创平台。我们把乡村一线的真实设计需求，与青年设计师的专业能力连接起来，让每一次创作都真正发生在土地上、服务于生活在这里的人。"
          image="/images/cy-banner-about-15.jpg"
          imageAlt="云雾缭绕的山间乡村全景"
        />

        <section className="px-6 pt-12 md:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-3 py-1 text-[12.5px] font-semibold text-primary-700">
              <i className="ri-add-line text-[13px] leading-none text-primary-500"></i>
              平台理念
            </span>
          </div>
          <h2 className="mt-3 font-heading text-[26px] font-black text-foreground-950">我们相信的事</h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-background-200 bg-background-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-float"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${item.tone}`}
                >
                  <i className={`${item.icon} text-[24px] leading-none`}></i>
                </span>
                <h3 className="mt-4 text-[16px] font-bold text-foreground-950">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-foreground-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pt-12 md:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-6 rounded-card border border-background-200 bg-background-50 px-8 py-9 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-[34px] font-black leading-none text-primary-600">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12.5px] text-foreground-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16 pt-12 md:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-3 py-1 text-[12.5px] font-semibold text-primary-700">
              <i className="ri-add-line text-[13px] leading-none text-primary-500"></i>
              发展历程
            </span>
          </div>
          <h2 className="mt-3 font-heading text-[26px] font-black text-foreground-950">一路走来的脚印</h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="relative rounded-card border border-background-200 bg-background-50 p-6"
              >
                <span className="font-heading text-[22px] font-black text-accent-500">
                  {item.year}
                </span>
                <h3 className="mt-2 text-[15px] font-bold text-foreground-950">{item.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-foreground-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-card bg-background-100 px-8 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-[18px] font-bold text-foreground-950">想和我们一起，做一件有意义的设计？</h3>
              <p className="mt-1.5 text-[13px] text-foreground-500">
                无论你是设计师，还是乡村需求方，都欢迎加入创艺+。
              </p>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full bg-accent-500 px-6 py-3 text-[14px] font-semibold text-background-50 transition-colors hover:bg-accent-600"
            >
              加入我们
            </Link>
          </div>
        </section>
      </main>
    </AppShell>
  );
}