import React, { useState } from 'react';

// Components
import Navbar from '../components/navbar';

// Images
import FR4NC from "../assets/images/fr4nc.jpg";
import Rachelle from "../assets/images/rachelle.jpg";
import Jhanra from "../assets/images/jhanra.jpg";

// Reusable Modal Component
const Modal = ({ open, onClose, title, image, description }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative z-10 bg-white rounded-2xl p-8 w-[650px] max-w-[95%] shadow-2xl">
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
            className="w-48 h-48 rounded-full border-4 border-violet-500 mb-4"
          />
          <h2 className="text-2xl font-bold text-center font-poppins">{title}</h2>
          <div className="text-base text-center mt-4 text-violet-600 px-4 space-y-2 font-poppins">
            {description.split('\n').map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function About() {
  const [selectedModal, setSelectedModal] = useState(null);

  const people = {
    francis: {
      title: "Francis Edgard Ibañez",
      image: FR4NC,
      description:
        "Role: UI/UX Designer & Front-End Developer\nTech Stack: HTML, CSS, JavaScript, React, Vite, NextJS, React Native, Tailwind",
    },
    rachelle: {
      title: "Rachelle Pantinople",
      image: Rachelle,
      description:
        "Role: Front-End Developer\nTech Stack: HTML, CSS, JavaScript, React, React Native",
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
      <main className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-7xl font-bold font-audiowide text-black">
          Who <span className="text-violet-500">We Are</span>
        </h1>
        <p className="text-2xl font-poppins font-bold mt-3 px-20 text-center">
          PrimeArc Devs{" "}
          <span className="font-normal">
            is a team of passionate developers offering high-quality web and
            mobile app <br /> solutions for businesses of all sizes. With a
            collaborative and innovative mindset, we aim to <br /> deliver
            projects that exceed expectations.
          </span>
        </p>

        <div className="flex flex-row gap-10 mt-20 flex-wrap justify-center">
          <button onClick={() => setSelectedModal("francis")}>
            <img
              src={FR4NC}
              className="w-60 h-60 rounded-full border-4 border-violet-500"
              alt="Francis"
            />
            <p className="mt-5 text-center text-2xl font-poppins font-extrabold">
              Francis Edg<span className="text-violet-500 font-poppins">ard Ibañez</span>
            </p>
          </button>

          <button onClick={() => setSelectedModal("rachelle")}>
            <img
              src={Rachelle}
              className="w-60 h-60 rounded-full border-4 border-violet-500"
              alt="Rachelle"
            />
            <p className="mt-5 text-center text-2xl font-poppins font-extrabold">
              Rachelle <span className="text-violet-500">Pantinople</span>
            </p>
          </button>

          <button onClick={() => setSelectedModal("jhanra")}>
            <img
              src={Jhanra}
              className="w-60 h-60 rounded-full border-4 border-violet-500"
              alt="Jhanra"
            />
            <p className="mt-5 text-center text-2xl font-poppins font-extrabold">
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
