"use client"
import React from 'react'
import { FaInstagram,FaFacebookF,FaXTwitter,FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { motion } from "motion/react"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useContextValue } from '@/context/context';

export default function Footer() {
  const obj = useContextValue()
  const router = useRouter()

  const handleGlobalRoute = () =>{
    if(obj){
      const {pathname, currentRoute,setCurrentRoute, setPreviousRoute} = obj
      setPreviousRoute(currentRoute);
      setCurrentRoute(pathname);
    }
  }

  const scrollToCourseFunc = () => {
    if(obj){
      const {pathname, courseRef, setActivePage} = obj
      setActivePage('course');
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
    if(obj){
      const {pathname, teamRef, setActivePage} = obj
      setActivePage('our team');
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

  return (
    <motion.footer 
      initial={{opacity:0, y: 50}} 
      whileInView={{opacity:1, y: 0}} 
      transition={{ delay: 0.25}} 
      viewport={{once: true}}
      className='bg-[#219dd0] pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-4 lg:pb-6'>
      <div className='flex flex-col sm:flex-row gap-4 mb-4 px-[5%]'>
        <div className='flex-1 self-center sm:self-end'>
            <p className='text-sm text-center sm:text-start text-[#cfcfcf] mb-2'>Follow Us:</p>
            <div className='flex flex-row gap-2'>
                <Link target='_blank' href="https://www.instagram.com/dimplattech">
                  <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaInstagram />
                  </div>
                </Link>
                <Link target='_blank' href="https://web.facebook.com/dimplatTech?mibextid=LQQJ4d&_rdc=1&_rdr#">
                  <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaFacebookF />
                  </div>
                </Link>
                <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaXTwitter />
                </div>
                <Link target='_blank' href="https://www.linkedin.com/in/dimplat-tech-2a50572a8/?originalSubdomain=ng">
                  <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                    <FaLinkedinIn />
                  </div>
                </Link> 
                <Link target='_blank' href="https://www.tiktok.com/@dimplattech">
                <div className='flex flex-row w-[24px] h-[24px] rounded-sm justify-center items-center bg-white'>
                  <FaTiktok />
                </div>
                </Link> 
            </div>
        </div>
        <div className='flex-1 self-center sm:self-start'>
            <ul className='cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-0 text-[#cfcfcf] text-sm sm:pb-10'>
                <Link onClick={() => {handleGlobalRoute();obj?.setActivePage("home")}} href="/">
                  <li className='text-center sm:text-start'>Home</li>
                </Link>
                <Link onClick={()=>{handleGlobalRoute();obj?.setActivePage("about")}} href="/about-us">
                  <li className='text-center sm:text-start'>About Us</li>
                </Link>
                {/* <li className='text-center sm:text-start'>Help &amp; Support</li> */}
                <li onClick={scrollToCourseFunc} className='text-center sm:text-start'>Courses</li>
                <Link href="tel:+2348165402158">
                  <li className='text-center sm:text-start'>Contact us</li>
                </Link>
                <Link href="/terms&conditions">
                  <li className='text-center sm:text-start'>Privacy policy</li>
                </Link>
                {/* <li className='text-center sm:text-start'>Pricing</li> */}
                <li onClick={scrollToTeamFunc} className='text-center sm:text-start'>Our Team</li>
                {/* <li className='text-center sm:text-start'>Sitemap</li> */}
            </ul>
        </div>
      </div>
      <hr />
      <p className='px-[4%] text-sm text-[#cfcfcf] mt-2'>&copy; Copyright. All Right Reserved. Dimplattech2023</p>
    </motion.footer>
  )
}
