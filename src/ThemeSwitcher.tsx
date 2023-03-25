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
    loadTheme();
  };

  const loadTheme = () => {
    const lightLink = document.querySelector('link[title="light"]');
    const darkLink = document.querySelector('link[title="dark"]');

    if (theme === "light"){
      lightLink?.removeAttribute("disabled");
      darkLink?.setAttribute("disabled", "");
    } else {
      darkLink?.removeAttribute("disabled");
      lightLink?.setAttribute("disabled", "");
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
