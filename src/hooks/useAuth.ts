import { useCallback, useEffect, useState } from "react";
import {
  apiLogin,
  apiRegister,
  apiMe,
  getToken,
  setToken,
  type Role,
  type User,
} from "@/lib/api";

const CHANGE_EVENT = "cy-auth-change";

let cachedUser: User | null = null;
let initPromise: Promise<void> | null = null;

function notify() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * 全局唯一的登录态初始化：有 token 时拉取一次 /auth/me。
 * 所有 useAuth 实例共享同一个 Promise，各自落自己的 state，
 * 避免只有第一个执行 effect 的实例拿到用户、其它实例永远 loading。
 */
function ensureInit(): Promise<void> {
  if (initPromise) return initPromise;
  if (!getToken()) {
    initPromise = Promise.resolve();
    return initPromise;
  }
  initPromise = apiMe()
    .then(({ user: u }) => {
      cachedUser = u;
    })
    .catch(() => {
      setToken(null);
      cachedUser = null;
    });
  return initPromise;
}

/**
 * 登录态管理：token 存 localStorage，用户信息在首次挂载时从后端拉取。
 * 各组件通过自定义事件保持同步。
 */
export default function useAuth() {
  const [user, setUser] = useState<User | null>(cachedUser);
  const [loading, setLoading] = useState(() => Boolean(getToken()));

  useEffect(() => {
    let active = true;
    const sync = () => {
      setUser(cachedUser);
      setLoading(false);
    };
    window.addEventListener(CHANGE_EVENT, sync);
    ensureInit().then(() => {
      if (!active) return;
      setUser(cachedUser);
      setLoading(false);
    });
    return () => {
      active = false;
      window.removeEventListener(CHANGE_EVENT, sync);
    };
  }, []);

  const login = useCallback(async (phone: string, password: string) => {
    const { token, user: u } = await apiLogin(phone, password);
    setToken(token);
    cachedUser = u;
    setUser(u);
    notify();
    return u;
  }, []);

  const register = useCallback(
    async (input: {
      phone: string;
      password: string;
      name: string;
      role: Role;
      village?: string;
      school?: string;
      title?: string;
    }) => {
      const { token, user: u } = await apiRegister(input);
      setToken(token);
      cachedUser = u;
      setUser(u);
      notify();
      return u;
    },
    []
  );

  const logout = useCallback(() => {
    setToken(null);
    cachedUser = null;
    setUser(null);
    notify();
  }, []);

  const refreshUser = useCallback((u: User) => {
    cachedUser = u;
    setUser(u);
    notify();
  }, []);

  return { user, loading, login, register, logout, refreshUser };
}
