import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import React from 'react'
import autoCadImg from "../../../assests/autocad.png"
import autoCadCareer from "../../../assests/autocad-career.png"
import CourseHero from '@/components/CourseHero'
import AdmissionRequirement from '@/components/AdmissionRequirement'
import { autoCad } from '@/data/data'
import Image from 'next/image'
import starIcon from "../../../assests/star-icon.svg"
import CourseFee from '@/components/CourseFee'
import CareerOutcome from '@/components/CareerOutcome'


export default function page() {
  return (
    <main>
        <Header 
            page={"course"}
        />
        <CourseHero
            image={autoCadImg}
            name={<>Computer Aided Design<br />(AutoCAD).</>}
            desc={<>Learn how to produce precise 2D and 3D drawings and models, electrical<br /> diagrams, construction drawings, interior designs, and more.</>}
            month={"3"}
        />
        <section>
            <AdmissionRequirement />
            <div className='px-[5%] mb-4 sm:by-6 md:mb-8'>
                <div className='relative pt-4 mb-2 sm:mb-4'>
                    <div className='absolute z-[-1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
                    <h2 className='text-xl sm:text-2xl font-semibold text-black'>COURSE OUTLINE</h2>
                </div>
                <p className='text-lg sm:text-xl font-semibold mb-2 sm:mb-4'>In this immersive 3-month AUTOCAD course, you will achieve the following learning outcomes</p>
                <div>
                {
                    autoCad.map(({title,description},idx)=>{
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
                image={autoCadCareer}
                topic='Prepare to become an AUTOCAD designer'
                objective={
                    [   "Demonstrate your proficiency in portolio-ready projects",
                        "Earn your Diploma Certificate",
                        "Quality for in-demand job roles as an AUTOCAD designer"
                    ]
                } 
            />
        </section>
        <Subscribe />
        <Footer />
    </main>
  )
}
