import React, { useImperativeHandle } from "react";

const CustomInput = ({ style, ...props }, ref) => {

    useImperativeHandle(ref, () => {
        return { alertHi: () => alert("Hi") };
    });

    return (
        <input
            {...props}
            ref={ref}
            style={{
                border: "none",
                backgroundColor: "lightpink",
                padding: ".25em",
                borderBottom: ".1em solid black",
                borderTopLeftRadius: ".25em",
                borderTopRightRadius: ".25em",
                ...style,
            }}
        />
    );
};
export default React.forwardRef(CustomInput);
