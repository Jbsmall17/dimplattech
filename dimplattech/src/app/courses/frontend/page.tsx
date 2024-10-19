import Header from '@/components/Header'
import React from 'react'
import frontendBgImg from "../../../assests/frontend.png"
import CourseHero from '@/components/CourseHero'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import AdmissionRequirement from '@/components/AdmissionRequirement'
import { frontEnd } from '@/data/data'
import starIcon from "../../../assests/star-icon.svg"
import frontendCareer from "../../../assests/frontend-career.png"
import Image from 'next/image'
import CourseFee from '@/components/CourseFee'
import CareerOutcome from '@/components/CareerOutcome'

export default function page() {
  return (
    <main>
        <Header />
        <CourseHero
            image={frontendBgImg}
            name={<>FRONT END DEVELOPMENT</>}
            desc={<>Let's help you become a professional frontend web developer. You'll learn all<br /> you need to know to become a Frontend Developer and build interesting<br /> portfolios while learning the fundamentals of HTML, CSS, JavaScript and React</>}
            month={"3"}
        />
        <section>
            <AdmissionRequirement />
            <div className='px-[5%] mb-4 sm:by-6 md:mb-8'>
                <div className='relative pt-4 mb-2 sm:mb-4'>
                    <div className='absolute z-[-1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
                    <h2 className='text-xl sm:text-2xl font-semibold text-black'>COURSE OUTLINE</h2>
                </div>
                <p className='text-lg sm:text-xl font-semibold mb-2 sm:mb-4'>In this immersive 3-month Frontend development course, you will achieve the following learning outcomes</p>
                <div>
                    {
                        frontEnd.map(({title,description},idx)=>{
                            return (
                                <div key={idx} className='flex flex-row gap-4 mb-3'>
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
                             </div>
                            )
                        })
                    }
                </div>
            </div>
            <CourseFee 
                onSite={{
                    private: "#200,000",
                    general: "#300,000"
                }}
                virtual={{
                    private: "#200,000",
                    general: "#300,000"
                }}
            />
            <CareerOutcome
                image={frontendCareer}
                topic='Prepare to become a Frontend developer'
                objective={
                    ["Demonstrate your proficiency in portolio-ready projects",
                    "Earn your Diploma Certificate",
                    "Quality for in-demand job roles as a frontend developer"
                    ]
                } 
            />
        </section>
        <Subscribe />
        <Footer />
    </main>
  )
}
