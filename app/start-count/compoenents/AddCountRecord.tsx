"use client";

import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function AddCountRecord() {
  const [formData, setFormData] = useState({
    id: "",
    productName1: "",
    productName2: "",
    uom: "Pack",
    packSize: "100",
    batchNumber: "",
    expiryDate: "",
    logisticsArea: "",
    unit: "",
    packQty: "",
    sco: "",
    remark: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto   space-y-4">
      <h2 className=" font-bold">Count Inputs</h2>
      <div className="space-y-2">
        <label className="block text-sm  text-[#737373] font-medium">ID</label>
        <input name="id" value={formData.id} onChange={handleChange} 
        placeholder="Enter"
        className="w-full p-4 border bg-[#EBF0F4] border-gray-300 text-gray-200 rounded-lg" />
      </div>
      <div className="space-y-2 text-[#737373]">  
        <label className="block text-sm font-medium">Product Name</label>
        <div className="flex bg-white items-center border border-gray-300 rounded-lg p-2">
        <input name="productName1" value={formData.productName1} onChange={handleChange} className="w-full p-2 " placeholder="Enter product name"
         />
        <div className="flex items-center justify-between gap-3 ">
          <X size={20} className=" text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, productName1: "" })} />
            |
          <ChevronDown size={20} className="  text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, productName1: "" })} />
        </div>
        </div>

      </div>
      <div className="space-y-2 text-[#737373]">
        <label className="block text-sm font-medium text-[#737373]">Product Name</label>
        <div className="flex bg-white items-center border border-gray-300 rounded-lg p-2">
        <input name="productName1" value={formData.productName1} onChange={handleChange} className="w-full p-2 " placeholder="Enter product name"
         />
        <div className="flex items-center justify-between gap-3 ">
          <X size={20} className=" text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, productName1: "" })} />
            |
          <ChevronDown size={20} className="  text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, productName1: "" })} />
        </div>
        </div>

      </div>
      <div className="space-y-2 text-[#737373]">
        <label className="block text-sm font-medium">UOM</label>
        <input name="uom" value={formData.uom} readOnly className="w-full p-4 text-gray-500 bg-[#EBF0F4] border border-gray-300 rounded-lg" />
      </div>
      <div className="space-y-2 text-[#737373]">
        <label className="block text-sm font-medium">Pack Size</label>
        <input name="packSize" value={formData.packSize} readOnly className="w-full p-4 border border-gray-300 rounded-lg bg-[#EBF0F4]" />
      </div>

       <div className="space-y-2 text-[#737373]">
        <label className="block text-sm font-medium">Batch Number</label>
        <div className="flex bg-white items-center border border-gray-300 rounded-lg p-2">
        <input name="batchNumber" value={formData.batchNumber} onChange={handleChange} className="w-full p-2 " placeholder="Enter product name"
         />
        <div className="flex items-center justify-between gap-3 ">
          <X size={20} className=" text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, batchNumber: "" })} />
            |
          <ChevronDown size={20} className="  text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, batchNumber: "" })} />
        </div>
        </div>

      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Expiry Date</label>
        <input name="expiryDate" type="date" value={formData.expiryDate} onChange={handleChange}
        className="w-full text-gray-500 p-4 border bg-[#EBF0F4] border-gray-300 rounded-lg uppercase" />
      </div>

      <div className="space-y-2 text-[#737373]">
      <label className="block text-sm font-medium">Logistics Area</label>
        <div className="flex bg-white items-center border border-gray-300 rounded-lg p-2">
        <input name="logisticsArea" value={formData.logisticsArea} onChange={handleChange} className="w-full p-2 " placeholder="Enter Logiestics Area"
         />
         
        <div className="flex items-center justify-between gap-3 ">
          <X size={20} className=" text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, logisticsArea: "" })} />
            |
          <ChevronDown size={20} className="  text-gray-500 cursor-pointer" onClick={() => setFormData({ ...formData, logisticsArea: "" })} />
        </div>
        </div>

      </div>
     
      <div className="space-y-2 text-[#737373]">
        <label className="block text-sm font-medium">Unit</label>
        <input name="unit" type="number text-[#737373]" value={formData.unit} onChange={handleChange} 
        placeholder="Enter Unit"
        className="w-full p-4  border border-gray-300 rounded-lg" />
      </div>
      <div className="space-y-2 text-[#737373]">
        <label className="block text-sm font-medium">Pack Qty</label>
        <input name="packQty" type="number" value={formData.packQty} onChange={handleChange}
        placeholder="Enter Unit"
        className="w-full p-4 border border-gray-300 rounded-lg" />
      </div>
      <div className="space-y-2 text-[#737373]">
        <label className="block text-sm font-medium">SCQ</label>
        <input name="sco" 
        value={"Pack size * Pack Qty + Unit"} 
        readOnly className="w-full p-4 text-gray-500 border border-gray-300 rounded-lg bg-gray-100" />
      </div>

      <div className="space-y-2 text-[#737373]">
      <label className="block text-sm font-medium">Remark</label>
        <div className="flex bg-white items-center border border-gray-300 rounded-lg p-2">
        <input name="batchNumber" value={formData.remark} onChange={handleChange} className="w-full p-2 " placeholder="Enter product name"
         />
        <div className="flex items-center justify-between gap-3 ">
          <X size={20} className=" text-gray-500 cursor-pointer" />
            |
          <ChevronDown size={20} className="  text-gray-500 cursor-pointer" />
        </div>
        </div>

      </div>

     
      <button type="submit" className="w-full py-4 bg-[#3E5773] text-white rounded-lg ">Save Input</button>
    </form>
  );
}
