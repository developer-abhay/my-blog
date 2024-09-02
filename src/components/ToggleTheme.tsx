"use client";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./svg.icons";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const userTheme = localStorage.getItem("theme");

      if (userTheme === "dark" || (!userTheme && systemTheme))
        setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const toggleThemeFnc = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="relative h-6 w-6">
      <button
        id="toggle-theme"
        className="group"
        aria-label="Toggle Theme"
        aria-pressed={isDarkTheme}
        onClick={toggleThemeFnc}
      >
        <span
          className={`absolute left-0 right-0 top-0 ${
            isDarkTheme ? "opacity-0" : "opacity-100"
          }`}
        >
          <MoonIcon />
        </span>

        <span
          className={`absolute left-0 right-0 top-0 ${
            isDarkTheme ? "opacity-100" : "opacity-0 "
          }`}
        >
          <SunIcon />
        </span>
      </button>
    </div>
  );
};

export default ToggleTheme;
