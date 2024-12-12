

import React from 'react';
import { Edit3, HardHat, Users } from 'lucide-react';

export default function GoalBody() {
  const goals = [
    {
      title: 'Revise Often.',
      body: "Case application should have been drafted multiple times before we turn it in",
      icon: Edit3,
      bgColor: "bg-stone-500/10",
      color: "text-stone-500"
    },
    {
      title: 'Convey Effort.',
      body: 'The case application should look like we put a lot of effort into it',
      icon: HardHat,
      bgColor: "bg-yellow-500/10",
      color: "text-yellow-500"
    },
    {
      title: 'Work Together.',
      body: 'Help each other by giving critical and supportive feedback in our writing',
      icon: Users,
      bgColor: "bg-blue-500/10",
      color: "text-blue-500"
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen py-20">
      <h2 className="text-5xl font-bold mb-10 text-stone-900">Our Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="p-6 bg-white text-stone-900 rounded-lg shadow-md flex flex-col items-center text-start md:h-64 md:w-64"
          >
            <div className='flex items-center'>
            <h3 className="text-3xl font-semibold mr-4 md:mr-0">{goal.title}</h3>
            <div className={`${goal.bgColor} rounded-lg md:w-16 md:h-16`}>            
            <goal.icon className={`w-16 h-16 p-3 ${goal.color}`}/>
          </div>
            </div>
            <p className=' text-xl mt-5 text-start'>{goal.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
