import { commonFeatures, workbenchGroups } from "@/mocks/profile";

interface ListGroupsProps {
  onSelect: (label: string) => void;
}

export default function ListGroups({ onSelect }: ListGroupsProps) {
  return (
    <>
      {workbenchGroups.map((group) => (
        <section key={group.group} className="px-4 pt-5 md:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary-500" />
            <h2 className="text-[15px] font-bold text-foreground-950">{group.group}</h2>
          </div>

          <div className="mt-3 overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card">
            {group.items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.label)}
                className={[
                  "flex w-full cursor-pointer items-center gap-3 px-3.5 py-3 text-left transition-colors hover:bg-background-100",
                  index !== 0 ? "border-t border-background-100" : "",
                ].join(" ")}
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <i className={`${item.icon} text-[16px] leading-none`}></i>
                </span>
                <span className="flex-1 whitespace-nowrap text-[13.5px] font-medium text-foreground-900">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-accent-500 px-1 font-heading text-[10px] font-bold text-background-50">
                    {item.badge}
                  </span>
                )}
                <span className="whitespace-nowrap text-[11px] text-foreground-400">
                  {item.hint}
                </span>
                <i className="ri-arrow-right-s-line text-[17px] leading-none text-foreground-300"></i>
              </button>
            ))}
          </div>
        </section>
      ))}

      <section className="px-4 pt-5 md:px-8 lg:px-10">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-accent-500" />
          <h2 className="text-[15px] font-bold text-foreground-950">常用功能</h2>
        </div>

        <div className="mt-3 overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card">
          {commonFeatures.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.label)}
              className={[
                "flex w-full cursor-pointer items-center gap-3 px-3.5 py-3 text-left transition-colors hover:bg-background-100",
                index !== 0 ? "border-t border-background-100" : "",
              ].join(" ")}
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">
                <i className={`${item.icon} text-[16px] leading-none`}></i>
              </span>
              <span className="flex-1 whitespace-nowrap text-[13.5px] font-medium text-foreground-900">
                {item.label}
              </span>
              <span className="whitespace-nowrap text-[11px] text-foreground-400">
                {item.hint}
              </span>
              <i className="ri-arrow-right-s-line text-[17px] leading-none text-foreground-300"></i>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}