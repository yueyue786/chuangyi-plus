interface CaseAuthorBannerProps {
  leftLabel: string;
  leftValue: string;
  rightLabel: string;
  rightValue: string;
}

export default function CaseAuthorBanner({
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
}: CaseAuthorBannerProps) {
  return (
    <section className="px-4 pt-4 md:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[880px] flex-col gap-2.5 rounded-card bg-primary-100/70 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <span className="flex items-center gap-2 text-[13px] font-medium text-primary-800">
          <i className="ri-user-3-line text-[16px] leading-none text-primary-600"></i>
          <span>
            {leftLabel}：
            <strong className="font-bold text-primary-900">{leftValue}</strong>
          </span>
        </span>

        <span className="hidden h-4 w-px bg-primary-300 sm:block" />

        <span className="flex items-center gap-2 text-[13px] font-medium text-primary-800">
          <i className="ri-graduation-cap-line text-[16px] leading-none text-primary-600"></i>
          <span>
            {rightLabel}：
            <strong className="font-bold text-primary-900">{rightValue}</strong>
          </span>
        </span>
      </div>
    </section>
  );
}