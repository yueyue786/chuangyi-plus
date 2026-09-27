import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import PageBanner from "@/components/feature/PageBanner";
import FilterPills from "@/components/base/FilterPills";
import ApplyFormModal from "@/components/base/ApplyFormModal";
import DemandCard from "@/pages/demands/components/DemandCard";
import { demandCategories, demandList, demandStatuses } from "@/mocks/demands";
import { apiListDemands, type Demand } from "@/lib/api";

function RealDemandCard({ item }: { item: Demand }) {
  return (
    <Link
      to={`/demand/real-${item.id}`}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-card border border-background-200 bg-background-50 p-4 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-float"
    >
      <span className="absolute right-2.5 top-2.5 rounded-full bg-accent-500 px-2.5 py-1 text-[10.5px] font-semibold text-background-50">
        最新
      </span>

      <div className="flex flex-wrap items-center gap-2 pr-12">
        <span className="rounded-full bg-secondary-100 px-2.5 py-1 text-[11px] font-semibold text-primary-700">
          {item.category}
        </span>
        {item.cycle && (
          <span className="flex items-center gap-1 text-[10.5px] text-foreground-500">
            <i className="ri-time-line text-[12px] leading-none"></i>
            {item.cycle}
          </span>
        )}
      </div>

      <h3 className="mt-2.5 line-clamp-2 text-[14.5px] font-bold leading-snug text-foreground-950">
        {item.title}
      </h3>
      <p className="mt-1.5 flex items-center gap-1 text-[11.5px] text-foreground-500">
        <i className="ri-map-pin-2-line text-[13px] leading-none"></i>
        {item.location}
      </p>
      <p className="mt-2 line-clamp-2 text-[12px] leading-relaxed text-foreground-500">
        {item.description}
      </p>

      <div className="mt-3 flex flex-col gap-1.5 border-t border-background-200 pt-3 text-[11.5px] text-foreground-500">
        {item.village_name && (
          <span className="flex items-center gap-1">
            <i className="ri-home-smile-2-line text-[13px] leading-none"></i>
            {item.village_name}
          </span>
        )}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {item.budget && (
            <span className="flex items-center gap-1">
              <i className="ri-money-cny-circle-line text-[13px] leading-none"></i>
              {item.budget}
            </span>
          )}
          {item.majors && (
            <span className="flex items-center gap-1">
              <i className="ri-graduation-cap-line text-[13px] leading-none"></i>
              {item.majors}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Demands() {
  const [searchParams] = useSearchParams();
  const queryKeyword = searchParams.get("q") ?? "";
  const queryCategory = searchParams.get("category") ?? "全部";
  const queryStatus = searchParams.get("status") ?? "全部";
  const queryRegion = searchParams.get("region") ?? "";
  const [keyword, setKeyword] = useState(queryKeyword);
  const [category, setCategory] = useState(queryCategory);
  const [status, setStatus] = useState(queryStatus);
  const [region, setRegion] = useState(queryRegion);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");
  const [realDemands, setRealDemands] = useState<Demand[]>([]);

  useEffect(() => {
    setKeyword(queryKeyword);
    setCategory(queryCategory);
    setStatus(queryStatus);
    setRegion(queryRegion);
  }, [queryKeyword, queryCategory, queryStatus, queryRegion]);

  useEffect(() => {
    let cancelled = false;
    apiListDemands()
      .then(({ demands }) => {
        if (!cancelled) setRealDemands(demands);
      })
      .catch(() => {
        /* 后端未启动时静默降级，仅展示 mock 数据 */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return demandList.filter((item) => {
      const matchCategory = category === "全部" || item.category === category;
      const matchStatus = status === "全部" || item.status === status;
      const matchRegion = !region || item.location.includes(region);
      const matchKeyword =
        !kw ||
        item.title.toLowerCase().includes(kw) ||
        item.village.toLowerCase().includes(kw) ||
        item.location.toLowerCase().includes(kw) ||
        item.category.toLowerCase().includes(kw);
      return matchCategory && matchStatus && matchRegion && matchKeyword;
    });
  }, [keyword, category, status, region]);

  const filteredReal = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return realDemands.filter((item) => {
      const matchCategory = category === "全部" || item.category === category;
      const matchKeyword =
        !kw ||
        item.title.toLowerCase().includes(kw) ||
        item.location.toLowerCase().includes(kw) ||
        item.description.toLowerCase().includes(kw);
      return matchCategory && matchKeyword;
    });
  }, [realDemands, keyword, category]);

  const totalCount = filtered.length + filteredReal.length;

  const handleParticipate = (title: string) => {
    setActiveTitle(title);
    setModalOpen(true);
  };

  return (
    <AppShell>
      <main>
        <PageBanner
          badge="DEMAND HALL"
          title="让乡村需求，被看见"
          subtitle="这里汇聚来自乡村的真实设计需求，等待有创意、有热情的设计力量一起来回应。"
          primaryCta={{ to: "/cases", label: "看看落地案例" }}
          image="/images/cy-banner-demands-13.jpg"
          imageAlt="日出时分乡村河流与田野风光"
        />

        <div className="px-4 pt-3 md:px-8 lg:px-10">
          <div className="flex items-center gap-2 rounded-full border border-background-200 bg-background-100 px-3.5 py-2.5">
            <i className="ri-search-line text-[17px] leading-none text-foreground-400"></i>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              placeholder="搜索村庄、需求或需求方"
              className="w-full bg-transparent text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none"
            />
            {keyword && (
              <button
                type="button"
                aria-label="清空搜索"
                onClick={() => setKeyword("")}
                className="flex cursor-pointer items-center justify-center text-foreground-400"
              >
                <i className="ri-close-circle-fill text-[16px] leading-none"></i>
              </button>
            )}
          </div>
        </div>

        <div className="pt-3">
          <FilterPills options={demandCategories} value={category} onChange={setCategory} />
        </div>

        <div className="flex items-center gap-3 pt-2.5">
          <div className="min-w-0 flex-1">
            <FilterPills options={demandStatuses} value={status} onChange={setStatus} variant="soft" />
          </div>
          <span className="flex-shrink-0 whitespace-nowrap pr-4 text-[11.5px] text-foreground-500 md:pr-8 lg:pr-10">
            共 <strong className="font-heading font-bold text-primary-600">{totalCount}</strong> 个需求
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 px-4 pb-16 sm:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-10">
          {totalCount > 0 ? (
            <>
              {filtered.map((item) => (
                <DemandCard key={item.id} item={item} onParticipate={handleParticipate} />
              ))}
              {filteredReal.map((item) => (
                <RealDemandCard key={`real-${item.id}`} item={item} />
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-background-300 bg-background-50 py-14 text-center sm:col-span-full">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background-200 text-foreground-400">
                <i className="ri-search-eye-line text-[26px] leading-none"></i>
              </span>
              <p className="mt-3 text-[13px] font-medium text-foreground-600">
                没有找到匹配的需求
              </p>
              <p className="mt-1 text-[11.5px] text-foreground-400">
                换个关键词或切换筛选条件试试
              </p>
            </div>
          )}
        </div>
      </main>

      <ApplyFormModal
        open={modalOpen}
        title={`申请参与「${activeTitle}」`}
        onClose={() => setModalOpen(false)}
        onSuccess={() => undefined}
      />
    </AppShell>
  );
}
