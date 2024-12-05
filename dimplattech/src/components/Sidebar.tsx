"use client"
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoNotifications, IoLogOut } from "react-icons/io5";
import { IoMdSettings, IoMdFastforward } from "react-icons/io";
import { AnimatePresence, motion } from 'motion/react';2
import Link from 'next/link';
import {app} from "../firebaseConfig"
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface sidebarCompProp {
    pageName : string
}

export default function Sidebar({pageName}:sidebarCompProp) {
    const router = useRouter()
    const auth = getAuth(app)
    const [isMenuOpen,setIsMenuOpen] = useState(true)

    const signOutFunc = () =>{
        signOut(auth)
        .then(()=>{
            sessionStorage.removeItem("accessToken")
            router.push("/login")
        })
    }

    return (
    <>
    <div className='hidden md:flex relative transition duration-500 pt-4 md:pt-6 xl:pt-10 bg-white px-6 md:px-8 xl:px-10 flex-col gap-8'>
        <IoMdFastforward 
            onClick={()=>setIsMenuOpen(!isMenuOpen)} 
            className={`${isMenuOpen ? "rotate-0" : "rotate-180"} transition duration-500 cursor-pointer text-xl absolute top-2 lg:top-4 lg:right-4 right-2`} 
        />
        <Link  href='/personalInfo' className='flex gap-2 items-center cursor-pointer group'>
            <FaUserCircle className={`text-3xl group-hover:text-[#219dd0] ${pageName == 'personal info' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
            {
                isMenuOpen
                &&
                <motion.p 
                    initial={{scale: 1}}
                    exit={{scale:0}}
                    className={`${pageName == 'personal info' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg group-hover:text-[#219dd0]`}
                >
                    Personal Info
                </motion.p>
            }
            </AnimatePresence>
        </Link>

        <div className='group flex gap-2 items-center cursor-pointer'>
            <MdPayment className={`text-3xl group-hover:text-[#219dd0] ${pageName == 'payment' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
                {
                    isMenuOpen
                    &&
                    <motion.p 
                        initial={{scale: 1}}
                        exit={{scale:0}}
                        className={`${pageName == 'payment' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} group-hover:text-[#219dd0] text-lg`}
                    >
                        Payment
                    </motion.p>
                }
            </AnimatePresence>
        </div>
        <div className='group flex gap-2 items-center cursor-pointer'>
            <IoNotifications className={`group-hover:text-[#219dd0] text-3xl ${pageName == 'notifications' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
              {
                isMenuOpen
                &&
                <motion.p
                    initial={{scale: 1}}
                    exit={{scale:0}}
                    className={`group-hover:text-[#219dd0] ${pageName == 'notifications' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                >
                    Notifications
                </motion.p>
              }  
            </AnimatePresence>
        </div>
        <div className='group flex gap-2 items-center cursor-pointer'>
            <IoMdSettings className={`text-3xl group-hover:text-[#219dd0] ${pageName == 'settings' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
                {
                    isMenuOpen
                    &&
                    <motion.p
                        initial={{scale: 1}}
                        exit={{scale:0}}
                        className={`group-hover:text-[#219dd0] ${pageName == 'settings' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                    >
                        Settings
                    </motion.p>
                }   
            </AnimatePresence>
        </div>
        <div onClick={signOutFunc} className='group cursor-pointer flex gap-2 items-center'>
            <IoLogOut className={`text-3xl group-hover:text-[#219dd0] ${pageName == 'logout' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <AnimatePresence>
                {
                    isMenuOpen
                    &&
                    <motion.p
                        initial={{scale: 1}}
                        exit={{scale:0}}
                        className={`group-hover:text-[#219dd0] ${pageName == 'logout' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                    >
                        Logout
                    </motion.p>
                }
            </AnimatePresence>
        </div>
    </div>
    <div className='shadow-xl flex w-full py-4 px-[5%] bg-white justify-between md:hidden fixed bottom-0 left-0'>
        <Link href='/personalInfo'>
            <FaUserCircle className={`text-3xl hover:text-[#219dd0] ${pageName == 'personal info' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        </Link> 
        <MdPayment className={`text-3xl hover:text-[#219dd0] ${pageName == 'payment' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <IoNotifications className={`text-3xl hover:text-[#219dd0] ${pageName == 'notifications' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <IoMdSettings className={`text-3xl hover:text-[#219dd0] ${pageName == 'settings' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <IoLogOut onClick={signOutFunc}  className={`hover:text-[#219dd0] text-3xl ${pageName == 'logout' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
    </div>
    </>
  )
}
