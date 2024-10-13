import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faArrowLeft } from "@fortawesome/free-solid-svg-icons"


 function Hamburger() {
   return (
     <div className="hidden py-4 px-[3px] border bg-[#76421A] w-full">
        <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="text-white"/>
        </Link>
        <div className="mt-2">
            <Link to="rate-alert" className="w-full flex justify-between items-center h-[30px] border border-white px-3">
                <p className="text-white">Rate alert</p>
                <FontAwesomeIcon icon={faGreaterThan} className="text-white"/>
            </Link>
        </div>
        <div className="mt-1">
            <Link to="about" className="w-full flex justify-between items-center h-[30px] border border-white px-3">
                <p className="text-white">About Me</p>
                <FontAwesomeIcon icon={faGreaterThan} className="text-white"/>
            </Link>
            
        </div>
        <div className="mt-1">
            <Link to="contact" className="w-full flex justify-between items-center h-[30px] border border-white px-3">
                <p className="text-white">Contact Me</p>
                <FontAwesomeIcon icon={faGreaterThan} className="text-white"/>
            </Link>
        </div>    
     </div>
   )
 }
 
 export default Hamburger
 