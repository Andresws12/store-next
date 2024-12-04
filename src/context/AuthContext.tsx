"use client";

import { Token } from "@/api/token";
import { User } from "@/api/user";

const tokenCtrl = new Token();
const userCtrl = new User();
import { useState, useEffect, createContext, ReactNode } from "react";

interface AuthContextType {
  accessToken: string | null;
  user: object | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: object) => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();
      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
        setLoading(false);
        return;
      }

      await login(token);
    })();
  }, []);

  const login = async (token: string) => {
    try {
      tokenCtrl.setToken(token);
      const user = await userCtrl.getMe();
      setUser(user);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    tokenCtrl.removeToken();
    setUser(null);
    setToken(null);
  };

  const updateUser = (user: object) => {
    setUser(user);
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
