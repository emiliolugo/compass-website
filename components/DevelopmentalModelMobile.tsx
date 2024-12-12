'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function DevelopmentalModelMobile() {
  const developmentalModel = [
    {
      id: 1,
      title: '1. Aligning',
      description: [
        "Conduct a goal-setting workshop to define the project's objectives and align them with business outcomes.",
        'Create a team charter outlining roles, responsibilities, and ground rules for collaboration.',
        'Identify key performance indicators (KPIs) to measure success.',
      ],
    },
    {
      id: 2,
      title: '2. Strategizing',
      description: [
        'Develop a comprehensive project plan with timelines, milestones, and deliverables.',
        'Assign ownership of tasks based on team members expertise and strengths.',
        'Conduct a risk assessment to identify potential challenges and plan mitigation strategies.',
      ],
    },
    {
      id: 3,
      title: '3. Operationalizing',
      description: [
        'Establish weekly progress meetings to track performance and address issues.',
        'Implement tools for project management (e.g., Trello, Asana) to keep tasks organized and visible.',
        'Foster data-driven decision-making by gathering and analyzing relevant metrics.',
      ],
    },
    {
      id: 4,
      title: '4. Executing',
      description: [
        'Ensure team members stay focused on delivering results that meet or exceed expectations.',
        'Maintain open channels of communication to address challenges promptly.',
        'Drive productivity through efficiency-focused practices, such as time-blocking or automation.',
      ],
    },
    {
      id: 5,
      title: '5. Evaluating',
      description: [
        'Conduct a post-mortem analysis to review project outcomes against KPIs.',
        'Gather feedback from stakeholders and team members to identify areas of improvement.',
        'Document lessons learned in a final report to enhance future projects.',
      ],
    },
  ];

  return (
    <div className="bg-zinc-300">
      <h2 className='text-stone-900 text-center text-4xl font-black pt-10 pb-10'>
        Our Model
      </h2>
      <div className="max-w-md mx-auto space-y-6 pb-10 px-4">
        {developmentalModel.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2 
            }}
            className="bg-white text-stone-900 rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-bold mb-4 border-b pb-2">
              {step.title}
            </h3>
            <ul className="list-disc list-inside text-left space-y-2">
              {step.description.map((desc, idx) => (
                <li key={idx} className="text-base">
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}