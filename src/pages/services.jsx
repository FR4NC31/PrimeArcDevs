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

  const services = [
    {
      icon: <BiCodeBlock className="w-20 h-20 mx-auto text-white bg-violet-500 rounded-full p-4 mb-6" />,
      title: "WEB APP DEVELOPMENT",
      description: `We design and develop modern, responsive websites that help your business stand out online. Our tech stack are HTML, CSS, JavaScript, React, PHP, and Mongodb.`
    },
    {
      icon: <IoPhonePortraitOutline className="w-20 h-20 mx-auto text-white bg-violet-500 rounded-full p-4 mb-6" />,
      title: "MOBILE APP DEVELOPMENT",
      description: `Bring your ideas to life with scalable, user-friendly mobile applications for Android. Our tech stack are React Native and Firebase.`
    },
    {
      icon: <FaCode className="w-20 h-20 mx-auto text-white bg-violet-500 rounded-full p-4 mb-6" />,
      title: "STATIC WEBSITES",
      description: `Simple yet elegant designs that leave a lasting impression. Our tech stack are HTML, CSS, and JavaScript.`
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="flex flex-col justify-center items-center mt-32 px-4 sm:px-10 mb-20 md:mb-0">
        <h1 className="text-4xl sm:text-6xl font-bold font-audiowide text-black text-center">
          Our <span className="text-violet-500">Services</span>
        </h1>

        <div className="mt-16 w-full max-w-7xl flex flex-wrap justify-center gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[320px] h-[420px] bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-md hover:shadow-xl transition"
            >
              {service.icon}
              <h2 className="text-xl font-extrabold font-poppins mb-4">{service.title}</h2>
              <p className="text-base text-gray-700 font-poppins leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Services;
