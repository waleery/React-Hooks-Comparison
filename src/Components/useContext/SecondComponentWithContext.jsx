import { useEffect, useRef } from "react";
import { useSetNextColor, useColor, useTheme, useThemeUpdate } from "./ThemeContext";

const SecondComponentWithContext = () => {
    const darkTheme = useTheme();
    const toggleThemne = useThemeUpdate();
    const color = useColor()
    const nextColor = useSetNextColor()

    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current +1   
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
                <p className="info">
                    This is the second component using the same context.
                </p>


            </div>
            <span>Render count: {renderCount.current} </span>
            <span>Color: {color} </span>


            <div className="buttons">
                <button onClick={toggleThemne}>Toogle theme</button>
                <button onClick={nextColor}>Next color</button>
            </div>
        </div>
    );
};
export default SecondComponentWithContext;
