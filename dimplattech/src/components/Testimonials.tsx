"use client"
import React from 'react'
import Testimonial from './Testimonial'
import dataStudent from "../assests/data-student.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Testimonials() {
  return (
    <section className='mb-10 sm:mb-12 lg:mb-16 xl:mb-20 px-[5%]'>
        <p className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 lg:mb-12 xl:mb-16 text-center">What Our Students Say</p>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className='flex flex-row overflow-x-scroll'
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
            <Testimonial
                image={dataStudent}
                name={'Duru Chidalu Cynthia'}
                role={"Data Analytics Student"}
                desc={"I had a very smooth learning process.kudos to my Tutor ,mr Taofeek for his resilience ,patience and determination to impart knowledge.There were occasions we even had tutorials at night considering his busy schedule ,he’s indeed a good tutor.I mean ,it’s not easy to take up a New skill but with his efforts and of course my own efforts ,i found it less challenging.When i was informed that tutorials were coming to an end,I felt a little not happy because it automatically meant no more calls or mails from him .I thank you so much for this opportunity especially the internship and other benefits.,it solely means it’s not just about the funds for you.Thank you!!"}
            />
            </SwiperSlide>
            <SwiperSlide>
            <Testimonial
                image={dataStudent}
                name={'Duru Chidalu Cynthia'}
                role={"Data Analytics Student"}
                desc={"I had a very smooth learning process.kudos to my Tutor ,mr Taofeek for his resilience ,patience and determination to impart knowledge.There were occasions we even had tutorials at night considering his busy schedule ,he’s indeed a good tutor.I mean ,it’s not easy to take up a New skill but with his efforts and of course my own efforts ,i found it less challenging.When i was informed that tutorials were coming to an end,I felt a little not happy because it automatically meant no more calls or mails from him .I thank you so much for this opportunity especially the internship and other benefits.,it solely means it’s not just about the funds for you.Thank you!!"}
            />
            </SwiperSlide>
            <SwiperSlide>
            <Testimonial
                image={dataStudent}
                name={'Duru Chidalu Cynthia'}
                role={"Data Analytics Student"}
                desc={"I had a very smooth learning process.kudos to my Tutor ,mr Taofeek for his resilience ,patience and determination to impart knowledge.There were occasions we even had tutorials at night considering his busy schedule ,he’s indeed a good tutor.I mean ,it’s not easy to take up a New skill but with his efforts and of course my own efforts ,i found it less challenging.When i was informed that tutorials were coming to an end,I felt a little not happy because it automatically meant no more calls or mails from him .I thank you so much for this opportunity especially the internship and other benefits.,it solely means it’s not just about the funds for you.Thank you!!"}
            />
            </SwiperSlide>
            <SwiperSlide>
            <Testimonial
                image={dataStudent}
                name={'Duru Chidalu Cynthia'}
                role={"Data Analytics Student"}
                desc={"I had a very smooth learning process.kudos to my Tutor ,mr Taofeek for his resilience ,patience and determination to impart knowledge.There were occasions we even had tutorials at night considering his busy schedule ,he’s indeed a good tutor.I mean ,it’s not easy to take up a New skill but with his efforts and of course my own efforts ,i found it less challenging.When i was informed that tutorials were coming to an end,I felt a little not happy because it automatically meant no more calls or mails from him .I thank you so much for this opportunity especially the internship and other benefits.,it solely means it’s not just about the funds for you.Thank you!!"}
            />
            </SwiperSlide>
            <SwiperSlide>
            <Testimonial
                image={dataStudent}
                name={'Duru Chidalu Cynthia'}
                role={"Data Analytics Student"}
                desc={"I had a very smooth learning process.kudos to my Tutor ,mr Taofeek for his resilience ,patience and determination to impart knowledge.There were occasions we even had tutorials at night considering his busy schedule ,he’s indeed a good tutor.I mean ,it’s not easy to take up a New skill but with his efforts and of course my own efforts ,i found it less challenging.When i was informed that tutorials were coming to an end,I felt a little not happy because it automatically meant no more calls or mails from him .I thank you so much for this opportunity especially the internship and other benefits.,it solely means it’s not just about the funds for you.Thank you!!"}
            />
            </SwiperSlide>
        </Swiper>
    </section>
  )
}
