import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext).darkTheme;
};
export const useColor = () => {
    return useContext(ThemeContext).color;
};

export const useThemeUpdate = () => {
    return useContext(ThemeContext).toggleTheme;
};

export const useSetNextColor = () => {
    return useContext(ThemeContext).setNextColor
}

const allColors = ["green", "blue", "red"];

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [color, setColor] = useState(allColors[0]);

    //Fisher–Yates shuffle
    const setNextColor = () => {
        const currentIndex = allColors.indexOf(color);
        let nextIndex = (currentIndex + 1) % allColors.length; 

    setColor(allColors[nextIndex]);

    };

    const toggleTheme = () => {
        setDarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider
            value={{ darkTheme, color, toggleTheme, setNextColor }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
