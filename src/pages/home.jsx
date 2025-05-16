import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from '../components/navbar';
import Platform from '../components/platform';

// Images
import Devs from "../assets/images/developers 1.png";

function Home() {
  useEffect(() => {
    document.title = "Home | PrimeArc Devs";
  }, []);

  return (
    <div>
      <Navbar />

      <main className='flex flex-col items-center justify-center px-4 mt-40'>
        {/* Heading Section */}
        <div className='text-center'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold font-audiowide text-violet-500 flex flex-col md:flex-row justify-center items-center gap-2'>
            PrimeArc <span className='text-black'>Devs</span>
          </h1>
          <p className='text-xl md:text-2xl font-poppins mt-4 max-w-3xl mx-auto'>
            “Innovative solutions for your web and mobile development needs.”
          </p>
        </div>

        {/* Contact Button */}
        <Link to="/contact">
          <button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-full mt-10 text-xl md:text-2xl'>
            Contact us
          </button>
        </Link>

        {/* Description */}
        <p className='text-lg md:text-2xl font-poppins mt-20 text-center max-w-5xl px-6'>
          At PrimeArc Devs, we specialize in creating impactful digital solutions tailored to meet your business needs.
          From elegant websites to powerful mobile apps, we're here to bring your ideas to life.
        </p>

        {/* Platform Section */}
        <div className='mt-16 w-full'>
          <Platform />
        </div>

        {/* Final Call-to-Action Section */}
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-20 px-4'>
          <div className='text-center md:text-left max-w-xl'>
            <p className='font-poppins font-extrabold text-2xl md:text-4xl'>
              Need a Website or Mobile App? <br />
              Let's Build It Together!
            </p>
            <Link to="/contact">
              <button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-full mt-6 text-xl md:text-2xl'>
                Start Your Project
              </button>
            </Link>
          </div>
          <img src={Devs} alt="Developers" className='w-full max-w-md md:max-w-xl' />
        </div>
      </main>
    </div>
  );
}

export default Home;
 