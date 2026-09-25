import { Link } from "react-router-dom";
import { workbenchCases } from "@/mocks/workbench";

export default function TopCases() {
  return (
    <section className="flex h-full flex-col rounded-card border border-background-200 bg-background-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-heading text-[16px] font-black text-foreground-950">优秀案例</h2>
        <Link
          to="/cases"
          className="group flex cursor-pointer items-center gap-1 whitespace-nowrap text-[12.5px] font-medium text-primary-700 transition-colors hover:text-accent-600"
        >
          查看更多
          <i className="ri-arrow-right-line text-[14px] leading-none transition-transform group-hover:translate-x-0.5"></i>
        </Link>
      </div>

      <div className="mt-4 flex flex-1 items-stretch gap-3.5 overflow-x-auto pb-1">
        {workbenchCases.map((item) => (
          <Link
            key={item.id}
            to={item.to ?? "/cases"}
            className="group flex w-[168px] flex-shrink-0 cursor-pointer flex-col overflow-hidden rounded-card border border-background-200 bg-background-50 transition-colors hover:border-primary-300"
          >
            <div className="relative h-[96px] w-full overflow-hidden">
              <img
                src={item.cover}
                alt={item.title}
                title={`${item.title} 乡村公益设计案例`}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <span className="absolute left-2 top-2 flex flex-wrap gap-1">
                {(item.tags ?? [item.tag]).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent-500 px-1.5 py-0.5 text-[10.5px] font-semibold text-background-50"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-3">
              <h3 className="line-clamp-2 text-[12.5px] font-bold leading-snug text-foreground-900">
                {item.title}
              </h3>
              <p className="mt-auto flex items-center gap-1 pt-1.5 text-[11px] text-foreground-500">
                <i className="ri-map-pin-2-line text-[12px] leading-none"></i>
                <span className="truncate">{item.location}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}