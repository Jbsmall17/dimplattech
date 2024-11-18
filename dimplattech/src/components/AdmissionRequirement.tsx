"use client"
import React from 'react'
import { motion } from "motion/react"

export default function AdmissionRequirement() {
  return (
    <motion.section
        initial={{x:"-100%", opacity: 0}} 
        transition={{delay:0.25, duration: 0.5, type:"spring"}} 
        whileInView={{x:"0", opacity: 1}}
        viewport={{once: true}} 
        className=' py-4 sm:py-6 md:py-8 px-[5%]'>
        <div className='relative pt-3 sm:pt-4 mb-2 sm:mb-4'>
            <div className='absolute z-[-1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
            <h2 className='text-xl sm:text-2xl font-semibold text-black'>
                ADMISSION REQUIREMENTS
            </h2>
        </div>
      <ul className='list-decimal ml-4'>
        <li>
            <p className='text-lg sm:text-xl'>Educational Background:</p>
            <ul className='list-disc'>
                <li className='text-sm sm:text-base'>You don&apos;t need to have a certificate to apply for this diploma program. We expect anyone to take the program</li>
            </ul>
        </li>
        <li>
            <p className='text-lg sm:text-xl'>Work Experience and Certifications:</p>
            <ul className='list-disc'>
                <li className='text-sm sm:text-base'>You don&apos;t need to have work experience to learn this traxk</li>
            </ul>
        </li>
        <li>
            <p className='text-lg sm:text-xl'>Language Proficiency</p>
            <ul className='list-disc'>
                <li className='text-sm sm:text-base'>
                    The Course is conducted in English, so applicants must have a basic understanding of the English language to effectively engage with the curriculum and participate in discussions.
                </li>
            </ul>
        </li>
      </ul>
    </motion.section>
  )
}
