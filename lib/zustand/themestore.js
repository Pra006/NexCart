import { create } from "zustand";

const DEFAULT_THEME = "light";

const initializeTheme = () => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const storedTheme = localStorage.getItem("theme");
  const theme = storedTheme === "dark" ? DEFAULT_THEME : storedTheme || DEFAULT_THEME;

  document.documentElement.setAttribute("data-theme", theme);

  return theme;
};

export const useThemeStore = create((set) => ({
  theme: DEFAULT_THEME,

  initializeTheme: () => {
    const theme = initializeTheme();
    set({ theme });
  },

  setTheme: (theme) => {
    const nextTheme = theme === "dark" ? DEFAULT_THEME : theme;

    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);

    set({ theme: nextTheme });
  },
}));
