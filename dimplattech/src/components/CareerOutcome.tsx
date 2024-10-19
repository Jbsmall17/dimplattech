import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface careerOutcomeObjProps{
    image: StaticImageData
    topic: string,
    objective: string[]
}

export default function CareerOutcome({topic,objective, image}:careerOutcomeObjProps) {
  return (
    <section className='flex bg-black flex-row mb-8 sm:mb-10 lg:mb-12'>
      <div className='px-[5%] flex-[2] py-4 self-center text-white'>
        <div className='relative pt-2 sm:pt-4 mb-3'>
            <div className='absolute z-[1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
            <h2 className='relative z-10 text-xl sm:text-2xl font-semibold'>CAREER OUTCOME</h2>
        </div>
        <div className='rounded-2xl py-3 sm:py-5 px-2 bg-[#747474]'>
            <p className='text-lg sm:text-xl mb-1'>{topic}</p>
            <ul className='list-disc ml-4'>
                {
                    objective.map((str,idx)=>{
                        return <li className='text-sm sm:text-base' key={idx}>{str}</li>
                    })
                }
            </ul>
        </div>
      </div>
      <div className='flex-1 hidden sm:block'>
        <Image 
            src={image} 
            alt='career image'
            className='block w-full h-full'
        />
      </div>
    </section>
  )
}
