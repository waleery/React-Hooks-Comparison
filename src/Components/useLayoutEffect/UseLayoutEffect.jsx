import { useEffect, useState } from "react";

const userIds = [1, 2];

const UseLayoutEffect = () => {
    const [userId, setUserId] = useState(userIds[0]);
    const [isAdmin, setIsAdmin] = useState(true);

    //This artificially slows down rendering
    let now = performance.now();
    while (performance.now() - now < 200) {
        //do nothing for 200ms
    }

    //asynchronous function -> dont block first render
    useEffect(() => {
        setIsAdmin(userId === userIds[0]);
    }, [userId]);

    const handleChange = () => {
        setUserId(userIds.find((id) => id !== userId));
    };
    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title">With useEffect</span>
                {/* <p className="margin-bottom">
                    With useRef in React, we can reference elements in the DOM
                    tree.
                </p>
                <p className="margin-bottom">Update ref value won't triger rerender.</p>
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
            <p>userId: {userId}</p>
            <p>Admin: {isAdmin ? "true" : "false"}</p>
            <button onClick={handleChange}>Change User</button>
        </div>
    );
};
export default UseLayoutEffect;
