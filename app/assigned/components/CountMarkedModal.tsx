import { Button, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Search, Triangle, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface props {
    isOpen: boolean;
    handleClose: () => void;
    handleProceed: () => void;
}

export default function CountMarkedModal({isOpen, handleClose, handleProceed}: props) {
    const router = useRouter();
    
    const navigateToHome = () => {
        handleClose(); // Close the modal first
        router.push('/'); 
    }
    
    const navigateToViewCounts = () => {
        handleClose(); // Close the modal
        router.push('/assigned'); // Navigate to the assigned page
    }

    return (
      <>
        <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="w-full max-w-2xl space-y-4 border bg-[#F5F7FA] mt-5 rounded-2xl shadow-lg">
              <section className='flex flex-col items-center justify-between  my-12 mx-6 '>
                <div>
                    <img src="assets/radio-circle-checked.png" alt="" />
                </div>
                  <DialogTitle className="font-bold text-[#334155] mb-3 mt-6">Count Marked as Complete</DialogTitle>
                  <Description className='text-[13px] text-[#737373]'>
                Count sent Alt. Counter & Manager for review
                </Description>
              </section>

               <section className='flex items-center justify-between bg-white w-full'>
                  <div className='m-6 gap-2 flex items-center justify-between w-full'>
                      <Button onClick={navigateToViewCounts} className="mt-4 bg-[#E2E8F0] rounded-md px-4 py-2 w-full">View Counts</Button>
                      <Button onClick={navigateToHome} className="mt-4 bg-[#3E5773] rounded-md px-4 py-2 text-white w-full ">Home</Button>
                  </div>
              </section>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    )
}