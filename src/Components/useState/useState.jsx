import { useState } from "react";
import "./useState.scss";

const UseState = () => {
    const [state, setState] = useState({ count: 0, color: "blue" });

    return (
        <div className="useStateContainer">
            <span className="title">UseState</span>

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
