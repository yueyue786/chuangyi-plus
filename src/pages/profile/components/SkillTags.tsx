import { skillTags } from "@/mocks/profile";

export default function SkillTags() {
  return (
    <section className="px-4 pt-5 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-primary-500" />
        <h2 className="text-[15px] font-bold text-foreground-950">技能标签</h2>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {skillTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-background-100 px-3.5 py-1.5 text-[12px] font-medium text-primary-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}