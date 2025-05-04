"use client"
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CountHeader() {
    const router = useRouter()
  return (
    <>
    <section className='w-full mt-4 py-3 flex items-center justify-between '>
    <div className='flex gap-4 items-center justify-between'>
        <button onClick={()=>router.back()}>
        <ArrowLeft size={20} className='text-[#3E5773]'  />
        </button>
        <h1 className='font-bold '>Add Count Record </h1>
    </div>
    <p className='text-[#737373]'>
        Reset
    </p>
</section>
<div className='flex items-center justify-between mt-5 mb-2 w-full px-4 py-[10px] rounded-full border border-gray-200 bg-white'>
    <h3 className='text-[#737373]'>Details</h3>
    <ChevronRight size={20} className='text-[#737373]'/>
</div>

</>

  )
}
