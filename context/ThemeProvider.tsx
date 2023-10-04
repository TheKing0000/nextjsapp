"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
interface IThemeContext {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const handleThemeChange = () => {
      if (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("prefers-color-sceme: dark").matches)
      ) {
        setMode("dark");
        document.documentElement.classList.add("dark");
      } else {
        setMode("light");
        document.documentElement.classList.remove("dark");
      }
    };
    handleThemeChange();
  }, [mode]);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
