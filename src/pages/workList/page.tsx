import { Link } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import PageHeader from "@/components/feature/PageHeader";
import { myApplications, myWorks } from "@/mocks/myList";
import type { MyListItem } from "@/mocks/myList";

interface WorkListProps {
  kind: "application" | "work";
}

const statusTone: Record<string, string> = {
  待审核: "bg-accent-500 text-background-50",
  已通过: "bg-primary-600 text-background-50",
  已落地: "bg-secondary-600 text-background-50",
};

export default function WorkList({ kind }: WorkListProps) {
  const isApplication = kind === "application";
  const list: MyListItem[] = isApplication ? myApplications : myWorks;
  const title = isApplication ? "报名中的需求" : "我的作品集";
  const hint = isApplication ? "你已报名的乡村设计需求" : "已完成并沉淀的设计成果";

  return (
    <AppShell>
      <main>
        <PageHeader
          title={title}
          right={
            <Link
              to="/profile"
              className="flex cursor-pointer items-center gap-0.5 whitespace-nowrap text-[12.5px] text-foreground-500 transition-colors hover:text-primary-600"
            >
              <i className="ri-arrow-left-s-line text-[16px] leading-none"></i>
              返回我的
            </Link>
          }
        />

        <section className="px-6 pb-16 pt-7 md:px-8 lg:px-10">
          <p className="text-[13px] text-foreground-500">
            {hint} · 共{" "}
            <strong className="font-heading text-[15px] font-bold text-primary-600">
              {list.length}
            </strong>{" "}
            条
          </p>

          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-float"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-200">
                  <img
                    src={item.cover}
                    alt={item.title}
                    title={`${item.title} 乡村设计`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      statusTone[item.status] ?? "bg-primary-600 text-background-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 min-h-[46px] text-[15.5px] font-bold leading-snug text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1 text-[12.5px] text-foreground-500">
                    <i className="ri-map-pin-2-line text-[14px] leading-none text-primary-500"></i>
                    {item.location}
                  </p>
                  <p className="mt-3 border-t border-background-200 pt-3 text-[12px] leading-relaxed text-foreground-500">
                    {item.meta}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </AppShell>
  );
}