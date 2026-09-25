import { useState } from "react";
import type { FormEvent } from "react";
import AppShell from "@/components/feature/AppShell";
import PageBanner from "@/components/feature/PageBanner";

const FORM_URL = "https://readdy.ai/api/form/dapu79b91ht2grdqm1tg";

const contactInfo = [
  { icon: "ri-phone-line", label: "电话", value: "0559-12345678" },
  { icon: "ri-mail-line", label: "邮箱", value: "chuangyi@ahau.edu.cn" },
  { icon: "ri-map-pin-2-line", label: "地址", value: "安徽省合肥市安徽农业大学" },
  { icon: "ri-time-line", label: "工作时间", value: "周一至周五 09:00 - 18:00" },
];

const roleOptions = ["高校设计师", "乡村需求方", "高校教师 / 导师", "其他合作方"];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get("website_alt") ?? "").trim();
    if (honeypot) {
      setDone(true);
      return;
    }
    formData.delete("website_alt");

    const payload = new URLSearchParams();
    formData.forEach((value, key) => {
      payload.append(key, String(value));
    });

    setSubmitting(true);
    setFormError("");
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
        parsed?.meta?.message ?? parsed?.message ?? parsed?.meta?.detail ?? responseText ?? "",
      );
      const isSpam = serverMsg.includes("spam");
      const ok = response.ok && parsed?.code === "OK" && !isSpam;

      if (!ok) {
        setFormError(serverMsg || "提交失败，请稍后重试");
        return;
      }

      setDone(true);
      form.reset();
    } catch {
      setFormError("网络异常，提交失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 text-[13.5px] text-foreground-950 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400 focus:bg-background-50";

  return (
    <AppShell>
      <main>
        <PageBanner
          badge="人才计划"
          title="让好设计，找到真正需要它的乡村"
          subtitle="无论你是希望参与共创的青年设计师，还是来自乡村一线的需求方，都可以在这里找到与我们连接的方式。"
          image="https://readdy.ai/api/search-image?query=Wide%20panoramic%20stylized%20illustration%20of%20a%20warm%20Chinese%20rural%20village%20gathering%20at%20dusk%2C%20young%20designers%20and%20villagers%20talking%20together%20around%20a%20long%20wooden%20table%20under%20green%20trees%2C%20lanterns%20and%20plants%2C%20golden%20evening%20light%2C%20sage%20green%20and%20amber%20palette%2C%20clean%20harmonious%20composition%2C%20high%20detail&width=1600&height=680&seq=cy-banner-contact-14&orientation=landscape"
          imageAlt="设计师与村民在乡村一起交流的温暖场景"
        />

        <section className="grid grid-cols-1 gap-8 px-6 pb-16 pt-10 md:px-8 lg:grid-cols-[1fr_1.3fr] lg:px-10">
          <div>
            <p className="text-[13.5px] leading-relaxed text-foreground-500">
              无论你是希望参与共创的青年设计师，还是来自乡村一线的需求方，
              都可以通过下面的方式联系我们，或直接填写右侧的加入表单。
            </p>

            <ul className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3.5 rounded-card border border-background-200 bg-background-50 p-4"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <i className={`${item.icon} text-[19px] leading-none`}></i>
                  </span>
                  <div>
                    <p className="text-[12px] text-foreground-500">{item.label}</p>
                    <p className="mt-0.5 text-[14px] font-semibold text-foreground-950">
                      {item.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-background-200 bg-background-50 p-7 shadow-card lg:p-9">
            {done ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <i className="ri-checkbox-circle-fill text-[34px] leading-none"></i>
                </span>
                <h3 className="mt-4 text-[18px] font-bold text-foreground-950">提交成功</h3>
                <p className="mt-2 max-w-[320px] text-[13px] leading-relaxed text-foreground-500">
                  感谢你的信任，我们会在 2 个工作日内与你取得联系。
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="mt-6 cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-7 py-3 text-[14px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
                >
                  再填一份
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[17px] font-bold text-foreground-950">加入创艺+</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-foreground-500">
                  填写以下信息，让我们一起把设计带回乡土。
                </p>

                <form onSubmit={handleSubmit} data-readdy-form className="mt-6 flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12.5px] font-medium text-foreground-700">
                        姓名<span className="ml-0.5 text-accent-600">*</span>
                      </span>
                      <input name="name" type="text" required placeholder="请输入姓名" className={inputClass} />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12.5px] font-medium text-foreground-700">
                        手机号<span className="ml-0.5 text-accent-600">*</span>
                      </span>
                      <input name="phone" type="tel" required placeholder="请输入手机号" className={inputClass} />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12.5px] font-medium text-foreground-700">
                        邮箱<span className="ml-0.5 text-accent-600">*</span>
                      </span>
                      <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-[12.5px] font-medium text-foreground-700">身份</span>
                      <select name="role" defaultValue={roleOptions[0]} className={`${inputClass} cursor-pointer`}>
                        {roleOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-[12.5px] font-medium text-foreground-700">
                      留言说明<span className="ml-0.5 text-accent-600">*</span>
                    </span>
                    <textarea
                      name="message"
                      required
                      maxLength={500}
                      rows={5}
                      placeholder="简单介绍你的情况与想参与的方向（500 字以内）"
                      className={`${inputClass} resize-none leading-relaxed`}
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

                  {formError && (
                    <p className="rounded-xl bg-accent-100 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-accent-800">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-1 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3.5 text-[15px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "提交中…" : "提交申请"}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </AppShell>
  );
}