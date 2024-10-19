import React from 'react'

interface courseFeePropsObj{
    onSite: {
        private: string,
        general: string
    },
    virtual: {
        private: string,
        general: string
    }
}

export default function CourseFee({onSite,virtual}: courseFeePropsObj) {
  return (
    <section className='px-[5%] bg-[#e2f2f9] pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 mb-4 sm:mb-6 lg:mb-8'>
        <div className='relative pt-4 mb-4 sm:mb-6 lg:mb-8'>
            <div className='absolute z-[1] left-0 bottom-2 h-[24px] sm:h-[32px] w-[24px] sm:w-[32px] rounded-full bg-[#219dd0]'></div>
            <h2 className='relative z-10 text-xl sm:text-2xl font-semibold text-black'>
                COURSE TUITION FEE
            </h2>
        </div>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-16 items-center justify-center'>
            <div className='rounded-2xl bg-white w-[90%] max-w-[325px]'>
                <p 
                    className='py-4 text-lg sm:text-xl rounded-tl-2xl rounded-tr-2xl font-semibold bg-[#219dd0] text-center'
                >
                    DIPLOMA/ON SITE MODE
                </p>
                <div className='py-4 px-6'>
                    <p className='text-center text-base sm:text-lg font-semibold'>PRIVATE PHYSICAL CLASS:</p>
                    <p className='text-center text-base sm:text-lg font-semibold mb-4 sm:mb-6'>{onSite.private}</p>
                    <p className='text-center text-base sm:text-lg font-semibold'>GENERAL PHYSICAL CLASS:</p>
                    <p className='text-center text-base sm:text-lg font-semibold mb-2'>{onSite.general}</p>
                    <p className='text-center text-sm sm:text-base font-semibold mb-2 text-[#219dd0]'>
                        This fee can be paid in up to 2 <br /> installments
                    </p>
                    <div className='flex justify-center items-center'>
                        <button className='py-2 px-8 leading-none rounded-lg text-center text-[#219dd0] border border-[#219dd0]'>Enrol Now</button>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl bg-white w-[90%] max-w-[325px]'>
                <p
                     className='py-4 text-lg sm:text-xl rounded-tl-2xl rounded-tr-2xl font-semibold bg-black text-white text-center'
                >
                    DIPLOMA/VIRTUAL MODE
                </p>
                <div className='py-4 px-6'>
                    <p className='text-center text-base sm:text-lg font-semibold'>PRIVATE VIRTUAL CLASS:</p>
                    <p className='text-center text-base sm:text-lg font-semibold mb-4 sm:mb-6'>{virtual.private}</p>
                    <p className='text-center text-base sm:text-lg font-semibold'>GENERAL VIRTUAL CLASS:</p>
                    <p className='text-center text-base sm:text-lg font-semibold mb-2'>{virtual.general}</p>
                    <p className='text-center text-sm sm:text-base font-semibold mb-2 text-[#219dd0]'>
                        This fee can be paid in up to 2 <br /> installments
                    </p>
                    <div className='flex justify-center items-center'>
                        <button className='py-2 px-8 leading-none rounded-lg text-center text-[#219dd0] border border-[#219dd0]'>Enrol Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
