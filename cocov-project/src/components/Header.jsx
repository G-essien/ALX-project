import { Link, NavLink } from "react-router-dom"
import Hamburger from "../Assets/Hamburger"
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"

function Header() {
  return (
      <header className="w-screen mt-5 relative">
        <nav className="absolute bg-[#76421A] w-full hidden">
            <div className="h-10 px-8 flex justify-center items-center sm:flex sm:items-center sm:justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white " viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                <Link className="" to='/'>
                    <p className="text-3xl text-white">CuCov</p>
                </Link>
                <div className="hidden sm:block w-[362px] justify-between">
                    <NavLink to='/' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>Home</NavLink>
                    <NavLink to='rate-alert' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>Rate alert</NavLink>
                    <NavLink to='about' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>About Me</NavLink>
                    <NavLink to='contact' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>Contact Me</NavLink>
                </div>
            </div>
        </nav>
        <Hamburger className="absolute z-10"/>
      </header>
  )
}

export default Header
