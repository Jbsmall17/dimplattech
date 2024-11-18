"use client"
import Image from 'next/image'
import React from 'react'
import aboutHeroImage from "../../assests/about-us.png"
import quoteLeft from "../../assests/quote-left.svg"
import quoteRight from "../../assests/quote-right.svg"
import arrowImg from "../../assests/arrow.png"
import progressCurve from "../../assests/progress-curve.png"
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FiFacebook, FiInstagram, FiPhoneCall } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from 'react-icons/fa6'
import { CiMail } from 'react-icons/ci'
import polygon from "../../assests/dotted_polygon.png"
import polygonImage from "../../assests/ploygon_image.png"
import { motion } from "motion/react"


export default function AboutUs() {
  return (
    <main>
        <Header 
            page={"about"}
        />
        <section className='hero-div relative'>
            <Image className='block w-full h-full' src={aboutHeroImage} alt={"about page hero image"} />
            <h1  className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]  text-3xl sm:text-4xl lg:text-5xl font-semibold text-white'>About <span className='text-[#219dd0]'>Us</span></h1>
        </section>
        <motion.section 
            initial={{x: "-100%",opacity:0}}
            whileInView={{x:"0", opacity:1}}
            transition={{duration:1, type: "spring", stiffness:100}}
            viewport={{once: true}}
            className='px-[5%] mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 mb-4 sm:mb-6 lg:mb-8 xl:mb-10'
        >
            <h2 className='text-xl mb-2 sm:mb-4 text-black font-semibold'>KNOW US MORE</h2>
            <div className='flex flex-col gap-2 text-black text-base'>
                <p>Dimplettech Academy is atech training companty based in Lagos, Nigeria, founded in 2023with objective of providing cost-effective high-quality tech education to aspiring young people in the country.</p>
                <p>Over the past one year, the academy has trianed over 200 students through both online and in-person classes, and has helped then achieve thier carrer goals in the tech industry. Our instructors are carefully selected based on both industry experience and teaching ability, ensuring that our students recieve the best possible education</p>
                <p>we envision becoming a leading and preferred technology training provider in Nigeria, responding to needs of the industry. Our mission is to provide high-quality and affordable technology training that the needs of our students</p>
            </div>
        </motion.section>
        <section className='h-[70vh] lg:h-[87vh] relative bg-[#e0eaf1] px-[5%] p-3 md:p-6'>
            <motion.div
                initial={{x:"-100%", opacity:0}}
                whileInView={{x:"0", opacity: 1}}
                viewport={{once: true}}
                className='absolute z-10 top-6 left-[5%] pl-3 md:pl-6'
            >
                <Image className='absolute top-0 left-0 w-[16px] md:w-[20px]' src={quoteLeft}  alt="quote left"/>
                <div className='flex justify-start'>
                <div className='mb-2 sm:mb-4'>
                    <p className='text-base sm:text-xl font-semibold text-black'>Mission</p>
                    <p className='h-[2px] w-[60%] bg-[#219dd0]'></p>
                </div>
                </div>
                <p className='text-xs sm:text-base text-black'>To train our students effectively and provide beneficial knowledge to them<br /> using the most effective approach.</p>
            </motion.div>
            <motion.div 
                initial={{scale:0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{delay:0.3}}
                className='w-[150px] md:w-[200px] absolute top-4 md:top-6 right-[5%]'>
                <Image src={arrowImg} alt="arrow image" className='w-full block' />
            </motion.div>
            <motion.div 
                initial={{scale:0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{delay:0.3}}
                className='w-[150px] md:w-[200px] absolute left-[5%] bottom-0 md:bottom-6'>
                <Image src={progressCurve} className='w-full block' alt="progree curve" />
            </motion.div>
            <motion.div 
                initial={{x:"100%", opacity:0}}
                whileInView={{x:"0", opacity: 1}}
                viewport={{once: true}}
                className='absolute z-10 text-end bottom-24 md:bottom-28 lg:bottom-32 right-[5%] pr-6'>
                <Image src={quoteRight} className='absolute top-0 right-0 w-[16px] md:w-[20px]' alt="quote left"/>
                <div className='flex justify-end'>
                    <div className='mb-2 sm:mb-4'>
                        <p className='text-base sm:text-xl font-semibold text-black'>Vision</p>
                        <p className='h-[2px] w-[65%] bg-[#219dd0]'></p>
                    </div>
                </div>
                <p className='text-xs sm:text-base text-black'>To make learning as simple as possible thereby creating the best approach of<br /> impacting knowledge and to better community of learning to the<br /> world.</p>
            </motion.div>
        </section>
        <Services />
        <Testimonials />
        <section className='flex flex-row px-[5%] mb-10 sm:mb-12 lg:mb-16 xl:mb-20'>
            <div className='flex-1'>
                <p className='text-xl sm:text-2xl font-semibold text-black mb-2 sm:mb-4'>Reach Out to us</p>
                <div className='flex flex-col gap-1 sm:gap-2'>
                    <a href='tel:+2348165402158' className='flex flex-row gap-3 items-center'>
                        <FiPhoneCall className='text-[#707070]' />       
                        <p className='text-sm sm:text-base text-black'>08165402158</p>
                    </a>
                    <a href="#" className='flex flex-row gap-3 items-center'>
                        <SlSocialLinkedin className='text-[#707070]' />
                        <p className='text-sm sm:text-black'>Dimplattech</p>
                    </a>
                    <a href='#' className='flex flex-row gap-3 items-center'>
                        <FiFacebook className='text-[#707070]' />
                        <p className='text-sm sm:text-black'>Dimplattech</p>
                    </a>
                    <a href='#' className='flex flex-row gap-3 items-center'>
                        <FiInstagram className='text-[#707070]' />
                        <p className='text-sm sm:text-black'>Dimplattech</p>
                    </a>
                    <a href='#' className='flex flex-row gap-3 items-center'>
                        <FaXTwitter className='text-[#707070]' />
                        <p className='text-sm sm:text-black'>Dimplattech</p>
                    </a>
                    <a href='mailto:dimplatlearn@gmail.com' className='flex flex-row gap-3 items-center'>
                        <CiMail className='text-[#707070]' />
                        <p className='text-sm sm:text-black'>dimplatlearn@gmail.com</p>
                    </a>
                </div>
            </div>
            <div className='flex-1 hidden sm:hidden'>
                <div className='w-[350px] relative'>
                    <Image className='w-full' src={polygon} alt="polygon" />
                    <Image className='w-[95%] absolute top-0 left-0' src={polygonImage} alt='polygon shaped image' />
                </div>
            </div>
        </section>
        <Subscribe />
        <Footer />
    </main>
  )
}
