"use client"
import dynamic from 'next/dynamic';
import Header2 from '@/components/Header2'
import { useContextValue } from '@/context/context'
import { PriceList } from '@/data/data'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import toast,{Toaster} from 'react-hot-toast';
import { formatPrice } from '@/utils/util';

const PaystackButton = dynamic(() => import('react-paystack').then((mod) => mod.PaystackButton), {
    ssr: false,
  });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export default function page() {
    const publicKey = process.env.NEXT_PUBLIC_TEST_KEY || ""
    const {buyerDetails} = useContextValue()
    const [checkoutObj, setCheckoutObj] = useState({
        price : "",
        amountPaid: "",
        balance : ""
    })

    function getAmountToBePaid(){
        let price, amountPaid, balance;
        const priceObj = PriceList.find((price)=>{
            return price.name === buyerDetails.courseOfInterest
        })
        if(priceObj){
            if(buyerDetails.classFormat == "physical-class"){
                if(buyerDetails.classType === "general"){
                    price = priceObj.payment.physical.general
                    amountPaid = buyerDetails.paymentType == "full-payment" ? priceObj.payment.physical.general : parseInt(priceObj.payment.physical.general) / 2     
                }else{
                    price = priceObj.payment.physical.private
                    amountPaid = buyerDetails.paymentType == "full-payment" ? priceObj.payment.physical.private : parseInt(priceObj.payment.physical.private) / 2
                }
            }else{
                if(buyerDetails.classType === "general"){
                    price = priceObj.payment.virtual.general 
                    amountPaid = buyerDetails.paymentType == "full-payment" ? priceObj.payment.virtual.general : parseInt(priceObj.payment.virtual.general) / 2
                }else{
                    price = priceObj.payment.virtual.private
                    amountPaid = buyerDetails.paymentType == "full-payment" ? priceObj.payment.virtual.private : parseInt(priceObj.payment.virtual.private) / 2
                }
            }
            balance = `${parseInt(price) - parseInt(amountPaid as string)}`
            return {
                price,
                amountPaid: amountPaid as string,
                balance
            }
        }
    }

    function getCourse(course: string){
        let courseOfInterest;
        switch(course){
            case "backend":
                courseOfInterest = "Backend Devlopment";
                break;
            case "dataAnalytics":
                courseOfInterest = "Data Analytics";
                break;
            case "realEstate":
                courseOfInterest = "Real Estate Development";
                break;
            case "dataScience":
                courseOfInterest = "Data Science";
                break;
            case "productDesign":
                courseOfInterest = "Product Design";
                break;
            case "productManagement":
                courseOfInterest= "Project Management";
                break;
            case "digitalMarketing":
                courseOfInterest = "Digital Marketing";
                break;
            case "cloudComputing":
                courseOfInterest = "Cloud Computing";
                break;
            case "frontend":
                courseOfInterest= "Frontend Development"
                break;
            case "graphicsDesign":
                courseOfInterest = "Graphics Design";
                break;
            case "projectManagement":
                courseOfInterest = "Project Management";
                break;
            case "fullstack":
                courseOfInterest = "FullStack web Development";
                break;
            default:
                courseOfInterest= "course not available"
        }
        return courseOfInterest
    }

    const componentProps = {
        email: buyerDetails.email,
        amount: parseInt(checkoutObj.amountPaid) * 100,
        publicKey,
        text: `Pay ${formatPrice(checkoutObj.amountPaid)}`,
        onSuccess: async (response: any)=>{
            console.log(response)
            try{
                const paymentVerification = await axios.post(`${baseUrl}/api/payment-success`,{
                    email: buyerDetails.email,
                    name: buyerDetails.fullName.split(" ")[1],
                    course: getCourse(buyerDetails.courseOfInterest),
                    reference: response.reference
                  })
                if(paymentVerification.status === 200){
                    toast.success(paymentVerification.data.message)
                }
            }catch(error : any){
                toast.error(error.response.data.error)
            }
        },
        onClose: ()=> alert("payment cancelled")
    }


    useEffect(()=>{
        const obj = getAmountToBePaid()
        if(obj){
            setCheckoutObj({
                ...obj
            })
        }
    },[])

  return (
    <main>
        <Header2 />
        <Toaster />
        <section className='px-[5%] pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-6 md:pb-8 xl:pb-12  flex justify-center'>
            <div className='w-full lg:w-[75%] xl:w-[60%] rounded-lg border border-[#c7c7c7] shadow-inner py-8 px-4'>
                <p className='text-center text-2xl font-semibold mb-3'>Disclaimer</p>
                <p className='text-center text-base mb-6'>Please ensure that name provided on the form is what you want on your certificate</p>
                <div>
                    <p className='text-xl font-bold mb-2'>Course Details</p>
                    <p className='text-end font-semibold text-base mb-2'>course Fee</p>
                    <p className='text-sm mb-3'>Cohort 1</p>
                    <div className='flex flex-row items-center justify-between mb-2'>
                        <p className='font-medium text-lg'>Amount to pay</p>
                        <p className='font-medium text-lg'>{formatPrice(checkoutObj.price)}</p>
                    </div>
                    {
                        checkoutObj.balance !== "0"
                        &&
                        <div className='flex flex-row items-center justify-between mb-4'>
                            <p className='font-medium text-lg'>Balance to pay</p>
                            <p className='font-medium text-lg'>{formatPrice(checkoutObj.balance)}</p>
                        </div>
                    }
                    <p className='text-xl font-bold mb-2'>Summary Details</p>
                    <div className='flex flex-row items-center justify-between mb-2'>
                        <p className='font-medium text-lg'>Amount payable now</p>
                        <p className='font-medium text-lg'>{formatPrice(checkoutObj.amountPaid)}</p>
                    </div>
                    <div  className='flex flex-row items-center justify-between mb-4'>
                        <p className='font-medium text-lg'>Total amount due</p>
                        <p className='font-medium text-lg'>{formatPrice(checkoutObj.amountPaid)}</p>
                    </div>
                    <div className='flex justify-center'>
                        <button 
                            className='h-[40px] w-[65%] lg:w-[55%]'> 
                            {/* Pay #{checkoutObj.amountPaid} */}
                            <PaystackButton 
                                className='h-full w-full  flex items-center justify-center rounded-lg border border-[#219dd0] text-base text-[#219dd0] font-semibold hover:bg-[#219dd0] hover:border-0 hover:text-white transition duration-700'
                                {...componentProps}/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
