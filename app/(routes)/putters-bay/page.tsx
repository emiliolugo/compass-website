'use client'

import Navbar from "@/components/Navbar"
import PuttersBayBody from "@/components/PuttersBayBody";
import { ChevronDownIcon } from "lucide-react";

export default function PuttersBayPage() {
  return (
    <div>
        <div >
          <div className="bg-neutral-900">
            <Navbar /></div><div className="h-[95vh] bg-neutral-900 flex flex-col text-center">
            <h1 className="text-6xl font-black my-auto">
              
                Putter&apos;s Bay Case
            </h1>
            <div className="flex flex-col items-center mb-10">
      {[4, 3, 2].map((size, index) => (
        <div
          key={index}
          className={`animate-ping`}
          style={{
            animationDelay: `${index * 0.15}s`, // Adds staggered delay
          }}
        >
          <ChevronDownIcon className={`w-${size} h-${size}`} />
        </div>
      ))}
    </div>
            </div>
            
        </div>
        <div>
       <PuttersBayBody />
        </div>
    </div>
  );
}
