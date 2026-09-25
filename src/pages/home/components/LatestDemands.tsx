import { Link } from "react-router-dom";
import { workbenchDemands } from "@/mocks/workbench";

export default function LatestDemands() {
  return (
    <section className="flex h-full flex-col rounded-card border border-background-200 bg-background-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-heading text-[16px] font-black text-foreground-950">最新需求</h2>
        <Link
          to="/demands"
          className="group flex cursor-pointer items-center gap-1 whitespace-nowrap text-[12.5px] font-medium text-primary-700 transition-colors hover:text-accent-600"
        >
          查看全部
          <i className="ri-arrow-right-line text-[14px] leading-none transition-transform group-hover:translate-x-0.5"></i>
        </Link>
      </div>

      <ul className="mt-4 flex flex-1 flex-col divide-y divide-background-200">
        {workbenchDemands.map((item) => (
          <li key={item.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="h-[42px] w-[56px] flex-shrink-0 overflow-hidden rounded-lg bg-background-100">
              <img
                src={item.thumb}
                alt={item.title}
                title={`${item.title} 乡村设计需求`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-foreground-900">{item.title}</p>
              <p className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] text-foreground-500">
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <i className="ri-map-pin-2-line text-[12px] leading-none"></i>
                  {item.org}
                </span>
                <span className="whitespace-nowrap">{item.deadline}</span>
              </p>
            </div>
            <span
              className={[
                "flex-shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold",
                item.status === "招募中"
                  ? "bg-accent-100 text-accent-700"
                  : "bg-primary-50 text-primary-700",
              ].join(" ")}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}