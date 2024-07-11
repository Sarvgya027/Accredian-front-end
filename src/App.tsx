// import { ToastContainer } from 'react-toastify'
import './App.css'
import Belowhero from './components/Belowhero'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Referralbenefits from './components/Referralbenefits'

function App() {

  return (

    <div className=" mx-auto">
      <div className='flex justify-center text-center items-center bg-[#ddeafc] text-sm py-2'>
        <h3>Navigate your ideal career path with tailored expert advice. <a className='text-blue-600'>Contact Expert</a></h3>
      </div>

      {/* components starts from here */}
      <div className='container mx-auto'>
        <Navbar />
        <Hero />
      </div>

      <Belowhero />
      <Referralbenefits />
      <FAQ />
      <Footer />

      {/* <ToastContainer position="top-center" /> */}

    </div>

  )
}

export default App

