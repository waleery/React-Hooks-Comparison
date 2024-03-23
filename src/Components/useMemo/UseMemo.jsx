import { useMemo, useState } from "react";
import { initialItems } from "./utils";



const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(
        () => items.find((item) => item.isSelected),
        [items]
    );
    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title">With useMemo</span>
                <p>Selected item is searched ONLY when 'items' state is changed.</p>
                <p>
                    When we change state there is not need to search selectedItem.
                </p>
                <p>The component is rerendered quickly.</p>
            </div>

            <span>Count: {count} </span>
            <span>Selected item: {selectedItem?.id} </span>
            <div className="buttons">
                <button
                    onClick={() =>
                        setCount((prev) => (prev+1))
                    }
                >
                    +
                </button>
                <button
                    onClick={() =>
                        setCount((prev) => (prev-1))
                    }
                >
                    -
                </button>
            </div>
        </div>
    );
};
export default UseMemo;
