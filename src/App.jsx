import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import UseState from "./Components/useState/useState";
import UseStateWithFunction from "./Components/useState/useStateWithFunction";

function App() {
    const [selectedHook, setSelectedHook] = useState("useState");

    const displaySelectedHook = () => {
        switch (selectedHook) {
            case "useState":
                return (
                    <>
                        <UseState />
                        <UseStateWithFunction />
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
            <Navbar />
            <main className="main-cointainer">{displaySelectedHook()}</main>
        </>
    );
}

export default App;
