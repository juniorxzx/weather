"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, ThemeType } from "@/theme/theme";
import { parseCookies, setCookie } from "nookies";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    const savedTheme = cookies.theme || "light";
    setTheme(savedTheme);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (theme) {
      setCookie(null, "theme", theme, { path: "/" });
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeObject: ThemeType = theme === "dark" ? darkTheme : lightTheme;

  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={{ theme: theme || "light", toggleTheme }}>
      <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
