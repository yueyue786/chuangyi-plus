interface HorseWallMarkProps {
  className?: string;
}

export default function HorseWallMark({ className = "" }: HorseWallMarkProps) {
  return (
    <div
      className={`pointer-events-none flex select-none flex-col justify-end gap-[3px] ${className}`}
      aria-hidden="true"
    >
      <div className="ml-auto h-[20%] w-[30%] rounded-t-[4px] bg-current" />
      <div className="ml-auto h-[22%] w-[50%] rounded-t-[4px] bg-current" />
      <div className="ml-auto h-[24%] w-[72%] rounded-t-[4px] bg-current" />
      <div className="h-[26%] w-full rounded-t-[4px] bg-current" />
    </div>
  );
}