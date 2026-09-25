import { useEffect, useState, type ReactNode } from "react";
import BottomNav from "./BottomNav";
import SideNav from "./SideNav";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SIDEBAR_STORAGE_KEY = "cy-sidebar-collapsed";

interface AppShellProps {
  children: ReactNode;
  withNav?: boolean;
  withTopNav?: boolean;
  withFooter?: boolean;
  bottomBar?: ReactNode;
  contentPadding?: string;
}

export default function AppShell({
  children,
  withNav = true,
  withTopNav = true,
  withFooter = true,
  bottomBar,
  contentPadding = "pb-24 md:pb-10",
}: AppShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // 让折叠状态在切换页面时保持不变
  useEffect(() => {
    if (typeof window === "undefined") return;
    setSidebarCollapsed(window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "1");
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(SIDEBAR_STORAGE_KEY, next ? "1" : "0");
      }
      return next;
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-100">
      {withTopNav && (
        <SiteHeader
          showSidebarToggle
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={toggleSidebar}
        />
      )}
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 items-stretch">
        {withTopNav && <SideNav collapsed={sidebarCollapsed} />}
        <div className={`min-w-0 flex-1 ${contentPadding}`}>
          {children}
          {bottomBar}
        </div>
      </div>
      {withFooter && <SiteFooter />}
      {withNav && <BottomNav />}
    </div>
  );
}