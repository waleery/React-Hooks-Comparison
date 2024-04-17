import { useCallback, useEffect, useState } from "react";
import Search from "./Search";

const allUsers = ["john", "alex", "george"];
const allColors = ["green", "blue", "red"];

const WithoutUseCallback = () => {
    const [users, setUsers] = useState(allUsers);
    const [color, setColor] = useState(allColors[0]);
    const [firstName, setFirstName] = useState(users[0]);

    useEffect(() => {
        setFirstName(users[0]);
    }, [users]);

    const handleSearchWithUseCallback = (text) => {
        const filteredUsers = allUsers.filter((user) => user.includes(text));
        setUsers(filteredUsers);
    };

    //Fisher–Yates shuffle
    const shuffleArray = (arrayToShuffle) => {
        let arrayCopy = [...arrayToShuffle];

        for (let i = arrayCopy.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));

            let tempValue = arrayCopy[i];
            arrayCopy[i] = arrayCopy[randomIndex];
            arrayCopy[randomIndex] = tempValue;
        }

        return arrayCopy;
    };

    return (
        <div className="hookContainer oneThird">
            <div className="description">
                <span className="title">Without useCallback</span>
                <p className="margin-bottom">We have array of names.</p>

                <p className="margin-bottom">
                    The search function is created without useCallback.{" "}
                    <span className="greenBoldText">First name</span> is
                    updated after the search. First name is updated immediately.
                    (Filtered users).
                </p>
                <p>
                    In React, functions are different on every render by default!
                </p>
                <p>
                    If we pass function as a props, we need to memoize component
                    to rerender him only when props (in this example - function)
                    changes.
                </p>
                <p>
                    Changing color will cause rerender because function is
                    always 'new' on each rerender. (Check console for logs)
                </p>
            </div>
            <Search onChange={handleSearchWithUseCallback} />
            <span>
                Users:
                <ul>
                    {users.map((user) => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
            </span>
            <span>
                <span className="greenBoldText">First name</span> in names
                array state: {firstName}
            </span>
            <span>Color: {color}</span>
            <div className="buttons">
                <button onClick={() => setUsers(shuffleArray(users))}>
                    Shuffle Users
                </button>
                <button onClick={() => setColor(shuffleArray(allColors)[0])}>
                    Change Color
                </button>
            </div>
        </div>
    );
};
export default WithoutUseCallback;
