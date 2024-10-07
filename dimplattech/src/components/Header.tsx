"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import dimplatLogo from "../assests/dimplattect-logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"


export default function Header() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <header className='relative bg-[#0F1022] flex justify-between items-center px-[5%] py-2 gap-6'>
      <div>
        <Image 
            src={dimplatLogo} 
            alt='dimplat tech logo' 
            height={60}
            />
      </div>
      <nav className='hidden sm:flex sm:gap-[25px] md:gap-[50px] lg:gap-[125px] xl:gap-[225px] 2xl:gap-[300px] items-center'>
        <ul className='flex sm:gap-[15px] md:gap-[25px] lg:gap-[35px] xl:gap-[50px] items-center'>
            <li className='h-[22px] cursor-pointer hover:border-b-2 hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap'>Home</li>
            <li className='h-[22px] cursor-pointer hover:border-b-2 hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap'>About Us</li>
            <li className='h-[22px] cursor-pointer hover:border-b-2 hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap'>Courses</li>
            <li className='h-[22px] cursor-pointer hover:border-b-2 hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap'>Our Team</li>
        </ul>
        <div className='flex sm:gap-[5px] md:gap-[15px] lg:gap-[25px] items-center'>
            <button className='w-[98px] h-[36px] flex justify-center items-center text-white text-sm bg-[#219dd0] rounded-lg hover:bg-white hover:text-[#219dd0] hover:border-2 hover:border-[#219dd0] transition-all duration-500 ease-linear'>
                Register
            </button>
            <button className='w-[98px] h-[36px] flex justify-center items-center text-white text-sm hover:border hover:border-white rounded-lg  transition-all duration-500 ease-linear'>
                Log in
            </button>
        </div>
      </nav>
      {
        !isMenuOpen
        ? <GiHamburgerMenu
            onClick={()=> setIsMenuOpen(true)} 
            className='block cursor-pointer sm:hidden text-white text-2xl'
            />
        : <MdClose
            onClick={()=> setIsMenuOpen(false)} 
            className='block cursor-pointer sm:hidden text-white text-2xl'
            />
      }
      <nav className={`px-[5%] ${isMenuOpen ?  "block sm:hidden" : "hidden"} absolute left-0 top-full bg-[#0F1022] w-full`}>
        <ul className='text-[#777A79]'>
            <li className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>Home</li>
            <li className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>About Us</li>
            <li className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>Courses</li>
            <li className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>Our Team</li>
        </ul>
        <div className='text-white mt-8 flex flex-col'>
            <button className='py-2 cursor-pointer bg-[#219dd0] rounded-lg'>Register</button>
            <button className='py-2 cursor-pointer'>Log in</button>
        </div>
      </nav>
    </header>
  )
}
