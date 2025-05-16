import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { FaFolderOpen } from 'react-icons/fa';

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | PrimeArc Devs";
  }, []);

  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-2xl w-full text-center">
          <FaFolderOpen className="w-16 h-16 sm:w-20 sm:h-20 text-violet-500" />
          <h1 className="text-2xl sm:text-4xl font-bold mt-5">Portfolio</h1>
          <p className="text-base sm:text-lg mt-3 text-gray-700">
            We're currently working on dynamic projects and mobile applications. <br className="hidden sm:block" />Stay tuned for updates!
          </p>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
