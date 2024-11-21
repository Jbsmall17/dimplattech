"use client"
import React, { useEffect } from 'react';
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import { useContextValue } from '@/context/context';

export default function Home() {
  const obj = useContextValue()
  
  const scrollToCourse = () => {
    if(obj?.courseRef){
      if (obj.courseRef.current) {
        obj.courseRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }

  const scrollToTeam = () =>{
    if(obj?.teamRef){
      if (obj.teamRef.current) {
        obj.teamRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }
  useEffect(()=>{
    if(obj?.previousRoute != "/" && obj?.activePage == "course"){
      console.log("scroll to course")
      scrollToCourse()
    }else if(obj?.previousRoute != "/" && obj?.activePage == "our team") {
      scrollToTeam()
    }else{
      return
    }
  },[])

  return (
    <main>
      <Header 
        page={"home"}
      />
      <Hero />
      <Services />
      <Courses ref={obj?.courseRef} />
      <Teams ref={obj?.teamRef} />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
