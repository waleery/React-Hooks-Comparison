import { useLayoutEffect, useRef, useState } from "react";
import "./navbar.scss";

const Navbar = ({ changeSelectedHook }) => {
    const navbarRef = useRef(null);

    const checkOverflow = () => {
        hideOverflowedElements();
    };


    const hideOverflowedElements = () => {
        const hooksContainerChldrens = navbarRef.current.children;
        const containerWidth = navbarRef.current.offsetWidth;

        let overflowedHooksArray = [];

        if (hooksContainerChldrens) {
            const hooksArray = Array.from(hooksContainerChldrens);

            let totalWidth = 0 - 10; //minus padding one element
            hooksArray.forEach((hook) => {
                totalWidth += hook.offsetWidth;
                if (totalWidth > containerWidth) {
                    overflowedHooksArray.push(hook.textContent);
                }
            });

            if (overflowedHooksArray) {
                for (let i = 0; i < hooksContainerChldrens.length; i++) {
                    overflowedHooksArray.forEach((element) => {
                        if (hooksContainerChldrens[i].textContent === element) {
                            hooksContainerChldrens[i].style.display = "none";
                        }
                    });
                }
            }
        }
    };

    useLayoutEffect(() => {
        window.addEventListener("resize", checkOverflow);

        checkOverflow(); //inital check

        return () => {
            window.removeEventListener("resize", checkOverflow);
        };
    }, [navbarRef]);

    return (
        <nav>
            <span>React Hooks Comparison</span>
            <div className="hooks-container" ref={navbarRef}>
                <span
                    onClick={() => changeSelectedHook("useState")}
                    style={{ border: "1px solid red" }}
                >
                    useState
                </span>
                <span onClick={() => changeSelectedHook("useEffect")}>
                    useEffect
                </span>
                <span onClick={() => changeSelectedHook("useMemo")}>
                    useMemo
                </span>
                <span onClick={() => changeSelectedHook("useCallback")}>
                    useCallback
                </span>
                <span onClick={() => changeSelectedHook("useRef")}>useRef</span>
                <span onClick={() => changeSelectedHook("useContext")}>
                    useContext
                </span>
                <span onClick={() => changeSelectedHook("useTransition")}>
                    useTransition
                </span>
                <span onClick={() => changeSelectedHook("useDeferredValue")}>
                    useDeferredValue
                </span>
                <span onClick={() => changeSelectedHook("useReducer")}>
                    useReducer
                </span>
            </div>
        </nav>
    );
};
export default Navbar;
