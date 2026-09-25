import type { ProjectMember } from "@/mocks/projectDetail";

interface ProjectMembersProps {
  students: ProjectMember[];
  mentors: ProjectMember[];
  villagePartners: ProjectMember[];
}

interface GroupConfig {
  key: string;
  title: string;
  icon: string;
  members: ProjectMember[];
}

const toneClass: Record<ProjectMember["tone"], string> = {
  primary: "bg-primary-100 text-primary-700",
  accent: "bg-accent-100 text-accent-700",
  secondary: "bg-secondary-100 text-secondary-700",
};

function MemberRow({ members }: { members: ProjectMember[] }) {
  return (
    <div className="mt-3 flex flex-col gap-2.5">
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
              <p className="text-[13.5px] font-bold text-foreground-950">{member.name}</p>
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
  );
}

export default function ProjectMembers({
  students,
  mentors,
  villagePartners,
}: ProjectMembersProps) {
  const groups: GroupConfig[] = [
    { key: "mentors", title: "指导导师", icon: "ri-user-star-line", members: mentors },
    { key: "students", title: "参与学生", icon: "ri-graduation-cap-line", members: students },
    { key: "village", title: "乡村负责人", icon: "ri-home-smile-2-line", members: villagePartners },
  ];

  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-secondary-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">项目成员</h2>
      </div>

      {groups.map((group) => (
        <div key={group.key} className="pt-4">
          <div className="flex items-center gap-1.5 text-[12.5px] font-medium text-foreground-700">
            <span className="flex h-5 w-5 items-center justify-center">
              <i className={`${group.icon} text-[15px] leading-none text-primary-500`}></i>
            </span>
            {group.title}
            <span className="text-[11px] font-normal text-foreground-400">
              {group.members.length} 人
            </span>
          </div>
          <MemberRow members={group.members} />
        </div>
      ))}
    </section>
  );
}