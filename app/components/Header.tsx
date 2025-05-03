import Image from 'next/image'
import React from 'react'

export function Header() {
  return (
    <main className='w-full py-4'>
        <section className='flex gap-4  items-center justify-end '>
            <div className='w-5 h-5'>
                <Image src="/assets/notification.png" alt="notification" width={100} height={100} className=' ' />
            </div>
            <div className='text-xs w-9 h-9 bg-[#e2e8f0] p-3 items-center justify-center rounded-full flex '>
                {"OA"}
            </div>


        </section>
    </main>
  )
}
