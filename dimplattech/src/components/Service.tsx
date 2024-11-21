"use client"
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'
import { motion } from 'motion/react' 

interface serviceProps{
    image: StaticImageData,
    children: ReactNode
}

export default function Service({image,children}: serviceProps) {
  return (
    <motion.div 
      initial={{opacity:0, y: 100}} 
      whileInView={{opacity:1, y: 0}} 
      transition={{ delay: 0.25}} 
      viewport={{once: true}}
      className='w-full sm:w-[45%] md:w-[47.5%] xl:w-[31.5%] p-4 border border-[#000000] rounded-lg'>
        <div className='w-full flex justify-center mb-3'>
            <Image style={{aspectRatio: "4/3"}} className='block w-[100%] rounded-lg' src={image} alt="image" />
        </div>
        {children}
    </motion.div>
  )
}
