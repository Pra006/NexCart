import { create } from "zustand";

const DEFAULT_THEME = "valentine";

const initializeTheme = () => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || DEFAULT_THEME;

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
    localStorage.setItem("theme", theme);

    document.documentElement.setAttribute("data-theme", theme);

    set({ theme });
  },
}));
