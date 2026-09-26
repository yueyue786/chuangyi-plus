const LOGO_URL =
  "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20800%22%20width%3D%221200%22%20height%3D%22800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%20gradientTransform%3D%22rotate(0)%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%233a5a40%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23e9edc9%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22url(%23g)%22%2F%3E%3Cpath%20d%3D%22M0%2C560%20L180%2C400%20L360%2C496%20L540%2C336%20L720%2C463.99999999999994%20L900%2C360%20L1080%2C440.00000000000006%20L1200%2C400%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.12)%22%2F%3E%3Cpath%20d%3D%22M0%2C656%20L240%2C528%20L456%2C608%20L660%2C480%20L864%2C576%20L1056%2C512%20L1200%2C576%20L1200%2C800%20L0%2C800%20Z%22%20fill%3D%22rgba(0%2C0%2C0%2C0.20)%22%2F%3E%3C%2Fsvg%3E";

interface BrandMarkProps {
  size?: number;
  showLabel?: boolean;
  label?: string;
  tone?: "light" | "dark";
  /** 是否在 Logo 后垫一层浅色底，用于深色/绿色背景上保证可见 */
  tile?: boolean;
}

export default function BrandMark({
  size = 32,
  showLabel = false,
  label = "公益共创平台",
  tone = "light",
  tile = false,
}: BrandMarkProps) {
  const dark = tone === "dark";
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex flex-shrink-0 items-center justify-center overflow-hidden ${
          tile
            ? `rounded-lg ${dark ? "bg-background-100" : "bg-background-50/90"}`
            : ""
        }`}
        style={{ width: size, height: size }}
      >
        <img
          src={LOGO_URL}
          alt="创艺+ 设计人才驱动乡村文化振兴公益共创平台标识"
          title="创艺+ 乡村公益共创平台"
          className="h-full w-full object-contain"
        />
      </span>
      {showLabel && (
        <span
          className={`whitespace-nowrap tracking-wide ${
            dark
              ? "text-[16px] font-bold text-foreground-950"
              : "text-[12px] font-medium text-background-50/80"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}