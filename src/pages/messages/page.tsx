import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import useAuth from "@/hooks/useAuth";
import {
  apiListMessages,
  apiMarkAllMessagesRead,
  apiMarkMessageRead,
  type Message,
} from "@/lib/api";

function formatTime(input?: string | null): string {
  if (!input) return "-";
  const normalized = input.includes("T") ? input : `${input.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return input;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}`;
}

function typeIcon(type: string): string {
  if (type === "application") return "ri-mail-line";
  if (type === "project") return "ri-flag-line";
  return "ri-notification-3-line";
}

export default function Messages() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [markingAll, setMarkingAll] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await apiListMessages();
      setMessages(res.messages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "加载失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authLoading && user) {
      void load();
    }
  }, [authLoading, user, load]);

  const handleRead = async (message: Message) => {
    if (message.is_read) return;
    try {
      await apiMarkMessageRead(message.id);
      setMessages((prev) =>
        prev.map((m) => (m.id === message.id ? { ...m, is_read: 1 } : m))
      );
    } catch {
      /* 忽略标记失败，不打断浏览 */
    }
  };

  const handleReadAll = async () => {
    if (markingAll) return;
    setMarkingAll(true);
    try {
      await apiMarkAllMessagesRead();
      setMessages((prev) => prev.map((m) => ({ ...m, is_read: 1 })));
    } catch (err) {
      setError(err instanceof Error ? err.message : "操作失败，请稍后重试");
    } finally {
      setMarkingAll(false);
    }
  };

  if (authLoading) {
    return (
      <AppShell>
        <main className="px-4 pt-5 md:px-8 lg:px-10">
          <div className="animate-pulse">
            <div className="h-7 w-32 rounded-lg bg-background-200/80" />
            <div className="mt-4 h-[320px] rounded-card bg-background-200/70" />
          </div>
        </main>
      </AppShell>
    );
  }

  if (!user) {
    return (
      <AppShell>
        <main className="flex min-h-[calc(100vh-260px)] items-center justify-center px-4 py-12">
          <div className="w-full max-w-[420px] rounded-card border border-background-200 bg-background-50 p-8 text-center shadow-card">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
              <i className="ri-mail-line text-[26px] leading-none"></i>
            </span>
            <h1 className="mt-5 font-heading text-[19px] font-black text-foreground-950">
              请先登录
            </h1>
            <p className="mt-2.5 text-[13px] leading-relaxed text-foreground-500">
              登录后即可查看报名、项目等站内消息通知。
            </p>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="mt-6 inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-600"
            >
              去登录
              <i className="ri-arrow-right-line text-[15px] leading-none"></i>
            </button>
          </div>
        </main>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <main className="px-4 pt-5 md:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary-500" />
            <h1 className="text-[15px] font-bold text-foreground-950">站内消息</h1>
          </div>
          <button
            type="button"
            disabled={markingAll || messages.every((m) => m.is_read)}
            onClick={() => void handleReadAll()}
            className="cursor-pointer whitespace-nowrap rounded-full border border-background-200 bg-background-50 px-4 py-1.5 text-[12.5px] font-medium text-foreground-600 transition-colors hover:border-primary-300 hover:text-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            全部已读
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-card border border-background-200 bg-background-50 p-6 text-center shadow-card">
            <p className="text-[13px] text-foreground-600">{error}</p>
            <button
              type="button"
              onClick={() => void load()}
              className="mt-3 cursor-pointer whitespace-nowrap rounded-full bg-primary-500 px-6 py-2 text-[13px] font-semibold text-background-50 transition-colors hover:bg-primary-600"
            >
              重试
            </button>
          </div>
        )}

        {!error && loading && (
          <div className="mt-4 animate-pulse space-y-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-[72px] rounded-card bg-background-200/70" />
            ))}
          </div>
        )}

        {!error && !loading && messages.length === 0 && (
          <div className="mt-4 flex flex-col items-center rounded-card border border-background-200 bg-background-50 py-14 text-center shadow-card">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background-100 text-foreground-400">
              <i className="ri-mail-open-line text-[26px] leading-none"></i>
            </span>
            <p className="mt-4 text-[13px] text-foreground-400">暂无消息</p>
          </div>
        )}

        {!error && !loading && messages.length > 0 && (
          <div className="mt-4 overflow-hidden rounded-card border border-background-200 bg-background-50 shadow-card">
            {messages.map((message, index) => {
              const unread = !message.is_read;
              return (
                <button
                  key={message.id}
                  type="button"
                  onClick={() => void handleRead(message)}
                  className={[
                    "flex w-full cursor-pointer items-start gap-3 px-4 py-3.5 text-left transition-colors hover:bg-background-100",
                    index !== 0 ? "border-t border-background-100" : "",
                    unread ? "bg-primary-50/50" : "",
                  ].join(" ")}
                >
                  <span className="flex w-2 flex-shrink-0 items-start justify-center pt-2">
                    {unread && <span className="h-2 w-2 rounded-full bg-primary-500" />}
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${
                      unread
                        ? "bg-primary-100 text-primary-600"
                        : "bg-background-100 text-foreground-400"
                    }`}
                  >
                    <i className={`${typeIcon(message.type)} text-[17px] leading-none`}></i>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span
                        className={`truncate text-[13.5px] ${
                          unread
                            ? "font-bold text-foreground-950"
                            : "font-medium text-foreground-700"
                        }`}
                      >
                        {message.title}
                      </span>
                      <span className="flex-shrink-0 whitespace-nowrap text-[11px] text-foreground-400">
                        {formatTime(message.created_at)}
                      </span>
                    </span>
                    <span className="mt-1 line-clamp-2 block text-[12.5px] leading-relaxed text-foreground-500">
                      {message.content}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </main>
    </AppShell>
  );
}
