import React, { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const loadTheme = useCallback(() => {
    const lightLink = document.querySelector('link[title="light"]');
    const darkLink = document.querySelector('link[title="dark"]');

    if (theme === "light"){
      lightLink?.removeAttribute("disabled");
      darkLink?.setAttribute("disabled", "");
    } else {
      darkLink?.removeAttribute("disabled");
      lightLink?.setAttribute("disabled", "");
    }
  }, [theme]);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as Theme);
    }
    loadTheme();
  }, [loadTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    loadTheme();
  };

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
