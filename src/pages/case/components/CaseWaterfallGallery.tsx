import { useState } from "react";
import type { CaseShowcaseImage } from "@/mocks/caseDetail";
import CaseLightbox from "@/pages/case/components/CaseLightbox";

interface CaseWaterfallGalleryProps {
  images: CaseShowcaseImage[];
}

export default function CaseWaterfallGallery({ images }: CaseWaterfallGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-[820px]">
      <div className="grid grid-cols-2 gap-4">
        {images.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`group cursor-pointer text-left ${item.wide ? "col-span-2" : "col-span-1"}`}
          >
            <div
              className={`relative w-full overflow-hidden rounded-card border border-background-200 bg-background-50 ${
                item.wide ? "aspect-[16/10]" : "aspect-square"
              }`}
            >
              <img
                src={item.src}
                alt={item.label}
                title={item.label}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground-950/40 text-background-50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                <i className="ri-zoom-in-line text-[15px] leading-none"></i>
              </span>
            </div>
            <span className="mt-2 block text-[11.5px] font-medium text-foreground-700">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-4 flex items-center justify-center gap-1 text-[11px] text-foreground-400">
        <i className="ri-cursor-line text-[13px] leading-none"></i>
        点击图片查看细节
      </p>

      {active !== null && (
        <CaseLightbox
          images={images}
          index={active}
          onClose={() => setActive(null)}
          onChange={(next) => setActive(next)}
        />
      )}
    </div>
  );
}