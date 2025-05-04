"use client"
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import React from 'react'
import ProductCard from './ProductCard'
import { historyData } from '@/data/data'

export default function History() {
    

  return (
    <main>
        <section className='mt-5 mb-4'>
            <div className='flex gap-4 items-center justify-between'>
                <h2 className='text-lg font-bold'>History</h2>
                <div className='h-9 w-9 rounded-full  p-2'>
                    <ChevronUp size={20} className='text-[#3E5773]' />
                </div>
            </div>
        </section>
        <section>
            {historyData.map((item) => (
                <ProductCard 
                key={item.id} 
                title={item.title} 
                text={item.text} 
                status={item.status} 
                date={item.date} 
                action={item.action}
                handleClick={() => alert('clicked')}
                background='white'

                
                />
            ))}  
        </section>
    </main>
  )
}
