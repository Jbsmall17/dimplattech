import React from 'react'

export default function Spinner() {
  return (
    <div className='flex justify-center items-center'>
      <div className='spinner border-[2px] border-t-[2px] border-t-slate-100 border-slate-300 h-[18px] w-[18px] rounded-full animate-spin'></div>
    </div>
  )
}
