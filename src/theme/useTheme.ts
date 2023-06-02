import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface useThemeResult {
    changeTheme: () => void;
    theme: Theme
}

export function  useTheme (): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme,
        changeTheme
    }
}