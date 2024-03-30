import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./navbar.scss";

const Navbar = ({ changeSelectedHook }) => {
    const navbarRef = useRef(null);
    const [showShowMenu, setShowMenu] = useState(false)

    const checkOverflow = () => {
        const hasOverflowingChildren =
        navbarRef.current.offsetHeight < navbarRef.current.scrollHeight ||
        navbarRef.current.offsetWidth < navbarRef.current.scrollWidth
        
            setShowMenu(hasOverflowingChildren)
        
    }

    useEffect(() => {
        window.addEventListener('resize', checkOverflow)

        checkOverflow() //inital check

        return () => {
            window.removeEventListener('resize', checkOverflow)
        }
    }, [])

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
