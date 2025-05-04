import { Button, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Search, Triangle, X } from 'lucide-react'
import { useState } from 'react'

interface props {
    isOpen: boolean;
    handleClose: () => void;
    handleProceed: () => void;
}

export default function MarkCompleteModal({isOpen, handleClose, handleProceed}: props) {

    return (
      <>
        <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-full max-w-2xl space-y-4 border bg-[#F5F7FA]  mt-5 rounded-2xl shadow-lg">
               <main className="p-6">
                <div className="flex items-center justify-between mb-4 ">
              <DialogTitle className="font-bold text-lg">Mark Count as Complete</DialogTitle>
                <button className='' onClick={handleClose}><X/></button>
                </div>
                <Description className='text-[13px] font-medium text-[#737373]'>
                Marking count as complete will progress count for review by Alt. Counter & Count Lead
                </Description>
                </main>   

                <section className='flex items-center justify-end bg-white w-full'>
                    <div className='m-6 gap-2 flex items-center justify-end'>
                        <Button onClick={handleClose} className="mt-4 bg-[#E2E8F0] rounded-md px-4 py-2 ">Cancel</Button>
                        <Button onClick={handleProceed} className="mt-4 bg-[#3E5773] rounded-md px-4 py-2 text-white ">Proceed</Button>
                    </div>
                </section>

            </DialogPanel>
          </div>
        </Dialog>
      </>
    )
}