interface IpBoardProps {
  title: string;
  cover: string;
}

export default function IpBoard({ title, cover }: IpBoardProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">完整 IP 设计板</h2>
      </div>

      <div className="mt-3 overflow-hidden rounded-card border border-background-200 bg-background-50 p-2 md:p-3">
        <img
          src={cover}
          alt={`${title} 完整设计板`}
          title={`${title} 完整设计板 · 非遗文创 IP`}
          loading="lazy"
          className="mx-auto block w-full max-w-[720px] rounded-xl object-contain"
        />
      </div>
    </section>
  );
}