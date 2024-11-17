"use client"
import React from 'react'
import dimplatLogo from "../assests/dimplattect-logo.png"
import profileImage from "../assests/profileimage.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProfileHeader() {
    const router = useRouter()

    const handleNavigation = (route : string) =>{
        router.push(route)
      }

  return (
    <header className='flex bg-[#0F1022] justify-between items-center px-[5%] py-2'>
        <div>
            <Image 
                src={dimplatLogo} 
                alt='dimplat tech logo' 
                height={60}
                onClick={()=>handleNavigation("/")}
                className='cursor-pointer'
            />
        </div>
        <div className='flex gap-2 items-center bg-white rounded-lg px-2 py-1'>
            <div className='h-[40px] w-[40px]'>
                <Image
                    src={profileImage}
                    alt='profile image'
                    className='h-full w-full'
                />
            </div>
            <div className='self-center'>
                <p className='text-base text-black leading-none mb-1'>Olawunmi Amudat</p>
                <p className='text-[#878790] text-sm leading-none'>amudalatmusa@gmail.com</p>
            </div>
        </div>
    </header>
  )
}
