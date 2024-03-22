import { useState } from "react";

const UseState = () => {
    console.log("Render component without function to set initial state")

    const [state, setState] = useState({ count: 0, color: "blue" });

    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title">UseState</span>
                <p>Initial state set without function</p>
                <p>Only on the first rendering is the function that sets the initial state called.</p>
                <p>Check the console during the interaction.</p>
            </div>

            <span>Count: {state.count} </span>
            <span>Color: {state.color}</span>
            <p>{JSON.stringify(state)}</p>
            <div className="buttons">
                <button
                    onClick={() =>
                        setState((prev) => ({ ...prev, count: prev.count + 1 }))
                    }
                >
                    +
                </button>
                <button
                    onClick={() =>
                        setState((prev) => ({ ...prev, count: prev.count - 1 }))
                    }
                >
                    -
                </button>
            </div>
        </div>
    );
};
export default UseState;
