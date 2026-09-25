import { Link } from "react-router-dom";
import { works } from "@/mocks/profile";

export default function WorkGrid() {
  return (
    <section className="px-4 pt-5 md:px-8 lg:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 rounded-full bg-primary-500" />
          <h2 className="text-[15px] font-bold text-foreground-950">设计成果</h2>
        </div>
        <Link
          to="/cases"
          className="flex cursor-pointer items-center gap-0.5 whitespace-nowrap text-[11.5px] text-foreground-500"
        >
          全部
          <i className="ri-arrow-right-s-line text-[15px] leading-none"></i>
        </Link>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6 lg:gap-5">
        {works.map((work) => (
          <Link
            key={work.id}
            to="/cases"
            className="cursor-pointer overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card transition-transform duration-200 active:scale-[0.98]"
          >
            <div className="h-[96px] w-full overflow-hidden bg-background-200">
              <img
                src={work.cover}
                alt={work.title}
                title={`${work.title} 设计成果`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-2.5">
              <h3 className="line-clamp-1 text-[12px] font-bold text-foreground-950">
                {work.title}
              </h3>
              <p className="mt-1 flex items-center gap-1 text-[10px] text-foreground-500">
                <i className="ri-map-pin-2-line text-[11px] leading-none"></i>
                {work.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}