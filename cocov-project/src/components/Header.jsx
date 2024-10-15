import { Link } from "react-router-dom"
// import { HiBars3 } from "react-icons/hi2";
// import { useState } from "react";


function Header() {

    

  return (
    <header className="w-screen shadow-lg">
        <nav className="w-full flex justify-center items-center py-6 px-6">
            <Link to='/' className="h-9 w-26 flex items-center justify-center">
                <p className="text-xl md:text-4xl hover:scale-105 transition-all text-white">Cucov currency converter</p>
            </Link>
            {/* <div className="flex items-center gap-2">
                <NavLink to='about' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900' } sm:text-xl hover:border-b-2 hover:border-gray-300 text-sm`}>About Me</NavLink>
                <NavLink to='contact' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900' } sm:text-xl hover:border-b-2 hover:border-gray-300 text-sm`}>Contact Me</NavLink>
            </div> */}
        </nav>
    </header>
  )
}

export default Header
