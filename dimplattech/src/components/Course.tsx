"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
interface courseProp{
    image: StaticImageData,
    name: string,
    desc: string,
    courseRoute: string
  }

export default function Course({image,name,desc,courseRoute }: courseProp) {


  return (
    <motion.div 
      initial={{opacity:0, y: 50}} 
      whileInView={{opacity:1, y: 0}} 
      transition={{ delay: 0.25}} 
      viewport={{once: true}}
      className='p-3 bg-white rounded-lg'
    >
      <div className='w-full mb-4'>
        <Image style={{aspectRatio: 4/3}} className='block w-full rounded-lg' src={image} alt="course pictoral represantation" />
      </div>
      <p className='mb-2 sm:mb-4 text-[#219dd0] text-xl'>{name}</p>
      <p className='text-base text-[#4d4d4d] min-h-[120px]'>{desc}</p>
      <div className='flex justify-center mt-2'>
        <Link href={courseRoute}>
        <button 
          className='border border-[#219dd0] leading-none bg-white py-2 px-8 rounded-lg hover:bg-[#219dd0] hover:text-white transition duration-500 ease-linear'>
          Register
        </button>
        </Link>
      </div>
    </motion.div>
  )
}
