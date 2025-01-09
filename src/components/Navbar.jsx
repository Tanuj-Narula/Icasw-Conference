// import React from 'react'
// import '/src/navbar.css'
// import { Link, NavLink } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className='w-[100vw] h-[22vh]'>
//       <div className='flex py-2 justify-between items-center w-[100vw] bg-[#e3f0e0]'>
//       <Link to="/">
//       <img src="/vips_logo.png" alt="Logo" className="h-28 ml-10" />
//     </Link>
//         <div className='text-center text-xl'> 
//             <h1 className='text-4xl'>ICASW Conference 2025</h1>
//             <p>Integrating Climate Action, AI, SDGs, and Water Management</p>
//             <p>19th - 20th March, 2025</p>
//         </div>
//         <img src="/iipa.png" alt="" className='h-28 mr-4'/>
//       </div>
//       <div className='bg-[#4a9f49] p-2'>   
//         <ul className='flex justify-around pages'>
        
//           <li><NavLink to="/school-of-engineering" className={({isActive}) =>
//           `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>
//           School of Engineering & Technology</NavLink></li>
//           <li><NavLink to="/iipa" className={({isActive}) =>
//           `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>IIPA</NavLink></li>
//           <li><NavLink to="/agenda"className={({isActive}) =>
//           `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Agenda</NavLink></li>
//           <li><NavLink to="/registration" className={({isActive}) =>
//           `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Registration details</NavLink></li>
//           <li><NavLink to="/speakers" className={({isActive}) =>
//           `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Speakers</NavLink></li>
//           <li><NavLink to="/contact" className={({isActive}) =>
//           `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Contact</NavLink></li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar
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
          <img src="/vips_logo.png" alt="Logo" className="h-20 sm:mx-3 sm:h-28" />
        </Link>
        <div className='text-center text-xl'>
          <h1 className='text-2xl sm:text-5xl'>ICASW Conference 2025</h1>
          <p className='text-sm sm:text-lg'>Integrating Climate Action, AI, SDGs, and Water Management</p>
          <p className='text-sm sm:text-lg'>19th - 20th March, 2025</p>
        </div>
        <img src="/iipa.png" alt="" className='h-20 sm:h-28 hidden sm:block mr-4' />
        
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


      <div className={`sm:bg-[#4e9f4c] sm:p-2 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className='flex sm:flex-row flex-col items-center sm:justify-around pages'>
          <li><NavLink to="/school-of-engineering" className={({ isActive }) => 
            `block py-2 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-400" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            School of Engineering & Technology
          </NavLink></li>
          <li><NavLink to="/iipa" className={({ isActive }) => 
            `block py-2 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-400" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            IIPA
          </NavLink></li>
          <li><NavLink to="/agenda" className={({ isActive }) => 
            `block py-2 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-400" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Agenda
          </NavLink></li>
          <li><NavLink to="/registration" className={({ isActive }) => 
            `block py-2 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-400" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Registration details
          </NavLink></li>
          <li><NavLink to="/speakers" className={({ isActive }) => 
            `block py-2 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-400" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Speakers
          </NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => 
            `block py-2 pr-4 pl-3 duration-200 font-bold text-base ${isActive ? "text-yellow-400" : "text-black"} hover:text-yellow-400 lg:p-0`}>
            Contact
          </NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
