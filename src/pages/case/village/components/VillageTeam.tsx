import VillageSectionHead from "@/pages/case/village/components/VillageSectionHead";
import type { VillageMember } from "@/mocks/villageProject";

interface VillageTeamProps {
  members: VillageMember[];
}

export default function VillageTeam({ members }: VillageTeamProps) {
  return (
    <section className="mx-auto w-full max-w-[960px] px-4 pt-8 md:px-10">
      <VillageSectionHead title="项目团队" />
      <div className="mt-3 space-y-2.5">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex items-center gap-3.5 rounded-card border border-background-200 bg-background-50 p-4"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 font-heading text-[16px] font-bold text-primary-700">
              {member.name.slice(0, 1)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-bold text-foreground-950">{member.name}</p>
              <p className="mt-0.5 truncate text-[12.5px] text-foreground-500">
                {member.school} · {member.major}
              </p>
            </div>
            <span className="flex-shrink-0 rounded-full bg-secondary-100 px-3 py-1 text-[11.5px] font-semibold text-secondary-900">
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}