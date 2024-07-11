import { useState } from "react";
import { PopupForm } from "./PopupForm";

export default function Belowhero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="mt-12 mb-12 mx-auto">
      <div className="bg-[#EEF5FF] text-center w-auto h-auto flex flex-col justify-center pt-4 items-center gap-y-6 ">
        <h1 className="font-semibold text-xl m-4">How Do I <span className="text-[#1A73E8]">Refer?</span></h1>

        <img src="/Refer1.png" alt="" className="object-cover" />

        <button onClick={openPopup} className="btn btn-sm w-26 font-sm h-10 md:w-[230px] md:h-16 lg:text-xl bg-[#1A73E8] border-none text-white mb-12 ">Refer now</button>

      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  )
}