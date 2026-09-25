import { useNavigate } from "react-router-dom";
import type { CaseHighlight } from "@/mocks/caseDetail";
import HorseWallMark from "@/pages/case/components/HorseWallMark";

interface CaseHeroProps {
  title: string;
  type: string;
  stage: string;
  location: string;
  team: string;
  cover: string;
  views: number;
  tags: string[];
  summary: string;
  highlights: CaseHighlight[];
}

export default function CaseHero({
  title,
  type,
  stage,
  location,
  team,
  cover,
  views,
  tags,
  summary,
  highlights,
}: CaseHeroProps) {
  const navigate = useNavigate();

  return (
    <section>
      <div className="relative h-[380px] w-full overflow-hidden bg-primary-900 md:h-[520px]">
        <img
          src={cover}
          alt={title}
          title={`${title} 乡村设计落地案例详情`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/45 to-primary-950/30" />

        <HorseWallMark className="absolute bottom-0 left-0 z-[1] h-[110px] w-[150px] text-background-50/20 md:left-4 md:h-[150px] md:w-[210px]" />

        <button
          type="button"
          aria-label="返回"
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 z-[2] flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur-md transition-colors hover:bg-background-50"
        >
          <i className="ri-arrow-left-s-line text-[22px] leading-none"></i>
        </button>

        <span className="absolute right-4 top-4 z-[2] rounded-full bg-primary-600 px-3 py-1 text-[11px] font-semibold text-background-50">
          落地成果
        </span>

        <div className="absolute bottom-0 left-0 right-0 z-[2] px-5 pb-6 md:px-10 md:pb-8">
          <div className="mx-auto w-full max-w-[880px]">
            <h1 className="text-[22px] font-bold leading-snug text-background-50 md:text-[30px]">
              {title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-background-50/40 bg-background-50/15 px-3 py-1 text-[11.5px] font-medium text-background-50 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              <span className="flex items-center gap-1 text-[11.5px] text-background-50/85">
                <i className="ri-map-pin-2-line text-[13px] leading-none"></i>
                {location}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-[11.5px] text-background-50/80">
              <i className="ri-arrow-down-line animate-bounce text-[15px] leading-none"></i>
              向下滑动查看
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 md:px-8 lg:px-10">
        <div className="rounded-card border border-background-200 bg-background-50 px-3.5 py-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-medium text-secondary-700">
              {type}
            </span>
            <span className="rounded-full bg-accent-100 px-2.5 py-1 text-[11px] font-medium text-accent-700">
              第 {stage} 阶段
            </span>
          </div>

          <p className="mt-2.5 flex items-center gap-1.5 text-[12.5px] text-foreground-700">
            <i className="ri-team-line text-[15px] leading-none text-primary-500"></i>
            {team}
          </p>

          <div className="mt-2.5 flex items-center gap-4 border-t border-background-200 pt-2.5 text-[11.5px] text-foreground-500">
            <span className="flex items-center gap-1">
              <i className="ri-eye-line text-[13px] leading-none"></i>
              {views} 次浏览
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-eye-line text-[13px] leading-none"></i>
              已落地成果
            </span>
          </div>
        </div>

        <p className="mt-3 rounded-card bg-background-100 px-3.5 py-3 text-[13px] leading-relaxed text-foreground-700">
          {summary}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-background-200 bg-background-50 px-3 py-2.5"
            >
              <p className="text-[11px] text-foreground-500">{item.label}</p>
              <p className="mt-0.5 text-[13px] font-semibold text-foreground-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-100 px-2.5 py-1 text-[10.5px] font-medium text-primary-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}