import { useState } from "react";
import type { CaseShowcaseImage } from "@/mocks/caseDetail";
import CaseLightbox from "@/pages/case/components/CaseLightbox";

interface CaseStaggerGalleryProps {
  images: CaseShowcaseImage[];
}

interface ColumnEntry {
  item: CaseShowcaseImage;
  index: number;
}

export default function CaseStaggerGallery({ images }: CaseStaggerGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  const columns: ColumnEntry[][] = [[], []];
  images.forEach((item, index) => {
    columns[index % 2].push({ item, index });
  });

  return (
    <div className="mx-auto w-full max-w-[820px]">
      <div className="grid grid-cols-2 gap-4">
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col gap-4 ${columnIndex === 1 ? "pt-8 md:pt-12" : ""}`}
          >
            {column.map(({ item, index }, position) => (
              <button
                key={`${item.label}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                className={`group relative w-full cursor-pointer overflow-hidden rounded-card border border-background-200 bg-background-50 transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-float ${
                  position % 2 === 0 ? "h-[240px] md:h-[330px]" : "h-[160px] md:h-[210px]"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  title={`瑶礼民宿伴手礼 ${item.label}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground-950/60 to-transparent px-3 pb-2.5 pt-8 text-left text-[11.5px] font-medium text-background-50">
                  {item.label}
                </span>
                <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground-950/45 text-background-50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                  <i className="ri-zoom-in-line text-[15px] leading-none"></i>
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

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