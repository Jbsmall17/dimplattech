"use client"
import React from "react";
import { usePathname } from "next/navigation";
import {createContext, Dispatch, ReactNode, RefObject, SetStateAction, useContext, useEffect, useRef, useState } from "react";

interface contextType {
    courseRef : RefObject<HTMLDivElement> | null,
    teamRef: RefObject<HTMLDivElement> | null,
    currentRoute: string,
    previousRoute: string,
    setPreviousRoute: Dispatch<SetStateAction<string>>,
    setCurrentRoute: Dispatch<SetStateAction<string>>,
    pathname: string,
    activePage: string, 
    setActivePage: Dispatch<SetStateAction<string>>,
    buyerDetails: buyerDetailsObj, 
    setBuyerDetials: Dispatch<SetStateAction<buyerDetailsObj>>
}

interface buyerDetailsObj {
    fullName: string,
    email: string,
    phoneNumber: string,
    qualification: string,
    age: string,
    gender: string,
    country: string,
    city: string,
    courseOfInterest: string,
    cohortMonth: string,
    classFormat: string,
    classType: string,
    paymentType: string,
    currency: string,
    agreeToTerms: boolean
}


const context = createContext<contextType | undefined>(undefined)

export const ContextComp = ({children} : {children: ReactNode}) =>{
    const pathname = usePathname()
    const courseRef = useRef<HTMLDivElement | null>(null)
    const teamRef = useRef<HTMLDivElement | null>(null)
    const [currentRoute,setCurrentRoute] = useState<string>(pathname)
    const [previousRoute, setPreviousRoute] = useState<string>('/')
    const [activePage, setActivePage] = useState('')
    const [buyerDetails, setBuyerDetials] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        qualification: "",
        age: "",
        gender: "",
        country: "",
        city: "",
        courseOfInterest: "",
        cohortMonth: '',
        classFormat: '',
        classType: "",
        paymentType: '',
        currency: '',
        agreeToTerms: false
    })
    useEffect(()=>{
        setCurrentRoute(pathname)
    },[pathname])
    return (
        <context.Provider value={{
            courseRef,
            teamRef,
            currentRoute,
            previousRoute,
            setCurrentRoute,
            setPreviousRoute,
            pathname,
            activePage, 
            setActivePage,
            buyerDetails, 
            setBuyerDetials
            }}>
            {children}
        </context.Provider>
    )
}


export const useContextValue = () =>{
    const contextObj = useContext(context)
    if (!contextObj) {
        throw new Error("error occurred");
      }
    return contextObj
}