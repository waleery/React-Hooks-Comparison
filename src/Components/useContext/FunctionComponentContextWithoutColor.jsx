import { useEffect, useRef } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionComponentContextWithoutColor = () => {
    const darkTheme = useTheme();
    const toggleThemne = useThemeUpdate();

    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#FFF",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
    };

    return (
        <div className="hookContainer" style={themeStyles}>
            <div className="description">
                <span className="title">useContext</span>
                <p className="margin-bottom">
                    When using `useContext`, the component re-renders whenever
                    any context value changes. React will rerender all
                    components that use any context value.
                </p>

                <p>
                For example, in this component, there is no context color value, but React still rerenders this component when the color value changes.

                </p>
            </div>
            <span>Render count: {renderCount.current} </span>

            <div className="buttons">
                <button onClick={toggleThemne}>Toogle theme</button>
            </div>
        </div>
    );
};
export default FunctionComponentContextWithoutColor;
