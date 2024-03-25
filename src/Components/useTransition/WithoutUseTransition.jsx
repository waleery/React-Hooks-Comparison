import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

const UseTransition = () => {
    const [tab, setTab] = useState("about");

    const selectTab = (nextTab) => {
        setTab(nextTab);
    };

    return (
        <div className="hookContainer" style={{ maxWidth: "35%" }}>
            <div className="description">
                <span className="title">Without useTranstion</span>
                <p className="margin-bottom">
                    While changing the tab to "Posts" (which takes a long time
                    to load), the interface gets locked.
                </p>

                <p>
                    We have to wait for the tab to load to change it to another
                    one
                </p>
            </div>

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
