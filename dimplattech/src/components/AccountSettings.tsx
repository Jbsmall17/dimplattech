import React from 'react'
import { IoSearch } from "react-icons/io5"


export default function AccountSettings() {
  return (
    <div className='pl-4 xl:pl-6 pr-4 md:pr-12 xl:pr-16 pt-4 pb-12 md:pt-8  xl:py-8 flex-1 md:max-h-[500px] overflow-y-scroll'>
    <div className='rounded-lg bg-white'>
        <div className='pt-4 md:pt-6 xl:pt-10 pr-[5%] md:pr-[10%] flex justify-end mb-4 lg:mb-6'>
            <div className='relative'>
                <IoSearch className='absolute top-[50%] text-[#ada7a7] -translate-y-[50%] left-4'/>
                <input className='h-full rounded-lg bg-[#f4f4f4] outline-none w-[300px] py-2 pl-10' type='text' placeholder='Search' />
            </div>
        </div>
        <div className='py-3 md:py-4 pl-6 rounded-lg bg-gradient-to-r from-[#bbd4f3] to-[#fcf5e3]'>
            <p>Account Settings</p>
        </div>
        <form action="" className='px-[5%] md:px-[7.5%] xl:px-[10%] pt-4 md:pt-6 xl:pt-10 pb-4 md:pb-6 xl:pb-8'>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-[#808080] text-lg'>amudalatmusa@gmail.com</p>
                <button className='h-[40px] flex items-center px-8 rounded-lg bg-[#219dd0] text-white hover:bg-white hover:text-[#219dd0] hover:border hover:border-[#219dd0] transition duration-500'>Edit</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-4 mt-6 sm:mt-8 lg:mt-12 xl:mt-16'>
                <div className='flex flex-col gap-2'>
                    <label className='text-xl'>Full Name</label>
                    <input
                        className='rounded-lg p-2 bg-[#f4f4f4] focus:outline-none' 
                        type='text' placeholder='Your First Name' 
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-xl'>Nick Name</label>
                    <input 
                        className='rounded-lg p-2 bg-[#f4f4f4] focus:outline-none'                        
                        type='text' placeholder='Your Nick Name' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-xl'>Gender</label>
                    <input 
                        className='rounded-lg p-2 bg-[#f4f4f4] focus:outline-none'
                        type='text' placeholder='Your Gender' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-xl'>Country</label>
                    <input
                        className='rounded-lg p-2 bg-[#f4f4f4] focus:outline-none' 
                        type='text' placeholder='Your Country Name' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-xl'>Language</label>
                    <input
                        className='rounded-lg p-2 bg-[#f4f4f4] focus:outline-none' 
                        type='text' placeholder='Language' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-xl'>Time Zone</label>
                    <input 
                        className='rounded-lg p-2 bg-[#f4f4f4] focus:outline-none'
                        type='text' placeholder='Your Time zone' />
                </div>
            </div>
            <div className='flex justify-center mt-6 mt-8 lg:mt-10 xl:mt-12'>
                <button className='h-[40px] flex items-center px-4 rounded-lg text-white bg-[#219dd0] hover:bg-white hover:text-[#219dd0] hover:border hover:border-[#219dd0] transition duration-500'>Save Changes</button>
            </div>
        </form>
    </div>
    </div>
  )
}
