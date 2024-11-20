"use client"
import React, { useState, forwardRef, LegacyRef } from 'react'
import Course from './Course'
import { HiMiniArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"
import productDesign from "../assests/productDesign.png"
import frontend from "../assests/frontend.png"
import dataAnalysis from "../assests/dataAnalysis.png"
import backend from "../assests/backend.png"
import cad from "../assests/autocad.png"
import fullstack from "../assests/fullstack.png"
import marketing from "../assests/marketing.png"
import projectManagement from "../assests/projectManangement.png"
// import productManagement from "../assests/productManagement.png"
import cyberSecurity from "../assests/cyberSecurity.png"
import cloudComputing from "../assests/cloudComputing.png"
import graphics from "../assests/graphicDesign.png"
// import realEstate from "../assests/realEstate.png" 



export default forwardRef(function Courses(_,ref : LegacyRef<HTMLDivElement> | null) {
  const [isViewAll, setIsViewAll] =useState(false)

  const viewAllCourse = () =>{
    setIsViewAll((prev)=>{
      return !prev
    })
  }


  return (
    <section ref={ref} className='my-10 md:my-12 lg:my-16 xl:my-20 px-[5%]'>
        <p className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center text-[#4d4d4d]">Certified Tech Training Courses</p>
        <p className="text-center text-base text-[#777A79] mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
            We also offer live classes led by experienced instructors. These classes provide an<br /> 
            opportunity to ask questions, get personalized feedbacks, and connect with other learners
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8'>
            <Course 
              image={productDesign}
              name={'Product Design (UI/UX)'}
              desc={"Learn to design and deliver digital products that serves clients needs and solve users problems. Understanding the fundamentals and tools of design like problem definition, user research, prototyping and more."}
              courseRoute='/courses/product-design'
             />
            <Course
              image={frontend}
              name={'Front End Development'}
              desc={"You will learn all you need to know to become a Frontend developer and build interesting portfolios while learning the fundamentals of HTML, CSS and javaScript and React"}
              courseRoute='/courses/frontend'
            />
            <Course
              image={dataAnalysis}
              name={"Data Analysis"}
              desc={"learn the latest analytics tools and techniques, how to work with SQL, the languages of R and Python, the art of creating data visualizations, and how to apply statistics and predictive analytics in a business environment."}
              courseRoute='/courses/data-analysis'
            />
            <Course
              image={backend}
              name={"Back End Development"}
              desc={"We teach the important skills required to jumpstart your career as a web developer. With 12 intense weeks of training, you will learn to think and build like software developers."}
              courseRoute='/courses/backend'
            />
            <Course
              image={cad}
              name={"Computer Aided Design(AutoCAD)"}
              desc={"Learn how to produce precise 2D and 3D drawings and models, electrical diagrams, construction drawings, interior designs, and more."}
              courseRoute='/courses/autocad'
            />
            <Course
              image={fullstack}
              name={"Learn Full Stack Development"}
              desc={"We teach the important skills required to jumpstart your career as a full stack developer. With 24 intense weeks of training, you will learn to think and build like software developers."}
              courseRoute='/courses/fullstack'
            />
            {
              isViewAll
              &&
              <>
                <Course 
                  image={marketing}
                  name={'Digital Marketing'}
                  desc={'Learn digital marketing that can help you develop a diverse set of skills valuable in the current job market.'}
                  courseRoute='/courses/digital-marketing'
                />
                <Course 
                  image={projectManagement}
                  name={'Project Management'}
                  desc={"Learn Planning, budgeting, developing effective strategies, managing stakeholders, achieving tasks on a deadline and mastering the efficient management of time"}
                  courseRoute='/courses/project-management'
                />
                <Course 
                  image={productDesign}
                  name={'Product Management'}
                  desc={"Learn how to conduct customer research interviews and testing, pricing and revenue modeling, running design sprints, product roadmapping, and ranking your features list."}
                  courseRoute='/courses/product-management'
                />
                <Course 
                  image={cyberSecurity}
                  name={"Cyber Security"}
                  desc={"Learn how to leverage a firewall to filter and prevent unauthorized traffic onto the network. Additionally, you must know about Intrusion detection systems, Intrusion Prevention Systems, Virtual Private Networks (VPNs), and remote access."}
                  courseRoute='/courses/cyber-security'
                />
                <Course
                  image={cloudComputing}
                  name={"Cloud Computing"}
                  desc={"We teach the important skills required to jumpstart your career as a cloud computer. With 12 intense weeks of training, you will learn to think and build like software developers."}
                  courseRoute='/courses/cloud-computing'
                />
                <Course 
                  image={graphics}
                  name={"Graphics Design"}
                  desc={"Learn how to create visual content to communicate messages. By applying visual hierarchy and page layout techniques."}
                  courseRoute='/courses/graphics-design'
                />
              </>
            }
        </div>
        <div className='flex justify-center mt-6 lg:mt-8 xl:mt-10'>
          <button
            onClick={viewAllCourse} 
            className='group relative px-2 h-[36px] flex items-center rounded-lg hover:border hover:border-[#219dd0] transition-all duration-500 ease-linear hover:bg-white'
          >
            <div className='absolute group-hover:top-1 group-hover:left-4 -z-10 top-0 left-2 h-[30px] w-[30px] bg-[#219dd0] rounded-full transition-all duration-500 ease-linear'></div>
            {
              !isViewAll
              ? 
              <>
                <p className='ml-2 font-semibold text-black group-hover:text-[#219dd0]'>View All</p>
                <HiArrowLongRight className='group-hover:text-[#219dd0]' />
              </>
              :
              <>
                <p className='ml-2 font-semibold text-black group-hover:text-[#219dd0]'>View Less</p>
                <HiMiniArrowLongLeft className='group-hover:text-[#219dd0]' />
              </> 
            }
          </button>
        </div>
    </section>
  )
})
