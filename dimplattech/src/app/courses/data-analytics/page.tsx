"use client"
import CourseHero from '@/components/CourseHero'
import Header from '@/components/Header'
import React from 'react'
import dataAnalysisImg from "../../../assests/dataAnalysis.png"
import dataAnalCareer from "../../../assests/data-anal-career.png"
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import starIcon from "../../../assests/star-icon.svg"
import Image from 'next/image'
import AdmissionRequirement from '@/components/AdmissionRequirement'
import { dataAnalysis } from '@/data/data'
import CourseFee from '@/components/CourseFee'
import CareerOutcome from '@/components/CareerOutcome'
import { motion } from "motion/react"

export default function page() {
  return (
    <main>
        <Header 
            page={"course"}
        />
        <CourseHero
            image={dataAnalysisImg}
            name={<>DATA ANALYTICS</>}
            desc={<>learn the latest analytics tools and techniques, how to work with SQL, the languages<br /> of R and Python, the art of creating data visualizations, and how to apply statistics and<br /> predictive analytics in a business environment.I</>}
            month={"6"}
            shortName={"dataAnalytics"}
        />
        <section>
            <AdmissionRequirement />
            <div className='px-[5%] mb-4 sm:by-6 md:mb-8'>
                <div className='relative pt-4 mb-2 sm:mb-4'>
                    <div className='absolute z-[-1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
                    <h2 className='text-xl sm:text-2xl font-semibold text-black'>COURSE OUTLINE</h2>
                </div>
                <p className='text-lg sm:text-xl font-semibold mb-2 sm:mb-4'>In this immersive 6-month Data analysis course, you will achieve the following learning outcomes</p>
                <div>
                    {
                        dataAnalysis.map(({title,description},idx)=>{
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
                    private: "#350,000",
                    general: "#200,000"
                }}
                virtual={{
                    private: "#200,000",
                    general: "#120,000"
                }}
                shortName='dataAnalytics'
            />
            <CareerOutcome
                image={dataAnalCareer}
                topic='Prepare to become a Data analyst'
                objective={
                    ["Demonstrate your proficiency in portolio-ready projects",
                    "Earn your Diploma Certificate",
                    "Quality for in-demand job roles as a Data Analyst"
                    ]
                } 
            />
        </section>
        <Subscribe />
        <Footer />
    </main>
  )
}
