"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react';


interface testimonialProp{
    image: StaticImageData,
    name: string,
    role: string,
    desc: string
}

export default function Testimonial({image,name,role,desc}: testimonialProp) {
  return (
    <div 
        className='p-2 bg-[#ededed] w-full rounded-lg'
        >
        <div className='flex flex-row gap-2 items-center mb-4'>
            <div className='w-[75px] h-[75px]'>
                <Image className='block w-full h-full' src={image} alt={"a student"} />
            </div>
            <div>
                <p className='text-xl font-semibold text-[#4d4d4d]'>{name}</p>
                <p className='text-sm text-[#777A79]'>{role}</p>
            </div>
        </div>
        <div>
            <p className='text-[#4d4d4d] text-sm'>{desc}</p>
        </div>
    </div>
  )
}
