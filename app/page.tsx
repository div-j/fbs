"use client";
import Image from "next/image";
import { Header } from "./components/Header";
import { StatusCard } from "./components/StatusCard";
import Session from "./components/Session";
import History from "./components/History";

export default function Home() {
  
  return (
   <div className="px-6">
    <Header/>
   <h1 className="my-5">Hi Olu</h1>
   <section className=' flex gap-4 md:flex-row flex-col'> 
   <StatusCard title="Sessions" description="1 active Count Sessions" icon="assets/box.png"/>
   <StatusCard title="Ongoing" description="3/5 L/A (60% done)" icon="assets/checked.png"/>
   </section>
   <Session/>
   <History/>

   </div>
  );
}
