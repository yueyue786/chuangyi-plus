import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { apiApply, ApiError } from "@/lib/api";

interface RealApplyModalProps {
  open: boolean;
  demandId: number;
  demandTitle?: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function RealApplyModal({
  open,
  demandId,
  demandTitle,
  onClose,
  onSuccess,
}: RealApplyModalProps) {
  const [message, setMessage] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setMessage("");
      setPortfolioUrl("");
      setSubmitting(false);
      setError("");
      setDone(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length < 10) {
      setError("申请说明至少需要 10 个字");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await apiApply({
        demandId,
        message: message.trim(),
        portfolioUrl: portfolioUrl.trim() || undefined,
      });
      setDone(true);
      onSuccess();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("提交失败，请稍后重试");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="关闭"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-foreground-950/45 animate-fade-in"
      />
      <div className="relative flex max-h-[88vh] w-full max-w-[480px] animate-pop-in flex-col overflow-hidden rounded-t-3xl bg-background-50 sm:max-w-[420px] sm:rounded-3xl">
        {done ? (
          <div className="flex flex-col items-center px-6 py-9 text-center">
            <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <i className="ri-checkbox-circle-fill text-[34px] leading-none"></i>
            </span>
            <h3 className="text-[17px] font-bold text-foreground-950">报名已提交</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-foreground-500">
              乡村负责人将在工作台审核你的报名
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3 text-[14px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
            >
              好的
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-3 border-b border-background-200 px-5 pb-3.5 pt-5">
              <div>
                <h3 className="text-[17px] font-bold text-foreground-950">
                  {demandTitle ? `报名「${demandTitle}」` : "报名参与"}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-foreground-500">
                  填写以下信息，乡村负责人将在工作台审核你的报名。
                </p>
              </div>
              <button
                type="button"
                aria-label="关闭"
                onClick={onClose}
                className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-background-100 text-foreground-500 transition-colors hover:bg-background-200"
              >
                <i className="ri-close-line text-[18px] leading-none"></i>
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="no-scrollbar flex flex-col gap-3.5 overflow-y-auto px-5 py-4"
            >
              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">
                  申请说明
                  <span className="ml-0.5 text-accent-600">*</span>
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={500}
                  rows={4}
                  placeholder="简单介绍你的相关经验与参与初衷（至少 10 个字，500 字以内）"
                  className="w-full resize-none rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[13.5px] leading-relaxed text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                />
                <span className="text-right text-[11px] text-foreground-400">
                  {message.length}/500
                </span>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">
                  作品集链接（选填）
                </span>
                <input
                  type="url"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  placeholder="https:// 你的在线作品集或网盘链接"
                  className="w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[13.5px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                />
              </label>

              {error && (
                <p className="rounded-xl bg-accent-100 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-accent-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3 text-[14px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "提交中…" : "提交报名"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
