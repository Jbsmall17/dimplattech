import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoNotifications, IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className='pt-10 bg-white px-10 flex flex-col gap-8'>
        <div className='flex gap-2 items-center'>
            <FaUserCircle className='text-3xl text-[#4d4d4d]' />
            <p className='text-[#4d4d4d] text-lg'>Personal Info</p>
        </div>
        <div className='flex gap-2 items-center'>
            <MdPayment className='text-3xl text-[#4d4d4d]' />
            <p className='text-[#4d4d4d] text-lg'>Payment</p>
        </div>
        <div className='flex gap-2 items-center'>
            <IoNotifications className='text-3xl text-[#4d4d4d]' />
            <p className='text-[#4d4d4d] text-lg'>Notifications</p>
        </div>
        <div className='flex gap-2 items-center'>
            <IoMdSettings className='text-3xl text-[#4d4d4d]' />
            <p className='text-[#4d4d4d] text-lg'>Settings</p>
        </div>
        <div className='flex gap-2 items-center'>
            <IoLogOut className='text-3xl text-[#4d4d4d]' />
            <p className='text-[#4d4d4d] text-lg'>Logout</p>
        </div>
    </div>
  )
}
