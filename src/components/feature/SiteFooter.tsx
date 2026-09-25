import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandMark from "@/components/feature/BrandMark";

const quickLinks = [
  { to: "/about", label: "关于我们" },
  { to: "/contact", label: "联系加入我们" },
  { to: "/agreement", label: "平台协议" },
];

const contacts = [
  { icon: "ri-phone-line", text: "0559-12345678" },
  { icon: "ri-mail-line", text: "chuangyi@ahau.edu.cn" },
  { icon: "ri-map-pin-2-line", text: "安徽省合肥市安徽农业大学" },
];

export default function SiteFooter() {
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setToast("链接已复制，快分享给伙伴一起共创吧");
    } catch {
      setToast("请复制浏览器地址栏链接进行分享");
    }
  };

  const actions = [
    { id: "suggest", icon: "ri-lightbulb-line", label: "需求建议", to: "/contact" },
    { id: "contact", icon: "ri-customer-service-2-line", label: "联系我们", to: "/contact" },
    { id: "share", icon: "ri-share-forward-line", label: "分享共创" },
    { id: "official", icon: "ri-qr-code-line", label: "官方公众号" },
  ] as const;

  return (
    <footer className="relative w-full bg-primary-800 text-background-50">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-7 pt-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr_1.1fr]">
          <div>
            <BrandMark size={62} tile showLabel label="创艺+" />
            <p className="mt-5 max-w-[340px] text-[13px] leading-relaxed text-background-50/75">
              设计人才驱动乡村文化振兴，连接高校设计力量与乡村真实需求，让设计真正回到乡土。
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-bold tracking-wide text-background-50">快速链接</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="cursor-pointer text-[13px] text-background-50/75 transition-colors duration-200 hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold tracking-wide text-background-50">联系方式</h3>
            <ul className="mt-5 space-y-3.5">
              {contacts.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-accent-400">
                    <i className={`${item.icon} text-[16px] leading-none`}></i>
                  </span>
                  <span className="text-[13px] leading-relaxed text-background-50/80">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold tracking-wide text-background-50">互动服务</h3>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
              {actions.map((action) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background-50/12 text-accent-400 transition-colors duration-200 group-hover:bg-accent-500 group-hover:text-background-50">
                      <i className={`${action.icon} text-[20px] leading-none`}></i>
                    </span>
                    <span className="mt-2 whitespace-nowrap text-[12px] text-background-50/80">
                      {action.label}
                    </span>
                  </>
                );

                if ("to" in action && action.to) {
                  return (
                    <Link
                      key={action.id}
                      to={action.to}
                      className="group flex cursor-pointer flex-col items-center text-center"
                    >
                      {inner}
                    </Link>
                  );
                }

                return (
                  <button
                    key={action.id}
                    type="button"
                    onClick={() =>
                      action.id === "share"
                        ? handleShare()
                        : setToast("官方公众号：创艺plus · 扫码关注获取最新共创活动")
                    }
                    className="group flex cursor-pointer flex-col items-center text-center"
                  >
                    {inner}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background-50/15 pt-6 text-center text-[12.5px] leading-relaxed text-background-50/65">
          版权 © 2026 创艺+ 公益共创平台 | 安徽农业大学 版权所有
        </div>
      </div>

      {toast && (
        <div className="pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2 animate-fade-up">
          <div className="whitespace-nowrap rounded-full bg-foreground-950/85 px-4 py-2 text-[12.5px] text-background-50 backdrop-blur-sm">
            {toast}
          </div>
        </div>
      )}
    </footer>
  );
}