import type { ReactNode } from "react";

interface FixedBottomBarProps {
  children: ReactNode;
}

export default function FixedBottomBar({ children }: FixedBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-background-200 bg-background-50/95 px-4 pt-3 backdrop-blur-md md:px-8">
      <div className="mx-auto w-full max-w-[1100px]">
        {children}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}