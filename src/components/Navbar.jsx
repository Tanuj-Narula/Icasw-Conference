import React from 'react'
import '/src/navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-[100vw] h-[22vh] '>
      <div className='flex py-2 justify-between items-center w-[100vw] bg-[#e3f0e0]'>
        <img src="/vips_logo.png" alt="" className='h-28 ml-4'/>
        <div className='text-center text-xl'> 
            <h1 className='text-4xl'>ICASW Conference 2025</h1>
            <p>Integrating Climate Action, AI, SDGs, and Water Management</p>
            <p>19th - 20th March, 2025</p>
        </div>
        <img src="/iipa.png" alt="" className='h-28 mr-4'/>
      </div>
      <div className='bg-[#4a9f49] p-2'>   
        <ul className='flex justify-around pages'>
        <li><Link to="/" className='p-2'>Home</Link></li>
          <li><Link to="/school-of-engineering" className='p-2'>School of Engineering & Technology</Link></li>
          <li><Link to="/iipa" className='p-2'>IIPA</Link></li>
          <li><Link to="/agenda"className='p-2'>Agenda</Link></li>
          <li><Link to="/registration" className='p-2'>Registration details</Link></li>
          <li><Link to="/speakers" className='p-2'>Speakers</Link></li>
          <li><Link to="/contact" className='p-2'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
