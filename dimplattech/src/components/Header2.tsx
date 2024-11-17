"use client"
import Image from 'next/image'
import React from 'react'
import dimplatLogo from "../assests/dimplattect-logo.png"
import { useRouter } from 'next/navigation'

export default function Header2() {
    const router = useRouter()
  return (
    <header className='flex bg-[#0F1022] justify-between items-center px-[5%] py-2'>
        <div>
            <Image 
                src={dimplatLogo} 
                alt='dimplat tech logo' 
                height={60}
                onClick={()=>router.push("/")}
                className='cursor-pointer'
            />
        </div>
    </header>
  )
}
