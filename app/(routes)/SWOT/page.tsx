"use client"


import Navbar from "@/components/Navbar";
import SWOTAnalysis from "@/components/SWOTAnalysis";
import { motion } from "framer-motion"
import { ChevronDownIcon } from "lucide-react";


    const colors = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"]; // Green, Blue, Yellow, Red
    const letters = ["S", "W", "O", "T"];
const SWOTInfo = [
    {
        name: "Emilio",
        strengths: ["Problem solving","Work ethic","Dedication"],
        weaknesses: ["Procrastination","Time management"],
        opportunities: ["Clubs","Research","Helping others"],
        threats: ["Burnout from too much work","Sleep deprivation"]
    },
    {
      name: "Kelly",
      strengths: [
          "Strong writing and communication skills.",
          "Dedication and work ethic.",
          "Relevant experience enhancing readiness."
      ],
      weaknesses: [
          "Time management challenges.",
          "Limited exposure as a freshman."
      ],
      opportunities: [
          "Leverage work ethic to excel in academics and clubs.",
          "Utilize Indiana University resources and Sales Club membership.",
          "Expand involvement to gain skills and connections."
      ],
      threats: [
          "Risk of overcommitment leading to burnout.",
          "Competitive environment at Kelley.",
          "Economic trends impacting finance opportunities."
      ]
  },
    {
        name: "Ryan",
        strengths: ["Adaptability","Communication","Attention to detail"],
        weaknesses: ["Procrastinator","Unorganized","Time management"],
        opportunities: ["Researching","Learning","Networking"],
        threats: ["Other Commitments","Lack of creativity","Risk-taking"]
    },
    {
      name: "Alex",
      strengths: ["Analytical","Adaptable","Organized"],
      weaknesses: ["Procrastinator","Indisisive","Can lose focus"],
      opportunities: ["Technology","Variety of career paths","Meeting new people"],
      threats: ["Other activities","High competition","Interests away from work"]
  },
    
];


export default function SWOTPage() {
  return (
    <div className="bg-neutral-900">
        <div className="pb-10 flex flex-col h-screen">
            <div>
      <Navbar /></div>
      <div className="text-start my-auto w-5/12 mx-auto">
      <h1 className="text-8xl font-black flex text-start">
      {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ color: "#ffffff", y: 10 }}
                    animate={{ color: colors[index], y: 0 }}
                    transition={{
                        delay: index * 0.15,
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                >
                    {letter}
                </motion.span>
            ))}
            <span>&nbsp;Analysis</span>
        </h1>
        <div>
      <p className="mt-5 text-2xl text-start">
      An <em>in-depth</em> analysis of <strong>strengths</strong>, <strong>weaknesses</strong>, <strong>opportunities</strong>, and <strong>threats</strong> 
      <a href="https://www.eda.gov/resources/comprehensive-economic-development-strategy/content/swot-analysis" target="noopener" className="text-blue-500 text-end">
        <br></br>eda.gov
      </a>
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
        {SWOTInfo.map((element)=>(
            <SWOTAnalysis
            key={element.name}  
            name = {element.name}
            strengths = {element.strengths}
            weaknesses = {element.weaknesses}
            opportunitites = {element.opportunities}
            threats = {element.threats}
            
            />
        ))}
        </div>
    </div>
  );
}
