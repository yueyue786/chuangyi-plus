import { Link } from "react-router-dom";
import { coProjects } from "@/mocks/coCreate";

export default function CoProjectList() {
  return (
    <section className="pt-6">
      <div className="flex items-center gap-2 px-4 md:px-8 lg:px-10">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">共创中的项目</h2>
      </div>

      <div className="mt-3 flex flex-col gap-3 px-4 md:grid md:grid-cols-2 md:gap-4 md:px-8 lg:grid-cols-3 lg:gap-5 lg:px-10">
        {coProjects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id.slice(1)}`}
            className="block cursor-pointer overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card transition-transform duration-200 active:scale-[0.99]"
          >
            <div className="relative h-[150px] w-full overflow-hidden bg-background-200">
              <img
                src={project.cover}
                alt={project.title}
                title={`${project.title} 乡村公益共创项目`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute right-2.5 top-2.5 rounded-full bg-accent-500 px-2.5 py-1 text-[10.5px] font-semibold text-background-50">
                {project.status}
              </span>
            </div>

            <div className="p-3.5">
              <h3 className="text-[14.5px] font-bold text-foreground-950">{project.title}</h3>
              <p className="mt-1.5 flex items-center gap-1 text-[11.5px] text-foreground-500">
                <i className="ri-map-pin-2-line text-[13px] leading-none"></i>
                {project.location}
              </p>

              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-background-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
                  style={{ width: `${(project.stage / project.stageTotal) * 100}%` }}
                />
              </div>
              <div className="mt-1.5 flex items-center justify-between">
                <span className="text-[11px] text-foreground-500">项目进度</span>
                <span className="text-[11px] font-semibold text-primary-600">
                  第 {project.stage}/{project.stageTotal} 阶段
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}