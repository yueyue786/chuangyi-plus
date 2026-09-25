interface VillageBottomBarProps {
  followed: boolean;
  onToggleFollow: () => void;
  onApply: () => void;
  applyLabel?: string;
}

export default function VillageBottomBar({
  followed,
  onToggleFollow,
  onApply,
  applyLabel = "申请参与共创",
}: VillageBottomBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-background-200 bg-background-50/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[960px] items-center gap-3 px-4 py-3 md:px-10">
        <button
          type="button"
          aria-label={followed ? "取消关注项目" : "关注项目"}
          onClick={onToggleFollow}
          className={[
            "flex h-11 flex-shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-[13.5px] font-semibold transition-colors duration-200",
            followed
              ? "border-accent-300 bg-accent-100 text-accent-700"
              : "border-background-300 bg-background-50 text-foreground-600 hover:border-accent-300 hover:text-accent-600",
          ].join(" ")}
        >
          <i
            className={`${followed ? "ri-heart-3-fill" : "ri-heart-3-line"} text-[19px] leading-none`}
          ></i>
          {followed ? "已关注" : "关注"}
        </button>

        <button
          type="button"
          onClick={onApply}
          className="flex-1 cursor-pointer whitespace-nowrap rounded-full bg-primary-600 px-6 py-3 text-[15px] font-bold text-background-50 transition-colors duration-200 hover:bg-primary-700 active:scale-[0.99]"
        >
          {applyLabel}
        </button>
      </div>
    </div>
  );
}