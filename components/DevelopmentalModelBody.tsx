// DevelopmentalModelBody.jsx

'use client'

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function DevelopmentalModelBody() {
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
        'Assign ownership of tasks based on team members’ expertise and strengths.',
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

  const numSteps = developmentalModel.length;
  const radius = 400; // Adjusted radius to accommodate larger steps
  const center = 500; // Updated center of the circle

  const stepWidth = 256; // w-64 in pixels
  const stepHeight = 384; // h-96 in pixels

  // Calculate positions for each step around the circle
  const stepsWithPosition = developmentalModel.map((step, index) => {
    const angleDeg = (360 / numSteps) * index - 90; // Start from top (-90 degrees)
    const angleRad = (angleDeg * Math.PI) / 180; // Convert to radians
    const x = center + radius * Math.cos(angleRad);
    const y = center + radius * Math.sin(angleRad);

    return {
      ...step,
      position: {
        x: x,
        y: y,
      },
      angleRad: angleRad,
    };
  });

  // Animation controls and refs
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        controls.start('visible');
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isInView, controls]);

  // Variants for the arrows
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  return (
    <div>
      <h2 className='bg-zinc-300 text-stone-900 text-center text-7xl font-black pt-20'>
        Our Model
      </h2>
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center h-[160vh] bg-zinc-300"
      >
        {/* Circle Container */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: '1000px', height: '1000px' }}
        >
          {/* SVG for Arrows */}
          <svg
            className="absolute w-full h-full"
            style={{ overflow: 'visible' }}
          >
            {stepsWithPosition.map((step, index) => {
              const nextIndex = (index + 1) % numSteps;
              const nextStep = stepsWithPosition[nextIndex];

              // Calculate the angle between the current step and the next step
              const angleBetweenSteps = Math.atan2(
                nextStep.position.y - step.position.y,
                nextStep.position.x - step.position.x
              );

              // Adjust the start and end points to be at the edge of the step cards
              const startX =
                step.position.x +
                (stepWidth / 2) * Math.cos(angleBetweenSteps);
              const startY =
                step.position.y +
                (stepHeight / 2) * Math.sin(angleBetweenSteps);

              const endX =
                nextStep.position.x -
                (stepWidth / 2) * Math.cos(angleBetweenSteps);
              const endY =
                nextStep.position.y -
                (stepHeight / 2) * Math.sin(angleBetweenSteps);

              // Create a straight line between steps
              const pathData = `M ${startX} ${startY} L ${endX} ${endY}`;

              return (
                <motion.path
                  key={`arrow-${index}`}
                  d={pathData}
                  fill="transparent"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
            {/* Arrowhead Definition */}
          </svg>

          {/* Render Steps */}
          {stepsWithPosition.map((step) => (
            <motion.div
              key={step.id}
              className="absolute w-64 h-96 p-4 bg-white text-stone-900 rounded-lg shadow-md text-center"
              style={{
                left: `${step.position.x}px`,
                top: `${step.position.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
              <ul className="list-disc list-inside text-left overflow-y-auto h-full">
                {step.description.map((desc, idx) => (
                  <li key={idx} className="mb-1">
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
