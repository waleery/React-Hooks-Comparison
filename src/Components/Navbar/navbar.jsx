import { useLayoutEffect, useRef } from "react";
import "./navbar.scss";

const hooks = [
    "useState",
    "useEffect",
    "useCallback",
    "useRef",
    "useContext",
    "useTransition",
    "useDeferredValue",
    "useReducer",
];

const Navbar = ({ changeSelectedHook }) => {
    const navbarRef = useRef(null);
    let overflowedHooksArray = [];

    const checkOverflow = () => {
        hideOverflowedElements();
        showElements();
    };

    useLayoutEffect(() => {
        window.addEventListener("resize", checkOverflow);

        checkOverflow(); //inital check

        return () => {
            window.removeEventListener("resize", checkOverflow);
        };
    }, [navbarRef]);

    const showElements = () => {
        const hooksContainerChldrens = navbarRef.current.children;

        if (hooksContainerChldrens) {
            const hooksArray = Array.from(hooksContainerChldrens);

            for (const hook of hooksArray) {
                const isHookVisible = hook.style.display == "" ? true : false;

                if (!isHookVisible) {
                    hook.style.display = "";

                    const newContainerWidth = navbarRef.current.offsetWidth;
                    const containerContentWidth = navbarRef.current.scrollWidth;

                    if (newContainerWidth < containerContentWidth) {
                        hook.style.display = "none";
                        break;

                    } else {
                        overflowedHooksArray = overflowedHooksArray.filter(
                            (hookName) => hookName !== hook.textContent
                        );
                    }
                }
            }
        }
    };

    const hideOverflowedElements = () => {
        const hooksContainerChldrens = navbarRef.current.children;
        const containerWidth = navbarRef.current.offsetWidth;

        if (hooksContainerChldrens) {
            const hooksArray = Array.from(hooksContainerChldrens);

            let totalWidth = 0 - 10; //minus padding one element

            hooksArray.forEach((hook) => {
                totalWidth += hook.offsetWidth;

                if (totalWidth > containerWidth) {
                    hook.style.display = "none";

                    if (!overflowedHooksArray.includes(hook.textContent)) {
                        overflowedHooksArray.push(hook.textContent);
                    }
                }
            });
        }
    };

    return (
        <nav>
            <span>React Hooks Comparison</span>
            <div className="hooks-container" ref={navbarRef}>
                {hooks.map((hook) => (
                    <span key={hook} onClick={() => changeSelectedHook(hook)}>
                        {hook}
                    </span>
                ))}
            </div>
        </nav>
    );
};
export default Navbar;
