import { useEffect, useRef, useState } from "react";
import { render } from "react-dom";

const UseRef = () => {
    const [name, setName] = useState("");

    const rednerCount = useRef(1);
    const inputRef = useRef();
    const prevName = useRef("");

    useEffect(() => {
        rednerCount.current = rednerCount.current + 1;
    });

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    const focus = () => {
        inputRef.current.focus();
    };
    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title">useRef</span>
                <p className="margin-bottom">
                    With useRef in React, we can reference elements in the DOM
                    tree.
                </p>
                <p className="margin-bottom">Update ref value won't triger rerender.</p>
                <p>In refs, we can store the previous value of state.</p>
                <p>
                    After updating the state, we update the ref with this value.
                    Updating the ref won't trigger a rerender of the component,
                    so the new value of the ref will not be displayed. The new
                    value of the ref will be displayed after the next rerender
                    of the component.
                </p>
                <p></p>
            </div>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <span>
                My name is: {name}, and it used to be: {prevName.current}{" "}
            </span>

            <span>Component rendered: {rednerCount.current} times </span>

            <div className="buttons">
                <button onClick={focus}>Focus on input</button>
            </div>
        </div>
    );
};
export default UseRef;
