import React from 'react'

interface StatusCardProps {
    title: string;
    description: string;
    icon: string;

}

export  function StatusCard({icon , title, description}:StatusCardProps) {
  return (
        <section className='p-4 bg-white  rounded-2xl  w-full'>
            <div className = "w-9 h-9 mb-[10px]">
            <img src={icon} alt="" className='w-full' />
            </div>
            <h2 className='font-bold'>{title}</h2>
            <p className='text-xs text-[#737373]'>{description}</p>
        </section>

  
  )
}
