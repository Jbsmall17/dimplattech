import React from 'react'
import dimplatWallpaper from "../../assests/dimplat-wallpaper.png"
import Image from 'next/image'
import { FaEyeSlash } from 'react-icons/fa6'

export default function page() {
  return (
    <main className='bg-[#f4f4f4] px-[5%] min-h-[100vh] w-full flex items-center'>
        <div className='flex flex-row h-[90vh] w-full bg-white rounded-lg gap-2 lg:gap-4'>
            <div className='flex-[2] hidden sm:block'>
                <Image  className='h-full rounded-tl-lg rounded-bl-lg' src={dimplatWallpaper} alt="dimplat wallpaper" />
            </div>
            <div className='flex-[3] py-4 lg:py-6 px-4 sm:px-6 lg:px-10'>
                <h2 className='text-xl font-semibold text-black mb-1'>Welcome Back!</h2>
                <p className='text-base text-black mb-4'>Let's continue from where we stopped</p>
                <div className='flex flex-col gap-2 mb-4'>
                    <label className='text-base font-semibold'>Phone Number/Email</label>
                    <input
                        className='border border-[#d9d9d9] leading-none rounded-md py-3 px-2' 
                        type='text' 
                        placeholder='phone number/Email' 
                    /> 
                </div>
                <div className='flex flex-col gap-2 mb-1'>
                    <label className='text-base font-semibold'>Password</label>
                    <div className='relative'>
                        <input
                            className='w-full h-full border border-[#d9d9d9] leading-none rounded-md py-3 px-2' 
                            type='password' 
                            placeholder='phone number' 
                        /> 
                        <FaEyeSlash className='absolute right-2 top-[50%] -translate-y-[50%]' />    
                    </div>
                </div>
                <p className='text-xs text-black mb-4'>Forgot your Password? <span className='text-[#219dd0]'>Reset Now!</span></p>
                <button className='w-full rounded-lg bg-[#219dd0] text-center leading-none py-3 text-white mb-1'>
                    Log In
                </button>
                <p className='text-xs text-center'>
                    Not member yet? <a href='/signup' className='text-[#219dd0]'>Sign Up</a>
                </p>       
            </div>
        </div>
    </main>
  )
}
