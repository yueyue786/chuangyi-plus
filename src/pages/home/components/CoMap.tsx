import { mapCities } from "@/mocks/workbench";

const ANHUI_PATH =
  "M146 46 L179 67 L197 88 L226 109 L250 130 L253 151 L244 169 L259 183 L289 183 L312 190 L289 204 L265 218 L247 228 L262 242 L280 260 L286 277 L303 302 L327 309 L309 333 L289 347 L271 365 L277 382 L262 414 L235 403 L208 393 L182 375 L155 368 L128 365 L134 340 L146 312 L122 274 L113 249 L108 225 L99 204 L81 183 L60 162 L78 141 L96 123 L110 102 L108 88 L125 74 Z";

const legend = [
  { id: "culture", label: "文化振兴", color: "oklch(var(--accent-500))" },
  { id: "industry", label: "产业振兴", color: "oklch(var(--primary-500))" },
  { id: "eco", label: "生态振兴", color: "oklch(var(--secondary-600))" },
];

export default function CoMap() {
  return (
    <section
      id="co-map"
      className="flex h-full flex-col rounded-card border border-background-200 bg-background-50 p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-heading text-[16px] font-black text-foreground-950">乡村共创地图</h2>
        <button
          type="button"
          className="group flex cursor-pointer items-center gap-1 whitespace-nowrap text-[12.5px] font-medium text-primary-700 transition-colors hover:text-accent-600"
        >
          查看全部
          <i className="ri-arrow-right-line text-[14px] leading-none transition-transform group-hover:translate-x-0.5"></i>
        </button>
      </div>

      <div className="relative mt-4 flex-1 rounded-2xl bg-secondary-50 p-4">
        <div className="relative mx-auto aspect-[400/460] w-full max-w-[240px]">
          <svg viewBox="0 0 400 460" className="absolute inset-0 h-full w-full">
            <path
              d={ANHUI_PATH}
              className="fill-secondary-100 stroke-secondary-300"
              strokeWidth={2}
              strokeLinejoin="round"
            />
          </svg>

          {mapCities.map((city) => (
            <div
              key={city.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(city.x / 400) * 100}%`, top: `${(city.y / 460) * 100}%` }}
            >
              <span
                className="block h-3 w-3 rounded-full ring-4 ring-background-50/80"
                style={{ background: city.color }}
              />
              <span className="absolute left-3.5 top-1/2 flex -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-background-200/70 bg-background-50/70 px-2 py-0.5 text-[10.5px] font-semibold backdrop-blur-sm">
                <span className="text-foreground-700">{city.name}</span>
                <span className="text-primary-700">{city.count}个</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        {legend.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            <span
              className="h-3 w-3 flex-shrink-0 rounded-full"
              style={{ background: item.color }}
            />
            <span className="text-[12.5px] text-foreground-700">{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-primary-50 px-4 py-3.5">
        <p className="text-[12px] leading-relaxed text-foreground-600">
          已标示的重点共创项目点位
        </p>
        <p className="font-heading text-[20px] font-black leading-none text-primary-700">
          {mapCities.reduce((sum, city) => sum + city.count, 0)} 个
        </p>
      </div>
    </section>
  );
}