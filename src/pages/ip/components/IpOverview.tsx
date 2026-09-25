import type { IpMetric } from "@/mocks/ipDetail";

interface IpOverviewProps {
  subtitle: string;
  tags: string[];
  summary: string;
  highlights: IpMetric[];
}

export default function IpOverview({
  subtitle,
  tags,
  summary,
  highlights,
}: IpOverviewProps) {
  return (
    <section className="px-4 pt-4 md:px-8 lg:px-10">
      <div className="rounded-card border border-background-200 bg-background-50 px-3.5 py-3.5">
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-100 px-2.5 py-1 text-[11px] font-medium text-primary-700"
            >
              #{tag}
            </span>
          ))}
          <span className="rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-medium text-secondary-700">
            {subtitle}
          </span>
        </div>

        <p className="mt-2.5 text-[13px] leading-relaxed text-foreground-700">
          {summary}
        </p>
      </div>

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
    </section>
  );
}