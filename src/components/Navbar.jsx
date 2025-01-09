import React from 'react'
import '/src/navbar.css'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-[100vw] h-[22vh] '>
      <div className='flex py-2 justify-between items-center w-[100vw] bg-[#e3f0e0]'>
      <Link to="/Home">
      <img src="/vips_logo.png" alt="Logo" className="h-28 ml-10" />
    </Link>
        <div className='text-center text-xl'> 
            <h1 className='text-4xl'>ICASW Conference 2025</h1>
            <p>Integrating Climate Action, AI, SDGs, and Water Management</p>
            <p>19th - 20th March, 2025</p>
        </div>
        <img src="/iipa.png" alt="" className='h-28 mr-4'/>
      </div>
      <div className='bg-[#4a9f49] p-2'>   
        <ul className='flex justify-around pages'>
        
          <li><NavLink to="/school-of-engineering" className={({isActive}) =>
          `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>
          School of Engineering & Technology</NavLink></li>
          <li><NavLink to="/iipa" className={({isActive}) =>
          `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>IIPA</NavLink></li>
          <li><NavLink to="/agenda"className={({isActive}) =>
          `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Agenda</NavLink></li>
          <li><NavLink to="/registration" className={({isActive}) =>
          `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Registration details</NavLink></li>
          <li><NavLink to="/speakers" className={({isActive}) =>
          `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Speakers</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) =>
          `block py-2 pr-4 pl-3 duration-200 text-lg ${isActive ? "text-yellow-400" : "text-black"}  hover:text-yellow-400 lg:p-0`}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
