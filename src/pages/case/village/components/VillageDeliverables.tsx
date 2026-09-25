import { useState } from "react";
import VillageSectionHead from "@/pages/case/village/components/VillageSectionHead";
import CaseLightbox from "@/pages/case/components/CaseLightbox";
import type { VillagePreviewImage } from "@/mocks/villageProject";

interface VillageDeliverablesProps {
  deliverables: string[];
  previewImages: VillagePreviewImage[];
}

export default function VillageDeliverables({
  deliverables,
  previewImages,
}: VillageDeliverablesProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="deliverables" className="mx-auto w-full max-w-[960px] scroll-mt-20 px-4 pt-8 md:px-10">
      <VillageSectionHead title="交付成果" />
      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {deliverables.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-card border border-background-200 bg-background-50 p-3.5"
          >
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-[12px] font-bold text-background-50">
              {index + 1}
            </span>
            <span className="text-[14px] font-medium text-foreground-900">{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <VillageSectionHead title="成果预览" subtitle="点击任意图片可放大预览" />
        <div className="mt-3 flex flex-wrap items-start gap-3.5">
          {previewImages.map((image, index) => (
            <button
              key={image.label}
              type="button"
              onClick={() => setActive(index)}
              className="group w-[calc(50%-7px)] cursor-pointer overflow-hidden rounded-card border border-background-200 bg-background-50 text-left transition-colors duration-200 hover:border-primary-300 sm:w-[calc(33.333%-10px)]"
            >
              <div className="relative w-full overflow-hidden bg-background-100">
                <img
                  src={image.src}
                  alt={image.label}
                  title={image.label}
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground-950/45 text-background-50 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                  <i className="ri-zoom-in-line text-[15px] leading-none"></i>
                </span>
              </div>
              <p className="px-3 py-2.5 text-[12.5px] font-medium text-foreground-700">
                {image.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <CaseLightbox
          images={previewImages}
          index={active}
          onClose={() => setActive(null)}
          onChange={setActive}
        />
      )}
    </section>
  );
}