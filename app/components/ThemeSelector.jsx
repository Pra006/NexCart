"use client";

import React, { useState } from "react";
import { Palette } from "lucide-react";
import { THEMES } from "../assets/assets";
import { useThemeStore } from "@/lib/zustand/themestore";


const ThemeSelector = () => {
  const {theme, setTheme}= useThemeStore()

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        role="button"
        className="btn btn-circle"
        aria-label="Select Theme"
      >
        <Palette size={20} />
      </button>

      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-50 mt-2 w-52 max-h-96 overflow-y-auto p-2 shadow-2xl"
      >
        {THEMES.map((t) => (
          <li key={t}>
            <label className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start">
              <input
                type="radio"
                name="theme-dropdown"
                className="hidden"
                value={t}
                checked={theme === t}
                onChange={() => handleThemeChange(t)}
              />

              <span className="capitalize">{t}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;