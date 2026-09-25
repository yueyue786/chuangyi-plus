import type { CaseShowcaseImage } from "@/mocks/caseDetail";

interface CaseLightboxProps {
  images: CaseShowcaseImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function CaseLightbox({
  images,
  index,
  onClose,
  onChange,
}: CaseLightboxProps) {
  const current = images[index];
  if (!current) return null;

  const total = images.length;
  const step = (dir: number) => onChange((index + dir + total) % total);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground-950/85 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[640px] animate-pop-in"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.label}
          title={current.label}
          className="max-h-[72vh] w-full rounded-card bg-background-50 object-contain"
        />
        <p className="mt-3 text-center text-[13px] font-medium text-background-50">
          {current.label}
        </p>

        <button
          type="button"
          aria-label="关闭"
          onClick={onClose}
          className="absolute -right-2 -top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background-50 text-foreground-900 shadow-card md:-right-3"
        >
          <i className="ri-close-line text-[20px] leading-none"></i>
        </button>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="上一张"
              onClick={() => step(-1)}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background-50/85 text-foreground-900 backdrop-blur-sm transition-colors hover:bg-background-50"
            >
              <i className="ri-arrow-left-s-line text-[20px] leading-none"></i>
            </button>
            <button
              type="button"
              aria-label="下一张"
              onClick={() => step(1)}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background-50/85 text-foreground-900 backdrop-blur-sm transition-colors hover:bg-background-50"
            >
              <i className="ri-arrow-right-s-line text-[20px] leading-none"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
}