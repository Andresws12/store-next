"use client";
import { log } from "console";
import { useState, useEffect, createContext, ReactNode } from "react";

export const AuthContext = createContext({
  accessToken: null,
  user: null,
  login: async (token: any) => {},
  logout: null,
  updateUser: null,
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (token) => {
    try {
      setToken(token);
      console.log(token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
