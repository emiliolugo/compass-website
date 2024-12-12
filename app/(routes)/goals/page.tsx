"use client"


import GoalBody from "@/components/GoalBody";
import Navbar from "@/components/Navbar";

import { ChevronDownIcon } from "lucide-react";




export default function GoalPage() {
  return (
    <div className="bg-neutral-900">
        <div className="pb-10 flex flex-col h-screen">
            <div>
      <Navbar /></div>
      <div className="text-start my-auto w-5/12 mx-auto">
      <h1 className="text-8xl font-black flex text-center">
        Our Goals
        </h1>
        <div>
      <p className="mt-5 text-2xl text-start">
      <strong>Goal</strong> <span className="text-neutral-400"><em>(noun)</em></span>
      <br></br>
      the object of a person's ambition or effort; an aim or desired result.
      </p></div></div>

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
      <div className="bg-zinc-300 flex flex-col justify-center px-10 gap-y-10 py-10">
        <GoalBody />
        </div>
    </div>
  );
}
