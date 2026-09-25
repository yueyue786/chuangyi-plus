import { useEffect, useState } from "react";
import type { FormEvent } from "react";

const FORM_URL = "https://readdy.ai/api/form/dap8v2vd3mjnincc3vu0";

interface ApplyFormModalProps {
  open: boolean;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  onSuccess: () => void;
}

interface FieldConfig {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

const fields: FieldConfig[] = [
  { name: "name", label: "姓名", placeholder: "请输入你的真实姓名", required: true },
  { name: "school", label: "学校", placeholder: "如：安徽农业大学", required: true },
  { name: "major", label: "专业", placeholder: "如：视觉传达设计", required: true },
  {
    name: "portfolio",
    label: "作品集链接",
    placeholder: "https:// 你的在线作品集或网盘链接",
  },
];

export default function ApplyFormModal({
  open,
  title = "申请参与共创",
  subtitle = "填写以下信息，项目负责人将在 2 个工作日内与你联系。",
  onClose,
  onSuccess,
}: ApplyFormModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitting(false);
      setError("");
      setDone(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get("website_alt") ?? "").trim();
    if (honeypot) {
      setDone(true);
      onSuccess();
      return;
    }
    formData.delete("website_alt");

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      payload.append(key, String(value));
    });

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      const responseText = await response.text();
      let parsed:
        | { code?: string; message?: string; meta?: { message?: string; detail?: string } }
        | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = String(
        parsed?.meta?.message ??
          parsed?.message ??
          parsed?.meta?.detail ??
          responseText ??
          "",
      );
      const isSpam = serverMsg.includes("spam");
      const ok = response.ok && parsed?.code === "OK" && !isSpam;

      if (!ok) {
        setError(serverMsg || "提交失败，请稍后重试");
        return;
      }

      setDone(true);
      onSuccess();
    } catch {
      setError("网络异常，提交失败，请稍后重试");
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
            <h3 className="text-[17px] font-bold text-foreground-950">申请已提交</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-foreground-500">
              你已成功报名该共创需求，请留意站内通知与导师反馈。
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
                <h3 className="text-[17px] font-bold text-foreground-950">{title}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-foreground-500">
                  {subtitle}
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
              data-readdy-form
              className="no-scrollbar flex flex-col gap-3.5 overflow-y-auto px-5 py-4"
            >
              {fields.map((field) => (
                <label key={field.name} className="flex flex-col gap-1.5">
                  <span className="text-[12.5px] font-medium text-foreground-700">
                    {field.label}
                    {field.required && <span className="ml-0.5 text-accent-600">*</span>}
                  </span>
                  <input
                    name={field.name}
                    type={field.type ?? "text"}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[13.5px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                  />
                </label>
              ))}

              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">
                  申请说明
                  <span className="ml-0.5 text-accent-600">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  maxLength={500}
                  rows={4}
                  placeholder="简单介绍你的相关经验与参与初衷（500 字以内）"
                  className="w-full resize-none rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[13.5px] leading-relaxed text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50"
                />
              </label>

              <input
                className="field-verify-trap"
                type="text"
                name="website_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
              />

              {error && (
                <p className="rounded-xl bg-accent-100 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-accent-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3 text-[14.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "提交中…" : "提交申请"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}