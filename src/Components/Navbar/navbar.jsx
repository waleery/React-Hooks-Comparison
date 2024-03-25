import './navbar.scss'
const Navbar = ({changeSelectedHook}) => {
  return (
    <nav>
        <span>React Hooks Comparison</span>
        <div className='hooks-container'>
          <span onClick={() => changeSelectedHook("useState")}>useState</span>
          <span onClick={() => changeSelectedHook("useEffect")}>useEffect</span>
          <span onClick={() => changeSelectedHook("useMemo")}>useMemo</span>
          <span onClick={() => changeSelectedHook("useCallback")}>useCallback</span>
          <span onClick={() => changeSelectedHook("useRef")}>useRef</span>
          <span onClick={() => changeSelectedHook("useContext")}>useContext</span>
          <span onClick={() => changeSelectedHook("useTransition")}>useTransition</span>
          <span onClick={() => changeSelectedHook("useDeferredValue")}>useDeferredValue</span>
        </div>
    </nav>
  )
}
export default Navbar