import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList";

const UseDeferredValue = () => {
    const [text, setText] = useState("");
    const deferredValue = useDeferredValue(text);
    return (
        <div className="hookContainer" style={{ maxWidth: "35%" }}>
            <div className="description">
                <span className="title">With useDeferredValue</span>
                <p className="margin-bottom">
                    useDeferredValue is a React Hook that lets you defer
                    updating a part of the UI.
                </p>
                <p className="margin-bottom"> 
                    During updates, the deferred value will “lag behind” the
                    latest value. So we can see typing text without any lag. In
                    particular, React will first re-render without updating the
                    deferred value, and then try to re-render with the newly
                    received value in the background.
                </p>
                <p className="margin-bottom">
                    Note that our SlowList component must be wrapped in a memo,
                    because the parent component is re-rendered every time a
                    letter is typed. We want the SlowList component to which the
                    deferred value is passed to be re-rendered only when the
                    deffered value changes
                </p>
                <p>
                    Typing works smoothly because SlowList is rendered in the
                    background and does not block the rendering of input
                    changes.
                </p>
            </div>

            <input onChange={(e) => setText(e.target.value)} />
            <SlowList text={deferredValue} />
        </div>
    );
};
export default UseDeferredValue;
