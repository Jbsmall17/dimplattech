import React from 'react'
import { FaInstagram,FaFacebookF,FaXTwitter,FaPinterestP,FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className='bg-[#7a7a7a] pt-10 pb-6'>
      <div className='flex flex-row mb-4 px-[5%]'>
        <div className='flex-1 self-end'>
            <p className='text-sm text-[#cfcfcf] mb-2'>Follow Us:</p>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaInstagram />
                </div>
                <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaFacebookF />
                </div>
                <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaXTwitter />
                </div>
                <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
        <div className='flex-1 self-start'>
            <ul className='grid grid-cols-3 text-[#cfcfcf] text-sm pb-10'>
                <li>Home</li>
                <li>About Us</li>
                <li>Help &amp; Support</li>
                <li>Courses</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
                <li>Pricing</li>
                <li>Our Team</li>
                <li>Sitemap</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='px-[4%] text-sm text-[#cfcfcf] mt-2'>&copy; Copyright. All Right Reserved. Dimplattech2023</p>
    </footer>
  )
}
