import { useState } from "react";
import { PopupForm } from "./PopupForm";

export default function Referralbenefits() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="mx-auto flex flex-col gap-y-8 mt-8 justify-center items-center">
      <h1 className="font-semibold text-xl m-4">What Are The <span className="text-[#1A73E8]">Referral Benefits</span></h1>

      <img src="../public/prices.png" alt="" />

      <button onClick={openPopup} className="btn btn-sm w-26 font-sm h-10 md:w-[230px] md:h-16 lg:text-xl bg-[#1A73E8] border-none text-white mb-12">Refer now</button>

      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </div>
    
  )
}