"use client";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "../../components/ProductCard";
import { Search } from "lucide-react";
import { assignedData } from "@/data/data";
import { AssignSessions } from "./components/AssignSessions";
import CountTableData from "./components/Counts";

export default function page() {
  return (
    <div className="">
      <Header />
      <div className=" text-center py-2 bg-[#DBF5C3] ">
        <h1 className="text-sm text-[#737373]">
          Info panel.. will ask the text that can be here
        </h1>
      </div>
      <AssignSessions />


    
    </div>
  );
}
