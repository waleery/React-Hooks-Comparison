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
        dispatch({type: ACTIONS.TOGGLED, payload:{id:id}})
    }
    const handleRemove = (id) => {
        dispatch({type: ACTIONS.REMOVED, payload:{id:id}})
    }
    return (
        <div className="hookContainer">
            <div className="description">
                <span className="title"></span>
                <p className="margin-bottom">
                </p>

                <p>

                </p>
                <p>

                </p>
                <p></p>
            </div>

            <span>Todo's</span>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Sumbit name"
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit"> Add todo</button>
            </form>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.complete} onClick={() => handleClickCheckbox(todo.id)}/>
                    {todo.name}
                    <button onClick={() => handleRemove(todo.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};
export default UseReducer;
