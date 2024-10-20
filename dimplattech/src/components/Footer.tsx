import React from 'react'
import { FaInstagram,FaFacebookF,FaXTwitter,FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className='bg-[#7a7a7a] pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-4 lg:pb-6'>
      <div className='flex flex-col sm:flex-row gap-4 mb-4 px-[5%]'>
        <div className='flex-1 self-center sm:self-end'>
            <p className='text-sm text-center sm:text-start text-[#cfcfcf] mb-2'>Follow Us:</p>
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
        <div className='flex-1 self-center sm:self-start'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-0 text-[#cfcfcf] text-sm sm:pb-10'>
                <li className='text-center sm:text-start'>Home</li>
                <li className='text-center sm:text-start'>About Us</li>
                <li className='text-center sm:text-start'>Help &amp; Support</li>
                <li className='text-center sm:text-start'>Courses</li>
                <li className='text-center sm:text-start'>Contact us</li>
                <li className='text-center sm:text-start'>Privacy policy</li>
                <li className='text-center sm:text-start'>Pricing</li>
                <li className='text-center sm:text-start'>Our Team</li>
                <li className='text-center sm:text-start'>Sitemap</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='px-[4%] text-sm text-[#cfcfcf] mt-2'>&copy; Copyright. All Right Reserved. Dimplattech2023</p>
    </footer>
  )
}
