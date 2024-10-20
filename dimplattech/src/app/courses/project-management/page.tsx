import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import { projectManagement } from '@/data/data'
import projectImg from "../../../assests/projectManangement.png"
import projectCareer from "../../../assests/project-career.png"
import starIcon from "../../../assests/star-icon.svg"
import Image from 'next/image'
import React from 'react'
import CourseHero from '@/components/CourseHero'
import AdmissionRequirement from '@/components/AdmissionRequirement'
import CourseFee from '@/components/CourseFee'
import CareerOutcome from '@/components/CareerOutcome'

export default function page() {
  return (
    <main>
        <Header 
            page={"course"}
        />
        <CourseHero
            image={projectImg}
            name={<>PROJECT MANAGEMENT</>}
            desc={<>Learn how to conduct customer research interviews and testing, pricing and<br /> revenue modeling, running design sprints, product roadmapping, and<br /> ranking your features list.</>}
            month={"6"}
        />
        <section>
            <AdmissionRequirement />
            <div className='px-[5%] mb-4 sm:by-6 md:mb-8'>
                <div className='relative pt-4 mb-2 sm:mb-4'>
                    <div className='absolute z-[-1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
                    <h2 className='text-xl sm:text-2xl font-semibold text-black'>COURSE OUTLINE</h2>
                </div>
                <p className='text-lg sm:text-xl font-semibold mb-2 sm:mb-4'>In this immersive 6-month Project management course, you will achieve the following learning outcomes</p>
                <div>
                    {
                        projectManagement.map(({title,description},idx)=>{
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
                image={projectCareer}
                topic='Prepare to become a Project manager'
                objective={
                    ["Demonstrate your proficiency in portolio-ready projects",
                        "Earn your Diploma Certificate",
                        "Quality for in-demand job roles as a Project manager"
                    ]
                } 
            />
        </section>
        <Subscribe />
        <Footer />
    </main>
  )
}