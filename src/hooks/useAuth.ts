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
let initialized = false;

function notify() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * 登录态管理：token 存 localStorage，用户信息在首次挂载时从后端拉取。
 * 各组件通过自定义事件保持同步。
 */
export default function useAuth() {
  const [user, setUser] = useState<User | null>(cachedUser);
  const [loading, setLoading] = useState(!initialized && Boolean(getToken()));

  useEffect(() => {
    const sync = () => setUser(cachedUser);
    window.addEventListener(CHANGE_EVENT, sync);
    return () => window.removeEventListener(CHANGE_EVENT, sync);
  }, []);

  useEffect(() => {
    if (initialized) return;
    initialized = true;
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    apiMe()
      .then(({ user: u }) => {
        cachedUser = u;
        setUser(u);
      })
      .catch(() => {
        setToken(null);
        cachedUser = null;
        setUser(null);
      })
      .finally(() => setLoading(false));
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
