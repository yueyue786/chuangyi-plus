import { NavLink } from "react-router-dom";

interface TabItem {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
}

const tabs: TabItem[] = [
  { to: "/", label: "首页", icon: "ri-home-5-line", end: true },
  { to: "/demands", label: "需求", icon: "ri-file-list-3-line" },
  { to: "/co-create", label: "共创", icon: "ri-lightbulb-flash-line" },
  { to: "/cases", label: "案例", icon: "ri-layout-grid-line" },
  { to: "/profile", label: "我的", icon: "ri-user-3-line" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-background-200 bg-background-50/95 backdrop-blur-md md:hidden">
      <ul className="flex items-stretch justify-between px-1.5 py-1.5">
        {tabs.map((tab) => (
          <li key={tab.to} className="flex-1">
            <NavLink
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                [
                  "flex cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 transition-colors duration-200",
                  isActive
                    ? "text-primary-500"
                    : "text-foreground-400 hover:text-foreground-600",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className="flex h-6 w-6 items-center justify-center"
                    aria-hidden="true"
                  >
                    <i className={`${tab.icon} text-[21px] leading-none`}></i>
                  </span>
                  <span
                    className={`text-[11px] leading-none ${
                      isActive ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {tab.label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}