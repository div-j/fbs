import React, { useState } from 'react'
import { Switch } from "@headlessui/react";
import { Search } from "lucide-react";
import { assignedData } from "@/data/data";
import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/navigation';
import CountTableData from './Counts';

export  function AssignSessions() {
      const [enabled, setEnabled] = useState(false);
        const router = useRouter();
    
  return (
    <main className="px-6">
    <section className="mt-6 mb-4">
      <div className="flex  items-center justify-between w-full">
        <h2 className="text-lg font-bold w-[80%] ">{
          enabled? 'Counts' : 'Assigned Sessions'
          }</h2>
        <div className=" rounded-full gap-3   flex items-center justify-center w-[40%] sm:w-[10%] ">
          {/* toggle switch */}
          <span className="text-[13px] text-[#3E5773]">All counts</span>
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
    {
      enabled?
      <CountTableData />
      : (
<section>
                {assignedData.map((item) => (
                    <ProductCard 
                    key={item.id} 
                    title={item.title} 
                    text={item.text} 
                    status={item.status} 
                    date={item.date} 
                    action={item.action}
                    count={item.count}
                    handleClick={() => router.push('/start-count')}
                 background='white'
                    />
                ))
                }  
            </section>
      )
    }
        

  </main>
  )
}
