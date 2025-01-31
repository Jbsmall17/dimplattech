"use client"
import React, { FormEvent, useState, useEffect } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Spinner from './Spinner';
import toast, {Toaster} from 'react-hot-toast';

interface CustomFormProps {
  status: 'sending' | 'error' | 'success' | null; 
  message: string | Error | null;              
  onValidated: (formData: { EMAIL: string }) => void; 
}



export default function Subscribe() {
  return (
    <section
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
    </section>
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
    setEmail('')
  }

  useEffect(() => {
    if (status === "success") {
      toast.success("Thank you for subscribing!");
    } else if (status === "error") {
      toast.error("An error occurred. Please try again.");
    }
  }, [status, message]);

  return (
    <form onSubmit={handleSubmit} className='flex-1'>
      <Toaster />
    <div className='w-full relative h-[42px] sm:h-[48px]'>
        <input 
          className='input-el h-full p-3 w-full rounded-full outline-none focus:border-2 focus:border-black ' 
          type="text" 
          placeholder='Enter your email address'
          value={email}
          onChange={(e)=>setEmail(e.target.value)} 
        />
        <button 
          className='absolute z-10 top-[50%] right-3 leading-none sm:leading-none p-1 sm:p-2 -translate-y-[50%]  w-[86px] sm:w-[94px]  h-[28px] sm:h-[32px] rounded-full bg-black text-white text-sm sm:text-base hover:bg-white hover:text-black hover:border hover:border-black duration-500 transition-all'
        >
          {status == "sending" ? <Spinner /> : 'Subscribe'}
        </button>
    </div>
  </form>
  )
}