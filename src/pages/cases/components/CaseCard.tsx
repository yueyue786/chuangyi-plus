import { Link } from "react-router-dom";
import type { CaseItem } from "@/mocks/cases";

export default function CaseCard({ item }: { item: CaseItem }) {
  return (
    <Link
      to={`/case/${item.id.slice(1)}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[16px] border border-background-200 bg-background-50 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-float"
    >
      {/* 封面图：填满裁切，绝不拉伸 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-200">
        <img
          src={item.cover}
          alt={item.title}
          title={`${item.title} 设计成果图`}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background-50/90 px-2.5 py-1 text-[11px] font-semibold text-primary-700 backdrop-blur-sm">
          {item.type}
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-foreground-950/55 px-2.5 py-1 text-[11px] font-medium text-background-50 backdrop-blur-sm">
          <i className="ri-image-2-line text-[12px] leading-none"></i>
          {item.images.length}
        </span>
        <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-accent-500 px-2.5 py-1 text-[11px] font-semibold text-background-50">
          <i className="ri-flag-2-line text-[12px] leading-none"></i>
          阶段 {item.stage}
        </span>
      </div>

      {/* 信息区 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 min-h-[46px] text-[16px] font-bold leading-snug text-foreground-950">
          {item.title}
        </h3>

        <p className="mt-2 flex items-center gap-1 text-[12.5px] text-foreground-500">
          <i className="ri-map-pin-2-line text-[14px] leading-none text-primary-500"></i>
          {item.location}
        </p>

        <p className="mt-2.5 line-clamp-2 text-[13px] leading-relaxed text-foreground-600">
          {item.intro}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-semibold text-primary-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {(item.designer || item.advisor) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] font-medium text-foreground-700">
            {item.designer && (
              <span className="flex items-center gap-1">
                <i className="ri-user-3-line text-[13px] leading-none text-primary-500"></i>
                设计者：{item.designer}
              </span>
            )}
            {item.advisor && (
              <span className="flex items-center gap-1">
                <i className="ri-graduation-cap-line text-[13px] leading-none text-primary-500"></i>
                指导老师：{item.advisor}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between border-t border-background-200 pt-3.5">
            <span className="flex min-w-0 items-center gap-1 text-[11.5px] font-medium text-foreground-600">
              <i className="ri-team-line text-[14px] leading-none text-primary-500"></i>
              <span className="truncate">{item.team}</span>
            </span>
            <span className="flex flex-shrink-0 items-center gap-1 text-[11.5px] text-foreground-500">
              <i className="ri-eye-line text-[14px] leading-none"></i>
              {item.views}
              <i className="ri-arrow-right-s-line text-[16px] leading-none text-primary-500 transition-transform duration-200 group-hover:translate-x-0.5"></i>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}