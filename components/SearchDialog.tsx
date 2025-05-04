import { Button, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Search, Triangle, X } from 'lucide-react'
import { useState } from 'react'
import ProductCard from './ProductCard'

interface SearchModalProps {
    isOpen: boolean;
    handleClcik: () => void;
}

export default function SearchModal({isOpen, handleClcik}: any) {

    return (
      <>
        <Dialog open={isOpen} onClose={handleClcik} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-full  h-screen space-y-4 border bg-[#f5f7fa] p-6 mt-5 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
              <DialogTitle className="font-bold">Search</DialogTitle>
                <button className='' onClick={handleClcik}><X/></button>
                </div>
                <div className='flex items-center justify-between gap-2 bg-white rounded-lg p-2'>
                    <Search size={20} className='text-[#737373]' />
                    <input type="text" className='border-none outline-none w-full' placeholder='Search...' />
                </div>

                    <main>
                        <section className='mt-6 mb-4'>
                            <div className='flex gap-4 items-center justify-between'>
                                <h2 className='text-lg font-bold'>Recent Searches</h2>
                                <div className=' rounded-full  p-2'>
                                    <img src="assets/triangledown.png" alt="icon" />
                                </div>
                            </div>
                        </section>
                        <section className="mt-20">
                            <ProductCard 
                            title="AC011" 
                            text="Cycle Count" 
                            status="Ongoing" 
                            date="11 Counts"
                             action="Resume" 
                             background="n"
                             />   
                            <ProductCard title="AC012" text="Cycle Count" status="Pending" date="0 Counts" action="Start" 
                            background="n"
                            />   
                        </section>
                    </main>
                
             
            </DialogPanel>
          </div>
        </Dialog>
      </>
    )
}