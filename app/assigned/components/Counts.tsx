"use client"
import { Pencil } from 'lucide-react';
import React, {useState} from 'react';
import { ChevronUp, ChevronDown } from "lucide-react";

export default function CountTableData() {
  
    const [value, setValue] = useState(20);

    const increment = () => setValue((prev) => prev + 1);
    const decrement = () => setValue((prev) => Math.max(prev - 1, 0)); // prevent negative

  const tableData = Array(9).fill({
    productName: 'Topivate Cream',
    packSize: '24',
    uom: 'Pack',
    bn: 'BN2345',
    la: 'AC011',
    expiryDate: '30-Mar-2025',
    scq: '120',
    timestamp: '2/4/2025 12:51:34'
  });

  return (
    <div className="w-full bg-white border border-gray-200 rounded-md shadow-sm">
      {/* Table Header */}
      <h2 className="p-6 text-lg font-medium text-gray-800">Counts</h2>
      
       {/* Table with horizontal scroll container */}
       <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left">
          <thead className="border-y border-gray-200 bg-gray-50">
            <tr>
              {/* Make the header sticky as well */}
              <th className="px-6 py-4 font-medium text-gray-500 sticky left-0 bg-gray-50 z-10 min-w-[150px]">Product Name</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-center">Pack/Carton size</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-center">UOM</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-center">B/N</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-center">L/A</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-center">Expiry date</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-center">SCQ</th>
              <th className="px-6 py-4 font-medium text-gray-500 text-center">Timestamp</th>
              <th className="px-6 py-4 font-medium text-gray-500"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {/* Make the cell sticky with white background */}
                <td className="px-6 py-4 text-gray-700 sticky left-0 bg-white z-10 min-w-[150px]">{item.productName}</td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">{item.packSize}</td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">{item.uom}</td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">{item.bn}</td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">{item.la}</td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">{item.expiryDate}</td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">{item.scq}</td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">{item.timestamp}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Pencil size={20} className="text-[#737373]"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 text-sm">
        <div className="flex items-center gap-1">
          <p className="text-gray-600">Items per page: <span>{20}</span></p>
          <div className="space-y-[2px] ">
          <img src="assets/triangle.png" alt="" className='block -rotate-90 opacity-[50%] w-[6px] h-[6px]'/>
            <img src="assets/triangle.png" alt="" className='block rotate-90 w-[6px] h-[6px]'/>
          </div>
         
          <span className="text-gray-600 ml-4 border-l pl-4">1-10 of 240 items</span>
        </div>
        
           {/* Spinner Icons */}
           <div className=" flex gap-3 items-center">
        <button onClick={increment} className="p-1 hover:bg-gray-100 rounded-t">
          <img src="assets/triangle.png" alt=""  className='rotate-180 opacity-50'/>

        </button>
        <button onClick={decrement} className="p-1 -ml-3 hover:bg-gray-100 rounded-b">
        <img src="assets/triangle.png" alt="" />

        </button>
      </div>
      </div>
    </div>
  );
}