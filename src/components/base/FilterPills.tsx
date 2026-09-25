interface FilterPillsProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  variant?: "primary" | "soft";
}

export default function FilterPills({
  options,
  value,
  onChange,
  variant = "primary",
}: FilterPillsProps) {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 md:px-8 lg:px-10">
      {options.map((option) => {
        const active = option === value;
        const activeClass =
          variant === "primary"
            ? "bg-primary-500 text-background-50"
            : "bg-primary-600 text-background-50";
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={[
              "flex-shrink-0 cursor-pointer rounded-full px-3.5 py-1.5 text-[13px] transition-all duration-200",
              active
                ? `${activeClass} font-semibold`
                : "bg-background-100 text-foreground-600 hover:bg-background-200",
            ].join(" ")}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}