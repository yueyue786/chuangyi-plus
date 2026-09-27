const YOUTH_IMG =
  "/images/cy-wb-welcome-02.jpg";

export default function WelcomeBanner() {
  return (
    <section className="relative flex min-h-[220px] items-center overflow-hidden rounded-card border border-background-200 bg-background-50 p-6">
      <img
        src={YOUTH_IMG}
        alt="青年设计师走进乡村的国风插画"
        title="创艺+ 青年共创乡村"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[56%] object-cover object-left md:block"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background-50 via-background-50/85 to-transparent md:block"></div>

      <div className="relative z-10 max-w-[300px]">
        <h2 className="font-heading text-[23px] font-black leading-tight text-foreground-950 md:text-[27px]">
          你好，欢迎来到创艺<span className="text-accent-500">+</span>
        </h2>
        <p className="mt-3 text-[13.5px] leading-relaxed text-foreground-600">
          连接高校设计人才与乡村文化需求
        </p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-foreground-500">
          汇聚设计力量 · 激活乡土价值 · 共创美好未来
        </p>
        <button
          type="button"
          className="mt-6 flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
        >
          <i className="ri-add-line text-[16px] leading-none"></i>
          发布设计需求
        </button>
      </div>
    </section>
  );
}