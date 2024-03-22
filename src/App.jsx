import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import UseState from "./Components/useState/useState";

function App() {
    const [selectedHook, setSelectedHook] = useState("useState");

    const displaySelectedHook = () => {
        switch (selectedHook) {
            case "useState":
                return <UseState />;
            default:
                return <UseState />;
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
