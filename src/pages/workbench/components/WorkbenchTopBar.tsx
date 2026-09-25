import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

export default function WorkbenchTopBar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const kw = keyword.trim();
    navigate(kw ? `/demands?q=${encodeURIComponent(kw)}` : "/demands");
  };

  return (
    <header className="flex items-center justify-between gap-4 border-b border-background-200 bg-background-50 px-4 py-3 md:px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-[420px]">
        <div className="relative w-full">
          <i className="ri-search-line pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[15px] leading-none text-foreground-400"></i>
          <input
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="搜索乡村需求、案例、设计师、项目等"
            aria-label="搜索乡村需求、案例、设计师、项目等"
            className="w-full cursor-text rounded-full border border-background-200 bg-background-100 py-2.5 pl-10 pr-4 text-[13px] text-foreground-800 outline-none transition-shadow duration-200 placeholder:text-foreground-400 focus:border-primary-300 focus:bg-background-50 focus:shadow-soft"
          />
        </div>
      </form>

      <div className="flex flex-shrink-0 items-center gap-3">
        <button
          type="button"
          aria-label="站内消息"
          onClick={() => navigate("/messages")}
          className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-foreground-600 transition-colors duration-200 hover:bg-background-100 hover:text-primary-700"
        >
          <i className="ri-notification-3-line text-[19px] leading-none"></i>
        </button>

        {user ? (
          <div className="flex items-center gap-2.5 rounded-full border border-background-200 bg-background-50 py-1 pl-1 pr-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-[13px] font-bold text-background-50">
              {user.name?.slice(0, 1) || "友"}
            </span>
            <span className="whitespace-nowrap text-[12.5px] font-semibold text-foreground-800">
              {user.name}
            </span>
            <span className="hidden whitespace-nowrap rounded-full bg-primary-100 px-2 py-0.5 text-[11px] font-semibold text-primary-700 sm:inline-block">
              {user.role === "village" ? "乡村用户" : "设计师"}
            </span>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-4 py-1.5 text-[12.5px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
          >
            登录
          </button>
        )}
      </div>
    </header>
  );
}
