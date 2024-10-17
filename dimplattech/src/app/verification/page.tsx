"use client"
import React, { useState } from 'react'
import verificationImg from "../../assests/verification-image.png"
import Image from 'next/image'
import OtpInput from 'react-otp-input'
import { productDesign } from "../../data/data"

export default function page() {
    const [otp, setOtp] = useState('');
    return (
    <main className='bg-[#f4f4f4] px-[5%] min-h-[100vh] w-full flex items-center'>
        <div className='flex flex-row h-[90vh] w-full bg-white rounded-lg gap-2 lg:gap-4'>
            <div className='flex-[2] hidden sm:block'>
                <Image  
                    className='h-full rounded-tl-lg rounded-bl-lg' 
                    src={verificationImg} 
                    alt="dimplat wallpaper" 
                />
            </div>
            <div className='flex-[3] py-4 lg:py-6 px-4 sm:px-6 lg:px-10'>
                <h2 className='text-xl font-semibold text-black mb-1'>Please verify your email address</h2>
                <p className='text-base text-[#808080] mb-6'>
                    Enter the six digit code we sent to <span className='text-black text-xl font-semibold'>example@gmail.com</span> to verify your account. Kindly check your email
                </p>
                <div className='mb-6 flex justify-center'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderSeparator={<span></span>}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={"flex flex-row gap-3"}
                        inputStyle={"w-[50px] h-[50px] bg-[#f5f5f5] rounded-md otp-input"}
                    />
                </div>
                <button className='w-full rounded-lg bg-[#219dd0] text-center leading-none py-3 text-white mb-4'>
                    Confirm
                </button>
                <p className='text-xs text-center'>
                    Didn’t receive any code? <span className='text-[#219dd0]'>Resend code!</span>
                </p>    
            </div>

        </div>
    </main>
  )
}
