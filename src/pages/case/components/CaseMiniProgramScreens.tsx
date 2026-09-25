import { useState } from "react";
import type { CaseShowcaseImage } from "@/mocks/caseDetail";
import CaseLightbox from "@/pages/case/components/CaseLightbox";

interface CaseMiniProgramScreensProps {
  iconSheet: string;
  popupCards: CaseShowcaseImage[];
}

/** 3×3 网格分区：行 / 列各取 0、1、2，对应整图的左中右、上中下 */
const gridPositions: [number, number][] = [
  [0, 0],
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
];

export default function CaseMiniProgramScreens({
  iconSheet,
  popupCards,
}: CaseMiniProgramScreensProps) {
  const [iconOpen, setIconOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const sheetItem: CaseShowcaseImage = {
    src: iconSheet,
    label: "德和山庄 · 图标规范设计",
  };

  return (
    <section className="px-4 pt-8 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">小程序界面展示</h2>
      </div>
      <p className="mt-1.5 text-[12px] text-foreground-500">
        图标规范与交互弹窗，共同构成这套小程序的界面语言
      </p>

      {/* 图标规范：3×3 网格 */}
      <div className="mx-auto mt-5 w-full max-w-[820px]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 font-heading text-[12.5px] font-bold text-background-50">
            1
          </span>
          <h3 className="text-[15px] font-bold text-foreground-950 md:text-[16px]">图标规范</h3>
          <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-[10.5px] font-medium text-accent-700">
            3×3 网格
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5 rounded-card bg-background-100 p-3 md:gap-3.5 md:p-4">
          {gridPositions.map(([col, row]) => (
            <button
              key={`${col}-${row}`}
              type="button"
              aria-label="查看完整图标规范"
              onClick={() => setIconOpen(true)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-background-200 bg-background-50 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span
                className="block h-full w-full"
                style={{
                  backgroundImage: `url('${iconSheet}')`,
                  backgroundSize: "300% 300%",
                  backgroundPosition: `${col * 50}% ${row * 50}%`,
                }}
              />
              <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground-950/45 text-background-50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                <i className="ri-zoom-in-line text-[15px] leading-none"></i>
              </span>
            </button>
          ))}
        </div>

        <p className="mt-3 flex items-center justify-center gap-1 text-[11px] text-foreground-400">
          <i className="ri-cursor-line text-[13px] leading-none"></i>
          点击图片查看完整图标规范
        </p>
      </div>

      {/* 交互弹窗：悬浮层叠 */}
      {popupCards.length > 0 && (
        <div className="mx-auto mt-8 w-full max-w-[820px]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 font-heading text-[12.5px] font-bold text-background-50">
              2
            </span>
            <h3 className="text-[15px] font-bold text-foreground-950 md:text-[16px]">
              交互弹窗
            </h3>
            <span className="rounded-full bg-secondary-100 px-2.5 py-0.5 text-[10.5px] font-medium text-secondary-700">
              悬浮层叠
            </span>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-card bg-background-100 px-5 py-12 md:py-16">
            <div className="relative mx-auto w-full max-w-[460px]">
              {/* 层叠底层卡片 */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 -top-3 h-full rounded-card border border-background-300/60 bg-background-50/50"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-4 -top-1.5 h-full rounded-card border border-background-300/70 bg-background-50/75"
              />

              <button
                type="button"
                aria-label="查看弹窗卡片大图"
                onClick={() => setPopupIndex(0)}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-float transition-transform duration-300 ease-out hover:-translate-y-[5px]"
              >
                <img
                  src={popupCards[0].src}
                  alt={popupCards[0].label}
                  title={popupCards[0].label}
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-foreground-950/45 text-background-50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                  <i className="ri-zoom-in-line text-[16px] leading-none"></i>
                </span>
              </button>
            </div>

            <p className="mt-4 flex items-center justify-center gap-1 text-[11px] text-foreground-400">
              <i className="ri-cursor-line text-[13px] leading-none"></i>
              点击查看弹窗卡片细节
            </p>
          </div>
        </div>
      )}

      {iconOpen && (
        <CaseLightbox
          images={[sheetItem]}
          index={0}
          onClose={() => setIconOpen(false)}
          onChange={() => undefined}
        />
      )}

      {popupIndex !== null && (
        <CaseLightbox
          images={popupCards}
          index={popupIndex}
          onClose={() => setPopupIndex(null)}
          onChange={(next) => setPopupIndex(next)}
        />
      )}
    </section>
  );
}