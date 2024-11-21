"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dimplatLogo from "../assests/dimplattect-logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import { useRouter } from 'next/navigation'
import {motion, useScroll} from "motion/react"
import Link from 'next/link'
import { useContextValue } from '@/context/context'

interface headerObjProps{
  page: string
}

export default function Header({page}:headerObjProps) {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  // const [activePage, setActivePage] = useState(page)
  const router = useRouter()
  const {scrollYProgress} = useScroll()
  const obj = useContextValue()

  const handleGlobalRoute = () =>{
    if(obj){
      const {pathname, currentRoute,setCurrentRoute, setPreviousRoute} = obj
      setPreviousRoute(currentRoute);
      setCurrentRoute(pathname);
    }
  }

  const scrollToCourseFunc = () => {
    obj?.setActivePage('course');
    if(obj){
      const {pathname, courseRef} = obj
      if(pathname == '/'){
          if (courseRef?.current) {
            courseRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
      }else{
        handleGlobalRoute()
        router.push("/")
      }
    }
  }

  const scrollToTeamFunc = () => {
    obj?.setActivePage('our team');
    if(obj){
      const {pathname, teamRef} = obj
      if(pathname == '/'){
          if (teamRef?.current) {
            teamRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
      }else{
        handleGlobalRoute()
        router.push("/")
      }
    }
  }

  useEffect(()=>{
    if(obj?.activePage == "course" || obj?.activePage == "our team" ) return
    obj?.setActivePage(page)
  },[page])
  return (
    <header className='fixed z-40 w-[100vw] left-0 top-0 bg-[#0F1022] flex justify-between items-center px-[5%] h-[60px] gap-6'>
      <motion.div 
        style={{scaleX:scrollYProgress, transformOrigin: 'left', y: '10px'}} 
        className='absolute z-40 bottom-0 left-0 h-[10px] w-full bg-[#219dd0]'></motion.div>
      <div>
        <Link onClick={()=>{handleGlobalRoute(); obj?.setActivePage("home")}} href='/'>
          <Image 
            src={dimplatLogo} 
            alt='dimplat tech logo' 
            height={60}
            className='cursor-pointer'
          />
        </Link>
      </div>
      <nav className='hidden sm:flex sm:gap-[25px] md:gap-[50px] lg:gap-[125px] xl:gap-[225px] 2xl:gap-[300px] items-center'>
        <ul className='flex sm:gap-[15px] md:gap-[25px] lg:gap-[35px] xl:gap-[50px] items-center'>
            <li 
              className={`h-[22px] cursor-pointer hover:border-b-2 ${obj?.activePage == "home" && "border-b-2 border-[#219dd0]" } hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap`}
            >
              <Link onClick={() =>{handleGlobalRoute(); obj?.setActivePage("home")}} href="/">Home</Link>
            </li>
            <li  
              className={`h-[22px] cursor-pointer hover:border-b-2 ${obj?.activePage == "about" && "border-b-2 border-[#219dd0]" }  hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap`}
            >
              <Link onClick={() =>{handleGlobalRoute(); obj?.setActivePage("about")}} href="/about-us">About Us</Link>
            </li>
            <li onClick={scrollToCourseFunc} className={`h-[22px] cursor-pointer ${obj?.activePage == "course" && "border-b-2 border-[#219dd0]" } hover:border-b-2 hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap`}>Courses</li>
            <li onClick={scrollToTeamFunc} className={`h-[22px] cursor-pointer  ${obj?.activePage == "our team" && "border-b-2 border-[#219dd0]" } hover:border-b-2 hover:border-[#219dd0] text-[#777A79] text-sm whitespace-nowrap`}>Our Team</li>
        </ul>
        <div className='flex sm:gap-[5px] md:gap-[15px] lg:gap-[25px] items-center'>
              <button>
                <Link onClick={handleGlobalRoute} className='w-[98px] h-[36px] flex justify-center items-center text-white text-sm bg-[#219dd0] rounded-lg hover:bg-white hover:text-[#219dd0] hover:border-2 hover:border-[#219dd0] transition-all duration-500 ease-linear' href="/signup">Register</Link>
              </button>
            <button>
                <Link
                  onClick={handleGlobalRoute}
                  className='w-[98px] h-[36px] flex justify-center items-center text-white text-sm hover:border hover:border-white rounded-lg  transition-all duration-500 ease-linear'
                  href='/login'>Log in</Link>
            </button>
        </div>
      </nav>
      {
        !isMenuOpen
        ? <GiHamburgerMenu
            onClick={()=> setIsMenuOpen(true)} 
            className='block cursor-pointer sm:hidden text-white text-2xl'
            />
        : <MdClose
            onClick={()=> setIsMenuOpen(false)} 
            className='block cursor-pointer sm:hidden text-white text-2xl'
            />
      }
      <nav className={`px-[5%] py-2 ${isMenuOpen ?  "block sm:hidden" : "hidden"} absolute z-30 left-0 top-full bg-[#0F1022] w-full`}>
        <ul className='text-[#777A79]'>
            <Link onClick={() =>{handleGlobalRoute(); obj?.setActivePage("home")}} href='/'>
              <li className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>
                Home
              </li>
            </Link>
            <Link onClick={() =>{handleGlobalRoute(); obj?.setActivePage("about")}} href="/about-us">
            <li className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>
              About Us
            </li>
            </Link>
            <li onClick={scrollToCourseFunc}  className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>Courses</li>
            <li onClick={scrollToTeamFunc}  className='py-2 text-center cursor-pointer text-sm border-b border-b-[#219dd0]'>Our Team</li>
        </ul>
        <div className='text-white mt-8 flex flex-col'>
            <Link href="/signup">
              <button className='py-2 cursor-pointer bg-[#219dd0] rounded-lg w-full'>Register</button>
            </Link>
            <Link href='/login'>
              <button className='py-2 cursor-pointer w-full'>Log in</button>
            </Link>
        </div>
      </nav>
    </header>
  )
}
