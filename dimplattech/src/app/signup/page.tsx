import React from 'react'
import dimplatWallpaper from "../../assests/dimplat-wallpaper.png"
import Image from 'next/image'


export default function page() {
  return (
    <main className='bg-[#f4f4f4] px-[5%] py-[25px] sm:py-0 min-h-[100vh] w-full flex items-center'>
        <div className='flex flex-row min-h-full sm:h-[92.5vh] w-full bg-white rounded-lg gap-2 lg:gap-4'>
            <div className='flex-[2] hidden sm:block'>
                <Image  className='h-full rounded-tl-lg rounded-bl-lg' src={dimplatWallpaper} alt="dimplat wallpaper" />
            </div>
            <div className='flex-[3] py-4 px-4 sm:px-6 lg:px-10'>
                <h2 className='text-xl font-semibold text-black mb-1'>One last step, let's get to know you</h2>
                <p className='text-base text-black mb-3'>Create an account with us</p>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>First Name</label>
                        <input
                            className='border border-[#d9d9d9] text-xs leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='First Name' 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Last Name</label>
                        <input
                            className='border text-xs border-[#d9d9d9] leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='Last Name' 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Phone Number</label>
                        <input
                            className='border text-xs border-[#d9d9d9] leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='Phone number' 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Email Address</label>
                        <input
                            className='border text-xs border-[#d9d9d9] leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='youremail@example.com' 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Country</label>
                        <input
                            className='border text-xs border-[#d9d9d9] leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='select your country' 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>State of Residence</label>
                        <input
                            className='border text-xs border-[#d9d9d9] leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='enter your state of residence' 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Password</label>
                        <input
                            className='border text-xs border-[#d9d9d9] leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='enter password' 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Confirm Password</label>
                        <input
                            className='border text-xs border-[#d9d9d9] leading-none rounded-md py-2 px-2' 
                            type='text' 
                            placeholder='enter password again' 
                        /> 
                    </div>
                </div>
                <div className='mt-1 flex flex-row items-center gap-1 mb-4'>
                    <input type='checkbox' name='terms' />
                    <span className='text-xs'>I Accept the <span className='text-[#219dd0]'>Terms</span></span>
                </div>
                <button className='w-full rounded-lg bg-[#219dd0] text-center leading-none py-3 text-white mb-1'>
                    Register
                </button>
                <p className='text-xs text-center'>
                    Already have an Account? <a href='/login' className='text-[#219dd0]'>Log in</a>
                </p> 
            </div>
        </div>
    </main>
  )
}
