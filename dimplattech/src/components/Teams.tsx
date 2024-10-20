import React from 'react'
import Team from './Team'
import productDesigner from "../assests/dim_productDesigner.png"
import fullStack from "../assests/dim_fullstack.png"
import graphicDesigner from "../assests/dim_graphics.png"
import dataScientist from "../assests/dim_dataScientist.png"
import dataAnalyst from "../assests/dim_dataAnalyst.png"
import cybersecurity from "../assests/dim_cyberAnalyst.png"



export default function Teams() {
  return (
    <section className='mb-10 sm:mb-12 lg:mb-16 xl:mb-20 px-[5%]'>
      <p className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center text-[#4d4d4d]">Our Team</p>
      <p className="text-center text-base text-[#777A79] mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
        Our team is a group of instructors who are industry experts with years of experience in their respective fields. 
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 sm:gap-6 lg:gap-8'>
        <Team 
            image={productDesigner}
        />
        <Team 
            image={fullStack}
        />
        <Team 
            image={graphicDesigner}
        />
        <Team 
            image={dataScientist}
        />
        <Team 
            image={dataAnalyst}
        />
        <Team 
            image={cybersecurity}
        />
      </div>

    </section>
  )
}
