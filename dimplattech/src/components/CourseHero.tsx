"use client"
import Image, { StaticImageData } from 'next/image'
import React, { MouseEvent, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa6"
import durationSvg from "../assests/duration.svg"
import certificateSvg from "../assests/certificate.svg"
import instructorSvg from "../assests/instructor.svg"
import { motion,AnimatePresence } from "motion/react"
import Link from 'next/link'

interface courseHeroProps{
    name: JSX.Element,
    desc: JSX.Element,
    month: string,
    image: StaticImageData
}

export default function CourseHero({name,desc,month,image}:courseHeroProps) {
    const [isDurationVisible, setIsDurationVisible] = useState(false)
    
    const clickDurationHandler = ()=>{
        setIsDurationVisible((prev)=>{
            return !prev
        })
    }
    

    const clickHandler = (e : MouseEvent<HTMLElement>) => {
        const targetElement = e.target as HTMLDivElement
        const targetElementArray = Array.from(targetElement.classList)
        if(targetElementArray.indexOf('close-duration') >=0){
            setIsDurationVisible(false)
        }else{
            return
        }

    }
    return (
    <section onClick={(e)=> clickHandler(e)} className='close-duration product-design relative hero-div2 px-[5%] pt-3 sm:pt-6 md:pt-8 lg:pt-12 mt-[60px]'>
        <Image className='close-duration z-[-1] block absolute top-0 left-0 w-full h-full' src={image} alt={`${name} hero image`}/>
        <div className='close-duration absolute z-10 bg-black opacity-70 h-full w-full top-0 left-0'></div>
        <div 
            className='close-duration relative z-20 flex flex-row gap-8 md:items-center justify-between'
        >
            <motion.div
                initial={{x:"-100%", opacity: 0}} 
                transition={{duration: 0.5, type: "spring", stiffness:100 }} 
                animate={{x:"0", opacity: 1}}
            >
               <p className='close-duration  text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-6 font-semibold text-[#219dd0]'>{name}</p>
                <p className='close-duration  text-sm sm:text-base text-white mb-3 lg:mb-6'>{desc}</p> 
                <Link href="/admission-form">
                    <button className='close-duration  h-[32px] lg:h-[40px] flex items-center px-6 rounded-lg bg-white text-[#219dd0] text-base font-semibold hover:text-white hover:bg-transparent hover:border hover:border-[#219dd0] transition ease-out duration-700'>Register</button>
                </Link>
            </motion.div>
            <div className='relative shrink-0'>
                <Image 
                    src={durationSvg} 
                    alt='duration svg' 
                    className='w-[24px] h-[24px] block md:hidden duration-icon' 
                    onClick={clickDurationHandler}
                    />
                <AnimatePresence>
                {
                    isDurationVisible
                    &&
                    <motion.div 
                        initial={{scale:0}}
                        animate={{scale:1}}
                        exit={{scale:0}}
                        id="durationEl" className='absolute right-0 block md:hidden'>
                <div className='glassmorphism rounded-2xl py-2 px-3 min-w-[225px]'>
                    <p className='text-white text-xl font-semibold mb-2'>Cohort Start Month</p>
                    <select name="" id="" className='bg-transparent border border-white text-white w-[75%] p-1'>
                        <option value="January">January</option>
                    </select>
                    <ul className='mt-4'>
                        <li className='flex gap-2 items-center mb-2'>
                            <div className='h-[24px] md:h-[28px] w-[24px] md:w-[28px] rounded-full  bg-[#219dd0] flex justify-center items-center'>
                                <Image src={durationSvg} alt='duration svg' className='w-[16px] h-[16px]' />
                            </div>
                            <div>
                                <p className='text-sm md:text-base text-white leading-none'>Duration</p>
                                <p className='text-lg md:text-xl font-semibold text-white leading-none'>{month} Months</p>
                            </div>
                        </li>
                        <li className='flex gap-2 items-center mb-2'>
                            <div className='h-[24px] md:h-[28px] w-[24px] md:w-[28px] rounded-full  bg-[#219dd0] flex justify-center items-center'>
                                <Image src={certificateSvg} alt='duration svg' className='w-[16px] h-[16px]' />
                            </div>
                            <div>
                                <p className='text-sm md:text-base text-white leading-none'>Certificate</p>
                                <p className='text-lg md:text-xl font-semibold text-white leading-none'>YES</p>
                            </div>
                        </li>
                        <li className='flex gap-2 items-center mb-2'>
                            <div className='h-[24px] md:h-[28px] w-[24px] md:w-[28px] rounded-full  bg-[#219dd0] flex justify-center items-center'>
                                <Image src={instructorSvg} alt='duration svg' className='w-[16px] h-[16px]' />
                            </div>
                            <div>
                                <p className='text-sm md:text-base text-white leading-none'>Instructor-Led Course</p>
                                <p className='text-lg md:text-xl font-semibold text-white leading-none'>YES</p>
                            </div>
                        </li>
                    </ul>
                    <div className='flex justify-center'>
                        <button 
                            className='text-center h-[32px] md:h-[40px] flex items-center px-12 text-[#219dd0] bg-white rounded-lg hover:text-white hover:bg-transparent hover:border hover:border-[#219dd0] transition ease-out duration-700 font-semibold'
                        >
                            <p className='leading-none'>Enrol Now</p>
                        </button>
                    </div>
                </div>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
            
            <motion.div
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{delay:0.5, type:"linear"}} 
                className='hidden md:block'>
                <div className='glassmorphism rounded-2xl py-4 px-3 min-w-[300px] '>
                    <p className='text-white text-xl font-semibold mb-2'>Cohort Start Month</p>
                    <select name="" id="" className='bg-transparent border text-[#219dd0] rounded-lg outline-none border-white w-[75%] p-1'>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="June">June</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <ul className='mt-6'>
                        <li className='flex gap-2 items-center mb-4'>
                            <div className='h-[32px] w-[32px] rounded-full  bg-[#219dd0] flex justify-center items-center'>
                                <Image src={durationSvg} alt='duration svg' className='w-[16px] h-[16px]' />
                            </div>
                            <div>
                                <p className='text-white leading-none'>Duration</p>
                                <p className='text-xl font-semibold text-white leading-none'>{month} Months</p>
                            </div>
                        </li>
                        <li className='flex gap-2 items-center mb-4'>
                            <div className='h-[32px] w-[32px] rounded-full  bg-[#219dd0] flex justify-center items-center'>
                                <Image src={certificateSvg} alt='duration svg' className='w-[16px] h-[16px]' />
                            </div>
                            <div>
                                <p className='text-white leading-none'>Certificate</p>
                                <p className='text-xl font-semibold text-white leading-none'>YES</p>
                            </div>
                        </li>
                        <li className='flex gap-2 items-center mb-4'>
                            <div className='h-[32px] w-[32px] rounded-full  bg-[#219dd0] flex justify-center items-center'>
                                <Image src={instructorSvg} alt='duration svg' className='w-[16px] h-[16px]' />
                            </div>
                            <div>
                                <p className='text-white leading-none'>Instructor-Led Course</p>
                                <p className='text-xl font-semibold text-white leading-none'>YES</p>
                            </div>
                        </li>
                    </ul>
                    <div className='flex justify-center'>
                        <button 
                            className='text-center h-[40px] flex items-center px-12 text-[#219dd0] bg-white rounded-lg hover:text-white hover:bg-transparent hover:border hover:border-[#219dd0] transition ease-out duration-700 font-semibold'
                        >
                            Enrol Now
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
        <Link target='_blank' className='absolute z-20 bottom-3 lg:bottom-6 left-[5%] flex flex-row gap-2 items-center' href="https://api.whatsapp.com/send/?phone=%2B2348165402158&text&type=phone_number&app_absent=0">
            <FaWhatsapp  className='text-[#60d669]'/>
            <p className='text-white'>Chat with us</p>
        </Link>
    </section>
  )
}
