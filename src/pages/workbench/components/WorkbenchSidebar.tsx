import { Link, NavLink, useNavigate } from "react-router-dom";
import BrandMark from "@/components/feature/BrandMark";
import useAuth from "@/hooks/useAuth";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  to: string;
  end?: boolean;
  highlight?: boolean;
}

const menuItems: MenuItem[] = [
  { id: "overview", label: "工作台总览", icon: "ri-dashboard-line", to: "/workbench", end: true, highlight: true },
  { id: "messages", label: "站内消息", icon: "ri-mail-line", to: "/messages" },
  { id: "demands", label: "需求大厅", icon: "ri-file-list-3-line", to: "/demands" },
  { id: "cases", label: "乡村案例", icon: "ri-layout-grid-line", to: "/cases" },
  { id: "study", label: "研学与文创", icon: "ri-book-open-line", to: "/co-create" },
  { id: "me", label: "个人中心", icon: "ri-user-3-line", to: "/profile" },
  { id: "home", label: "返回首页", icon: "ri-home-5-line", to: "/" },
];

const PATH_IMG =
  "https://readdy.ai/api/search-image?query=Flat%20vector%20illustration%20in%20Chinese%20guofeng%20style%20of%20two%20young%20people%20with%20backpacks%20walking%20along%20a%20winding%20countryside%20path%20beside%20green%20rice%20fields%20and%20distant%20misty%20hills%2C%20small%20village%20houses%20in%20the%20distance%2C%20soft%20green%20and%20warm%20neutral%20tones%2C%20minimal%20clean%20composition%2C%20smooth%20curves%2C%20no%20text&width=440&height=320&seq=cy-wb-path-03&orientation=landscape";

export default function WorkbenchSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="hidden w-[240px] flex-shrink-0 flex-col border-r border-primary-100 bg-primary-50/70 lg:flex">
      <Link to="/" className="flex cursor-pointer items-center gap-2.5 px-5 pb-4 pt-6" aria-label="创艺+ 首页">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500">
          <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-background-50">
            <BrandMark size={30} tone="dark" />
          </span>
        </span>
        <div className="min-w-0">
          <p className="font-heading text-[19px] font-black leading-none text-foreground-950">
            创艺<span className="text-accent-500">+</span>
          </p>
          <p className="mt-1.5 text-[10px] leading-tight text-foreground-500">
            设计人才驱动乡村文化振兴
          </p>
        </div>
      </Link>

      <nav className="flex flex-1 flex-col gap-1 px-3 pt-2">
        {menuItems.map((item) => {
          if (item.highlight) {
            return (
              <Link
                key={item.id}
                to={item.to}
                className="flex cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#8E7BF0] px-3 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_18px_-10px_rgba(108,92,231,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <i className={`${item.icon.replace("-line", "-fill")} text-[18px] leading-none`}></i>
                </span>
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            );
          }

          return (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] transition-colors duration-200",
                  isActive
                    ? "bg-background-50 font-semibold text-primary-700 ring-1 ring-primary-200"
                    : "font-medium text-foreground-600 hover:bg-background-50 hover:text-primary-700",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
                    <i
                      className={`${isActive ? item.icon.replace("-line", "-fill") : item.icon} text-[18px] leading-none`}
                    ></i>
                  </span>
                  <span className="whitespace-nowrap">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}

        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13.5px] font-medium text-foreground-600 transition-colors duration-200 hover:bg-background-50 hover:text-accent-700"
          >
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
              <i className="ri-logout-box-r-line text-[18px] leading-none"></i>
            </span>
            <span className="whitespace-nowrap">退出登录</span>
          </button>
        ) : (
          <Link
            to="/login"
            className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] font-medium text-foreground-600 transition-colors duration-200 hover:bg-background-50 hover:text-primary-700"
          >
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
              <i className="ri-login-box-line text-[18px] leading-none"></i>
            </span>
            <span className="whitespace-nowrap">去登录</span>
          </Link>
        )}
      </nav>

      <div className="px-4 pb-5 pt-4">
        {user ? (
          <div className="flex items-center gap-2.5 rounded-2xl bg-background-50/80 px-3 py-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-[14px] font-bold text-background-50">
              {user.name?.slice(0, 1) || "友"}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-bold text-foreground-900">{user.name}</p>
              <p className="text-[10.5px] text-foreground-400">
                {user.role === "village" ? "乡村用户" : "设计师"}
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-background-50/80">
            <img
              src={PATH_IMG}
              alt="青年走向乡村的国风插画"
              title="创艺+ 乡村共创插图"
              className="h-[112px] w-full object-cover"
            />
            <div className="px-3 py-3 text-center">
              <p className="font-heading text-[12.5px] font-bold leading-snug text-primary-700">
                设计点亮乡村
              </p>
              <p className="font-heading text-[12.5px] font-bold leading-snug text-accent-600">
                创意改变未来
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
