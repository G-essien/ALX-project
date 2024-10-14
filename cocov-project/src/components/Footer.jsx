import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border px-1 py-2 w-full flex justify-between items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-between gap-3 items-center sm:px-6 w-full">
          <div>
            <h2 className="text-sm sm:text-xl md:text-2xl">Stay Connected <span className="text-sm italic">with</span> CoCov</h2>
            <h5 className="text-[8px] sm:text-sm md:text-lg">Get the latest currency updates and insights directly to your inbox!</h5>
          </div>
          <div className="flex gap-3 justify-end items-center text-sm sm:text-xl md:text-2xl">
            <FaLinkedin className="hover:scale-105 cursor-pointer"/>
            <FaInstagram className="hover:scale-105 cursor-pointer"/>
            <FaFacebookSquare className="hover:scale-105 cursor-pointer"/>
            <FaXTwitter className="hover:scale-105 cursor-pointer"/>
          </div >
        </div>
        <div className="flex justify-center items-center py-2">
          <FaRegCopyright className="text-sm sm:text-xl md:text-3xl"/>
          <p className="text-sm sm:text-xl md:text-3xl">2024 CoCov. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
