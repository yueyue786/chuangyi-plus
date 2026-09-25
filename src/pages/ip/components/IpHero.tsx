import { useNavigate } from "react-router-dom";

interface IpHeroProps {
  title: string;
  location: string;
  cover: string;
}

export default function IpHero({ title, location, cover }: IpHeroProps) {
  const navigate = useNavigate();

  return (
    <section>
      <div className="relative h-[260px] w-full overflow-hidden bg-background-200 md:h-[340px]">
        <img
          src={cover}
          alt={title}
          title={`${title} 非遗 IP 形象设计详情`}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/45 via-foreground-950/20 to-foreground-950/75" />

        <button
          type="button"
          aria-label="返回"
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur-md transition-colors hover:bg-background-50"
        >
          <i className="ri-arrow-left-s-line text-[22px] leading-none"></i>
        </button>

        <span className="absolute right-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-semibold text-background-50">
          非遗 IP
        </span>

        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-[20px] font-bold leading-snug text-background-50 md:text-[26px]">
            {title}
          </h1>
          <p className="mt-1.5 flex items-center gap-1 text-[12px] text-background-50/90">
            <i className="ri-map-pin-2-line text-[14px] leading-none"></i>
            {location}
          </p>
        </div>
      </div>
    </section>
  );
}