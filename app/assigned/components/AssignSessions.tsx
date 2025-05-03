import React, { useState } from 'react'
import { Switch } from "@headlessui/react";
import { Search } from "lucide-react";
import { assignedData } from "@/data/data";
import ProductCard from '@/app/components/ProductCard';

export  function AssignSessions() {
      const [enabled, setEnabled] = useState(false);
    
  return (
    <main className="px-6">
    <section className="mt-6 mb-4">
      <div className="flex gap-4 items-center justify-between">
        <h2 className="text-lg font-bold w-1/2">Assigned Sessions</h2>
        <div className=" rounded-full gap-4  p-2 flex items-center justify-center ">
          {/* toggle switch */}
          <span className="text-xs text-[#3E5773]">All counts</span>
          <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? 'bg-gray-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none  focus:ring-offset-2 `}
            >
              <span
                className={`${
                  enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
        </div>
      </div>
    </section>
    {/* search */}
    <div className="my-[14px] flex items-center justify-between gap-2 bg-white rounded-lg p-2">
      <Search size={20} className="text-[#737373]" />
      <input
        type="text"
        className="border-none outline-none w-full"
        placeholder="Search..."
      />
    </div>
        <section>
                {assignedData.map((item) => (
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
