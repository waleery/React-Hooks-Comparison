import { useEffect, useState } from "react";

const userIds = [1, 2];

const WithoutUseLayoutEffect = () => {
    const [userId, setUserId] = useState(userIds[0]);
    const [isAdmin, setIsAdmin] = useState(true);

    let now = performance.now();
    while (performance.now() - now < 200) {
        //do nothing for 200ms
    }

    useEffect(() => {
        setIsAdmin(userId === userIds[0]);
    }, [userId]);

    const handleChange = () => {
        setUserId(userIds.find((id) => id !== userId));
    };
    return (
        <div className="hookContainer" style={{ maxWidth: "40%" }}>
            <div className="description">
                <span className="title">With useEffect</span>
                <p className="margin-bottom">
                    useEffect in React is a hook used for handling side effects
                    in functional components. It runs after the browser has
                    painted the screen and is suitable for asynchronous
                    operations or effects that don't need to block the rendering
                    process.
                </p>
                <p className="margin-bottom">
                    In this example, we use useEffect to update the isAdmin
                    state based on the userId. When the userId changes, the
                    effect updates the isAdmin state accordingly.
                </p>
                <p>
                    Unlike useLayoutEffect, which synchronously updates state
                    before the browser repaints, useEffect updates state
                    asynchronously, allowing the browser to paint the screen
                    first before executing the effect.
                </p>
            </div>
            <p>userId: {userId}</p>
            <p>Admin: {isAdmin ? "true" : "false"}</p>
            <button onClick={handleChange}>Change User</button>
        </div>
    );
};
export default WithoutUseLayoutEffect;
