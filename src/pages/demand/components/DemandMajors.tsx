interface DemandMajorsProps {
  majors: string[];
  skills: string[];
}

export default function DemandMajors({ majors, skills }: DemandMajorsProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-primary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">招募专业</h2>
      </div>

      <div className="mt-3 rounded-card border border-background-200 bg-background-50 px-3.5 py-3.5">
        <p className="text-[11.5px] text-foreground-500">面向在校大学生招募，专业不限年级</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {majors.map((major) => (
            <span
              key={major}
              className="flex items-center gap-1 rounded-full bg-primary-100 px-2.5 py-1 text-[11.5px] font-medium text-primary-700"
            >
              <i className="ri-graduation-cap-line text-[12px] leading-none"></i>
              {major}
            </span>
          ))}
        </div>

        <div className="mt-3.5 border-t border-background-200 pt-3.5">
          <p className="text-[11.5px] text-foreground-500">加分技能</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-accent-100 px-2.5 py-1 text-[11.5px] font-medium text-accent-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}