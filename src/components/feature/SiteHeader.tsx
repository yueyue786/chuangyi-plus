import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import BrandMark from "@/components/feature/BrandMark";
import AuthModal from "@/components/base/AuthModal";
import useAuth from "@/hooks/useAuth";

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: "/cases", label: "项目案例" },
  { to: "/co-create", label: "服务内容" },
  { to: "/contact", label: "人才计划" },
  { to: "/about", label: "关于我们" },
];

interface SiteHeaderProps {
  /** 固定在页面顶部（首页用，盖在通栏大图上）；默认随内容流式吸顶 */
  fixed?: boolean;
  /** 是否显示侧边栏折叠按钮（内页用） */
  showSidebarToggle?: boolean;
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

export default function SiteHeader({
  fixed = false,
  showSidebarToggle = false,
  sidebarCollapsed = false,
  onToggleSidebar,
}: SiteHeaderProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!fixed) return undefined;
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [fixed]);

  const handlePrimary = () => {
    setMenuOpen(false);
    if (user) {
      navigate("/workbench");
      return;
    }
    setAuthOpen(true);
  };

  const headerClass = fixed
    ? [
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-background-200 bg-background-50/95 backdrop-blur-md"
          : "border-b border-background-50/40 bg-background-50/75 backdrop-blur-md",
      ].join(" ")
    : "sticky top-0 z-50 w-full border-b border-background-200 bg-background-50/95 backdrop-blur-md";

  return (
    <>
      <header className={headerClass}>
        <div className="mx-auto flex h-[84px] w-full max-w-[1200px] items-center gap-3 px-4 md:px-6">
          {showSidebarToggle && (
            <button
              type="button"
              onClick={onToggleSidebar}
              aria-label={sidebarCollapsed ? "展开侧边栏" : "折叠侧边栏"}
              title={sidebarCollapsed ? "展开侧边栏" : "折叠侧边栏"}
              className="hidden h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-background-200 text-foreground-600 transition-colors duration-200 hover:border-primary-300 hover:text-primary-600 lg:flex"
            >
              <i
                className={`${
                  sidebarCollapsed ? "ri-menu-unfold-line" : "ri-menu-fold-line"
                } text-[20px] leading-none`}
              ></i>
            </button>
          )}

          <Link to="/" className="flex flex-shrink-0 cursor-pointer items-center" aria-label="创艺+ 首页">
            <BrandMark size={58} showLabel label="创艺+" tone="dark" />
          </Link>

          <nav className="ml-2 hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "cursor-pointer whitespace-nowrap py-1 text-[15px] transition-colors duration-200",
                    isActive
                      ? "font-bold text-primary-700"
                      : "font-medium text-foreground-800 hover:text-primary-600",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex flex-shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={handlePrimary}
              className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-500 px-5 py-2.5 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-accent-600"
            >
              {user ? (
                <>
                  <i className="ri-user-3-line text-[15px] leading-none"></i>
                  我的
                </>
              ) : (
                <>
                  加入我们
                  <i className="ri-arrow-right-line text-[15px] leading-none"></i>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-background-200 text-foreground-700 md:hidden"
            >
              <i className={`${menuOpen ? "ri-close-line" : "ri-menu-line"} text-[20px] leading-none`}></i>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-background-200 bg-background-50 px-4 py-3 md:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      "cursor-pointer rounded-lg px-3 py-3 text-[15px] transition-colors duration-200",
                      isActive
                        ? "bg-primary-50 font-bold text-primary-700"
                        : "font-medium text-foreground-800 hover:bg-background-100",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={() => {
          setAuthOpen(false);
        }}
      />
    </>
  );
}