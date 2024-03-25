import { useState } from "react";
import SlowList from "./SlowList";

const WithoutDeferredValue = () => {
    const [text, setText] = useState("");
    return (
        <div className="hookContainer" style={{ maxWidth: "35%" }}>
            <div className="description">
                <span className="title">Without useDeferredValue</span>
                <p className="info">
                    As we type each letter, the parent component is re-rendered,
                    and consequently its child (SlowList) is also re-rendered.
                </p>

                <p>
                    Wrapping the SlowList in memo won't do anything, because to
                    it we pass the typed text, and then the SlowList is
                    generated.
                </p>
                <p>
                    We can see the typing delay because the component has to
                    render the list from scratch after typing EACH letter.
                </p>
            </div>

            <input onChange={(e) => setText(e.target.value)} />
            <SlowList text={text} />
            <span>Selected item: </span>
        </div>
    );
};
export default WithoutDeferredValue;
