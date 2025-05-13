import { Link } from 'react-router-dom'

//Components
import Navbar from '../components/navbar'
import Platform from '../components/platform'

//Images
import Devs from "../assets/images/developers 1.png"

function home() {
  return (
    <div>
        <Navbar />
      <main className='flex flex-col justify-center items-center'>
        <div className='text-center mt-100'>
          <h1 className='text-8xl font-bold font-audiowide text-violet-500 flex gap-5'>PrimeArc <h1 className='text-black'>Devs</h1></h1>
        <p className='text-2xl font-poppins mt-3'>
          “Innovative solutions for your web and 
           mobile development needs.”
        </p>
        </div>
        <Link to="/contact"><button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full mt-10 w-66 h-18 text-3xl'>Contact us</button></Link>

        <p className='text-3xl font-poppins mt-90 text-center pl-50 pr-50'>At PrimeArc Devs, we specialize in creating impactful digital solutions tailored to meet your business needs. From elegant websites to powerful mobile apps, we're here to bring your ideas to life.</p>

        <Platform />

        <div className='flex flex-row justify-center items-center gap-20 mt-30'>
          <div className=''>
            <p className='font-poppins font-extrabold text-4xl'>Need a Website or Mobile App? <br /> Let's Build It Together!</p>
            <Link to="/contact"><button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full mt-10 w-76 h-18 text-3xl'>Start Your Project</button></Link>
          </div>
          <img src={Devs} />
        </div>
      </main>
    </div>
  )
}

export default home
