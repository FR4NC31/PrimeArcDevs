import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Contact_Info from '../components/contact_info';
import { Link } from 'react-router-dom';

// Icons
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Contact() {
  useEffect(() => {
    document.title = "Contact | PrimeArc Devs";
  }, []);

  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex justify-center items-center bg-white px-6 md:px-20 mt-32 md:mt-0 mb-20 md:mb-0">
        <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center gap-6 max-w-xl">
            <h1 className="text-5xl font-bold font-audiowide text-black">
              Let's <span className="text-violet-500">Collaborate!</span>
            </h1>
            <p className="text-lg font-poppins text-gray-700">
              Have a project in mind? Reach out to us today!
            </p>
            <p className="font-semibold font-poppins text-black">
              Email Us: <span className="font-normal">primearcdevs@gmail.com</span>
            </p>

            {/* Social Icons */}
            <div className="flex gap-15 text-4xl text-black">
              <Link to="https://www.facebook.com/profile.php?id=61571649790817" target="_blank">
                <FaFacebook className="hover:text-violet-500 cursor-pointer" />
              </Link>
              <Link to="https://www.tiktok.com/@qwerty_dev?is_from_webapp=1&sender_device=pc" target="_blank">
                <FaTiktok className="hover:text-violet-500 cursor-pointer"/>
              </Link>
              <Link to="https://www.instagram.com/primearcdevs/" target="_blank">
                <RiInstagramFill className="hover:text-violet-500 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <Contact_Info />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
