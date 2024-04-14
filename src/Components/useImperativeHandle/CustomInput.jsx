import React, { useImperativeHandle, useRef } from "react";

const CustomInput = ({ value }, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focusAndHi() {
                inputRef.current.focus();
                alert("Hi!");
            },
        };
    });

    return (
        <input
            ref={inputRef}
            value={value}
            style={{
                border: "none",
                backgroundColor: "lightblue",
                padding: ".25em",
                borderBottom: ".1em solid black",
                borderTopLeftRadius: ".25em",
                borderTopRightRadius: ".25em",
            }}
        />
    );
};
export default React.forwardRef(CustomInput);
