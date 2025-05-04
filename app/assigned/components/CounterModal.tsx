import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { CircleDashed, X } from 'lucide-react'
import { useState } from 'react'

interface CounterModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

export default function CounterModal({ isOpen, handleClose }: CounterModalProps) {
    return (
        <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-start justify-center p-4 pt-20 overflow-y-auto">
                <DialogPanel className="w-full max-w-2xl space-y-6 border bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <DialogTitle className="text-xl font-bold">Count Details</DialogTitle>
                        <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold ">Session Name</h3>
                            <p className="mt-1 text-gray-500">CC - Q1 2024-WH_1</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold ">Session Type</h3>
                            <p className="mt-1 text-gray-500">Cycle count</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold ">Sub Session Name</h3>
                            <p className="mt-1 ">CC - Q1 2024-WH_1</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h3 className="text-sm font-bold ">Status</h3>
                            <div className={
                    " flex items-center justify-center text-xs gap-1 bg-[#C0D6F2] text-[#0c4a6e]  rounded-full px-2 py-1 max-w-32"
                }>
                       
                       Ongoing  <CircleDashed size={15}/> 
                   
                </div>

                        </div>
                        <div>
                        <h3 className="font-bold ">
                                    Product type
                                </h3>
                                <p className="mt-1 text-gray-500 ">
                                    Raw Material
                                </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold ">Count Lead</h3>
                            <div className="mt-1 flex items-center gap-2">
                            <img src="assets/avatar.png" className="w-6 h-6"/>
                            <span className='text-gray-500'>Miles Kelk</span>   
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold ">Counter</h3>
                            <div className="mt-1 flex items-center gap-2">
                            <img src="assets/avatar.png" className="w-6 h-6"/>
                            <span className='text-gray-500'>Miles Kelk</span>   
                            </div>
                        </div>

                      
                        <div>
                            <h3 className="text-sm font-semibold ">Timeline</h3>
                            <p className="mt-1 text-gray-500">18/12/2025 - 18/12/2025</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold ">Tracking</h3>
                            <p className="mt-1 text-gray-500 flex items-center gap-2">Barcode
                                <img src="assets/radio-circle-check.png" alt=""  className='w-6 h-6'/>
                            </p>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}