import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { demandCategories, demandList, demandStatuses } from "@/mocks/demands";

const HERO_IMG =
  "/images/cy-gov-hero-river-02.jpg";

const hotKeywords = ["乡村墙绘", "品牌包装", "民宿改造", "非遗文创"];

const ALL = "全部";
const ALL_REGION = "全部地区";

export default function HomeHero() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [category, setCategory] = useState(ALL);
  const [status, setStatus] = useState(ALL);
  const [region, setRegion] = useState(ALL_REGION);

  const regionOptions = useMemo(() => {
    const provinces = Array.from(new Set(demandList.map((item) => item.location.split("·")[0])));
    return [ALL_REGION, ...provinces];
  }, []);

  const runSearch = () => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (category !== ALL) params.set("category", category);
    if (status !== ALL) params.set("status", status);
    if (region !== ALL_REGION) params.set("region", region);
    const qs = params.toString();
    navigate(qs ? `/demands?${qs}` : "/demands");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    runSearch();
  };

  const handleHot = (word: string) => {
    setKeyword(word);
    const params = new URLSearchParams();
    params.set("q", word);
    navigate(`/demands?${params.toString()}`);
  };

  const pickPill =
    "cursor-pointer whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-200";
  const pickActive = "bg-primary-500 text-background-50";
  const pickIdle = "bg-background-100 text-foreground-600 hover:bg-background-200";

  return (
    <section className="relative h-[68vh] min-h-[540px] w-full overflow-hidden">
      <img
        src={HERO_IMG}
        alt="日出时分乡村河流与古村落全景风光"
        title="创艺+ 设计人才驱动乡村文化振兴"
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* 淡淡暗色遮罩，保证白字清晰 */}
      <div className="absolute inset-0 bg-foreground-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/75 via-primary-950/20 to-primary-950/35" />

      <div className="relative mx-auto flex h-full w-full max-w-[1200px] flex-col justify-center px-6">
        <h1 className="hero-art-title animate-hero-fade-up max-w-[900px] text-[36px] leading-[1.28] text-background-50 sm:text-[48px] lg:text-[58px]">
          设计人才驱动乡村文化振兴
        </h1>
        <p className="animate-hero-fade-up mt-4 max-w-[760px] text-[11.5px] tracking-[0.16em] text-background-50/85 [animation-delay:0.18s] sm:text-[13px] lg:tracking-[0.26em]">
          CREATIVE DESIGN FOR A BETTER COUNTRYSIDE
        </p>

        <form
          onSubmit={handleSubmit}
          className="animate-hero-fade-up mt-7 w-full max-w-[440px] [animation-delay:0.28s]"
        >
          <div className="flex items-center gap-2 rounded-full border border-background-50/30 bg-background-50/95 p-1 pl-3.5 backdrop-blur-md">
            <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center text-foreground-400">
              <i className="ri-search-line text-[15px] leading-none"></i>
            </span>
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              type="text"
              aria-label="搜索需求或案例"
              placeholder="搜索乡村需求 / 设计案例"
              className="min-w-0 flex-1 bg-transparent text-[13px] text-foreground-900 outline-none placeholder:text-foreground-400"
            />
            <button
              type="button"
              onClick={() => setAdvancedOpen((prev) => !prev)}
              aria-expanded={advancedOpen}
              className="flex flex-shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-semibold text-primary-700 transition-colors duration-200 hover:bg-primary-100"
            >
              <i className="ri-equalizer-line text-[14px] leading-none"></i>
              筛选
            </button>
            <button
              type="submit"
              className="flex flex-shrink-0 cursor-pointer items-center whitespace-nowrap rounded-full bg-accent-500 px-3.5 py-1.5 text-[12.5px] font-semibold text-background-50 transition-colors duration-200 hover:bg-accent-600"
            >
              搜索
            </button>
          </div>

          {advancedOpen && (
            <div className="mt-3 rounded-2xl border border-background-200 bg-background-50/95 p-4 backdrop-blur-md">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="w-14 flex-shrink-0 pt-1 text-[12.5px] font-semibold text-foreground-500">
                    类型
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {demandCategories.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
                        className={`${pickPill} ${category === item ? pickActive : pickIdle}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-14 flex-shrink-0 pt-1 text-[12.5px] font-semibold text-foreground-500">
                    状态
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {demandStatuses.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setStatus(item)}
                        className={`${pickPill} ${status === item ? pickActive : pickIdle}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-14 flex-shrink-0 pt-1 text-[12.5px] font-semibold text-foreground-500">
                    地区
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {regionOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setRegion(item)}
                        className={`${pickPill} ${region === item ? pickActive : pickIdle}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-background-200 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setCategory(ALL);
                    setStatus(ALL);
                    setRegion(ALL_REGION);
                  }}
                  className="cursor-pointer whitespace-nowrap text-[12.5px] font-medium text-foreground-500 transition-colors duration-200 hover:text-foreground-800"
                >
                  重置
                </button>
                <button
                  type="button"
                  onClick={runSearch}
                  className="flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full bg-primary-500 px-5 py-2 text-[13px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
                >
                  <i className="ri-equalizer-2-line text-[14px] leading-none"></i>
                  应用筛选
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="animate-hero-fade-up mt-4 flex flex-wrap items-center gap-2 [animation-delay:0.38s]">
          <span className="text-[12.5px] text-background-50/75">热门：</span>
          {hotKeywords.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleHot(item)}
              className="cursor-pointer whitespace-nowrap rounded-full border border-background-50/35 bg-background-50/10 px-3 py-1 text-[12.5px] font-medium text-background-50 transition-colors duration-200 hover:border-background-50/70 hover:bg-background-50/20"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}