import { createContext } from "react";

type Theme = "light" | "dark";

export const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
    theme: "light",
    toggleTheme: () => {},
  });