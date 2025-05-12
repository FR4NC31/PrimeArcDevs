import { Link } from 'react-router-dom'

//Components
import Navbar from '../components/navbar'
import Platform from '../components/platform'

//Images
import Logo from "../assets/images/logo.png"
import Devs from "../assets/images/developers 1.png"

function home() {
  return (
    <div>
        <Navbar />
      <main className='flex flex-col justify-center items-center'>
        <img src={Logo} className='w-180 absolute mb-120 '/>
        <div className='text-center mt-100'>
          <h1 className='text-8xl font-bold font-audiowide text-violet-500'>PrimeArc Devs</h1>
        <p className='text-2xl font-poppins mt-3'>
          “Innovative solutions for your web and 
           mobile development needs.”
        </p>
        </div>
        <Link to="/contact"><button className='bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full mt-10 w-66 h-18 text-3xl'>Contact us</button></Link>

        <p className='text-2xl font-poppins mt-90 text-center '>At PrimeArc Devs, we specialize in creating impactful digital solutions tailored to meet your business needs. From elegant websites to powerful mobile apps, we're here to bring your ideas to life.</p>

        <Platform />

        <div>
          <p>Need a Website or Mobile App? Let's Build It Together!</p>
          <img src={Devs} />
        </div>
      </main>
    </div>
  )
}

export default home
