import { Link, NavLink } from "react-router-dom"
import Hamburger from "../Assets/Hamburger"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
      <header className="w-screen absolute flex justify-center items-center border border-green-500 ">
        <nav className="bg-[#76421A] py-6 px-6 h-10 w-full">
            <div className="flex justify-end items-center sm:flex sm:items-center sm:justify-between">
                <FontAwesomeIcon icon={faBars} className="text-white h-7 w-6 right"/>
                <div className="w-[90%] flex justify-center">
                    <Link to='/'>
                        <p className="text-3xl text-white">CuCov</p>
                    </Link>
                    <div className="hidden sm:block w-[362px] justify-between">
                        <NavLink to='/' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>Home</NavLink>
                        <NavLink to='rate-alert' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>Rate alert</NavLink>
                        <NavLink to='about' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>About Me</NavLink>
                        <NavLink to='contact' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-red-600' }`}>Contact Me</NavLink>
                    </div>

                </div>
            </div>
        </nav>
        <Hamburger className="absolute z-10"/>
      </header>
  )
}

export default Header
