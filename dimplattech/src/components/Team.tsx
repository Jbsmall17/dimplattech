"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from "motion/react"

interface teamProps {
    image: StaticImageData
}

export default function Team({image}: teamProps) {
  return (
    <motion.div
      initial={{opacity:0, y: 50}} 
      whileInView={{opacity:1, y: 0}} 
      transition={{ delay: 0.25}} 
      viewport={{once: true}}
    >
        <Image src={image} style={{aspectRatio: "3/4"}} className=' w-full block rounded-xl' alt="team member" />
    </motion.div>
  )
}
