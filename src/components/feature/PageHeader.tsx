import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  right?: ReactNode;
}

export default function PageHeader({ title, right }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-center border-b border-background-200 bg-background-50/95 px-4 backdrop-blur-md md:top-[74px] md:h-20 md:justify-start md:px-8 lg:px-10">
      <h1 className="text-[18px] font-bold text-foreground-950 md:text-[24px] md:font-black">
        {title}
      </h1>
      {right && (
        <div className="absolute right-4 flex items-center md:right-8 lg:right-10">{right}</div>
      )}
    </header>
  );
}