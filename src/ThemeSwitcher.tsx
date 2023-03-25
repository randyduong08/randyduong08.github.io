import React, { useState, useEffect } from "react";

type Theme = "light" | "dark";

const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme){
            setTheme(savedTheme as Theme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const loadTheme = () => {
        const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
        if (themeLink){
            themeLink.href = '/${theme}.css';
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