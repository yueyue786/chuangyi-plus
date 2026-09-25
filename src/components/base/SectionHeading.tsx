import { Link } from "react-router-dom";

interface SectionHeadingProps {
  tag: string;
  title: string;
  desc?: string;
  action?: { label: string; to: string };
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  desc,
  action,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-4 ${className}`}>
      <div className="min-w-0">
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-3 py-1 text-[12.5px] font-semibold text-primary-700">
          <i className="ri-add-line text-[13px] leading-none text-primary-500"></i>
          {tag}
        </span>
        <h2 className="mt-3 font-heading text-[26px] font-black leading-tight text-foreground-950">
          {title}
        </h2>
        {desc && (
          <p className="mt-2 max-w-[640px] text-[13.5px] leading-relaxed text-foreground-500">
            {desc}
          </p>
        )}
      </div>

      {action && (
        <Link
          to={action.to}
          className="group flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full border border-background-200 bg-background-50 px-4 py-2 text-[13px] font-medium text-foreground-700 transition-colors duration-200 hover:border-primary-300 hover:text-primary-700"
        >
          {action.label}
          <i className="ri-arrow-right-line text-[15px] leading-none transition-transform duration-200 group-hover:translate-x-0.5"></i>
        </Link>
      )}
    </div>
  );
}