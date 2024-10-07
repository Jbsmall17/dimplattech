import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2"
import heroImage1 from "../assests/hero-image-1.png"
import heroImage2 from "../assests/hero-image-2.png"
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='flex flex-row mt-10 px-[5%] mb-10'>
      <div className='flex-1'>
        <p className='my-8 text-6xl text-[#219dd0] font-bold'>Buliding A <br />Tech <br /> Commuinty!</p>
        <p className='text-base text-[#777A79] mb-8'>
            A community  where one can gain technological <br /> 
            knowledge/skills and design/build/maintain/<br />
            manage softwares.
        </p>
        <div className='flex gap-2'>
            <button className='w-[120px] h-[36px] rounded-lg bg-[#219dd0] text-white flex justify-center items-center hover:bg-white hover:border hover:border-[#219dd0] hover:text-[#219dd0] transition-all duration-500 ease-linear'>
                Register
            </button>
            <button className='group relative w-[125px] h-[36px] flex items-center rounded-lg hover:border hover:border-[#219dd0] transition-all duration-500 ease-linear hover:bg-white'>
                <div className='absolute group-hover:top-1 group-hover:left-2 -z-10 top-0 left-0 h-[30px] w-[30px] bg-[#219dd0] rounded-full transition-all duration-500 ease-linear'></div>
                <p className='ml-2 font-semibold text-black group-hover:text-[#219dd0]'>View Courses</p>
                <HiArrowLongRight className='group-hover:text-[#219dd0]' />
            </button>
        </div>
      </div>
      <div className='hidden lg:block flex-1 relative min-h-[500px]'>
        <Image src={heroImage1} className='w-[400px] absolute top-0 left-16' alt='hero image 1' />
        <Image src={heroImage2} className='w-[300px] absolute bottom-0 right-0'  alt='hero image 2'/>
      </div>
    </section>
  )
}
