import { useEffect } from "react";

interface NoticeModalProps {
  open: boolean;
  title?: string;
  message: string;
  onClose: () => void;
}

export default function NoticeModal({
  open,
  title = "功能开发中，敬请期待",
  message,
  onClose,
}: NoticeModalProps) {
  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="关闭"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-foreground-950/45 animate-fade-in"
      />
      <div className="relative w-full max-w-[360px] animate-pop-in overflow-hidden rounded-card bg-background-50 px-6 py-7 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
          <i className="ri-tools-line text-[30px] leading-none"></i>
        </span>
        <h3 className="mt-4 text-[16.5px] font-bold text-foreground-950">{title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-foreground-500">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3 text-[14px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
        >
          知道了
        </button>
      </div>
    </div>
  );
}