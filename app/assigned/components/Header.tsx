"use client"
import { ArrowLeft, CheckCheck, CircleAlert } from 'lucide-react'
import React, {useState} from 'react'
import CounterModal from './CounterModal'
import MarkCompleteModal from './MarkCompleteModal'
import CountMarkedModal from './CountMarkedModal'
import { useRouter } from 'next/navigation'

export default function Header() {
    const [isCounterModalOpen, setIsCounterModalOpen] = useState(false)
    const [isMarkCompleteModalOpen, setIsMarkCompleteModalOpen] = useState(false)
    const [isCountMarkedModalOpen, setIsCountMarkedModalOpen] = useState(false)
    
    const handleMarkComplete = () => {
        setIsMarkCompleteModalOpen(false)
        setIsCountMarkedModalOpen(true)
    }
    const router = useRouter()
    return (
        <>
        <section className='w-full mt-4 py-3 flex items-center justify-between px-6'>
            <button onClick={() => {router.back()}} className='flex gap-4 items-center justify-between'> {/* Fixed onClick handler */}
                <ArrowLeft size={20} className='text-[#3E5773]' />
                <h1 className='font-bold'>CC-Q12024 </h1>
            </button>
            <div className='flex gap-4 items-center justify-between mt-4'>
                <button onClick={() => setIsMarkCompleteModalOpen(true)}>
                    <CheckCheck size={20} className='text-[#3E5773]' />
                </button>
                <button onClick={() => setIsCounterModalOpen(true)}>
                    <CircleAlert size={20} className='text-[#3E5773] rotate-180'/> 
                </button>
            </div>
        </section>
        
        <CounterModal
            isOpen={isCounterModalOpen}
            handleClose={() => setIsCounterModalOpen(false)}
        />
        
        <MarkCompleteModal
            isOpen={isMarkCompleteModalOpen}
            handleClose={() => setIsMarkCompleteModalOpen(false)}
            handleProceed={handleMarkComplete}
        />
        
        <CountMarkedModal
            isOpen={isCountMarkedModalOpen}
            handleClose={() => setIsCountMarkedModalOpen(false)}
            handleProceed={() => alert('Process completed')}
        />
        </>
    )
}