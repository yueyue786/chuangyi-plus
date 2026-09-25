import type { CaseMember } from "@/mocks/caseDetail";

interface CaseTeamProps {
  members: CaseMember[];
}

const toneClass: Record<CaseMember["tone"], string> = {
  primary: "bg-primary-100 text-primary-700",
  accent: "bg-accent-100 text-accent-700",
  secondary: "bg-secondary-100 text-secondary-700",
};

export default function CaseTeam({ members }: CaseTeamProps) {
  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-secondary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">团队成员 · 指导老师</h2>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-2">
        {members.map((member) => (
          <div
            key={`${member.name}-${member.role}`}
            className="flex items-center gap-3 rounded-card border border-background-200 bg-background-50 px-3.5 py-2.5"
          >
            <span
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[14px] font-bold ${toneClass[member.tone]}`}
            >
              {member.name.slice(0, 1)}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[13.5px] font-bold text-foreground-950">
                  {member.name}
                </p>
                <span className="rounded-full bg-background-100 px-2 py-0.5 text-[10.5px] text-foreground-600">
                  {member.role}
                </span>
              </div>
              <p className="mt-0.5 truncate text-[11.5px] text-foreground-500">
                {member.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}