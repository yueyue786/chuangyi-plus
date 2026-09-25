import { Link } from "react-router-dom";
import type { DemandItem } from "@/mocks/demands";

interface DemandCardProps {
  item: DemandItem;
  onParticipate: (title: string) => void;
}

const statusTone: Record<string, string> = {
  招募中: "bg-primary-600 text-background-50",
  共创中: "bg-accent-500 text-background-50",
  已落地: "bg-secondary-600 text-background-50",
};

export default function DemandCard({ item, onParticipate }: DemandCardProps) {
  const tagClass = statusTone[item.status] ?? "bg-primary-600 text-background-50";

  return (
    <Link
      to={`/demand/${item.id.slice(1)}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-float"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-background-200">
        <img
          src={item.cover}
          alt={item.title}
          title={`${item.village} ${item.category} 乡村设计需求`}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span
          className={`absolute right-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${tagClass}`}
        >
          {item.status}
        </span>
        <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-full bg-foreground-950/60 px-2.5 py-1 text-[10.5px] font-medium text-background-50 backdrop-blur-sm">
          <i className="ri-home-smile-2-line text-[12px] leading-none"></i>
          {item.village}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-semibold text-primary-700">
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-[10.5px] text-foreground-500">
            <i className="ri-group-line text-[12px] leading-none"></i>
            招募 {item.quota} 人
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 text-[14.5px] font-bold leading-snug text-foreground-950">
          {item.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1 text-[11.5px] text-foreground-500">
          <i className="ri-map-pin-2-line text-[13px] leading-none"></i>
          {item.location}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-background-200 pt-3">
          <span className="text-[11.5px] text-foreground-500">
            <strong className="font-heading text-[14px] font-bold text-primary-600">
              {item.applicants}
            </strong>{" "}
            人已报名
          </span>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onParticipate(item.title);
            }}
            className="cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-4 py-1.5 text-[12.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.97]"
          >
            立即参与
          </button>
        </div>
      </div>
    </Link>
  );
}