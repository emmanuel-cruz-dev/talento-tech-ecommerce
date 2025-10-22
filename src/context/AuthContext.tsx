import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "../hooks/useAuth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [user, setUser] = useState<string | null>(() => {
    const savedUser = localStorage.getItem("userName");
    return savedUser || null;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", String(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("userName", user);
    } else {
      localStorage.removeItem("userName");
    }
  }, [user]);

  const login = (userName: string): void => {
    setIsAuthenticated(true);
    setUser(userName);
  };

  const logout = (): void => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
