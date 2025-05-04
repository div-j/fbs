"use client"
import React from 'react'
import clsx from 'clsx';
import { CheckCheck, CircleDashed, History, Minus } from 'lucide-react';

interface productCardProps{
    title: string;
    text:string;
    count?:string;
    date: string;
    action?: string;  
    status: string;
    handleClick?: () => void;
    background:string;
   
}

export default function ProductCard({title, text, status, date, count="", background="", action="",handleClick}: productCardProps) {
  return (
    <section className={`flex items-center justify-between bg-${background} p-4 rounded-2xl mb-4`}>
        <div className=''>
            <div className='flex items-center mb-1 gap-[10px]'>
                <h1 className='text-xs font-bold '>{title}</h1>
                <div className={clsx(
                    " flex items-center justify-center text-xs gap-4",
                    
                    status === "Completed" ? "bg-[#dbf5c3] text-[#004b00]" : 
                    status === "Pending" ? "bg-[#EBF0F4] text-[#7a7a00]" : 
                    status === "Ongoing" ? "bg-[#C0D6F2] text-[#0c4a6e]" : 
                    status === "Alt. Count" ? "bg-[#fee2e2] text-black":"",
                    "rounded-full px-2 py-1"
                )}>
                    {status}
                    
                        {status === "Completed" ? (<CheckCheck size={12} />) : ""}
                        {status === "Pending" ? (<History/>) : ""}
                        {status === "Ongoing" ? (<CircleDashed/>) : ""}
                   
                </div>
            </div>
            <p className="text-[#737373] text-xs flex items-center gap-2">
  {text && <span>{text}</span>}

  {count && (
    <>
      <span className="h-2 w-px bg-[#737373]" /> {/* Vertical Divider */}
      <span>{count}</span> 
    </>
  )}

  {date && (
    <>
      <span className="h-2 w-px bg-[#737373]" /> {/* Another Divider */}
      <span>Date: {date}</span>
    </>
  )}
</p>

        </div>
        <button className='text-xs text-[#3E5773]' onClick={handleClick} >{action}</button>
    </section>
  )
}