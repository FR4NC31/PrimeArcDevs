import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';

// Images
import FR4NC from "../assets/images/fr4nc.jpg";
import Rachelle from "../assets/images/rachelle.jpg";
import Jhanra from "../assets/images/jhanra.jpg";

// Modal Component
const Modal = ({ open, onClose, title, image, description }) => {
  const isVisible = open && title && image && description;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-all duration-300 ease-in-out ${
        open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      {/* Animated backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-300 ease-in-out ${
          open ? 'bg-black/20 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-0'
        }`}
        onClick={onClose}
      />a

      {/* Modal box */}
      <div
        className={`relative z-10 bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl transition-all duration-300 ease-in-out transform ${
          open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {isVisible && (
          <>
            <button
              onClick={onClose}
              className="absolute top-4 right-6 text-gray-500 hover:text-red-500 text-3xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mt-4">
              <img
                src={image}
                alt={title}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-violet-500 mb-4 object-cover"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-center font-poppins">{title}</h2>
              <div className="text-base text-center mt-4 text-violet-600 px-2 sm:px-4 space-y-2 font-poppins">
                {(description ?? "").split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


function About() {
  useEffect(() => {
    document.title = "About Us | PrimeArc Devs";
  }, []);

  const [selectedModal, setSelectedModal] = useState(null);

  const people = {
    francis: {
      title: "Francis Edgard Ibañez",
      image: FR4NC,
      description:
        "Role: UI/UX Designer & Front-End Developer\nTech Stack: HTML, CSS, JavaScript, React, Vite, React Native, Tailwind",
    },
    rachelle: {
      title: "Rachelle Pantinople",
      image: Rachelle,
      description:
        "Role: Front-End Developer\nTech Stack: HTML, CSS, JavaScript, React, Vite, Tailwind, React Native",
    },
    jhanra: {
      title: "Jhanra Ordoviz",
      image: Jhanra,
      description:
        "Role: Back-End Developer\nTech Stack: PHP, Laravel, MySQL, Firebase",
    },
  };

  return (
    <div>
      <Navbar />
      <main className="flex flex-col justify-center items-center mt-42 px-4 mb-20 md:mt-42">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-audiowide text-black text-center">
          Who <span className="text-violet-500">We Are</span>
        </h1>
        <p className="text-lg sm:text-xl font-poppins font-bold mt-5 text-center max-w-5xl">
          PrimeArc Devs{" "}
          <span className="font-normal">
            is a team of passionate developers offering high-quality web and
            mobile app solutions for businesses of all sizes. With a
            collaborative and innovative mindset, we aim to deliver
            projects that exceed expectations.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-10 mt-20 flex-wrap justify-center items-center">
          {/* Francis */}
          <button onClick={() => setSelectedModal("francis")} className="flex flex-col items-center">
            <img
              src={FR4NC}
              className="w-44 h-44 sm:w-60 sm:h-60 rounded-full border-4 border-violet-500 object-cover"
              alt="Francis"
            />
            <p className="mt-4 text-center text-xl sm:text-2xl font-poppins font-extrabold">
              Francis Edg<span className="text-violet-500">ard Ibañez</span>
            </p>
          </button>

          {/* Rachelle */}
          <button onClick={() => setSelectedModal("rachelle")} className="flex flex-col items-center">
            <img
              src={Rachelle}
              className="w-44 h-44 sm:w-60 sm:h-60 rounded-full border-4 border-violet-500 object-cover"
              alt="Rachelle"
            />
            <p className="mt-4 text-center text-xl sm:text-2xl font-poppins font-extrabold">
              Rachelle <span className="text-violet-500">Pantinople</span>
            </p>
          </button>

          {/* Jhanra */}
          <button onClick={() => setSelectedModal("jhanra")} className="flex flex-col items-center">
            <img
              src={Jhanra}
              className="w-44 h-44 sm:w-60 sm:h-60 rounded-full border-4 border-violet-500 object-cover"
              alt="Jhanra"
            />
            <p className="mt-4 text-center text-xl sm:text-2xl font-poppins font-extrabold">
              Jhanra <span className="text-violet-500">Ordoviz</span>
            </p>
          </button>
        </div>

        {/* Modal */}
        <Modal
          open={selectedModal !== null}
          onClose={() => setSelectedModal(null)}
          title={people[selectedModal]?.title}
          image={people[selectedModal]?.image}
          description={people[selectedModal]?.description}
        />
      </main>
    </div>
  );
}

export default About;
