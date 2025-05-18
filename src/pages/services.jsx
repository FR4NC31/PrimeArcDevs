import Navbar from '../components/navbar';
import { useEffect } from 'react';

// Icons
import { BiCodeBlock } from "react-icons/bi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

function Services() {
  useEffect(() => {
    document.title = "Services | PrimeArc Devs";
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col justify-center items-center mt-32 px-4 sm:px-10 mb-20 md:mb-0">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold font-audiowide text-black text-center">
          Our <span className="text-violet-500">Services</span>
        </h1>

        {/* Cards Container */}
        <div className="mt-16 w-full max-w-7xl flex flex-wrap justify-center gap-10">
          {/* Service Card */}
          {[{
            icon: <BiCodeBlock className="w-20 h-20 mx-auto border-4 text-white bg-violet-500 rounded-full p-4 mb-4" />,
            title: "Web App Development",
            description: `We design and develop modern, responsive websites that help your business stand out online.
              Our tech stack includes HTML, CSS, JavaScript, React, PHP, and MongoDB.`
          }, {
            icon: <IoPhonePortraitOutline className="w-20 h-20 mx-auto border-4 text-white bg-violet-500 rounded-full p-3 mb-4" />,
            title: "Mobile App Development",
            description: `Bring your ideas to life with scalable, user-friendly mobile apps for Android.
              We use React Native and Firebase.`
          }, {
            icon: <FaCode className="w-20 h-20 mx-auto border-4 text-white bg-violet-500 rounded-full p-4 mb-4" />,
            title: "Static Websites",
            description: `Simple yet elegant designs that leave a lasting impression.
              We use HTML, CSS, and JavaScript.`
          }].map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[350px] h-[420px] bg-white rounded-2xl shadow-xl p-6 text-center flex flex-col justify-between"
            >
              {icon}
              <h2 className="text-2xl font-extrabold font-poppins mb-4">{title}</h2>
              <p className="text-base text-gray-700 font-poppins leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Services;
