import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandMark from "@/components/feature/BrandMark";

const QR_IMG =
  "/images/cy-gov-qr-03.jpg";

const siteLinks = [
  { to: "/cases", label: "项目案例" },
  { to: "/co-create", label: "服务内容" },
  { to: "/contact", label: "人才计划" },
  { to: "/about", label: "关于我们" },
];

const partners = ["高校机构", "设计院校", "企业合作", "乡镇政府", "公益组织"];

const contacts = [
  { icon: "ri-phone-line", text: "0559-12345678" },
  { icon: "ri-mail-line", text: "chuangyi@ahau.edu.cn" },
  { icon: "ri-map-pin-2-line", text: "安徽省合肥市安徽农业大学" },
];

const socials = [
  { id: "wechat", icon: "ri-wechat-line", label: "微信" },
  { id: "weibo", icon: "ri-weibo-line", label: "微博" },
  { id: "douyin", icon: "ri-tiktok-line", label: "抖音" },
];

export default function HomeFooter() {
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-primary-800 text-background-50">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-12 pt-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 第1栏：Logo + 标语 */}
          <div>
            <BrandMark size={56} tile showLabel label="创艺+" />
            <p className="mt-5 text-[13px] leading-relaxed text-background-50/80">
              设计人才驱动乡村文化振兴
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-background-50/45">
              Creative design for a better countryside
            </p>
          </div>

          {/* 第2栏：网站导航 */}
          <div>
            <h3 className="text-[15px] font-bold tracking-wide text-background-50">网站导航</h3>
            <ul className="mt-5 space-y-3">
              {siteLinks.map((link) => (
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

          {/* 第3栏：合作伙伴 */}
          <div>
            <h3 className="text-[15px] font-bold tracking-wide text-background-50">合作伙伴</h3>
            <ul className="mt-5 space-y-3">
              {partners.map((item) => (
                <li key={item} className="text-[13px] text-background-50/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 第4栏：联系我们 + 二维码 + 社交 */}
          <div>
            <h3 className="text-[15px] font-bold tracking-wide text-background-50">联系我们</h3>
            <ul className="mt-5 space-y-3.5">
              {contacts.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center text-accent-400">
                    <i className={`${item.icon} text-[16px] leading-none`}></i>
                  </span>
                  <span className="text-[13px] leading-relaxed text-background-50/80">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-4">
              <div className="h-[84px] w-[84px] flex-shrink-0 overflow-hidden rounded-lg bg-background-50 p-1.5">
                <img
                  src={QR_IMG}
                  alt="创艺+ 公益共创平台官方公众号二维码"
                  title="创艺+ 官方公众号二维码"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[12.5px] text-background-50/80">关注我们</p>
                <p className="mt-1 text-[11px] leading-relaxed text-background-50/50">
                  扫码关注公众号，获取最新共创活动
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  {socials.map((social) => (
                    <button
                      key={social.id}
                      type="button"
                      aria-label={social.label}
                      onClick={() => setToast(`欢迎关注创艺+ ${social.label}官方账号`)}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-background-50/12 text-background-50/85 transition-colors duration-200 hover:bg-accent-500 hover:text-background-50"
                    >
                      <i className={`${social.icon} text-[16px] leading-none`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 通栏版权栏 */}
      <div className="border-t border-background-50/15">
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-4 px-6 py-5 lg:px-8">
          <span className="hidden flex-1 sm:block" aria-hidden="true" />
          <p className="flex-1 text-center text-[12px] leading-relaxed text-background-50/65 sm:flex-none">
            ©2026 创艺+ | 设计人才驱动乡村文化振兴
          </p>
          <div className="hidden flex-1 justify-end sm:flex">
            <button
              type="button"
              onClick={scrollTop}
              className="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-background-50/25 px-3.5 py-2 text-[12px] text-background-50/85 transition-colors duration-200 hover:border-accent-400 hover:text-accent-400"
            >
              回到顶部
              <i className="ri-arrow-up-line text-[14px] leading-none"></i>
            </button>
          </div>
          <div className="flex-1 justify-end sm:hidden">
            <button
              type="button"
              aria-label="回到顶部"
              onClick={scrollTop}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-background-50/25 text-background-50/85"
            >
              <i className="ri-arrow-up-line text-[16px] leading-none"></i>
            </button>
          </div>
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