import { Search } from 'lucide-react'
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import SearchModal from './SearchDialog'
import { useRouter } from 'next/navigation'

export default function Session() {
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

  return (
    <main>
        <section className='mt-5 mb-4'>
            <div className='flex gap-4 items-center justify-between'>
                <h2 className='text-lg font-bold'>Sessions</h2>
                <button 
                className='h-9 w-9 rounded-full bg-white p-2'
                onClick={() => setIsOpen(true)}>
                    <img src='assets/search.png' className="w-full"/>
                </button>
            </div>
        </section>
        <section>
            <ProductCard 
            title="CC - Q1 2024" 
            text="Cycle Count" 
            status="" 
            date="12/17/2026"
             action="View" 
             handleClick={() => router.push('/assigned')}
             background='white'
             
             />   
            <ProductCard
             title="CC - Q1 2024" 
             text="Cycle Count" 
             status="Alt. Count" 
             date="12/17/2026" 
             action="View"
             background='white'
             handleClick={() => router.push('/assigned')}
             
             />   
        </section>
    <SearchModal isOpen={isOpen} handleClcik={() => setIsOpen(false)} />

    </main>
  )
}
