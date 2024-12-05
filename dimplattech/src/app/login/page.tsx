"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import dimplatWallpaper from "../../assests/dimplat-wallpaper.png"
import Image from 'next/image'
import { FaEyeSlash } from 'react-icons/fa6'
import { FaEye } from "react-icons/fa6";
import { app } from '@/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Spinner from '@/components/Spinner'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function page() {
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const auth = getAuth(app)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [signInObj,setSignInObj] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setSignInObj({
            ...signInObj,
            [name] : value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCrendential)=>{
            setIsLoading(false)
            const user  = userCrendential.user
            user.getIdToken()
            .then((token)=>{
                sessionStorage.setItem('accessToken', token)
                router.push("/dashboard")
            })
          })
          .catch(()=>{
            setIsLoading(false)
            toast.error('either email/password is incorrect')
            // alert(error.message)
          })
    }

    const {email, password} = signInObj

  return (
    <main className='bg-[#f4f4f4] px-[5%] min-h-[100vh] w-full flex items-center'>
        <Toaster />
        <div className='flex flex-row h-[90vh] w-full bg-white rounded-lg gap-2 lg:gap-4'>
            <div className='flex-[2] hidden sm:block'>
                <Image  className='h-full rounded-tl-lg rounded-bl-lg' src={dimplatWallpaper} alt="dimplat wallpaper" />
            </div>
            <div className='flex-[3] py-4 lg:py-6 px-4 sm:px-6 lg:px-10'>
                <h2 className='text-xl font-semibold text-black mb-1'>Welcome Back!</h2>
                <p className='text-base text-black mb-4'>Let&apos;s continue from where we stopped</p>
                <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2 mb-4'>
                    <label className='text-base font-semibold'>Email</label>
                    <input
                        className='border border-[#d9d9d9] outline-none focus:border-[#219dd0] hover:border-[#219dd0] leading-none rounded-md py-3 px-2' 
                        type='text' 
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Email' 
                    /> 
                </div>
                <div className='flex flex-col gap-2 mb-1'>
                    <label className='text-base font-semibold'>Password</label>
                    <div className='relative'>
                        <input
                            className='w-full h-full border border-[#d9d9d9] outline-none focus:border-[#219dd0] hover:border-[#219dd0] leading-none rounded-md py-3 px-2' 
                            type={ isPasswordVisible ? 'text' : 'password'} 
                            name='password'
                            value={password}
                            onChange={handleChange}
                            placeholder='password' 
                        />
                        {
                            isPasswordVisible ? 
                            <FaEye
                                onClick={()=> setIsPasswordVisible(!isPasswordVisible)} 
                                className='cursor-pointer absolute right-2 top-[50%] -translate-y-[50%]' 
                            /> 
                            : 
                            <FaEyeSlash
                                onClick={()=> setIsPasswordVisible(!isPasswordVisible)} 
                                className='cursor-pointer absolute right-2 top-[50%] -translate-y-[50%]' 
                            />    
                        } 
                    </div>
                </div>
                <p className='text-sm text-black mb-4'>Forgot your Password? <Link href='/reset-password' className='text-[#219dd0] hover:underline'>Reset Now!</Link></p>
                <button 
                    disabled={ email != "" && password != "" ? false : true} 
                    type='submit' className={`w-full rounded-lg bg-[#219dd0] text-center leading-none py-3 text-white mb-1 ${email != "" && password && 'hover:bg-white hover:text-[#219dd0] hover:border hover:border-[#219dd0] transition duration-500'}`}
                >
                    { !isLoading ? "Log In" : <Spinner /> }
                </button>
                </form>
                <p className='text-sm text-center'>
                    Not member yet? <a href='/signup' className='text-[#219dd0] hover:underline'>Sign Up</a>
                </p>       
            </div>
        </div>
    </main>
  )
}
