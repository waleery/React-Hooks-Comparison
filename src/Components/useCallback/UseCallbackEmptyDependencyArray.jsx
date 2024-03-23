import { useCallback, useState } from "react";
import Search from "./Search";

const allUsers = ["john", "alex", "george"];
const allColors = ["green", "blue", "red"];

const UseCallbackEmptyDependencyArray = () => {
    const [users, setUsers] = useState(allUsers);
    const [color, setColor] = useState(allColors[0]);
    const [firstName, setFirstName] = useState(users[0]);

    const handleSearchWithUseCallback = useCallback((text) => {
        const filteredUsers = allUsers.filter((user) => user.includes(text));
        setUsers(filteredUsers);
        setFirstName(users[0]);
    }, []);

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
        <div className="hookContainer" style={{ maxWidth: "30%" }}>
            <div className="description">
                <span className="title">
                    With useCallback and empty dependence array
                </span>
                <p className="info">We have array of names.</p>

                <p>
                    UseCallback freezes function unitl value in dependency array
                    doesn't change.
                </p>
                <p>
                    The search function is created with useCallback and our
                    dependency array is empty.
                    <span style={{ color: "green" }}>First name</span> is
                    updated in this function. First name is always the same
                    because function isn't updated with new data. (filtered
                    users).
                </p>
                <p style={{ marginTop: "10px" }}>
                    In React, functions are different on every render by default!
                </p>
                <p>
                    If we pass function as a props we have to memoize component
                    to rerender him only when props (in this example - function)
                    changes.
                </p>
                <p>
                    Change color won't cause rerender. Because function is 'frozen'. (Check console for logs)
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
                <span style={{ color: "green" }}>First name</span> in names
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
export default UseCallbackEmptyDependencyArray;
