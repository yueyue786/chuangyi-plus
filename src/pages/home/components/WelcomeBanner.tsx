const YOUTH_IMG =
  "https://readdy.ai/api/search-image?query=Flat%20vector%20illustration%20in%20Chinese%20guofeng%20style%2C%20two%20young%20people%20with%20backpacks%20standing%20beside%20a%20wooden%20village%20signboard%20in%20front%20of%20a%20Jiangnan%20village%20with%20white%20walls%20and%20dark%20tiled%20roofs%2C%20green%20paddy%20fields%20and%20distant%20misty%20hills%2C%20warm%20morning%20light%2C%20minimal%20clean%20composition%2C%20soft%20green%20and%20warm%20neutral%20tones%2C%20smooth%20shapes%2C%20no%20text&width=800&height=640&seq=cy-wb-welcome-02&orientation=landscape&nocache=true";

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