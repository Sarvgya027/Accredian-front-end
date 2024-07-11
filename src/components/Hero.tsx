

import React, { useState } from 'react';
import { PopupForm } from './PopupForm';


const Hero: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="flex justify-center items-center w-full mt-4 container mx-auto ">
      <div className="bg-[#EEF5FF] h-auto w-full max-w-[1000px] shadow-xl rounded-xl mx-4 px-4 sm:px-6 lg:px-8 flex flex-col justify-between md:h-[450px] md:w-[1000px] md:flex-row ">
        <div className="p-4 md:p-8 lg:p-8 text-center mt-2 md:mt-4 md:text-left ">
          <h1 className="text-4xl lg:text-6xl font-bold">Let's learn <br /> & Earn</h1>
          <p className="mt-4 md:mt-8 lg:mt-12 lg:text-3xl text-2xl">Get a chance to win <br />up-to <span className="text-[#1A73E8] font-semibold px-2">Rs. 15,000</span></p>
          <button onClick={openPopup} className="btn border-none w-[150px] text-white bg-[#1A73E8] mt-4 md:mt-8 lg:mt-16">
            Refer Now
          </button>
        </div>
        <img src="/Anniversary.png" className="object-cover rounded-xl " alt="" />
      </div>
      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Hero;
