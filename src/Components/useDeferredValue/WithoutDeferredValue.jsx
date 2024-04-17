import { useState } from "react";
import SlowList from "./SlowList";

const WithoutDeferredValue = () => {
    const [text, setText] = useState("");
    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title">Without useDeferredValue</span>
                <p className="margin-bottom">
                    As we type each letter, the parent component is re-rendered,
                    and consequently its child (SlowList) is also re-rendered.
                </p>

                <p className="margin-bottom">
                    Wrapping the SlowList in memo won't do anything, because to
                    it we pass the typed text, and then the SlowList is
                    generated.
                </p>
                <p>
                    We can see the typing delay because the component has to
                    render the list from scratch after typing EACH letter.
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                }}
            >
                <span>Type something:</span>
                <input onChange={(e) => setText(e.target.value)} />
            </div>{" "}
            <SlowList text={text} />
        </div>
    );
};
export default WithoutDeferredValue;
