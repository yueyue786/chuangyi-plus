interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "flex flex-col items-center text-center" : ""} ${className}`}>
      {tag && (
        <span className="mb-3 inline-flex items-center rounded-full bg-secondary-100 px-3 py-1 text-[12px] font-semibold text-primary-700">
          {tag}
        </span>
      )}
      <h2 className="relative inline-block pb-2 font-heading text-[24px] font-black leading-tight text-primary-700 md:text-[30px]">
        {title}
        <span className="absolute bottom-0 left-0 h-[4px] w-12 rounded-full bg-accent-500" />
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-[13.5px] leading-relaxed text-foreground-500 ${
            centered ? "max-w-[560px]" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}