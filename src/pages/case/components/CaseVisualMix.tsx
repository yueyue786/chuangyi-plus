interface CaseVisualMixProps {
  image: string;
  title: string;
  text: string;
}

export default function CaseVisualMix({ image, title, text }: CaseVisualMixProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-primary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">实物与包装</h2>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        <div className="overflow-hidden rounded-card border border-background-200 bg-background-50">
          <div className="h-[320px] w-full overflow-hidden bg-background-200 md:h-[420px]">
            <img
              src={image}
              alt={title}
              title={`${title} 实物与包装展示`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-card border border-background-200 bg-background-50 px-4 py-4 md:px-5 md:py-5">
          <h3 className="text-[15px] font-bold leading-snug text-foreground-950">{title}</h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-foreground-700">{text}</p>

          <div className="mt-3.5 flex flex-wrap gap-2 border-t border-background-200 pt-3.5">
            <span className="flex items-center gap-1.5 rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-medium text-secondary-700">
              <i className="ri-box-3-line text-[13px] leading-none"></i>
              实物打样
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-accent-100 px-2.5 py-1 text-[11px] font-medium text-accent-700">
              <i className="ri-image-2-line text-[13px] leading-none"></i>
              图文混排
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}