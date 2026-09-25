const LOGO_URL =
  "https://static.readdy.ai/image/ea9e4631503ac9fecce036330ac83d8d/0026b54156a58222202f36458d23f1a0.png";

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