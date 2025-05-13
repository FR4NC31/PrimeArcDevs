import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/images/logo.png"

const linkClasses = ({ isActive }) =>
  isActive ? 'text-violet-500 font-semibold' : 'text-black'

function navbar() {
  return (
    <div className='flex items-center w-full z-50 fixed top-0 left-0 shadow-lg '>
        <img src={Logo} className='w-33'/>
      <ul className='flex items-center absolute mb-4 right-0 justify-between gap-10 font-poppins mr-30 text-xl mt-5'>
        <li>
          <NavLink to="/" className={linkClasses}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
        </li>
        <li>
            <NavLink to="/services" className={linkClasses}>Services</NavLink>
        </li>
        <li>
            <NavLink to="/portfolio" className={linkClasses}>Portfolio</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </li>
      </ul> 
    </div>
  )
}

export default navbar
