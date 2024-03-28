import { useEffect, useState } from "react";

const UseEffect = () => {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);
    return (
        <div className="hookContainer" style={{ maxWidth: "55%" }}>
            <div className="description">
                <span className="title">useEffect</span>
                <p className="margin-bottom">
                    useEffect is a React Hook that allows you to synchronize a
                    component with an external system (e.g., API calls,
                    subscriptions, timers, setting event listeners).
                </p>

                <p>The syntax for using usEffect looks like this:</p>
                <pre className="margin-bottom">{`useEffect(setup, dependencies?)`}</pre>
                <p>
                    Setup is the function with your Effect's logic. Your setup
                    function may also optionally return a cleanup
                    function.setup: The function with your Effect’s logic. Your
                    setup function may also optionally return a cleanup
                    function.
                </p>
                <p className="margin-bottom">
                    Dependencies (optional) is the list of all reactive values
                    referenced inside of the setup code. Reactive values include
                    props, state, and all the variables and functions declared
                    directly inside your component body. The list of
                    dependencies must have a constant number of items and be
                    written inline like [dep1, dep2, dep3].
                </p>
                <p>
                    If you provide an empty array [] as the dependency list, the
                    Effect will only run once after the initial render, similar
                    to componentDidMount in class components.
                </p>

                <p>
                    If you provide no dependency list at all, the Effect will
                    run after every render, similar to componentDidMount and
                    componentDidUpdate in class components.
                </p>

                <p>
                    If you provide dependencies, the Effect will run after the
                    initial render and after every re-render if any of the
                    dependencies have changed, similar to componentDidUpdate in
                    class components.
                </p>
            </div>
            <div className="chat">
                <p>
                    Choose the chat room:{" "}
                    <select
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    >
                        <option value="general">General</option>
                        <option value="travel">Travel</option>
                        <option value="music">Music</option>
                    </select>
                    <button onClick={() => setShow(!show)}>
                        {show ? "Close chat" : "Open chat"}
                    </button>
                    {show && <hr />}
                    {show && <ChatRoom roomId={roomId} />}
                </p>
            </div>
        </div>
    );
};

const createConnection = (serverUrl, roomId) => {
    return {
        connect() {
            console.log(
                `✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...'`
            );
        },
        disconnect() {
            console.log(
                `❌ Disconnected from "' + roomId + '" room at ' + serverUrl`
            );
        },
    };
};

const ChatRoom = ({ roomId }) => {
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();

        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return (
        <>
        <h5>(Check console)</h5>
            <label>
                Server URL:{" "}
                <input
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                />
            </label>
            <h2>Welcome to the {roomId} room</h2>
        </>
    );
};
export default UseEffect;
