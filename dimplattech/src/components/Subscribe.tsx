"use client"
import React, { FormEvent, useState } from 'react'
import { motion } from "motion/react"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Spinner from './Spinner';
import toast, {Toaster} from 'react-hot-toast';

interface CustomFormProps {
  status: 'sending' | 'error' | 'success' | null; 
  message: string | Error | null;              
  onValidated: (formData: { EMAIL: string }) => void; 
}



export default function Subscribe() {
  console.log(process.env.NEXT_PUBLIC_MAILCHIMP_ENDPOINT)
  return (
    <motion.section 
      initial={{opacity:0, y: 50}} 
      whileInView={{opacity:1, y: 0}} 
      transition={{ delay: 0.25}} 
      viewport={{once: true}}
      className='bg-[#219dd0] px-[5%] py-8 sm:py-12 lg:py-16 flex flex-col sm:flex-row gap-8 sm:gap-2 justify-between sm:items-center mb-16'>
      <div className='flex-1 lg:flex-[2]'>
        <p className='text-xl text-white'>Subscribe to Our News Letter</p>
        <p className='text-sm text-white'>Subscribe today and get special offers, coupons and news</p>
      </div>
      <MailchimpSubscribe
        url={process.env.NEXT_PUBLIC_MAILCHIMP_ENDPOINT || ''}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </motion.section>
  )
}


function CustomForm({status,message,onValidated}:CustomFormProps){
  const [email,setEmail] = useState("")
  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (!email.trim()){
      toast.error("please provide a an email address")
      return
    }
    if(!email.includes('@')){
      toast.error("Please enter a valid email address")
      return 
    }

    onValidated({EMAIL : email})

    switch(message){
      case "You're already subscribed, your profile has been updated. Thank you!":
        toast.error("Email already exists!");
        break;
      case "Thank you for subscribing!":
        toast.success("Thank you for subscribing!");
        break;
      default:
          toast.error("An error ocurred. Please try again")
    }
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex-1'>
      <Toaster />
    <div className='w-full relative'>
        <input 
          className='input-el h-full p-3 w-full rounded-full' 
          type="text" 
          placeholder='Enter your email address'
          value={email}
          onChange={(e)=>setEmail(e.target.value)} 
        />
        <button 
          className='absolute z-10 top-[50%] right-3 leading-none p-2 -translate-y-[50%] w-[84px] h-[32px] rounded-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black duration-500 transition'
        >
          {status == "sending" ? <Spinner /> : 'Subscribe'}
        </button>
    </div>
  </form>
  )
}