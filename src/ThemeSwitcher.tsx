import React, { useState, useEffect } from "react";

type Theme = "light" | "dark";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as Theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const loadTheme = () => {
    const link = document.querySelector('link[rel="stylesheet"]') as HTMLLinkElement;
    if (link){
        link.href = `/${theme}.css`;
    }
  };

  useEffect(() => {
    loadTheme();
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
