import type { ProjectOutcome } from "@/mocks/projectDetail";

interface ProjectOutcomesProps {
  outcomes: ProjectOutcome[];
}

export default function ProjectOutcomes({ outcomes }: ProjectOutcomesProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">共创成果</h2>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
        {outcomes.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-card border border-background-200 bg-background-50"
          >
            <div className="relative h-[118px] w-full overflow-hidden bg-background-200">
              <img
                src={item.cover}
                alt={item.title}
                title={`${item.title} 乡村共创设计成果`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-2.5 py-2.5">
              <h3 className="line-clamp-2 text-[12.5px] font-semibold leading-snug text-foreground-950">
                {item.title}
              </h3>
              <p className="mt-1 text-[10.5px] text-foreground-400">{item.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}