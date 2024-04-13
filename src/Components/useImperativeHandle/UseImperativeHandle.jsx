import { useRef, useState } from "react";
import CustomInput from "./CustomInput";

const UseImperativeHandle = () => {
  const [value, setValue] = useState("red");
  const inputRef = useRef()

    return (
        <div className="hookContainer">
            <div className="description" style={{ maxWidth: "40%" }}>
                <span className="title">useImperativeHandle</span>
                <p className="margin-bottom">
                    useImperativeHandle lets you customize
                    the handle exposed as a ref.
                </p>
                {/* <p className="margin-bottom">
                    Update ref value won't triger rerender.
                </p>
                <p>In refs, we can store the previous value of state.</p>
                <p>
                    After updating the state, we update the ref with this value.
                    Updating the ref won't trigger a rerender of the component,
                    so the new value of the ref will not be displayed. The new
                    value of the ref will be displayed after the next rerender
                    of the component.
                </p>
                <p></p> */}
            </div>
            <CustomInput ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => inputRef.current.alertHi()}>Focus</button>

        </div>
    );
};
export default UseImperativeHandle;
