import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import UseState from "./Components/useState/useState";

function App() {
    return (
        <>
            <Navbar />
            <main className="main-cointainer">
                <UseState/>
            </main>
        </>
    );
}

export default App;
