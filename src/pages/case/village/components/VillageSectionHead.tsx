interface VillageSectionHeadProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function VillageSectionHead({ title, subtitle, badge }: VillageSectionHeadProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-secondary-500" />
        <h2 className="font-heading text-[17px] font-black text-foreground-950 md:text-[19px]">
          {title}
        </h2>
        {badge && (
          <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[11.5px] font-semibold text-accent-700">
            {badge}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-foreground-500">{subtitle}</p>
      )}
    </div>
  );
}