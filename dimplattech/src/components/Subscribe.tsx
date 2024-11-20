"use client"
import React from 'react'
import { motion } from "motion/react"

export default function Subscribe() {
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
      <div className='flex-1'>
        <div className='w-full relative'>
            <input className='input-el h-full p-3 w-full rounded-full' type="text" placeholder='Enter your email address' />
            <button className='absolute z-10 top-[50%] right-3 leading-none p-2 -translate-y-[50%] rounded-full bg-black text-white'>Subscribe</button>
        </div>
      </div>
    </motion.section>
  )
}
