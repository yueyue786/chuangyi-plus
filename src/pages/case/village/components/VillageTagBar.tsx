import { useState } from "react";

interface TagSection {
  label: string;
  id: string;
}

interface VillageTagBarProps {
  items: TagSection[];
  onSelect: (id: string) => void;
}

export default function VillageTagBar({ items, onSelect }: VillageTagBarProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  return (
    <div className="sticky top-0 z-30 border-b border-background-200 bg-background-50/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[960px] flex-wrap items-center gap-2 px-4 py-3 md:px-10">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActive(item.id);
                onSelect(item.id);
              }}
              className={[
                "cursor-pointer whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200",
                isActive
                  ? "bg-primary-600 text-background-50"
                  : "bg-background-100 text-foreground-700 hover:bg-secondary-100 hover:text-primary-700",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}