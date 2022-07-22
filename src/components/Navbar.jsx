import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed w-full h-[80px] bg-[#E7F6F2] text-[#2C3333]">
      <nav className="fixed w-full h-[80px] px-4 bg-[#E7F6F2] md:flex justify-center items-center ">

        <div className="hidden md:flex justify-around items-center w-[40%]">
          <ul className="flex text-lg">
            <li>About</li>
            <li>Skills</li>
          </ul>
          <span>LOGO</span>
          <ul className="flex text-lg">
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>

        <div onClick={handleClick} className="md:hidden  w-full h-[80px] flex items-center">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'md:absolute top-0 left-0 w-full h-screen bg-[#2C3333] flex flex-col justify-center items-center'}>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Works</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>

        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul className="text-[#E7F6F2] text-lg">
            <li className="w-[150px] h-[50px] ml-[-100px] align-center hover:ml-[-10px] duration-300 bg-blue-900 rounded-sm">
              <a href="#" className="flex justify-between items-center h-[50px]">
                LinkedIn <span className="pl-4"><FaLinkedin size={35} /></span>
              </a>
            </li>
            <li className="w-[150px] h-[50px] ml-[-100px] align-center hover:ml-[-10px] duration-300 bg-black rounded-sm">
              <a href="#" className="flex justify-between items-center h-[50px]">
                GitHub <span className="pl-7"><FaGithub size={35} /></span>
              </a>
            </li>
            <li className="w-[150px] h-[50px] ml-[-100px] align-center hover:ml-[-10px] duration-300 bg-red-700 rounded-sm">
              <a href="#" className="flex justify-between items-center h-[50px]">
                Gmail <span className="pl-9"><HiOutlineMail size={35} /></span>
              </a>
            </li>
            <li className="w-[150px] h-[50px] ml-[-100px] align-center hover:ml-[-10px] duration-300 bg-yellow-600 rounded-sm">
              <a href="#" className="flex justify-between items-center h-[50px]">
                Resume <span className="pl-6"><BsFillPersonLinesFill size={32} /></span>
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
