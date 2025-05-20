import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/images/logo.png";

const linkClasses = ({ isActive }) =>
  isActive ? 'text-violet-500 font-semibold' : 'text-black';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-lg bg-white px-4 py-3 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" className='w-32' />
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(true)} className='focus:outline-none'>
          <Menu size={28} />
        </button>
      </div>

      {/* Desktop Nav */}
      <ul className='hidden md:flex items-center gap-10 font-poppins text-xl'>
        <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
        <li><NavLink to="/about" className={linkClasses}>About</NavLink></li>
        <li><NavLink to="/services" className={linkClasses}>Services</NavLink></li>
        <li><NavLink to="/portfolio" className={linkClasses}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={linkClasses}>Contact</NavLink></li>
      </ul>

      {/* Blurred Backdrop Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-white/30 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar Menu (Mobile - Left Side) */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        
        <div className='flex items-center justify-between p-4 border-b'>
          <img src={Logo} alt="Logo" className='w-28' />
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className='flex flex-col gap-6 p-6 font-poppins text-lg'>
          <li><NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClasses} onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/services" className={linkClasses} onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/portfolio" className={linkClasses} onClick={() => setMenuOpen(false)}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
