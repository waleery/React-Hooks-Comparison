import { useReducer, useState } from "react";

const ACTIONS = {
    ADDED: "added-todo",
    TOGGLED: "toggled-todo",
    REMOVED: "removed-todo",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADDED:
            return [...state, newTodo(action.payload.name)];
        case ACTIONS.TOGGLED:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        case ACTIONS.REMOVED:
            return state.filter((todo) => todo.id !== action.payload.id);
        default:
            return state;
    }
};

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false };
};

const UseReducer = () => {
    const [name, setName] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: ACTIONS.ADDED, payload: { name: name } });
        setName("");
    };

    const handleClickCheckbox = (id) => {
        dispatch({ type: ACTIONS.TOGGLED, payload: { id: id } });
    };
    const handleRemove = (id) => {
        dispatch({ type: ACTIONS.REMOVED, payload: { id: id } });
    };
    return (
        <div
            className="hookContainer"
            style={{ maxWidth: "55%", display: "flex", flexDirection: "row" }}
        >
            <div className="description">
                <span className="title">useReducer</span>
                <p className="margin-bottom">
                    useReducer is a React Hook that allows you to add a reducer
                    to your component.
                </p>
                <p className="margin-bottom">
                    This hook returns an array with exactly two values: the
                    current state and the dispatch function, which allows you to
                    update the state to a different value and trigger a
                    re-render of the component.
                </p>
                <p>The syntax for using useReducer looks like this:</p>
                <pre>
                    {`const [state, dispatch] = useReducer(reducer, initialState);`}
                </pre>
                <p>
                    where <code>reducer</code> is the reducer function, and{" "}
                    <code>initialState</code> is the initial state of the
                    component.
                </p>
                <p className="margin-bottom">
                    A reducer is a function that takes the current state and an
                    action, and then returns a new state. By passing actions to
                    the dispatch function, the component can inform the reducer
                    about the changes to be made.
                </p>

                <p>
                    <strong>Advantages of useReducer:</strong>
                </p>

                <ul>
                    <li>
                        <p>
                            <strong>
                                Better suited for complex state logic:
                            </strong>
                            useReducer is often preferred over useState when
                            managing complex state logic that involves multiple
                            sub-values or when the next state depends on the
                            previous one.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>
                                Encourages immutability and pure functions:
                            </strong>
                            Reducer functions enforce immutability and the use
                            of pure functions, promoting better code quality and
                            predictable state updates.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Scalable and organized code:</strong>
                            useReducer can lead to more organized and scalable
                            code, especially in larger applications where state
                            management becomes more complex.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Sharing state logic:</strong>
                            Reducers can be shared between components by lifting
                            the state and the reducer up to a common ancestor
                            component or by using context, enabling better code
                            reuse.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Debugging:</strong>
                            Components using useReducer can be easier to debug
                            with tools like React DevTools, providing insights
                            into the state changes triggered by dispatching
                            actions.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="todo-app">
                <span>Todo's</span>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Todo name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit"> Add todo</button>
                </form>
                <div className="todos">
                    {todos.map((todo) => (
                        <div key={todo.id} className="todo">
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onClick={() => handleClickCheckbox(todo.id)}
                            />
                            <span>{todo.name}</span>
                            <button onClick={() => handleRemove(todo.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default UseReducer;
