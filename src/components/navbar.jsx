import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: install lucide-react for icons
import Logo from "../assets/images/logo.png";

const linkClasses = ({ isActive }) =>
  isActive ? 'text-violet-500 font-semibold' : 'text-black';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex items-center justify-between w-full z-50 fixed top-0 left-0 shadow-lg bg-white px-4 py-3/200'>
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" className='w-32' />
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out
        ${menuOpen ? 'flex' : 'hidden'} md:flex items-center gap-6 md:gap-10 font-poppins text-xl px-6 py-4 md:py-0`}>
        <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
        <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
        <li><NavLink to="/services" className={linkClasses}>Services</NavLink></li>
        <li><NavLink to="/portfolio" className={linkClasses}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
