import './navbar.scss'
const Navbar = ({changeSelectedHook}) => {
  return (
    <nav>
        <span>React Hooks Comparison</span>
        <div className='hooks-container'>
          <span onClick={() => changeSelectedHook("useState")}>useState</span>
          <span onClick={() => changeSelectedHook("useEffect")}>useEffect</span>
        </div>
    </nav>
  )
}
export default Navbar