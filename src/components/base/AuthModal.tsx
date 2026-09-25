import { useEffect, useState, type FormEvent } from "react";
import useAuth from "@/hooks/useAuth";
import type { Role } from "@/lib/api";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

type Mode = "login" | "register";

export default function AuthModal({ open, onClose, onSuccess }: AuthModalProps) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<Mode>("login");
  const [role, setRole] = useState<Role>("designer");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setMode("login");
      setRole("designer");
      setPhone("");
      setPassword("");
      setName("");
      setVillage("");
      setShowPwd(false);
      setError("");
      setSubmitting(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^1[3-9]\d{9}$/.test(phone.trim())) {
      setError("请输入正确的 11 位手机号");
      return;
    }
    if (password.trim().length < 6) {
      setError("密码至少需要 6 位");
      return;
    }
    if (mode === "register") {
      if (!name.trim()) {
        setError("请输入姓名或称呼");
        return;
      }
      if (role === "village" && !village.trim()) {
        setError("请填写所在乡村/项目名称");
        return;
      }
    }
    setError("");
    setSubmitting(true);
    try {
      if (mode === "login") {
        await login(phone.trim(), password);
      } else {
        await register({
          phone: phone.trim(),
          password,
          name: name.trim(),
          role,
          village: role === "village" ? village.trim() : undefined,
        });
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "操作失败，请稍后重试");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="关闭登录弹窗"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-foreground-950/50 animate-fade-in"
      />
      <div className="relative max-h-[92vh] w-full max-w-[400px] animate-pop-in overflow-y-auto rounded-card border border-background-200 bg-background-50 px-7 py-8">
        <button
          type="button"
          aria-label="关闭"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-foreground-400 transition-colors hover:bg-background-100 hover:text-foreground-700"
        >
          <i className="ri-close-line text-[20px] leading-none"></i>
        </button>

        <div className="flex flex-col items-center text-center">
          <span className="flex items-center justify-center rounded-2xl bg-primary-500 text-background-50" style={{ width: 52, height: 52 }}>
            <i className="ri-leaf-line text-[26px] leading-none"></i>
          </span>
          <h2 className="mt-4 font-heading text-[21px] font-black text-foreground-950">
            {mode === "login" ? "登录创艺+" : "加入创艺+"}
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-foreground-500">
            {mode === "login" ? "登录后即可进入个人工作台" : "选择身份，参与乡村公益共创"}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-1 rounded-full bg-background-100 p-1">
          {(["login", "register"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setMode(m);
                setError("");
              }}
              className={`cursor-pointer whitespace-nowrap rounded-full py-1.5 text-[13px] font-semibold transition-colors ${
                mode === m
                  ? "bg-background-50 text-primary-700 shadow-sm"
                  : "text-foreground-500 hover:text-foreground-700"
              }`}
            >
              {m === "login" ? "登录" : "注册"}
            </button>
          ))}
        </div>

        {mode === "register" && (
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setRole("designer")}
              className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center transition-all ${
                role === "designer"
                  ? "border-primary-400 bg-primary-50"
                  : "border-background-200 bg-background-100/60 hover:border-primary-200"
              }`}
            >
              <i className={`ri-palette-line text-[18px] leading-none ${role === "designer" ? "text-primary-600" : "text-foreground-400"}`}></i>
              <p className="mt-1.5 text-[12.5px] font-bold text-foreground-950">设计师端</p>
            </button>
            <button
              type="button"
              onClick={() => setRole("village")}
              className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center transition-all ${
                role === "village"
                  ? "border-primary-400 bg-primary-50"
                  : "border-background-200 bg-background-100/60 hover:border-primary-200"
              }`}
            >
              <i className={`ri-home-smile-line text-[18px] leading-none ${role === "village" ? "text-primary-600" : "text-foreground-400"}`}></i>
              <p className="mt-1.5 text-[12.5px] font-bold text-foreground-950">乡村端</p>
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
          {mode === "register" && (
            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-medium text-foreground-700">姓名 / 称呼</span>
              <span className="flex items-center gap-2 rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 transition-colors focus-within:border-primary-400 focus-within:bg-background-50">
                <i className="ri-user-3-line text-[16px] leading-none text-foreground-400"></i>
                <input
                  type="text"
                  maxLength={30}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={role === "village" ? "如：王支书" : "如：林小满"}
                  className="w-full bg-transparent text-[14px] text-foreground-950 outline-none placeholder:text-foreground-400"
                />
              </span>
            </label>
          )}

          <label className="flex flex-col gap-1.5">
            <span className="text-[12.5px] font-medium text-foreground-700">手机号</span>
            <span className="flex items-center gap-2 rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 transition-colors focus-within:border-primary-400 focus-within:bg-background-50">
              <i className="ri-smartphone-line text-[16px] leading-none text-foreground-400"></i>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={11}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="请输入手机号"
                className="w-full bg-transparent text-[14px] text-foreground-950 outline-none placeholder:text-foreground-400"
              />
            </span>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-[12.5px] font-medium text-foreground-700">密码</span>
            <span className="flex items-center gap-2 rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 transition-colors focus-within:border-primary-400 focus-within:bg-background-50">
              <i className="ri-lock-2-line text-[16px] leading-none text-foreground-400"></i>
              <input
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "register" ? "设置密码（至少 6 位）" : "请输入密码"}
                className="w-full bg-transparent text-[14px] text-foreground-950 outline-none placeholder:text-foreground-400"
              />
              <button
                type="button"
                aria-label={showPwd ? "隐藏密码" : "显示密码"}
                onClick={() => setShowPwd((prev) => !prev)}
                className="flex cursor-pointer items-center justify-center text-foreground-400"
              >
                <i className={`${showPwd ? "ri-eye-off-line" : "ri-eye-line"} text-[17px] leading-none`}></i>
              </button>
            </span>
          </label>

          {mode === "register" && role === "village" && (
            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-medium text-foreground-700">所在乡村 / 项目</span>
              <span className="flex items-center gap-2 rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 transition-colors focus-within:border-primary-400 focus-within:bg-background-50">
                <i className="ri-map-pin-2-line text-[16px] leading-none text-foreground-400"></i>
                <input
                  type="text"
                  maxLength={100}
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder="如：安徽省黄山市黟县宏村"
                  className="w-full bg-transparent text-[14px] text-foreground-950 outline-none placeholder:text-foreground-400"
                />
              </span>
            </label>
          )}

          {error && (
            <p className="rounded-xl bg-accent-100 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-accent-800">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-1 w-full cursor-pointer whitespace-nowrap rounded-full bg-primary-500 py-3.5 text-[15px] font-semibold text-background-50 transition-colors hover:bg-primary-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "提交中…" : mode === "login" ? "登录" : "注册并登录"}
          </button>
        </form>
      </div>
    </div>
  );
}
