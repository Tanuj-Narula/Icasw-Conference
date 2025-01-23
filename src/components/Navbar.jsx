import React, { useState } from 'react';
import '/src/navbar.css';
import { Link, NavLink } from 'react-router-dom';
import './Marquee.css';
import VantaBirdsBackground from './VantaBirdsBackground';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="w-full h-auto">
      <div className="-z-10 absolute top-0 left-0 sm:h-[150px] h-[50px] w-full">
        <VantaBirdsBackground />
      </div>

      <div className="flex z-10 relative py-2 justify-between items-center bg-transparent w-full px-4">
        <Link to="/">
          <img src="/images/vips_logo.png" alt="Logo" className="h-16 sm:h-28 sm:ml-2 mx-2" />
        </Link>

        <div className="text-center text-xl">
          <h1 className="text-5xl font-bold hidden sm:block">ICASW Conference 2025</h1> 
          <h1 className="text-2xl font-bold block sm:hidden">ICASW </h1>
          <h1 className="text-base font-bold block sm:hidden">Conference </h1>
          <p className="text-sm sm:text-lg font-semibold hidden sm:block">Integrating Climate Action, AI, SDGs, and Water Management</p>
          <p className="text-sm sm:text-lg font-semibold hidden sm:block">19th - 20th March, 2025</p>
        </div>

        <img src="/images/iipa.png" alt="IIPA" className="h-16 sm:h-28 block sm:mr-2 mr-4" />
        
        <button className="sm:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? '×' : '≡'}
        </button>
      </div>

      <div className="marquee-text">
        <span>
          Welcome to ICASW Conference 2025! . . . . . . . . . . Registration is Now OPEN! . . . . . . . . . . Register NOW!
        </span>
      </div>

      <div className={`sm:bg-[#4e9f4c] sm:shadow-md sm:border-none border-y-2 border-black shadow-green-900 sm:p-2 ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className="flex sm:flex-row flex-col items-center sm:justify-around">
          <li>
            <NavLink
              onClick={toggleMenu}
              to="/"
              className={({ isActive }) =>
                `block py-4 px-4 font-bold text-base ${isActive ? 'text-yellow-300' : 'text-black'} hover:text-yellow-400`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
            to="/school-of-engineering"
            onClick={toggleMenu}
            className={({ isActive }) => (
              `block py-4 px-4 sm:inline font-bold text-base 
              ${isActive ? 'text-yellow-300' : 'text-black'} 
              hover:text-yellow-400`
            )}
          >
            School of Engineering & Technology
          </NavLink>
        </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to="/iipa"
              className={({ isActive }) =>
                `block py-4 px-4 font-bold text-base ${isActive ? 'text-yellow-300' : 'text-black'} hover:text-yellow-400`
              }
            >
              IIPA
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to="/agenda"
              className={({ isActive }) =>
                `block py-4 px-4 font-bold text-base ${isActive ? 'text-yellow-300' : 'text-black'} hover:text-yellow-400`
              }
            >
              Agenda
            </NavLink>
          </li>
         

          <li className="relative">
            <button
              onClick={toggleDropdown} 
              onMouseEnter={openDropdown} 
              
              className="block py-4 px-4 font-bold text-base text-black hover:text-yellow-400"
            >
              Committee
            </button>

            {isOpen && (
              <ul
                onMouseLeave={closeDropdown}
                className="absolute left-0 sm:left-auto z-20 max-w-[calc(100vw-2rem)] bg-white shadow-lg p-1 rounded-md sm:w-auto w-48"
              >
                <li className="group relative">
                  <NavLink
                    to="/Committee/organizing Committee"
                    className={({ isActive }) =>
                      `block py-4 px-6 font-semibold text-gray-800 rounded-md transition-all duration-200 ${isActive ? 'bg-green-200 text-green-800' : 'hover:bg-gray-200'}`
                    }
                    onClick={toggleMenu}
                  >
                    Organizing Committee
                  </NavLink>
                </li>
                <li className="group relative">
                  <NavLink
                    to="/Committee/patrons"
                    className={({ isActive }) =>
                      `block py-4 px-6 font-semibold text-gray-800 rounded-md transition-all duration-200 ${isActive ? 'bg-green-200 text-green-800' : 'hover:bg-gray-200'}`
                    }
                    onClick={toggleMenu}
                  >
                    Our Patrons
                  </NavLink>
                </li>
                <li className="group relative">
                  <NavLink
                    to="/Committee/advisory Committee"
                    className={({ isActive }) =>
                      `block py-4 px-6 font-semibold text-gray-800 rounded-md transition-all duration-200 ${isActive ? 'bg-green-200 text-green-800' : 'hover:bg-gray-200'}`
                    }
                    onClick={()=>{toggleDropdown(); toggleMenu();}}
                  >
                   Advisory Committee
                  </NavLink>
                </li>
                <li className="group relative">
                  <NavLink
                    to="/Committee/reviewers"
                    className={({ isActive }) =>
                      `block py-4 px-6 font-semibold text-gray-800 rounded-md transition-all duration-200 ${isActive ? 'bg-green-200 text-green-800' : 'hover:bg-gray-200'}`
                    }
                    onClick={toggleMenu}
                  >
                    Reviewers
                  </NavLink>
                </li>
                <li className="group relative">
                  <NavLink
                    to="/contact us"
                    className={({ isActive }) =>
                      `block py-4 px-6 font-semibold text-gray-800 rounded-md transition-all duration-200 ${isActive ? 'bg-green-200 text-green-800' : 'hover:bg-gray-200'}`
                    }
                    onClick={()=>{toggleDropdown(); toggleMenu();}}
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
         <li>
            <NavLink
              onClick={toggleMenu}
              to="/speakers"
              className={({ isActive }) =>
                `block py-4 px-4 font-bold text-base ${isActive ? 'text-yellow-300' : 'text-black'} hover:text-yellow-400`
              }
            >
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to="/paper"
              className={({ isActive }) =>
                `block py-4 px-4 font-bold text-base ${isActive ? 'text-yellow-300' : 'text-black'} hover:text-yellow-400`
              }
            >
              Paper Details
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              to="/registration"
              className={({ isActive }) =>
                `block py-4 px-4 font-bold text-base ${isActive ? 'text-yellow-300' : 'text-black'} hover:text-yellow-400`
              }
            >
              Registration Details
            </NavLink>
          </li>

         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
