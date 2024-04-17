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
        />
    );
};
export default React.forwardRef(CustomInput);
