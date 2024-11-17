import Header2 from '@/components/Header2'
import React from 'react'

export default function page() {
  return (
    <main>
        <Header2 />
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
                        <p className='font-medium text-lg'>#0</p>
                    </div>
                    <div className='flex flex-row items-center justify-between mb-4'>
                        <p className='font-medium text-lg'>Balance to pay</p>
                        <p className='font-medium text-lg'>#0</p>
                    </div>
                    <p className='text-xl font-bold mb-2'>Summary Details</p>
                    <div className='flex flex-row items-center justify-between mb-2'>
                        <p className='font-medium text-lg'>Amount payable now</p>
                        <p className='font-medium text-lg'>#0</p>
                    </div>
                    <div  className='flex flex-row items-center justify-between mb-4'>
                        <p className='font-medium text-lg'>Total amount due</p>
                        <p className='font-medium text-lg'>#0</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='h-[40px] w-[65%] lg:w-[55%] flex items-center justify-center rounded-lg border border-[#219dd0] text-base text-[#219dd0] font-semibold hover:bg-[#219dd0] hover:border-0 hover:text-white transition duration-700'> 
                            Pay #0
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
