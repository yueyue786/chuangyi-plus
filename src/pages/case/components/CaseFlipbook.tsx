import { useState } from "react";
import type { CaseShowcaseImage } from "@/mocks/caseDetail";

interface CaseFlipbookProps {
  images: CaseShowcaseImage[];
}

export default function CaseFlipbook({ images }: CaseFlipbookProps) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const total = images.length;
  const current = images[index];

  const go = (dir: number) => {
    if (fading || total <= 1) return;
    setFading(true);
    window.setTimeout(() => {
      setIndex((prev) => (prev + dir + total) % total);
      setFading(false);
    }, 170);
  };

  return (
    <div className="mx-auto w-full max-w-[620px]">
      <div className="relative h-[380px] w-full overflow-hidden rounded-card border border-background-200 bg-background-100 md:h-[520px]">
        <img
          src={current.src}
          alt={current.label}
          title={`瑶礼民宿伴手礼 ${current.label}`}
          className={`h-full w-full object-contain transition-all duration-300 ease-out ${
            fading ? "scale-[0.985] opacity-0" : "scale-100 opacity-100"
          }`}
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="上一张"
          onClick={() => go(-1)}
          disabled={total <= 1}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-background-200 bg-background-50 text-foreground-800 transition-colors hover:bg-primary-500 hover:text-background-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <i className="ri-arrow-left-s-line text-[22px] leading-none"></i>
        </button>

        <span className="min-w-[96px] text-center text-[13px] font-medium tabular-nums text-foreground-700">
          第 {index + 1} / {total} 张
        </span>

        <button
          type="button"
          aria-label="下一张"
          onClick={() => go(1)}
          disabled={total <= 1}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-background-200 bg-background-50 text-foreground-800 transition-colors hover:bg-primary-500 hover:text-background-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <i className="ri-arrow-right-s-line text-[22px] leading-none"></i>
        </button>
      </div>

      {current.label && (
        <p className="mt-2.5 text-center text-[12px] text-foreground-500">{current.label}</p>
      )}
    </div>
  );
}