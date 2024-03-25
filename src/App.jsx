import { Suspense, lazy, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import UseState from "./Components/useState/useState";
import UseStateWithFunction from "./Components/useState/useStateWithFunction";
import UseCallback from "./Components/useCallback/UseCallback.jsx";
import UseCallbackEmptyDependencyArray from "./Components/useCallback/UseCallbackEmptyDependencyArray.jsx";
import WithoutUseCallback from "./Components/useCallback/WithoutUseCallback.jsx";
import UseRef from "./Components/useRef/UseRef.jsx";
import { ThemeProvider } from "./Components/useContext/ThemeContext.jsx";
import FunctionComponentContext from "./Components/useContext/FunctionComponentContext.jsx";
import FunctionComponentContextWithoutColor from "./Components/useContext/FunctionComponentContextWithoutColor.jsx";
import SecondComponentWithContext from "./Components/useContext/SecondComponentWithContext.jsx";
import UseTransition from "./Components/useTransition/UseTransition.jsx";
import WithoutUseTransition from "./Components/useTransition/WithoutUseTransition.jsx";
import UseDeferredValue from "./Components/useDeferredValue/UseDeferredValue.jsx";

function App() {
    const [selectedHook, setSelectedHook] = useState("useState");

    const changeSelectedHook = (choice) => {
        console.clear();
        setSelectedHook(choice);
    };

    const LazyUseMemo = lazy(() => import("./Components/useMemo/UseMemo.jsx"));
    const LazyWithoutUseMemo = lazy(() =>
        import("./Components/useMemo/WithoutUseMemo.jsx")
    );

    const displaySelectedHook = () => {
        switch (selectedHook) {
            case "useState":
                return (
                    <>
                        <UseState />
                        <UseStateWithFunction />
                    </>
                );
            case "useEffect":
                return null;
            case "useMemo":
                return (
                    <Suspense fallback={<span>Loading...</span>}>
                        <LazyUseMemo />
                        <LazyWithoutUseMemo />
                    </Suspense>
                );
            case "useCallback":
                return (
                    <>
                        <UseCallback />
                        <UseCallbackEmptyDependencyArray />
                        <WithoutUseCallback />
                    </>
                );
            case "useRef":
                return (
                    <>
                        <UseRef />
                    </>
                );
            case "useContext":
                return (
                    <ThemeProvider>
                        <FunctionComponentContext />
                        <SecondComponentWithContext />
                        <FunctionComponentContextWithoutColor />
                    </ThemeProvider>
                );
            case "useTransition":
                return (
                    <>
                        <UseTransition />
                        <WithoutUseTransition/>
                    </>
                );
            case "useDeferredValue":
                return (
                    <>
                        <UseDeferredValue />
                    </>
                );
            default:
                return (
                    <>
                        <UseState />
                        <UseStateWithFunction />
                    </>
                );
        }
    };
    return (
        <>
            <Navbar changeSelectedHook={changeSelectedHook} />
            <main className="main-cointainer">{displaySelectedHook()}</main>
        </>
    );
}

export default App;
