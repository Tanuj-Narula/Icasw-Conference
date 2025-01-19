import React, { useState } from 'react';
import '/src/navbar.css';
import { Link, NavLink } from 'react-router-dom';
import './Marquee.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-auto'>
      <div className='flex py-2 justify-between items-center w-full bg-[#e3f0e0] px-4'>
        <Link to="/">
          <img src="/images/vips_logo.png" alt="Logo" className="h-16 sm:ml-4 m-0.2 sm:mx-3 sm:h-28" />
        </Link>
        <div className='text-center text-xl'>
          <h1 className='text-2xl font-bold text-green-800 sm:text-5xl'>ICASW Conference 2025</h1>
          <p className='text-sm sm:text-lg hidden font-semibold text-green-900 sm:block'>Integrating Climate Action, AI, SDGs, and Water Management</p>
          <p className='text-sm sm:text-lg hidden font-semibold text-green-900 sm:block'>19th - 20th March, 2025</p>
        </div>
        <img src="/images/iiipa.png" alt="" className='h-20 sm:h-28 hidden sm:block mr-4' />
        
        <button 
          className="sm:hidden text-2xl" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? '×' : '≡'}
        </button>
      </div>

      <div className="marquee-text">
  <span>
    Welcome to ICASW Conference 2025! . . . . . . . . . . . . . .  Registration is Now OPEN! . . . . . . . . . . . . . .  Register NOW!
  </span>
</div>


      <div className={`sm:bg-[#4e9f4c] sm:shadow-md sm:border-none border-y-2 border-black shadow-green-900 sm:p-2 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className='flex sm:flex-row flex-col items-center sm:justify-around pages'>
        <li><NavLink onClick={toggleMenu} to="/" className={({ isActive }) => 
            `block py-4 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Home
          </NavLink></li>
          <li><NavLink onClick={toggleMenu} to="/school-of-engineering" className={({ isActive }) => 
            `block py-4 pr-4 sm:inline pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            School of Engineering & Technology
          </NavLink></li>
          <li><NavLink onClick={toggleMenu} to="/iipa" className={({ isActive }) => 
            `block py-4 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            IIPA
          </NavLink></li>
          <li><NavLink onClick={toggleMenu}  to="/agenda" className={({ isActive }) => 
            `block py-4 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Agenda
          </NavLink></li>
          <li><NavLink onClick={toggleMenu} to="/paper" className={({ isActive }) => 
            `block py-4 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Paper details
          </NavLink></li>
          <li><NavLink onClick={toggleMenu} to="/registration" className={({ isActive }) => 
            `block py-4 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Registration details
          </NavLink></li>
          <li><NavLink onClick={toggleMenu} to="/speakers" className={({ isActive }) => 
            `block py-4 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Speakers
          </NavLink></li>
          <li><NavLink onClick={toggleMenu} to="/contact" className={({ isActive }) => 
            `block py-4 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-300" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Contact
          </NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
