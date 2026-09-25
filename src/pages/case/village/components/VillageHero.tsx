import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface VillageHeroProps {
  status: string;
  title: string;
  subtitle: string;
  banner: string;
}

const menuItems = [
  { icon: "ri-share-line", label: "分享项目", key: "share" },
  { icon: "ri-file-copy-line", label: "复制链接", key: "copy" },
  { icon: "ri-flag-line", label: "举报反馈", key: "report" },
];

export default function VillageHero({ status, title, subtitle, banner }: VillageHeroProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(""), 1800);
  };

  const handleMenu = async (key: string) => {
    setMenuOpen(false);
    if (key === "copy") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast("链接已复制");
      } catch {
        showToast("复制失败，请手动复制地址栏");
      }
      return;
    }
    if (key === "share") {
      try {
        if (navigator.share) {
          await navigator.share({ title, url: window.location.href });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          showToast("链接已复制，去分享吧");
        }
      } catch {
        // 用户取消分享，无需提示
      }
      return;
    }
    showToast("已收到反馈，感谢支持");
  };

  return (
    <section className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[520px]">
      <img
        src={banner}
        alt={title}
        title={`${title} 项目详情`}
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/92 via-primary-950/55 to-primary-950/40" />

      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 pt-4 md:px-8 md:pt-5">
        <button
          type="button"
          aria-label="返回平台首页"
          onClick={() => navigate("/")}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur-md transition-colors duration-200 hover:bg-background-50"
        >
          <i className="ri-arrow-left-line text-[20px] leading-none"></i>
        </button>

        <span className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground-950/30 px-3 py-1 font-heading text-[12.5px] font-semibold tracking-wide text-background-50 backdrop-blur-sm md:top-5">
          项目详情
        </span>

        <div className="relative flex items-center gap-2">
          <button
            type="button"
            aria-label="更多操作"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur-md transition-colors duration-200 hover:bg-background-50"
          >
            <i className="ri-more-fill text-[20px] leading-none"></i>
          </button>
          <button
            type="button"
            aria-label="关闭并返回首页"
            onClick={() => navigate("/")}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur-md transition-colors duration-200 hover:bg-background-50"
          >
            <i className="ri-close-line text-[20px] leading-none"></i>
          </button>

          {menuOpen && (
            <>
              <button
                type="button"
                aria-label="收起菜单"
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-10 cursor-default"
              />
              <div className="absolute right-0 top-12 z-20 w-[150px] animate-pop-in overflow-hidden rounded-xl border border-background-200 bg-background-50 py-1">
                {menuItems.map((menu) => (
                  <button
                    key={menu.key}
                    type="button"
                    onClick={() => handleMenu(menu.key)}
                    className="flex w-full cursor-pointer items-center gap-2.5 px-3.5 py-2.5 text-left text-[13px] font-medium text-foreground-800 transition-colors duration-200 hover:bg-background-100"
                  >
                    <i className={`${menu.icon} text-[16px] leading-none text-primary-600`}></i>
                    {menu.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7 md:px-10 md:pb-10">
        <div className="mx-auto w-full max-w-[960px]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-400 px-3 py-1 text-[12px] font-bold text-secondary-950">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-950" />
            {status}
          </span>
          <h1 className="mt-3 font-heading text-[26px] font-black leading-tight text-background-50 sm:text-[34px] lg:text-[42px]">
            {title}
          </h1>
          <p className="mt-2 text-[13.5px] font-medium tracking-wide text-background-50/85">
            {subtitle}
          </p>
        </div>
      </div>

      {toast && (
        <div className="fixed left-1/2 top-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 animate-pop-in rounded-xl bg-foreground-950/85 px-4 py-2.5 text-[13px] font-medium text-background-50">
          {toast}
        </div>
      )}
    </section>
  );
}