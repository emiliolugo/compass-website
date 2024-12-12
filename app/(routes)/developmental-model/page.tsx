'use client'

import DevelopmentalModelBody from "@/components/DevelopmentalModelBody"
import DevelopmentalModelMobile from "@/components/DevelopmentalModelMobile";

import Navbar from "@/components/Navbar"
import { ChevronDownIcon } from "lucide-react";
import React, { useState, useEffect } from 'react';

export default function DevelopmentalModelPage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Use lg breakpoint as threshold
    };

    // Check initial screen size
    checkMobile();

    // Add event listener to check screen size on resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <div>
        <div >
          <div className="bg-neutral-900">
            <Navbar /></div><div className="h-screen bg-neutral-900 flex flex-col text-center justify-around">
            <h1 className="text-4xl md:text-6xl font-black my-auto">
              
                Developmental Model
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
          {isMobile ? <DevelopmentalModelMobile /> : <DevelopmentalModelBody />}
        </div>
    </div>
  );
}
