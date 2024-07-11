import { Menu } from 'lucide-react';

export default function Navbar() {

  return (
    <>
    <div className="flex justify-between py-4 px-4 md:px-8 lg:px-28 " >
      <div >
        <a href="/">
          <img src="/logo.png" alt="" />
        </a>
      </div>

      <div className=''>
        <div className='flex justify-center items-center gap-x-4 md:hidden'>
          <button className="btn btn-sm btn-primary bg-[#1A73E8] border-none text-white">Courses</button>

          <button className=''> <Menu />   </button>
        </div>

        <div className='hidden md:flex justify-center items-center gap-x-6'>
            <a href="/">Refer & Earn</a>
            <a href="/">Resources</a>
            <a href="/">About us</a>
            <button className='btn btn-sm'>Login</button>
            <button className='btn btn-sm bg-[#1A73E8] border-none text-white'>Try for free</button>
 
          </div>

      </div>
    </div>

    <div className='flex justify-center  mt-6 '>
      <div className='flex justify-center items-center gap-x-8 md:gap-x-12 px-4 md:px-16 lg:gap-x-28 bg-[#ddeafc] rounded-full py-2 max-w-3xl '>
        <a href="">Refer</a>
        <a href="">Benefits</a>
        <a href="">FAQs</a>
        <a href="">Support</a>
      </div>
    </div>
    
    </>
  )
}