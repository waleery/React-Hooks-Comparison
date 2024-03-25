import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState("about");

    const LIST_SIZE = 15000;

    const selectTab = (nextTab) => {
        startTransition(() => {
            setTab(nextTab);
        });
    };

    return (
        <div className="hookContainer" style={{ maxWidth: "35%" }}>
            <div className="description">
                <span className="title">With useTranstion</span>
                <p className="info">
                    useTransition is a React Hook that lets update the state
                    without blocking the UI.
                </p>

                <p>
                    We can use the isPending boolean value returned by
                    useTransition to indicate to the user that a transition is
                    in progress. For example, when "Posts" tab loads, we can see
                    information about that.
                </p>
                <p>
                    We can click "Posts" (which takes a long time to load) and
                    then immediately click "Contact Us." Thanks to the use of
                    useTransition, the interface is responsive and despite the
                    loading of the "Posts" tab, we can change to another tab.
                </p>
            </div>
            {isPending && <b>Loading...</b>}

            <nav>
                <TabButton
                    isActive={tab === "about"}
                    onClick={() => selectTab("about")}
                >
                    About
                </TabButton>
                <TabButton
                    isActive={tab === "posts"}
                    onClick={() => selectTab("posts")}
                >
                    Posts (slow)
                </TabButton>
                <TabButton
                    isActive={tab === "contact"}
                    onClick={() => selectTab("contact")}
                >
                    Contact
                </TabButton>
            </nav>
            {tab === "about" && <AboutTab />}
            {tab === "posts" && <PostsTab />}
            {tab === "contact" && <ContactTab />}
        </div>
    );
};
export default UseTransition;
