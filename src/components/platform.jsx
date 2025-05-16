import React from 'react';
import { Link } from 'react-router-dom';

// Images
import WebDev from "../assets/images/web-development 1.png";
import MobileDev from "../assets/images/app-development 1.png";
import WebDesign from "../assets/images/web-design 1.png";

function Platform() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-20 px-4'>
      {/* Web Development Card */}
      <div className='w-full md:w-72 shadow-xl flex flex-col items-center p-6 rounded-2xl bg-white'>
        <img src={WebDev} alt="Web Development" className='w-32 h-32 object-contain' />
        <h1 className='font-extrabold font-poppins text-lg pt-4 text-center'>Web Development</h1>
        <Link to="/services">
          <button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-6 rounded-full mt-6 text-lg'>
            More
          </button>
        </Link>
      </div>

      {/* Mobile App Development Card */}
      <div className='w-full md:w-72 shadow-xl flex flex-col items-center p-6 rounded-2xl bg-white'>
        <img src={MobileDev} alt="Mobile App Development" className='w-32 h-32 object-contain' />
        <h1 className='font-extrabold font-poppins text-lg pt-4 text-center'>Mobile App Development</h1>
        <Link to="/services">
          <button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-6 rounded-full mt-6 text-lg'>
            More
          </button>
        </Link>
      </div>

      {/* Web Design Card */}
      <div className='w-full md:w-72 shadow-xl flex flex-col items-center p-6 rounded-2xl bg-white'>
        <img src={WebDesign} alt="Static Websites" className='w-32 h-32 object-contain' />
        <h1 className='font-extrabold font-poppins text-lg pt-4 text-center'>Static Websites</h1>
        <Link to="/services">
          <button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-6 rounded-full mt-6 text-lg'>
            More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Platform;
