import React from 'react'
import { Link } from 'react-router-dom'

//Images
import WebDev from "../assets/images/web-development 1.png"
import MobileDev from "../assets/images/app-development 1.png"
import WebDesign from "../assets/images/web-design 1.png"

function platform() {
  return (
    <div className='flex flex-row gap-20 mt-20'>
      <div className='w-90 h-120 shadow-xl flex flex-col justify-center rounded-2xl items-center'>
        <img src={WebDev} className='w-55 h-55'/>
        <h1 className='font-extrabold font-poppins text-lg pt-5 '>Web Development</h1>
         <Link to="/services"><button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full mt-10 w-46 h-12 text-2xl'>More</button></Link>
      </div>
      <div className='w-90 h-120 shadow-xl flex flex-col justify-center rounded-2xl items-center'>
        <img src={MobileDev} className='w-55 h-55'/>
        <h1 className='font-extrabold font-poppins text-lg pt-5' >Mobile App Development</h1>
         <Link to="/services"><button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full mt-10 w-46 h-12 text-2xl'>More</button></Link>
      </div>
      <div className='w-90 h-120 shadow-xl flex flex-col justify-center rounded-2xl items-center'>
        <img src={WebDesign} className='w-55 h-55'/>
        <h1 className='font-extrabold font-poppins text-lg pt-5'>Static Websites</h1>
         <Link to="/services"><button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full mt-10 w-46 h-12 text-2xl'>More</button></Link>
      </div>
    </div>
  )
}

export default platform
