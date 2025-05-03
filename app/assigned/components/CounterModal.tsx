import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from 'lucide-react'
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
                            <h3 className="text-sm font-semibold ">Sub Session Name</h3>
                            <p className="mt-1 ">CC - Q1 2024-WH_1</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold t">Status</h3>
                            <ul className="mt-1 space-y-1">
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
                                    Ongoing
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 mr-2  rounded-full"></span>
                                    Product type
                                </li>
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 mr-2 text-gray-500 rounded-full"></span>
                                    Raw Material
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Count Lead</h3>
                            <ul className="mt-1 space-y-1">
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"></span>
                                    Miles Kalk
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Counter</h3>
                            <ul className="mt-1 space-y-1">
                                <li className="flex items-center">
                                    <span className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"></span>
                                    Miles Kalk
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold ">Timeline</h3>
                            <p className="mt-1 text-gray-500">18/12/2025 - 18/12/2025</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold ">Tracking</h3>
                            <p className="mt-1 text-gray-500">Barcode</p>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}