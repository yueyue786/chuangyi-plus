import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent as ReactTouchEvent,
} from "react";

interface CaseCoverflowProps {
  images: string[];
  title: string;
}

export default function CaseCoverflow({ images, title }: CaseCoverflowProps) {
  const total = images.length;
  const [active, setActive] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const wheelLock = useRef(0);

  const go = useCallback(
    (dir: number) => {
      setActive((prev) => Math.min(Math.max(prev + dir, 0), total - 1));
    },
    [total],
  );

  // 鼠标滚轮左右切换（非被动监听，才能阻止页面同时滚动）
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 6) return;
      e.preventDefault();
      const now = Date.now();
      if (now - wheelLock.current < 280) return;
      wheelLock.current = now;
      go(delta > 0 ? 1 : -1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [go]);

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    // 以滑动距离为阈值，滑动结束后始终吸附到整张图，不会停在两张之间
    if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1);
    }
    touchStart.current = null;
  };

  // 3D Cover Flow：中间大、两边缩小后退，偏移量恒为整数，天然吸附居中
  const slideStyle = (index: number): CSSProperties => {
    const d = index - active;
    if (d === 0) {
      return { transform: "translateX(-50%) scale(1)", opacity: 1, zIndex: 20 };
    }
    if (d === -1) {
      return { transform: "translateX(calc(-50% - 62%)) scale(0.8)", opacity: 0.6, zIndex: 10 };
    }
    if (d === 1) {
      return { transform: "translateX(calc(-50% + 62%)) scale(0.8)", opacity: 0.6, zIndex: 10 };
    }
    return {
      transform: `translateX(calc(-50% ${d < 0 ? "- 120%" : "+ 120%"})) scale(0.6)`,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full cursor-pointer touch-pan-y overflow-hidden bg-background-50"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, index) => {
        const isActive = index === active;
        return (
          <div
            key={src}
            className="absolute left-1/2 top-0 flex h-full w-[70%] items-center justify-center [transition:transform_0.3s_ease,opacity_0.3s_ease] [will-change:transform]"
            style={slideStyle(index)}
          >
            <div
              role={isActive ? undefined : "button"}
              tabIndex={isActive ? -1 : 0}
              aria-label={isActive ? undefined : `查看第 ${index + 1} 张图片`}
              onClick={(e) => {
                if (isActive) return;
                e.preventDefault();
                e.stopPropagation();
                setActive(index);
              }}
              className="h-full w-full select-none"
            >
              <img
                src={src}
                alt={`${title} 图 ${index + 1}`}
                title={`${title} 设计成果图`}
                draggable={false}
                className={`h-full w-full object-contain transition-transform duration-300 ease-out ${
                  isActive ? "hover:scale-105" : ""
                }`}
              />
            </div>
          </div>
        );
      })}

      {/* 左右切换箭头：仅电脑端显示 */}
      <button
        type="button"
        aria-label="上一张"
        disabled={active === 0}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          go(-1);
        }}
        className="absolute left-2.5 top-1/2 z-30 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-background-200 bg-background-50/95 text-foreground-700 shadow-card backdrop-blur-sm transition-opacity duration-200 hover:bg-background-50 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
      >
        <i className="ri-arrow-left-s-line text-[18px] leading-none"></i>
      </button>
      <button
        type="button"
        aria-label="下一张"
        disabled={active === total - 1}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          go(1);
        }}
        className="absolute right-2.5 top-1/2 z-30 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-background-200 bg-background-50/95 text-foreground-700 shadow-card backdrop-blur-sm transition-opacity duration-200 hover:bg-background-50 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
      >
        <i className="ri-arrow-right-s-line text-[18px] leading-none"></i>
      </button>

      {/* 当前张数指示 */}
      <span className="pointer-events-none absolute bottom-2.5 right-2.5 z-30 rounded-full bg-foreground-950/45 px-2 py-0.5 text-[10px] font-medium text-background-50 backdrop-blur-sm">
        {active + 1}/{total}
      </span>
    </div>
  );
}