import { useState } from "react";
import { initialItems } from "./utils";

const WithoutUseMemo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = items.find((item) => item.isSelected);

    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title">Without useMemo</span>
                <p className="margin-bottom">We have very big array where last item isSelected.</p>

                <p>
                    Selected item is searched on every rerender.
                </p>
                <p>
                    When we change state entire component is rerendered.
                </p>
                <p>The component is rerendered slowly because we have to find selected item.</p>
            </div>

            <span>Count: {count} </span>
            <span>Selected item: {selectedItem?.id} </span>
            <div className="buttons">
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </div>
        </div>
    );
};
export default WithoutUseMemo;
