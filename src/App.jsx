import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import UseState from "./Components/useState/useState";
import UseStateWithFunction from "./Components/useState/useStateWithFunction";

function App() {
    const [selectedHook, setSelectedHook] = useState("useState");

    const changeSelectedHook = (choice) => {
        console.clear()
        setSelectedHook(choice)
    }

    const displaySelectedHook = () => {
        switch (selectedHook) {
            case "useState":
                return (
                    <>
                        <UseState />
                        <UseStateWithFunction />
                    </>
                );
            case 'useEffect':
                return null
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
            <Navbar changeSelectedHook={changeSelectedHook}/>
            <main className="main-cointainer">{displaySelectedHook()}</main>
        </>
    );
}

export default App;
