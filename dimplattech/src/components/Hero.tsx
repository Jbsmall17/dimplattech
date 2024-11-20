"use client"
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2"
import heroImage1 from "../assests/hero-image-1.png"
import heroImage2 from "../assests/hero-image-2.png"
import Image from 'next/image';
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className='flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6 sm:my-4 sm:my-6 lg:my-10 px-[5%] pt-[60px]'>
      <motion.div 
        initial={{x:"-100%", opacity: 0}} 
        transition={{duration: 0.5, type: "spring", stiffness:100 }} 
        animate={{x:"0", opacity: 1}} 
        className='flex-1'
      >
        <p className='my-4 sm:my-6 lg:my-8 text-2xl sm:text-4xl lg:text-6xl text-[#219dd0] font-bold text-center md:text-start'>Buliding A Tech Commuinty!</p>
        <p className='text-base sm:text-lg text-center md:text-start text-[#777A79] my-4 sm:my-6 lg:mb-8'>
            A community  where one can gain technological
            knowledge/skills and design/build/maintain/
            manage softwares.
        </p>
        <div className='flex gap-4 md:gap-2 justify-center md:justify-start'>
            <button className='w-[120px] h-[36px] rounded-lg bg-[#219dd0] text-white flex justify-center items-center hover:bg-white hover:border hover:border-[#219dd0] hover:text-[#219dd0] transition-all duration-500 ease-linear'>
                Register
            </button>
            <button className='group relative w-[125px] h-[36px] flex gap-1 items-center rounded-lg hover:border hover:border-[#219dd0] transition-all duration-500 ease-linear hover:bg-white'>
                <div className='absolute group-hover:top-1 group-hover:left-2 -z-10 top-0 left-0 h-[30px] w-[30px] bg-[#219dd0] rounded-full transition-all duration-500 ease-linear'></div>
                <p className='ml-2 font-semibold text-black group-hover:text-[#219dd0] whitespace-nowrap'>View Courses</p>
                <HiArrowLongRight className='group-hover:text-[#219dd0] translate-y-[15%]' />
            </button>
        </div>
      </motion.div>
      <div className='flex-1 w-full relative min-h-[300px] md:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px]'>
        <motion.div initial={{scale:0}} animate={{scale: 1}} transition={{delay:0.5, type: "linear",duration:0.5}} className='w-[225px] md:w-[275px] lg:w-[350px] xl:w-[400px] absolute top-0 left-[50%] md:left-16'>
        <Image src={heroImage1} className='w-full h-full -translate-x-[50%] md:-translate-x-[0%]' alt='hero image 1' />
        </motion.div>
        <motion.div initial={{scale:0}} animate={{scale: 1}} transition={{delay:1, ease: "linear",duration:0.5}} className='w-[150px] md:w-[175px] lg:w-[250px] xl:w-[300px] absolute bottom-0 right-[15%] md:right-0'>
        <Image src={heroImage2} className='w-full h-full'  alt='hero image 2'/>
        </motion.div>
      </div>
    </section>
  )
}
