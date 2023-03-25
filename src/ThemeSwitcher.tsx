import React, { useState, useEffect, useCallback } from "react";

// Define new type 'Theme' is one of two string literals - 'light' or 'dark'
type Theme = "light" | "dark";

// React functional component
const ThemeSwitcher: React.FC = () => {
  // define new state variable 'theme'
  // default value is 'light'
  // creates function called 'setTheme' to update 'theme' state var
  // utilises useState hook
  const [theme, setTheme] = useState<Theme>("light");

  // new function that loads light.css or dark.css based on value of 'theme'
  // useCallback hook memorizes function, so loadTheme isn't recreated on every render
  const loadTheme = useCallback(() => {
    // finds light.css: <link rel="stylesheet" href="./light.css" title="light" />
    const lightLink = document.querySelector('link[title="light"]');
    // find dark.css: <link rel="stylesheet" href="./dark.css" title="dark" disabled />
    const darkLink = document.querySelector('link[title="dark"]');

    // if true, then enable lightLink and disable darkLink
    // vice versa if false
    if (theme === "light"){
      lightLink?.removeAttribute("disabled");
      darkLink?.setAttribute("disabled", "");
    } else {
      darkLink?.removeAttribute("disabled");
      lightLink?.setAttribute("disabled", "");
    }
  }, [theme]);


  //useEffect hook, runs when component mounts (i.e. first render)
  // also runs anytime the loadTheme function changes
  // gets savedTheme from local storage, to assign value to 'theme' var
  // calls LoadTheme to update css theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as Theme);
    }
    loadTheme();
  }, [loadTheme]);


  // toggles 'theme' variable between 'light' and 'dark'
  // saves new theme to localStorage
  // calls loadTheme to update css theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    loadTheme();
  };

  // hook that runs any time loadTheme is changed
  // calls loadTheme to update css theme
  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  // return a button that runs toggleTheme() on click
  // also changes name between 'Dark Mode' and 'Light Mode'
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;