"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import verificationImg from "../../assests/verification-image.png"
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'
import {app} from '@/firebaseConfig'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import Spinner from '@/components/Spinner'

export default function page() {
    const [email,setEmail] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const auth = getAuth(app)
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        setEmail(value)
    }

    const sendPasswordEmail = () =>{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            setIsLoading(false)
            toast.success('mail sent already. Please check your inbox.')
        })
        .catch(()=>{
            setIsLoading(false)
            toast.error('An error occurred while sending mail.')
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsLoading(true)
        sendPasswordEmail()
    }

    return (
    <main className='bg-[#f4f4f4] px-[5%] min-h-[100vh] w-full flex items-center'>
        <Toaster />
        <div className='flex flex-row h-[90vh] w-full bg-white rounded-lg gap-2 lg:gap-4'>
            <div className='flex-[2] hidden sm:block'>
                <Image  
                    className='h-full rounded-tl-lg rounded-bl-lg' 
                    src={verificationImg} 
                    alt="dimplat wallpaper" 
                />
            </div>
            <div className='flex-[3] py-4 lg:py-6 px-4 sm:px-6 lg:px-10'>
                <h2 className='text-xl font-semibold text-black mb-1'>Password Reset</h2>
                <p className='text-base text-[#808080] mb-6'>
                    Enter your mail address for password reset link
                </p>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2 mb-4'>
                        {/* <label className='text-base font-semibold'>Email</label> */}
                        <input
                            className='border border-[#d9d9d9] outline-none focus:border-[#219dd0] hover:border-[#219dd0] leading-none rounded-md py-3 px-2' 
                            type='text' 
                            name='email'
                            value={email}
                            onChange={handleChange}
                            placeholder='yourmail@example.com' 
                        /> 
                    </div>
                    <button 
                        disabled={email != "" ? false : true} 
                        type='submit' 
                        className={`w-full rounded-lg bg-[#219dd0] text-center leading-none py-3 text-white mb-4 ${email != "" && 'hover:bg-white hover:text-[#219dd0] hover:border hover:border-[#219dd0] transition duration-500'}`}
                    >
                        {isLoading ? <Spinner /> : "Password Reset Link" } 
                    </button>
                </form>
                <p className='text-sm text-center'>
                    Didn’t receive a mail? <span onClick={sendPasswordEmail} className='text-[#219dd0] cursor-pointer'>Resend mail!</span>
                </p>    
            </div>

        </div>
    </main>
  )
}
