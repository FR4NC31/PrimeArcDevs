import Navbar from '../components/navbar'
import { useEffect } from 'react';

//Icons
import { BiCodeBlock } from "react-icons/bi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

function services() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.title = "Services | PrimeArc Devs";
  }, [])
  return (
    <div>
      <Navbar />
      <main className='flex flex-col justify-center items-center mt-50'>
        <h1 className='text-8xl font-bold font-audiowide text-black flex gap-5'>Our <h1 className='text-violet-500'>Services</h1></h1>
        <div className='flex flex-row gap-20 mt-20'>
            <div className='w-90 h-120 shadow-xl border-1 flex flex-col justify-center  rounded-2xl items-center'>
                <BiCodeBlock className='w-25 h-25 rounded-full bg-violet-500 text-2xl text-white p-4 mb-5'/>
                <h1 className='font-extrabold font-poppins text-3xl text-center '>Web App <br /> Development</h1>
                <p className='font-poppins text-xl pt-5 text-center mb-10 pl-10 pr-10'>We design and develop modern, responsive websites that help your business stand out online. Our tech stack are HTML, CSS, JavaScript, React, PHP, and Mongodb.</p>
            </div>
            <div className='w-90 h-120 shadow-xl border-1 flex flex-col justify-center  rounded-2xl items-center'>
                <IoPhonePortraitOutline className='w-25 h-25 rounded-full bg-violet-500 text-2xl text-white p-2 mb-5'/>
                <h1 className='font-extrabold  font-poppins text-3xl text-center '>Mobile App <br /> Development</h1>
                <p className='font-poppins text-xl pt-5 text-center mb-25 pl-10 pr-10'>Bring your ideas to life with scalable, user-friendly mobile applications for Android. Our tech stack are React Native and Firebase.</p>
            </div>
            <div className='w-90 h-120 shadow-xl border-1 flex flex-col justify-center  rounded-2xl items-center'>
                <FaCode className='w-25 h-25 rounded-full bg-violet-500 text-2xl text-white p-4 mb-5'/>
                <h1 className='font-extrabold font-poppins text-3xl text-center '>Static Websites</h1>
                <p className='font-poppins text-xl pt-5 text-center mb-33 pl-10 pr-10'>Simple yet elegant designs that leave a lasting impression. Our tech stack are HTML, CSS, and JavaScript.</p>
            </div>
        </div>
      </main>
    </div>
  )
}

export default services