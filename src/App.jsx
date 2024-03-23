import { Suspense, lazy, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import UseState from "./Components/useState/useState";
import UseStateWithFunction from "./Components/useState/useStateWithFunction";
import UseCallback from "./Components/useCallback/UseCallback.jsx";

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
                        <LazyWithoutUseMemo/>
                    </Suspense>
                );
            case "useCallback":
                return <UseCallback/>
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
