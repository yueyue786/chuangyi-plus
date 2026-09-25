import { useNavigate } from "react-router-dom";

interface ProjectHeroProps {
  title: string;
  location: string;
  status: string;
  stage: number;
  stageTotal: number;
  cover: string;
  summary: string;
  progressNote: string;
}

export default function ProjectHero({
  title,
  location,
  status,
  stage,
  stageTotal,
  cover,
  summary,
  progressNote,
}: ProjectHeroProps) {
  const navigate = useNavigate();

  return (
    <section>
      <div className="relative h-[240px] w-full overflow-hidden bg-background-200">
        <img
          src={cover}
          alt={title}
          title={`${title} 乡村公益共创项目详情`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/45 via-foreground-950/15 to-foreground-950/60" />

        <button
          type="button"
          aria-label="返回"
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur-md transition-colors hover:bg-background-50"
        >
          <i className="ri-arrow-left-s-line text-[22px] leading-none"></i>
        </button>

        <span className="absolute right-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-semibold text-background-50">
          {status}
        </span>

        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-[19px] font-bold leading-snug text-background-50">
            {title}
          </h1>
          <p className="mt-1.5 flex items-center gap-1 text-[12px] text-background-50/90">
            <i className="ri-map-pin-2-line text-[14px] leading-none"></i>
            {location}
          </p>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="rounded-card border border-background-200 bg-background-50 px-3.5 py-3.5">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-foreground-700">项目进度</span>
            <span className="text-[12px] font-semibold text-primary-600">
              第 {stage}/{stageTotal} 阶段
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-background-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
              style={{ width: `${(stage / stageTotal) * 100}%` }}
            />
          </div>
          <p className="mt-2.5 text-[12px] leading-relaxed text-foreground-500">
            {progressNote}
          </p>
        </div>

        <p className="mt-3 rounded-card bg-background-100 px-3.5 py-3 text-[13px] leading-relaxed text-foreground-700">
          {summary}
        </p>
      </div>
    </section>
  );
}