import { demandDistribution, demandTrend, distributionTotal } from "@/mocks/workbench";

const W = 560;
const H = 200;
const PAD_TOP = 28;
const PAD_BOTTOM = 34;
const PAD_RIGHT = 12;

export default function OverviewCharts() {
  const total = demandDistribution.reduce((sum, seg) => sum + seg.value, 0);

  let acc = 0;
  const stops = demandDistribution
    .map((seg) => {
      const start = (acc / total) * 100;
      acc += seg.value;
      const end = (acc / total) * 100;
      return `${seg.color} ${start}% ${end}%`;
    })
    .join(", ");

  const n = demandTrend.length;
  const maxVal = Math.max(...demandTrend.map((d) => Math.max(d.value, d.landed))) * 1.18;
  const stepX = (W - PAD_RIGHT) / (n - 1);
  const yFor = (v: number) => H - PAD_BOTTOM - (v / maxVal) * (H - PAD_TOP - PAD_BOTTOM);

  const points = demandTrend.map((d, i) => ({
    x: i * stepX,
    y: yFor(d.value),
    yLanded: yFor(d.landed),
    month: d.month,
    value: d.value,
  }));

  const linePoints = points.map((p) => `${p.x},${p.y}`).join(" ");
  const landedPoints = points.map((p) => `${p.x},${p.yLanded}`).join(" ");
  const areaPoints = `${points[0].x},${H - PAD_BOTTOM} ${linePoints} ${
    points[points.length - 1].x
  },${H - PAD_BOTTOM}`;
  const last = points[points.length - 1];

  return (
    <section className="rounded-card border border-background-200 bg-background-50 p-5">
      <h2 className="font-heading text-[16px] font-black text-foreground-950">平台数据概览</h2>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* 环形饼图 */}
        <div>
          <p className="text-[12.5px] font-semibold text-foreground-600">需求类型分布</p>
          <div className="mt-4 flex items-center gap-4">
            <div
              className="relative flex h-[128px] w-[128px] flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: `conic-gradient(from -90deg, ${stops})` }}
            >
              <div className="flex h-[86px] w-[86px] flex-col items-center justify-center rounded-full bg-background-50">
                <span className="font-heading text-[22px] font-black leading-none text-foreground-950">
                  {distributionTotal}
                  <span className="ml-0.5 text-[12px] font-bold text-foreground-500">个</span>
                </span>
                <span className="mt-1 text-[10.5px] text-foreground-500">合计需求</span>
              </div>
            </div>
            <ul className="flex min-w-0 flex-1 flex-col gap-2">
              {demandDistribution.map((seg) => (
                <li key={seg.label} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                    style={{ background: seg.color }}
                  />
                  <span className="min-w-0 flex-1 truncate text-[11.5px] text-foreground-700">
                    {seg.label}
                  </span>
                  <span className="flex-shrink-0 font-heading text-[11.5px] font-bold text-foreground-900">
                    {seg.value}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 折线图 */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[12.5px] font-semibold text-foreground-600">需求趋势</p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                需求数
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-foreground-500">
                <span className="h-0.5 w-4 rounded-full bg-accent-500" />
                已落地
              </span>
              <div className="relative">
                <select
                  defaultValue="month"
                  aria-label="选择统计时间范围"
                  className="cursor-pointer appearance-none rounded-lg border border-background-200 bg-background-50 py-1.5 pl-3 pr-7 text-[12px] font-medium text-foreground-700 outline-none transition-colors hover:border-primary-300 focus:border-primary-400"
                >
                  <option value="week">本周</option>
                  <option value="month">本月</option>
                  <option value="quarter">本季度</option>
                </select>
                <i className="ri-arrow-down-s-line pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[16px] leading-none text-foreground-400"></i>
              </div>
            </div>
          </div>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mt-3 w-full"
            role="img"
            aria-label="乡村设计需求与落地趋势折线图"
          >
            {[0, 1, 2, 3].map((row) => {
              const y = PAD_TOP + (row * (H - PAD_TOP - PAD_BOTTOM)) / 3;
              return (
                <line
                  key={row}
                  x1={0}
                  y1={y}
                  x2={W - PAD_RIGHT}
                  y2={y}
                  className="stroke-foreground-950"
                  strokeOpacity={0.06}
                  strokeWidth={1}
                />
              );
            })}

            <polygon points={areaPoints} className="fill-primary-500" fillOpacity={0.1} />

            <polyline
              points={landedPoints}
              fill="none"
              className="stroke-accent-500"
              strokeWidth={2.5}
              strokeDasharray="7 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points={linePoints}
              fill="none"
              className="stroke-primary-500"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {points.map((p) => (
              <g key={p.month}>
                <circle cx={p.x} cy={p.y} r={4} className="fill-primary-500" />
                <circle cx={p.x} cy={p.y} r={1.8} className="fill-background-50" />
                <text
                  x={p.x}
                  y={H - 10}
                  textAnchor="middle"
                  fontSize={11}
                  className="fill-foreground-500"
                >
                  {p.month}
                </text>
              </g>
            ))}

            <circle cx={last.x} cy={last.y} r={9} className="fill-primary-500" fillOpacity={0.16} />
            <circle cx={last.x} cy={last.y} r={6} className="fill-primary-500" />
            <text
              x={last.x - 6}
              y={last.y - 14}
              textAnchor="middle"
              fontSize={12}
              fontWeight={700}
              className="fill-primary-700"
            >
              {last.value}
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}