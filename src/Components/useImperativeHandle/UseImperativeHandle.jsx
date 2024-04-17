import { useRef, useState } from "react";
import CustomInput from "./CustomInput";

const UseImperativeHandle = () => {
    const [value, setValue] = useState("red");
    const inputRef = useRef();

    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title">useImperativeHandle</span>
                <p className="margin-bottom">
                    useImperativeHandle is a React Hook that allows you to
                    customize the instance value that is exposed by a ref. It is
                    particularly useful when you want to control what methods or
                    properties of a child component are accessible from its
                    parent component via a ref.
                </p>
                <p className="margin-bottom">
                    Update ref value won't triger rerender.
                </p>
                <p>
                    This example illustrates the usage of the{" "}
                    <b>useImperativeHandle</b> hook in React to customize the
                    behavior of a ref instance exposed by a child component. In
                    the <b>CustomInput</b> component, the hook is utilized to
                    define a custom method called "focusAndHi". This method is
                    designed to focus on the input element and display a
                    greeting message when invoked. By forwarding this custom
                    method through the ref, the parent component{" "}
                    <b>UseImperativeHandle</b> gains access to it. Consequently,
                    when the "Focus" button is clicked, the parent component can
                    trigger the "focusAndHi" method on the input element,
                    resulting in a user-friendly interaction where the input
                    field is focused, and a friendly greeting is displayed.
                </p>

                <p></p>
            </div>
            <CustomInput
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => inputRef.current.focusAndHi()}>Focus</button>
        </div>
    );
};
export default UseImperativeHandle;
