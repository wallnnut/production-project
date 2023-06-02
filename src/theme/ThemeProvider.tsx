import React, {useMemo, useState, FC} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from './ThemeContext';
import {Theme} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export interface  IThemeProvider {
    children: React.ReactNode
}

const ThemeProvider: FC<IThemeProvider> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const changeTheme = (): void => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    const defaultProps = useMemo(() => {
        return{
            theme: theme,
            setTheme: setTheme
        }
    },[theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;