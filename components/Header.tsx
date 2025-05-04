import Image from 'next/image'
import React from 'react'

export function Header() {
  return (
    <main className='w-full py-4'>
        <section className='flex gap-4  items-center justify-end '>
            <div className='w-5 h-5  relative'>
                <Image src="/assets/notification.png" alt="notification" width={100} height={100} className='opacity-50 ' />
                <div>
                    <p className='absolute w-4 h-4 flex items-center justify-center text-[8px] text-white bg-[#FF0000] rounded-md -top-2 -right-1 opacity-50'>
                      9+
                    </p>
                </div>
            </div>
            <div className='text-xs  bg-[#e2e8f0] p-3 items-center justify-center rounded-full flex '>
                {"OA"}
            </div>


        </section>
    </main>
  )
}
