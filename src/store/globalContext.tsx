"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  PropsWithChildren,
  useContext,
} from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";

type Theme = "dark" | "light";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleTheme: () => {},
} as ThemeContextProps);
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const cookies = parseCookies();
    const storedTheme = cookies.theme as Theme;
    console.log(storedTheme);
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    destroyCookie(null, "theme");

    setCookie(null, "theme", newTheme, {
      maxAge: 365 * 24 * 60 * 60,
      path: "/",
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
