import { Link } from "react-router-dom";

interface Cta {
  to: string;
  label: string;
}

interface PageBannerProps {
  badge?: string;
  title: string;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  image: string;
  imageAlt: string;
}

export default function PageBanner({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: PageBannerProps) {
  return (
    <section className="relative h-[360px] w-full overflow-hidden md:h-[440px]">
      <img
        src={image}
        alt={imageAlt}
        title={`${title} · 创艺+ 设计人才驱动乡村文化振兴`}
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* 淡淡暗色遮罩，保证白字清晰 */}
      <div className="absolute inset-0 bg-foreground-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-primary-950/40" />

      <div className="relative mx-auto flex h-full w-full max-w-[1200px] flex-col justify-center px-6 md:px-10">
        {badge && (
          <span className="animate-hero-fade-up inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-400 px-3 py-1 text-[12px] font-bold tracking-wide text-accent-950">
            {badge}
          </span>
        )}
        <h2 className="animate-hero-fade-up mt-4 max-w-[820px] font-heading text-[30px] font-black leading-[1.25] text-background-50 [animation-delay:0.1s] sm:text-[38px] lg:text-[46px]">
          {title}
        </h2>
        {subtitle && (
          <p className="animate-hero-fade-up mt-4 max-w-[660px] text-[13px] leading-relaxed text-background-50/85 [animation-delay:0.2s] md:text-[14px]">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="animate-hero-fade-up mt-7 flex flex-wrap items-center gap-3 [animation-delay:0.3s]">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="whitespace-nowrap rounded-full bg-accent-500 px-6 py-2.5 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-accent-600"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}