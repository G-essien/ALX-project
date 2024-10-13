import { Link, NavLink } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [clickMenuClose, setClickMenuClose] = useState(false);

    function handleMenuClose (){
        let menu = document.querySelector('.menu-close');
        menu.style.display = 'none';
    }

  return (
    <header className="w-full">
        <nav className="bg-white border py-6 px-8 md:px-32 drop-shadow-md w-full flex justify-between items-center">
            <Link to='/' className="h-9 w-26">
                <p className="text-2xl hover:scale-105 transition-all text-blue-600">CuCov</p>
            </Link>
            <div className="hidden sm:flex items-center gap-6">
                <NavLink to='/' className={({isActive}) => `${isActive ? 'text-blue-600' : 'text-gray-900' } hover:border-b-2 hover:border-gray-300`}>Home</NavLink>
                <NavLink to='rate-alert' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900'} hover:border-b-2 hover:border-gray-300`}>Rate -alert</NavLink>
                <NavLink to='about' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900' } hover:border-b-2 hover:border-gray-300`}>About Me</NavLink>
                <NavLink to='contact' className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900' } hover:border-b-2 hover:border-gray-300`}>Contact Me</NavLink>
            </div>
            <div className="sm:hidden">
                <HiBars3 className="text-xl text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}/>           
            </div>
            <div className={`menu-close absolute sm:hidden py-5 top-[86px] left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${clickMenuClose ? 'opacity-0' : 'opacity-100'} ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{transition:'transform 0.3s ease', opacity:'0.3s ease'}}>
                <NavLink to='rate-alert' onClick={() => setClickMenuClose(!clickMenuClose)} className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900'} hover:border-b-2 hover:border-gray-300`}>Rate-alert</NavLink>
                <NavLink to='about' onClick={handleMenuClose} className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900' } hover:border-b-2 hover:border-gray-300`}>About Me</NavLink>
                <NavLink to='contact' onClick={handleMenuClose} className={({isActive}) => `${isActive ? 'text-blue-700' : 'text-gray-900' } hover:border-b-2 hover:border-gray-300`}>Contact Me</NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Header
