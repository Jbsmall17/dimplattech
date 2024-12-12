"use client"
import Header2 from '@/components/Header2'
import React from 'react'
import admissionHero from "../../assests/admission-form.png"
import { FaWhatsapp } from "react-icons/fa6"
import Image from 'next/image'
import Link from 'next/link'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation'
import { useContextValue } from '@/context/context'


export default function page() {
    const {buyerDetails, setBuyerDetials} = useContextValue()
    const router = useRouter()
    const validationSchema = Yup.object({
      fullName: Yup.string().required(),
      email: Yup.string().required(),
      phoneNumber: Yup.string().required(),
      qualification: Yup.string().required(),
      age: Yup.string().required(),
      gender: Yup.string().required(),
      country: Yup.string().required(),
      city: Yup.string(),
      courseOfInterest: Yup.string().required(),
      cohortMonth: Yup.string(),
      classFormat: Yup.string().required(),
      classType: Yup.string().required(),
      paymentType: Yup.string().required(),
      currency: Yup.string().required(),
      agreeToTerms: Yup.boolean().required()
    })
    const formik = useFormik({
        initialValues: buyerDetails,
        validationSchema: validationSchema,
        onSubmit: (values)=>{
            setBuyerDetials({
                ...values
            })
            router.push("/payment")

        }
    })
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
            <form onSubmit={formik.handleSubmit} className='w-full lg:w-[75%] xl:w-[60%] rounded-lg border border-[#c7c7c7] shadow-inner py-8 px-4'>
            <p className='text-center text-xl text-black font-semibold mb-4 lg:mb-6'>Fill the form below</p>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Full Name</label>
                <input
                    className={`p-2 border ${formik.errors.fullName && formik.touched.fullName ? "border-red-500" : "border-[#c7c7c7]" } rounded-lg focus:outline-none`} 
                    type='text' 
                    placeholder='Enter Full name'
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Email{" "}&#42;</label>
                <input 
                    className={`p-2 border ${formik.errors.email && formik.touched.email ? "border-red-500" : 'border-[#c7c7c7]' } rounded-lg focus:outline-none`} 
                    type="text" 
                    name='email'
                    placeholder='Enter email' 
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Phone Number</label>
                <input
                    className={`p-2 border ${formik.errors.phoneNumber && formik.touched.phoneNumber ? "border-red-500" : 'border-[#c7c7c7]'} rounded-lg focus:outline-none`}
                    type="text"
                    name='phoneNumber'
                    placeholder='Enter phone number'
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Highest Academic Achievement</label>
                <select name="qualification" id="" 
                    value={formik.values.qualification} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`p-2 border ${formik.errors.qualification && formik.touched.qualification ? "border-red-500" : "border-[#c7c7c7]" } rounded-lg focus:outline-none`}
                >
                    <option value="">Select highest academic Achievement</option>
                    <option value="primary-school">Primary School</option>
                    <option value="undergrate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                </select>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mb-3'>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="" className='text-lg'>Age</label>
                    <input
                        className={`p-2 border ${formik.errors.age && formik.touched.age ? "border-red-500" : 'border-[#c7c7c7]'} rounded-lg focus:outline-none`} 
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        id=""
                    />
                </div>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="" className='text-lg'>Gender</label>
                    <select
                        className={`p-2 border ${formik.errors.gender && formik.touched.gender ? "border-red-500" : "border-[#c7c7c7]"} rounded-lg focus:outline-none`}
                        name="gender"
                        value={formik.values.gender}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                        id="gender"
                    >
                        <option value="">gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="non-binary">non-binary</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 mb-3'>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="" className='text-lg'>Country</label>
                    <input
                        className={`p-2 border ${formik.errors.country && formik.values.country ? " border-red-500" : "border-[#c7c7c7]"} rounded-lg focus:outline-none`}
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="country"
                    />
                </div>
                <div className='flex-1 flex flex-col gap-3'>
                    <label htmlFor="">City</label>
                    <input 
                        className={`p-2 border ${formik.errors.city && formik.values.city ? "border-red-500" : 'border-[#c7c7c7]'}rounded-lg focus:outline-none`}
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        id="city"
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Course of interest</label>
                <select
                    className={`p-2 border ${formik.errors.courseOfInterest && formik.touched.courseOfInterest ? "border-red-500" : "border-[#c7c7c7]"} rounded-lg focus:outline-none`}
                    name="courseOfInterest"
                    value={formik.values.courseOfInterest} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="courseOfInterest"
                >
                    <option value="">select course of interest</option>
                    <option value="backend">Backend development</option>
                    <option value="dataAnalytics">Data Analytics</option>
                    <option value="realEstate">Real Estate Development</option>
                    <option value="productDesign">Product Design</option>
                    <option value="productManagement">Project Management</option>
                    <option value="digitalMarketing">Digital Marketing</option>
                    <option value="cloudComputing">Cloud Computing</option>
                    <option value="frontend">Frontend development</option>
                    <option value="dataScience">Data Science</option>
                    <option value="graphicsDesign">Graphics Design</option>
                    <option value="projectManagement">Project Management</option>
                    <option value="fullstack">Full Stack Web Development</option>
                </select>
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Cohort (Start Month)</label>
                <select
                    className={`p-2 border ${formik.errors.cohortMonth && formik.touched.cohortMonth ? "border-red-500" : "border-[#c7c7c7]"} rounded-lg focus:outline-none`}
                    name="cohortMonth" 
                    value={formik.values.cohortMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="cohortMonth">
                    <option value="">select Cohort</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>  
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <label htmlFor="" className='text-lg'>Class Format</label>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <div className='flex flex-row gap-2 items-center'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" 
                            id="class" 
                            name="classFormat" 
                            value="virtual-class"
                            onChange={formik.handleChange}
                            checked={formik.values.classFormat === "virtual-class"} 
                        />
                        <label htmlFor="class" className='text-base'>Virtual Class</label>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" 
                            id="class" 
                            name="classFormat" 
                            value="physical-class"
                            onChange={formik.handleChange}
                            checked={formik.values.classFormat === "physical-class"}
                            />
                        <label htmlFor="class" className='text-base'>Physical Class</label>
                    </div>
                </div>
            </div>
            {
                formik.values.classFormat !== ""
                && 
                <div className='flex flex-col gap-4 mb-3'>
                    <label htmlFor="" className='text-lg'>Class Format</label>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                        <div className='flex flex-row gap-2 items-center'>
                            <input 
                                className='h-[24px] w-[24px]'
                                type="radio" 
                                id="class" 
                                name="classType" 
                                value="general"
                                onChange={formik.handleChange}
                                checked={formik.values.classType === "general"} 
                            />
                            <label htmlFor="class" className='text-base'>General Class</label>
                        </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" 
                            id="class" 
                            name="classType" 
                            value="private"
                            onChange={formik.handleChange}
                            checked={formik.values.classType === "private"}
                            />
                        <label htmlFor="class" className='text-base'>Private Class</label>
                    </div>
                </div>
                </div>
            }
            <div className='flex flex-col gap-4 mb-3'>
                <p className='text-lg'>Select Payment plan</p>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <input
                            className='h-[24px] w-[24px]' 
                            type="radio" 
                            id="paymentType" 
                            name="paymentType" 
                            value="full-payment" 
                            onChange={formik.handleChange}
                            checked={formik.values.paymentType === "full-payment"}
                            />
                        <label htmlFor="payment" className='text-base'>Full payment</label>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" 
                            id="paymentType" 
                            name="paymentType" 
                            value="part payment(two times)" 
                            checked={formik.values.paymentType == "part payment(two times)"}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="class" className='text-base'>Part payment (two times)</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-3'>
                <p className='text-lg'>Currency</p>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    {/* <div className='flex flex-row items-center gap-2'>
                        <input
                            className='h-[24px] w-[24px]'
                            type="radio" id="currency" name="currency" value="USD" />
                        <label htmlFor="currency" className='text-lg'>USD</label>
                    </div> */}
                    <div className='flex flex-row items-center gap-2'>
                        <input 
                            className='h-[24px] w-[24px]'
                            type="radio" 
                            id="currency" 
                            name='currency' 
                            value='naira' 
                            onChange={formik.handleChange}
                            checked={formik.values.currency === "naira"}
                        />
                        <label htmlFor="currency" className='text-lg'>Naira</label>
                    </div>
                    {/* <div className='flex flex-row items-center gap-2'>
                        <input
                            className='h-[24px] w-[24px]'
                            type="radio" id="currency" name='currency' value='usdt/usds(Cryptocurrencies)' />
                        <label htmlFor="currency" className='text-lg'>usdt/usds(Cryptocurrencies)</label>
                    </div> */}
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
                        type="checkbox"
                        name="agreeToTerms"
                        onChange={formik.handleChange}
                        checked={formik.values.agreeToTerms}
                    />
                    <p className='text-xs sm:text-base font-semibold'>
                        By checking this box, you have read and agreed with Dimplattech 
                        <Link href="/terms&conditions"><span className='text-[#219dd0] ml-1'>student policy</span></Link>
                    </p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    className='h-[40px] px-8 flex items-center justify-center rounded-lg border border-[#219dd0] text-base text-[#219dd0] font-semibold hover:bg-[#219dd0] hover:border-0 hover:text-white transition duration-700'
                    type='submit'
                >
                    Submit
                </button>
            </div>
            </form>
        </section>
    </main>
  )
}
