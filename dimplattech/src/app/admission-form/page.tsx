import Header2 from '@/components/Header2'
import React from 'react'
import admissionHero from "../../assests/admission-form.png"
import { FaWhatsapp } from "react-icons/fa6"
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main>
        <Header2 />
        <section className='hero-div relative px-[5%]'>
            <Image style={{zIndex: "-1"}} src={admissionHero} className='absolute top-0 left-0 w-full h-full' alt={"admission form"} />
            <p className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#219dd0] pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 pb-4 md:pb-5 lg:pb-6'>ADMISSION FORM</p>
            <p className='text-white text-sm sm:text-base max-w-[600px] w-full'>
                kindly fill this out form below to register & pay for your
                chosen course. Once your enrolment is complete, you will receive an email
                address with your admission package, receipts, welcome letter, links to student comunity,
                course materials & login access to your Student Learning Portal 
            </p>
            <a className='absolute z-20 bottom-6 left-[5%] flex flex-row gap-2 items-center' href="tel:+2348165402158">
                <FaWhatsapp  className='text-[#60d669] text-base sm:text-lg'/>
                <p className='text-white text-base sm:text-lg'>Chat with us</p>
            </a>
        </section>
        <section className='px-[5%] pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-6 md:pb-8 xl:pb-12 flex justify-center'>
            <div className='w-full lg:w-[75%] xl:w-[60%] rounded-lg border border-[#c7c7c7] shadow-inner py-8 px-4'>
            <p className='text-center text-xl text-black font-semibold mb-4 lg:mb-6'>Fill the form below</p>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Full Name</label>
                <input
                    className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none' 
                    type='text' 
                    placeholder='Enter Full name' 
                />
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Email{" "}&#42;</label>
                <input 
                    className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none' 
                    type="text" 
                    placeholder='Enter email' 
                />
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Phone Number</label>
                <input
                    className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none'
                    type="text" 
                    placeholder='Enter phone number' 
                />
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Highest Academic Achievement</label>
                <select name="" id="" className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none'>
                    <option value="">Select highest academic Achievement</option>
                    <option value="">Select highest academic Achievement</option>
                    <option value="">Select highest academic Achievement</option>
                    <option value="">Select highest academic Achievement</option>
                </select>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mb-3'>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="" className='text-lg'>Age</label>
                    <select
                        className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none' 
                        name="" 
                        id=""
                    >
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="" className='text-lg'>Gender</label>
                    <select
                        className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none'
                        name="" 
                        id=""
                    >
                        <option value="">male</option>
                        <option value="">female</option>
                        <option value="">non-binary</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mb-3'>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="" className='text-lg'>Country</label>
                    <select
                        className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none'
                        name="" id="">
                        <option value="">Nigeria</option>
                        <option value="">Ghana</option>
                        <option value="">Niger</option>
                    </select>
                </div>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="">City</label>
                    <select 
                        className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none'
                        name="" id=""
                    >
                        <option value="">lagos island</option>
                        <option value="">lagos mainland</option>
                        <option value="">epe</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Course of interest</label>
                <select
                    className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none'
                    name="" id="">
                    <option value="">select course of interest</option>
                    <option value="">frontend development</option>
                    <option value="">backend development</option>
                </select>
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Cohort (Start Month)</label>
                <select
                    className='p-2 border-2 border-[#c7c7c7] rounded-lg focus:outline-none'
                    name="" id="">
                    <option value="">select Cohort</option>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                </select>  
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Class Format</label>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <div className='flex flex-row gap-2 items-center'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" id="class" name="class" value="virtual-class" />
                        <label htmlFor="class" className='text-base'>virtual Class</label>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" id="class" name="class" value="onsite/physical-class" />
                        <label htmlFor="class" className='text-base'>Onsite/Physical Class</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <p className='text-lg'>Select Payment plan</p>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <input
                            className='h-[24px] w-[24px]' 
                            type="radio" id="payment" name="payment" value="full-payment" />
                        <label htmlFor="payment" className='text-base'>Full payment</label>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" id="payment" name="payment" value="part payment(two times)" />
                        <label htmlFor="class" className='text-base'>Part payment (two times)</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <p className='text-lg'>Currency</p>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <input
                            className='h-[24px] w-[24px]'
                            type="radio" id="currency" name="currency" value="USD" />
                        <label htmlFor="currency" className='text-lg'>USD</label>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" id="currency" name='currency' value='naira' />
                        <label htmlFor="currency" className='text-lg'>Naira</label>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input
                            className='h-[24px] w-[24px]'
                            type="radio" id="currency" name='currency' value='usdt/usds(Cryptocurrencies)' />
                        <label htmlFor="currency" className='text-lg'>usdt/usds(Cryptocurrencies)</label>
                    </div>
                </div> 
            </div>
            <div className='flex flex-col gap-4 mb-4'>
                <p className='text-lg'>Student Policy</p>
                <p className='text-sm sm:text-base'>
                    Students are advised to Dimplattech Student policy in order to be fully informed about standards
                    and policies of the institution. You can read by clicking the link below.
                </p>
                <div className='flex flex-row gap-2 sm:gap-4 items-center'>
                    <input 
                        className='h-[24px] w-[24px]'
                        type="checkbox"  />
                    <p className='text-xs sm:text-base font-semibold'>
                        By checking this box, you have read and agreed with Dimplattech 
                        <Link href="/terms&conditions"><span className='text-[#219dd0] ml-1'>student policy</span></Link>
                    </p>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link href="/payment">
                    <button
                        className='h-[40px] px-8 flex items-center justify-center rounded-lg border border-[#219dd0] text-base text-[#219dd0] font-semibold hover:bg-[#219dd0] hover:border-0 hover:text-white transition duration-700'
                        type='submit'
                    >
                        Submit
                    </button>
                </Link>
            </div>
            </div>
        </section>
    </main>
  )
}
