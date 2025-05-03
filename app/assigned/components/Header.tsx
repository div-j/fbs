"use client"
import { ArrowLeft, CheckCheck, CircleAlert } from 'lucide-react'
import React, {useState} from 'react'
import CounterModal from './CounterModal'

export default function Header() {
        const [isOpen, setIsOpen] = useState(false)
    
  return (
    <>
    <section className='w-full mt-4 py-3 flex items-center justify-between px-6'>
        <div className='flex gap-4 items-center justify-between'>
            <ArrowLeft size={20} className='text-[#3E5773]' />
            <h1 className='font-bold'>CC-Q12024 </h1>

        </div>
        <div className='flex gap-4 items-center justify-between mt-4'>
        <CheckCheck size={20} className='text-[#3E5773]' />
        <button onClick={() => setIsOpen(true)}>
        <CircleAlert size={20} className='text-[#3E5773] rotate-180'/> 
        </button>

        </div>
    
    </section>
    
    <CounterModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}

        />
    </>

  )
}
