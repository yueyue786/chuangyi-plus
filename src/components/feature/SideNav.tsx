import { useState } from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
}

const navItems: NavItem[] = [
  { to: "/", label: "首页", icon: "ri-home-5-line", end: true },
  { to: "/demands", label: "需求大厅", icon: "ri-file-list-3-line" },
  { to: "/co-create", label: "设计共创", icon: "ri-lightbulb-flash-line" },
  { to: "/cases", label: "案例库", icon: "ri-layout-grid-line" },
  { to: "/about", label: "关于我们", icon: "ri-information-line" },
  { to: "/contact", label: "联系(加入)我们", icon: "ri-customer-service-2-line" },
];

const roles = ["设计师端", "乡村客户端"];

interface SideNavProps {
  collapsed?: boolean;
}

export default function SideNav({ collapsed = false }: SideNavProps) {
  const [role, setRole] = useState(roles[0]);

  return (
    <aside
      className={[
        "sticky top-[84px] hidden h-[calc(100vh-84px)] flex-shrink-0 flex-col gap-6 overflow-y-auto border-r border-background-200 bg-background-50 py-6 transition-[width,padding] duration-300 ease-out lg:flex",
        collapsed ? "items-center px-3" : "px-4",
      ].join(" ")}
      style={{ width: collapsed ? 80 : 212 }}
    >
      {collapsed ? (
        <button
          type="button"
          aria-label="切换身份"
          title={`当前身份：${role}（点击切换）`}
          onClick={() => setRole((prev) => (prev === roles[0] ? roles[1] : roles[0]))}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-background-100 text-primary-600 transition-colors duration-200 hover:bg-primary-100"
        >
          <i className="ri-user-settings-line text-[20px] leading-none"></i>
        </button>
      ) : (
        <div>
          <p className="px-1 text-[11px] font-semibold tracking-wider text-foreground-400">
            身份切换
          </p>
          <div className="mt-2 flex gap-1 rounded-full bg-background-100 p-1">
            {roles.map((item) => {
              const active = item === role;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRole(item)}
                  className={[
                    "flex-1 cursor-pointer whitespace-nowrap rounded-full px-2 py-1.5 text-[12px] font-semibold transition-colors duration-200",
                    active
                      ? "bg-accent-500 text-background-50"
                      : "text-foreground-600 hover:text-foreground-900",
                  ].join(" ")}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <nav className={["flex flex-col gap-1", collapsed ? "w-full items-center" : ""].join(" ")}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) =>
              [
                "flex cursor-pointer items-center rounded-xl py-2.5 text-[13.5px] transition-colors duration-200",
                collapsed ? "w-11 justify-center" : "gap-2.5 px-3",
                isActive
                  ? "bg-primary-500 font-semibold text-background-50"
                  : "font-medium text-foreground-600 hover:bg-background-100 hover:text-primary-700",
              ].join(" ")
            }
          >
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
              <i className={`${item.icon} text-[18px] leading-none`}></i>
            </span>
            {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {collapsed ? (
        <NavLink
          to="/contact"
          title="立即加入共创"
          className="mt-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-accent-500 text-background-50 transition-colors duration-200 hover:bg-accent-600"
        >
          <i className="ri-add-line text-[20px] leading-none"></i>
        </NavLink>
      ) : (
        <div className="mt-auto rounded-xl bg-primary-50 p-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-background-50">
            <i className="ri-service-line text-[18px] leading-none"></i>
          </span>
          <p className="mt-3 text-[13px] font-bold text-primary-800">有设计想法？</p>
          <p className="mt-1 text-[12px] leading-relaxed text-foreground-600">
            把你的创意变成乡村的真实成果，快来发布你的第一份需求。
          </p>
          <NavLink
            to="/contact"
            className="mt-3 block cursor-pointer whitespace-nowrap rounded-full bg-accent-500 px-4 py-2 text-center text-[12.5px] font-semibold text-background-50 transition-colors duration-200 hover:bg-accent-600"
          >
            立即加入共创
          </NavLink>
        </div>
      )}
    </aside>
  );
}