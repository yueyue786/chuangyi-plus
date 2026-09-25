interface IpExtensionsProps {
  expressions: string[];
  actions: string[];
  merchandise: string[];
}

interface ExtBlock {
  key: string;
  title: string;
  bar: string;
  chip: string;
  icon: string;
  items: string[];
}

export default function IpExtensions({
  expressions,
  actions,
  merchandise,
}: IpExtensionsProps) {
  const blocks: ExtBlock[] = [
    {
      key: "expr",
      title: "表情延展",
      bar: "bg-primary-500",
      chip: "border-primary-200 bg-primary-50 text-primary-700",
      icon: "ri-emotion-happy-line",
      items: expressions,
    },
    {
      key: "act",
      title: "动作延展",
      bar: "bg-accent-500",
      chip: "border-accent-200 bg-accent-50 text-accent-700",
      icon: "ri-run-line",
      items: actions,
    },
    {
      key: "mer",
      title: "衍生品延展",
      bar: "bg-secondary-500",
      chip: "border-secondary-200 bg-secondary-50 text-secondary-700",
      icon: "ri-shopping-bag-3-line",
      items: merchandise,
    },
  ];

  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex flex-col gap-5">
        {blocks.map((block) => (
          <div key={block.key}>
            <div className="flex items-center gap-2">
              <span className={`h-4 w-1 rounded-full ${block.bar}`} />
              <h2 className="text-[16px] font-bold text-foreground-950">
                {block.title}
              </h2>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {block.items.map((item) => (
                <span
                  key={item}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12.5px] font-medium ${block.chip}`}
                >
                  <i className={`${block.icon} text-[14px] leading-none`}></i>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}