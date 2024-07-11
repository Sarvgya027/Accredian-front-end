import { Facebook, Instagram, Linkedin, Plus, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#282828] px-4 sm:px-6 lg:px-36 pb-8">
        <div className="flex flex-col justify-center py-8 gap-y-4 items-center lg:flex-row lg:justify-between">
          <img className="w-20 h-7 lg:w-32 lg:h-10" src="/logo2.png" alt="" />

          <div className="text-center lg:text-right">
            <button className="btn btn-sm sm:btn-md bg-[#1A73E8] text-white border-none">Schedule 1-on-1 Call Now</button>
            <p className="mt-2 text-sm sm:text-sm text-white">Speak With Our Learning Advisor</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 text-white">
          <div className="flex flex-col gap-y-4 md:w-[250px]">
            <h1 className="font-semibold text-2xl underline">Programs</h1>

            <a href="#" className="flex justify-between">Data Science & AI <Plus /></a>
            <a href="#" className="flex justify-between">Product Management <Plus /></a>
            <a href="#" className="flex justify-between">Business Analytics <Plus /></a>
            <a href="#" className="flex justify-between">Digital Transformation <Plus /></a>
            <a href="#" className="flex justify-between">Business Management <Plus /></a>
            <a href="#" className="flex justify-between">Strategy & Leadership <Plus /></a>
            <a href="#" className="flex justify-between">Senior Management <Plus /></a>
            <a href="#" className="flex justify-between">Fintech <Plus /></a>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="font-semibold text-2xl underline">Contact</h2>

            <a href="#">Email us (For Data Science Queries): admissions@accredian.com</a>
            <a href="#">Email us (For Product Management Queries): pm@accredian.com</a>
            <a href="#">Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</a>
            <a href="#">Product Management Admission Helpline: +91 9625811095</a>
            <a href="#">Enrolled Student Helpline: +91 7969322507</a>
            <a href="#">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,</a>
            <a href="#">Why Accredian</a>
            <p>Follow Us</p>
            <div className="flex gap-x-8 mt-8 justify-between">
              <a href="#"><Facebook /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Youtube /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 place-items-center md:place-items-start">
            <a href="#">Accredian</a>
            <a href="#">About</a>
            <a href="#">Career</a>
            <a href="#">Blog</a>
            <a href="#">Admission Policy</a>
            <a href="#">Referral Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Service</a>
            <a href="#">Master FAQs</a>
          </div>
        </div>
      </div>
    </>
  )
}