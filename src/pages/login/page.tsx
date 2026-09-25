import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import useAuth from "@/hooks/useAuth";
import type { Role } from "@/lib/api";

type Mode = "login" | "register";

const roleOptions: { value: Role; label: string; desc: string; icon: string }[] = [
  {
    value: "village",
    label: "乡村用户端",
    desc: "发布设计需求，寻找设计人才",
    icon: "ri-home-smile-line",
  },
  {
    value: "designer",
    label: "设计师用户端",
    desc: "报名需求，参与乡村共创",
    icon: "ri-palette-line",
  },
];

export default function Login() {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [mode, setMode] = useState<Mode>("login");
  const [role, setRole] = useState<Role>("designer");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [school, setSchool] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const switchMode = (next: Mode) => {
    setMode(next);
    setError("");
  };

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
          school: role === "designer" ? school.trim() : undefined,
        });
      }
      navigate("/workbench");
    } catch (err) {
      setError(err instanceof Error ? err.message : "操作失败，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppShell>
      <main className="flex min-h-[calc(100vh-260px)] items-center justify-center px-4 py-12 md:px-6 lg:px-8">
        <div className="w-full max-w-[440px] animate-fade-up rounded-card border border-background-200 bg-background-50 px-7 py-9 shadow-card md:px-9">
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-background-50">
              <i className="ri-leaf-line text-[26px] leading-none"></i>
            </span>
            <h1 className="mt-4 font-heading text-[23px] font-black text-foreground-950">
              {mode === "login" ? "欢迎回来" : "加入创艺+"}
            </h1>
            <p className="mt-2 text-[12.5px] leading-relaxed text-foreground-500">
              {mode === "login"
                ? "登录创艺+，继续你的乡村公益设计共创"
                : "选择你的身份，开启乡村公益设计共创"}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-1 rounded-full bg-background-100 p-1">
            {(["login", "register"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => switchMode(m)}
                className={`cursor-pointer whitespace-nowrap rounded-full py-2 text-[13.5px] font-semibold transition-colors ${
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
            <div className="mt-5 grid grid-cols-2 gap-3">
              {roleOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRole(opt.value)}
                  className={`cursor-pointer rounded-2xl border px-3.5 py-3.5 text-left transition-all ${
                    role === opt.value
                      ? "border-primary-400 bg-primary-50"
                      : "border-background-200 bg-background-100/60 hover:border-primary-200"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      role === opt.value
                        ? "bg-primary-500 text-background-50"
                        : "bg-background-200 text-foreground-500"
                    }`}
                  >
                    <i className={`${opt.icon} text-[18px] leading-none`}></i>
                  </span>
                  <p className="mt-2.5 text-[13.5px] font-bold text-foreground-950">{opt.label}</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-foreground-500">{opt.desc}</p>
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
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
                  <i
                    className={`${showPwd ? "ri-eye-off-line" : "ri-eye-line"} text-[17px] leading-none`}
                  ></i>
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

            {mode === "register" && role === "designer" && (
              <label className="flex flex-col gap-1.5">
                <span className="text-[12.5px] font-medium text-foreground-700">学校 / 机构（选填）</span>
                <span className="flex items-center gap-2 rounded-xl border border-background-200 bg-background-100/70 px-3.5 py-2.5 transition-colors focus-within:border-primary-400 focus-within:bg-background-50">
                  <i className="ri-graduation-cap-line text-[16px] leading-none text-foreground-400"></i>
                  <input
                    type="text"
                    maxLength={100}
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="如：安徽农业大学 视觉传达设计"
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
              {submitting
                ? mode === "login"
                  ? "登录中…"
                  : "注册中…"
                : mode === "login"
                  ? "登录"
                  : `注册为${role === "village" ? "乡村用户" : "设计师"}`}
            </button>
          </form>

          <p className="mt-6 text-center text-[12.5px] text-foreground-500">
            {mode === "login" ? "还没有账号？" : "已有账号？"}
            <button
              type="button"
              onClick={() => switchMode(mode === "login" ? "register" : "login")}
              className="ml-1 cursor-pointer font-semibold text-primary-600 hover:text-primary-700"
            >
              {mode === "login" ? "立即注册" : "去登录"}
            </button>
          </p>
          <p className="mt-3 text-center text-[11.5px] text-foreground-400">
            注册即代表同意
            <Link to="/agreement" className="mx-0.5 text-primary-600 hover:text-primary-700">
              《共创服务协议》
            </Link>
          </p>
        </div>
      </main>
    </AppShell>
  );
}
