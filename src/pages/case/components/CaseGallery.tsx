import { useState } from "react";
import type { CaseGalleryItem } from "@/mocks/caseDetail";

interface CaseGalleryProps {
  items: CaseGalleryItem[];
}

export default function CaseGallery({ items }: CaseGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : items[active];

  const close = () => setActive(null);
  const step = (dir: number) =>
    setActive((prev) => (prev === null ? prev : (prev + dir + items.length) % items.length));

  return (
    <section className="px-4 pt-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="h-4 w-1 rounded-full bg-accent-500" />
        <h2 className="text-[16px] font-bold text-foreground-950">设计成果画廊</h2>
      </div>
      <p className="mt-1.5 text-[12px] text-foreground-500">点击任意图片可放大预览</p>

      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            className="group cursor-pointer overflow-hidden rounded-card border border-background-200 bg-background-50 text-left"
          >
            <div className="relative h-[130px] w-full overflow-hidden bg-background-200 md:h-[150px]">
              <img
                src={item.cover}
                alt={item.title}
                title={`${item.title} 设计成果`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground-950/45 text-background-50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                <i className="ri-zoom-in-line text-[15px] leading-none"></i>
              </span>
            </div>
            <p className="px-2.5 py-2 text-[12px] font-medium text-foreground-800">
              {item.title}
            </p>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground-950/80 px-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-[560px]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={current.cover}
              alt={current.title}
              className="max-h-[70vh] w-full rounded-card object-contain"
            />
            <p className="mt-3 text-center text-[13px] font-medium text-background-50">
              {current.title}
            </p>

            <button
              type="button"
              aria-label="关闭"
              onClick={close}
              className="absolute -right-2 -top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background-50 text-foreground-900 shadow-card md:-right-3"
            >
              <i className="ri-close-line text-[20px] leading-none"></i>
            </button>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="上一张"
                  onClick={() => step(-1)}
                  className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background-50/85 text-foreground-900 backdrop-blur-sm"
                >
                  <i className="ri-arrow-left-s-line text-[20px] leading-none"></i>
                </button>
                <button
                  type="button"
                  aria-label="下一张"
                  onClick={() => step(1)}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background-50/85 text-foreground-900 backdrop-blur-sm"
                >
                  <i className="ri-arrow-right-s-line text-[20px] leading-none"></i>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}