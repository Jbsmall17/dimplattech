"use client"
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import dimplatWallpaper from "../../assests/dimplat-wallpaper.png"
import Image from 'next/image'
import {app,database } from '@/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import bcrypt from "bcryptjs"
import toast, { Toaster } from 'react-hot-toast';
import Spinner from '@/components/Spinner'
import { useRouter } from 'next/navigation'

interface SignUpObj {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    country: string;
    stateOfResidence: string;
    password: string;
    cPassword: string;
    email: string;
    isTermsAgreed: boolean;
  }


export default function page() {
    const router = useRouter()
    const auth = getAuth(app)
    const collectionRef = collection(database,"users")
    const [isLoading,setIsLoading] = useState(false)
    const [signUpObj,setSignUpObj] = useState<SignUpObj>({
        firstName : "",
        lastName: "",
        phoneNumber: "",
        country: "",
        stateOfResidence: "",
        password: "",
        cPassword: "",
        email: "",
        isTermsAgreed: false
    })
    const [errorObj, setErrorObj] = useState({
        firstName : false,
        lastName: false,
        phoneNumber: false,
        country: false,
        stateOfResidence: false,
        password: false,
        cPassword: false,
        email: false
    })

    const  {firstName,lastName,phoneNumber,country,stateOfResidence,password,cPassword, email, isTermsAgreed} = signUpObj


    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const {name, value, checked} = event.target
        let newValue = value;
        if(name == "firstName" || name == "lastName" || name == "country" || name == "stateOfResidence"){
            let filteredValue = value.replace(/\d/g,"")
            newValue = filteredValue
        }else if(name == "phoneNumber"){
            let filteredValue = value.replace(/[a-zA-Z]/g,"")
            newValue = filteredValue
        }
        setSignUpObj({
            ...signUpObj,
            [name] : name == "isTermsAgreed" ? checked : newValue
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(signUpObj.password, saltRounds)
        for(let x in signUpObj){
            if(signUpObj[x as keyof SignUpObj] === ""){
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        [x] : true
                    }
                })
            }
            else{
                const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) 
                if(x == 'email' && !isEmailValid){
                    return setErrorObj((prev) => {
                        return {
                            ...prev,
                            [x] : true
                        }
                    })
                
                }
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        [x] : false
                    }
                })
            }
        }
        if(isTermsAgreed){
            const emailTestPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            const isEmailValid = emailTestPattern.test(email)
            if(firstName != "" && lastName != "" && phoneNumber != "" && country != "" && stateOfResidence != "" && password == cPassword && isEmailValid){
                setIsLoading(true)
                createUserWithEmailAndPassword(auth,signUpObj.email,signUpObj.password)
                .then(()=>{
                    setIsLoading(false)
                    toast.success("user successfully created")
                    router.push("/login")
                    // console.log(response.user, "user successfully created")
                    addDoc(collectionRef, {
                        ...signUpObj,
                        password : hashPassword,
                        cPassword : hashPassword
                    })
                    .then(()=>{
                        console.log('user info added')
                    })
                    .catch((err)=>{
                        console.log(err.message)
                    })
                })
                .catch((err)=>{
                    setIsLoading(false)
                    toast.error("email has already been used")
                    console.log(err)
                })

            }
        }
    }

  return (
    <main className='bg-[#f4f4f4] px-[5%] py-[25px] sm:py-0 min-h-[100vh] w-full flex items-center'>
        <Toaster />
        <div className='flex flex-row min-h-full sm:h-[92.5vh] w-full bg-white rounded-lg gap-2 lg:gap-4'>
            <div className='flex-[2] hidden sm:block'>
                <Image  className='h-full rounded-tl-lg rounded-bl-lg' src={dimplatWallpaper} alt="dimplat wallpaper" />
            </div>
            <form onSubmit={handleSubmit} className='flex-[3] py-4 px-4 sm:px-6 lg:px-10'>
                <h2 className='text-xl font-semibold text-black mb-1'>One last step, let&apos;s get to know you</h2>
                <p className='text-base text-black mb-3'>Create an account with us</p>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>First Name</label>
                        <input
                            className={`border ${errorObj.firstName ? "border-red-500" : 'border-[#d9d9d9]' } outline-none focus:border-[#219dd0] hover:border-[#219dd0] text-xs leading-none rounded-md py-2 px-2`}
                            type='text' 
                            placeholder='First Name'
                            name='firstName' 
                            value={firstName}
                            onChange={handleChange}
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Last Name</label>
                        <input
                                className={`border text-xs ${errorObj.lastName ? "border-red-500" : 'border-[#d9d9d9]' } outline-none hover:border-[#219dd0] leading-none rounded-md py-2 px-2`}
                            type='text' 
                            placeholder='Last Name'
                            name='lastName'
                            value={lastName}
                            onChange={handleChange} 
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Phone Number</label>
                        <input
                            className={`border text-xs ${errorObj.phoneNumber ? "border-red-500" : 'border-[#d9d9d9]'} outline-none hover:border-[#219dd0] leading-none rounded-md py-2 px-2`} 
                            type='text' 
                            placeholder='Phone number'
                            name='phoneNumber' 
                            value={phoneNumber}
                            onChange={handleChange}
                            maxLength={11}
                        />
                        { phoneNumber.length > 1 && phoneNumber.length < 11 && <p className='text-red-500 text-sm'>phoneNumber must be 11 digit</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Email Address</label>
                        <input
                            className={`border text-xs ${errorObj.email ? "border-red-500" : 'border-[#d9d9d9]'} outline-none hover:border-[#219dd0] leading-none rounded-md py-2 px-2`}
                            type='email' 
                            placeholder='youremail@example.com' 
                            name='email'
                            value={email}
                            onChange={handleChange}
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Country</label>
                        <input
                            className={`border text-xs ${errorObj.country ? "border-red-500" : 'border-[#d9d9d9]' } outline-none hover:border-[#219dd0] leading-none rounded-md py-2 px-2`}
                            type='text' 
                            placeholder='select your country' 
                            name='country'
                            value={country}
                            onChange={handleChange}
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>State of Residence</label>
                        <input
                            className={`border text-xs ${errorObj.stateOfResidence ? "border-red-500" : 'border-[#d9d9d9]' } outline-none hover:border-[#219dd0] leading-none rounded-md py-2 px-2`}
                            type='text' 
                            placeholder='enter your state of residence' 
                            name='stateOfResidence'
                            value={stateOfResidence}
                            onChange={handleChange}
                        /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Password</label>
                        <input
                            className={`border text-xs ${errorObj.password ? "border-red-500" : 'border-[#d9d9d9]'} outline-none hover:border-[#219dd0] leading-none rounded-md py-2 px-2`}
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleChange} 
                            placeholder='enter password'
                        />
                        {password.length > 1 && password.length < 8 && <p className='text-red-500 text-sm'>password must be atleast 8 characters</p>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base font-semibold'>Confirm Password</label>
                        <input
                            className={`border text-xs ${errorObj.cPassword ? "border-red-500" : 'border-[#d9d9d9]' } outline-none hover:border-[#219dd0] leading-none rounded-md py-2 px-2`}
                            type='password'
                            name='cPassword'
                            onChange={handleChange}
                            value={cPassword} 
                            placeholder='enter password again' 
                        /> 
                        {password != cPassword && cPassword.length > 1 && <p className='text-red-500 text-sm'>password does not match</p> }
                    </div>
                </div>
                <div className='mt-2 flex flex-row items-center gap-2 mb-4'>
                    <input 
                        type='checkbox' 
                        checked={isTermsAgreed} 
                        className='h-[18px] w-[18px]' 
                        name='isTermsAgreed'
                        onChange={handleChange} 
                    />
                    <span className='text-sm'>I Accept the <span className='text-[#219dd0]'>Terms</span></span>
                </div>
                <button 
                    type='submit' 
                    disabled={!isTermsAgreed} 
                    className={`w-full rounded-lg bg-[#219dd0] h-[40px] text-center leading-none py-3 text-white mb-2 ${isTermsAgreed && 'hover:bg-white hover:text-[#219dd0] hover:border hover:border-[#219dd0] transition duration-500'}`}>
                    {!isLoading ? "Register" : <Spinner />}
                </button>
                <p className='text-sm text-center'>
                    Already have an Account? <a href='/login' className='text-[#219dd0] hover:underline'>Log in</a>
                </p> 
            </form>
        </div>
    </main>
  )
}
