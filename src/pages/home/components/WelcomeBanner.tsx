const YOUTH_IMG =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(0)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23344e41%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23b7e4c7%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

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