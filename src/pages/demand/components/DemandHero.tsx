import { useNavigate } from "react-router-dom";
import type { DemandDetailContent } from "@/mocks/demandDetail";

interface DemandHeroProps {
  title: string;
  village: string;
  location: string;
  type: string;
  status: string;
  applicants: number;
  quota: number;
  cover: string;
  summary: string;
  highlights: DemandDetailContent["highlights"];
}

export default function DemandHero({
  title,
  village,
  location,
  type,
  status,
  applicants,
  quota,
  cover,
  summary,
  highlights,
}: DemandHeroProps) {
  const navigate = useNavigate();

  return (
    <section>
      <div className="relative h-[230px] w-full overflow-hidden bg-background-200">
        <img
          src={cover}
          alt={title}
          title={`${village} ${type} 乡村设计需求详情`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/45 via-foreground-950/10 to-foreground-950/55" />

        <button
          type="button"
          aria-label="返回"
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur-md transition-colors hover:bg-background-50"
        >
          <i className="ri-arrow-left-s-line text-[22px] leading-none"></i>
        </button>

        <span className="absolute right-4 top-4 rounded-full bg-primary-600 px-3 py-1 text-[11px] font-semibold text-background-50">
          {status}
        </span>

        <span className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-foreground-950/55 px-2.5 py-1 text-[11px] font-medium text-background-50 backdrop-blur-sm">
          <i className="ri-home-smile-2-line text-[13px] leading-none"></i>
          {village}
        </span>
      </div>

      <div className="relative -mt-6 rounded-t-3xl bg-background-50 px-4 pt-5 md:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-medium text-secondary-700">
            {type}
          </span>
          <span className="flex items-center gap-1 text-[11.5px] text-foreground-500">
            <i className="ri-group-line text-[13px] leading-none"></i>
            招募 {quota} 人 · {applicants} 人已报名
          </span>
        </div>

        <h1 className="mt-2.5 text-[19px] font-bold leading-snug text-foreground-950">
          {title}
        </h1>
        <p className="mt-2 flex items-center gap-1 text-[12.5px] text-foreground-500">
          <i className="ri-map-pin-2-line text-[14px] leading-none"></i>
          {location}
        </p>

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
      </div>
    </section>
  );
}