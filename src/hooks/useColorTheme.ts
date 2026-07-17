import {useEffect, useState} from "react";
import type {ThemeMode} from "../styles/Theme.ts";

const storageKey = "portfolio-theme";

const getInitialTheme = (): ThemeMode => {
    const storedTheme = window.localStorage.getItem(storageKey);

    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const useColorTheme = () => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

    useEffect(() => {
        document.documentElement.style.colorScheme = themeMode;
        window.localStorage.setItem(storageKey, themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode((currentTheme) => currentTheme === "light" ? "dark" : "light");
    };

    return {themeMode, toggleTheme};
};
