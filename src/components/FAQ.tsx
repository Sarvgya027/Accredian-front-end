import { ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <>
    <div className="flex text-center justify-center items-center mx-auto px-28 my-8">

      <div className="">
        <div className="font-semibold text-xl m-8 border-b pb-4">
          <h1>Frequently Asked <span className="text-[#1A73E8]">Questions</span></h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-8 justify-center items-center">
          <div className="flex flex-col p-8 gap-y-4">
            <button className="btn btn-outline btn-wide ">Eligibility</button>
            <button className="btn btn-outline">How To Use?</button>
            <button className="btn btn-outline">Terms & Conditions</button>
          </div>

          <div className="flex flex-col gap-y-6 text-left">
            <p className="text-[#1A73E8] font-bold flex justify-between">Do I need to have prior Product Management and Project Management experience to enroll in the program? <span><ChevronDown /></span></p>

            <p className="relative -top-4 left-4 text-sm">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.</p>

            <p className="flex justify-between">What is the minimum system configuration required? <span><ChevronDown /></span></p>
          </div>
        </div>
      </div>
    </div>


    <div className="mx-4 md:mx-12 lg:px-20 my-20">
      <img src="/div.cta-grad.png" alt="" />
    </div>
    </>
  )
}