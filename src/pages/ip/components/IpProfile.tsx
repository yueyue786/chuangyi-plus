import type { IpProfileItem } from "@/mocks/ipDetail";

interface IpProfileProps {
  items: IpProfileItem[];
}

export default function IpProfile({ items }: IpProfileProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-secondary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">IP 基础档案</h2>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-card border border-background-200 bg-background-50 px-3.5 py-3"
          >
            <p className="text-[11px] text-foreground-500">{item.label}</p>
            <p className="mt-1 text-[13.5px] font-semibold text-foreground-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}