import './navbar.scss'
const Navbar = () => {
  return (
    <nav>
        <span>React Hooks Comparison</span>
        <div className='hooks-container'>
          <span>useState</span>
          <span>useEffect</span>
        </div>
    </nav>
  )
}
export default Navbar