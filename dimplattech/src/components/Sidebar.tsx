"use client"
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoNotifications, IoLogOut } from "react-icons/io5";
import { IoMdSettings, IoMdFastforward } from "react-icons/io";
import { AnimatePresence, motion } from 'motion/react';

interface sidebarCompProp {
    pageName : string
}

export default function Sidebar({pageName}:sidebarCompProp) {
    const [isMenuOpen,setIsMenuOpen] = useState(true)
    return (
    <>
    <div className='hidden md:flex relative transition duration-500 pt-4 md:pt-6 xl:pt-10 bg-white px-6 md:px-8 xl:px-10 flex-col gap-8'>
        <IoMdFastforward 
            onClick={()=>setIsMenuOpen(!isMenuOpen)} 
            className={`${isMenuOpen ? "rotate-0" : "rotate-180"} transition duration-500 cursor-pointer text-xl absolute top-2 lg:top-4 lg:right-4 right-2`} 
        />
        <div className='flex gap-2 items-center cursor-pointer'>
            <FaUserCircle className={`text-3xl ${pageName == 'personal info' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
            {
                isMenuOpen
                &&
                <motion.p 
                    initial={{scale: 1}}
                    exit={{scale:0}}
                    className={`${pageName == 'personal info' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                >
                    Personal Info
                </motion.p>
            }
            </AnimatePresence>
        </div>
        <div className='flex gap-2 items-center cursor-pointer'>
            <MdPayment className={`text-3xl ${pageName == 'payment' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
                {
                    isMenuOpen
                    &&
                    <motion.p 
                        initial={{scale: 1}}
                        exit={{scale:0}}
                        className={`${pageName == 'payment' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                    >
                        Payment
                    </motion.p>
                }
            </AnimatePresence>
        </div>
        <div className='flex gap-2 items-center cursor-pointer'>
            <IoNotifications className={`text-3xl ${pageName == 'notifications' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
              {
                isMenuOpen
                &&
                <motion.p
                    initial={{scale: 1}}
                    exit={{scale:0}}
                    className={`${pageName == 'notifications' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                >
                    Notifications
                </motion.p>
              }  
            </AnimatePresence>
        </div>
        <div className='flex gap-2 items-center cursor-pointer'>
            <IoMdSettings className={`text-3xl ${pageName == 'settings' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
                {
                    isMenuOpen
                    &&
                    <motion.p
                        initial={{scale: 1}}
                        exit={{scale:0}}
                        className={`${pageName == 'settings' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                    >
                        Settings
                    </motion.p>
                }   
            </AnimatePresence>
        </div>
        <div className='flex gap-2 items-center'>
            <IoLogOut className={`text-3xl ${pageName == 'logout' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
            <AnimatePresence>
                {
                    isMenuOpen
                    &&
                    <motion.p
                        initial={{scale: 1}}
                        exit={{scale:0}}
                        className={`${pageName == 'logout' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'} text-lg`}
                    >
                        Logout
                    </motion.p>
                }
            </AnimatePresence>
        </div>
    </div>
    <div className='shadow-xl flex w-full py-4 px-[5%] bg-white justify-between md:hidden fixed bottom-0 left-0'>
        <FaUserCircle className={`text-3xl ${pageName == 'personal info' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <MdPayment className={`text-3xl ${pageName == 'payment' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <IoNotifications className={`text-3xl ${pageName == 'notifications' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <IoMdSettings className={`text-3xl ${pageName == 'settings' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
        <IoLogOut className={`text-3xl ${pageName == 'logout' ? 'text-[#219dd0]' : 'text-[#4d4d4d]'}`} />
    </div>
    </>
  )
}
