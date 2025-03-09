/**
 * Theme Provider Component
 * 
 * This component manages the application's theme state and provides
 * theme-related functionality to all child components.
 */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import useAppStore from "@/lib/store";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  // Get theme from Zustand store or use defaultTheme
  const { preferences, setPreferences } = useAppStore();
  const [theme, setThemeState] = useState<Theme>(preferences.theme || defaultTheme);

  // Update theme in DOM and store
  const setTheme = (theme: Theme) => {
    setThemeState(theme);
    setPreferences({ theme });
  };

  // Apply theme class to document element and handle system preference
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Listen for system preference changes when using system theme
  useEffect(() => {
    if (theme !== "system") return;

    function handleSystemThemeChange(event: MediaQueryListEvent) {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(event.matches ? "dark" : "light");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
}; 