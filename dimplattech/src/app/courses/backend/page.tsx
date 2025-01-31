"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import backendImg from "../../../assests/backend.png"
import starIcon from "../../../assests/star-icon.svg"
import CourseHero from '@/components/CourseHero'
import AdmissionRequirement from '@/components/AdmissionRequirement'
import { backEnd } from '@/data/data'
import Image from 'next/image'
import CourseFee from '@/components/CourseFee'
import backendCareerImg from "../../../assests/backend-career.png"
import CareerOutcome from '@/components/CareerOutcome'
import { motion } from "motion/react"

export default function page() {
  return (
    <main>
        <Header 
            page={"course"}
        />
        <CourseHero
            image={backendImg}
            name={<>BACK END DEVELOPMENT</>}
            desc={<>learn how to write APIs, creating libraries, and working with system<br />components and how to build code that allows a database and an<br /> application to communicate with one another.</>}
            month={"4"}
            shortName='backend'
        />
        <section>
            <AdmissionRequirement />
            <div className='px-[5%] mb-4 sm:by-6 md:mb-8'>
                <div className='relative pt-4 mb-2 sm:mb-4'>
                    <div className='absolute z-[-1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
                    <h2 className='text-xl sm:text-2xl font-semibold text-black'>COURSE OUTLINE</h2>
                </div>
                <p className='text-lg sm:text-xl font-semibold mb-2 sm:mb-4'>In this immersive 3-month Backend development course, you will achieve the following learning outcomes</p>
                <div>
                    {
                        backEnd.map(({title,description},idx)=>{
                            return (
                                <motion.div 
                                    initial={{x:"-100%", opacity: 0}} 
                                    transition={{delay: 0.25, duration: 0.3, type:"spring"}} 
                                    whileInView={{x:"0", opacity: 1}}
                                    viewport={{once: true}} 
                                    key={idx} className='flex flex-row gap-4 mb-3'>
                                    <div className='w-[20px] shrink-0'>
                                        <Image src={starIcon} alt='star icon' className='block w-full translate-y-[17.5%]' />
                                    </div>
                                    <div>
                                        <p className='text-base sm:text-xl font-semibold mb-2 sm:mb-3'>{title}</p>
                                        <ul>
                                            {
                                                description.map((str, idx)=>{
                                                    return <li key={idx} className='text-sm sm:text-base'>{str}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <CourseFee 
                onSite={{
                    private: "#500,000",
                    general: "#350,000"
                }}
                virtual={{
                    private: "#350,000",
                    general: "#250,000"
                }}
                shortName='backend'
            />
            <CareerOutcome 
                image={backendCareerImg}
                topic='Prepare to become a Back end developer'
                objective={
                    ["Demonstrate your proficiency in portolio-ready projects",
                        "Earn your Diploma Certificate",
                        "Quality for in-demand job roles as a Back end developer"
                    ]
                } 
            />
        </section>
        <Subscribe />
        <Footer />
    </main>
  )
}
