"use client"
import React from 'react'
import cyberSecurityImg from "../../../assests/cyberSecurity.png"
import cyberCareer from "../../../assests/cybersecurity-career.png"
import Image from 'next/image'
import starIcon from "../../../assests/star-icon.svg"
import Header from '@/components/Header'
import CourseHero from '@/components/CourseHero'
import AdmissionRequirement from '@/components/AdmissionRequirement'
import { cyberSecurity } from '@/data/data'
import CourseFee from '@/components/CourseFee'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import CareerOutcome from '@/components/CareerOutcome'
import { motion } from "motion/react"


export default function page() {
  return (
    <main>
      <Header 
        page={"course"}
      />
      <CourseHero
        image={cyberSecurityImg}
        name={<>CYBER SECURITY</>}
        desc={<>Learn how to leverage a firewall to filter and prevent unauthorized traffic<br /> onto the network. Additionally, you must know about Intrusion detection<br /> systems, Intrusion Prevention Systems, Virtual Private Networks (VPNs),<br /> and remote access.</>}
        month={"3"}
        shortname="cyberSecurity"
      />
      <section>
        <AdmissionRequirement />
        <div className='px-[5%] mb-4 sm:by-6 md:mb-8'>
          <div className='relative pt-4 mb-2 sm:mb-4'>
            <div className='absolute z-[-1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
            <h2 className='text-xl sm:text-2xl font-semibold text-black'>COURSE OUTLINE</h2>
          </div>
          <p className='text-lg sm:text-xl font-semibold mb-2 sm:mb-4'>In this immersive 6-month Cyber security course, you will achieve the following learning outcomes</p>
          <div>
            {
                      cyberSecurity.map(({title,description},idx)=>{
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
                    private: "#450,000",
                    general: "#300,000"
                }}
                virtual={{
                    private: "#450,000",
                    general: "#300,000"
                }}
            shortname="cyberSecurity"
          />
          <CareerOutcome 
            image={cyberCareer}
            topic='Prepare to become a Cyber security Specialist'
            objective={
                    ["Demonstrate your proficiency in portolio-ready projects",
                        "Earn your Diploma Certificate",
                        "Quality for in-demand job roles as a Cyber Security Specialist"
                    ]
            } 
          />
      </section>
      <Subscribe />
      <Footer />
    </main>
  )
}
