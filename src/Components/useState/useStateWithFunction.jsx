import { useState } from "react";
import "./useState.scss";

function countInitial(){
    console.log('Initial function was called')
    return {
        color: "blue",
        count: 0
    }
  }

const UseStateWithFunction = () => {
    console.log("Render component with function to set initial state")

    const [state, setState] = useState(countInitial());

    return (
        <div className="useStateContainer">
            <div className="description">
                <span className="title">UseState</span>
                <p>Initial state set with function</p>
                <p> At each rendering, a function that sets the initial state is called.</p>
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
export default UseStateWithFunction;
