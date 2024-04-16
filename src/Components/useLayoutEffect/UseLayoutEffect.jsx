import { useLayoutEffect, useState } from "react";

const userIds = [1, 2];

const UseLayoutEffect = () => {
    const [userId, setUserId] = useState(userIds[0]);
    const [isAdmin, setIsAdmin] = useState(true);

    let now = performance.now();
    while (performance.now() - now < 200) {
        //do nothing for 200ms
    }

    useLayoutEffect(() => {
        setIsAdmin(userId === userIds[0]);
    }, [userId]);

    const handleChange = () => {
        setUserId(userIds.find((id) => id !== userId));
    };
    return (
        <div className="hookContainer" style={{ maxWidth: "40%" }}>
            <div className="description">
                <span className="title">With useLayoutEffect</span>
                <p className="margin-bottom">
                    useLayoutEffect is a version of useEffect that fires before
                    the browser repaints the screen.
                </p>
                <p className="margin-bottom">
                    useLayoutEffect runs befor ethe browser paints the screen,
                    allowing for state updates synchronously with the browser
                    before the user sees the new view.
                </p>
                <p className="margin-bottom">
                    In this example, after changing the user, we check if the
                    new user is an administrator (in useLayoutEffect). This
                    demonstrates how userId and isAdmin are updated
                    synchronously, ensuring consistency between the user's ID
                    and their admin status.
                </p>
                <p>
                    However, it's important to use useLayoutEffect cautiously as
                    it blocks the render process briefly. For long computations
                    or DOM manipulations, this can cause delays in user
                    interaction.
                </p>
                <p>
                    <b>
                        Rendering in two passes and blocking the browser hurts
                        performance. Try to avoid this when you can.
                    </b>
                </p>
            </div>
            <p>userId: {userId}</p>
            <p>Admin: {isAdmin ? "true" : "false"}</p>
            <button onClick={handleChange}>Change User</button>
        </div>
    );
};
export default UseLayoutEffect;
