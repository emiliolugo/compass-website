import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const initialSkillsData = {
  softSkills: ["Adaptability", "Empathy", "Teamwork", "Time Management", "Work Ethic"],
  problemSolving: ["Critical Thinking", "Analytical Skills", "Creativity", "Decision Making", "Troubleshooting"],
  communication: ["Active Listening", "Public Speaking", "Feedback Delivery", "Conflict Resolution", "Writing Skills", "Timeliness"],
};

const TeamSkills: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<{[key: string]: boolean}>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint is 768px
    };

    // Check initial screen size
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Combine and randomize all skills
    const allSkills = [
      ...initialSkillsData.softSkills,
      ...initialSkillsData.problemSolving,
      ...initialSkillsData.communication
    ];

    // Fisher-Yates shuffle
    const shuffled = [...allSkills];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Ensure we have exactly 16 skills, pad with empty strings if needed
    const finalSkills = shuffled.slice(0, 16);
    while (finalSkills.length < 16) {
      finalSkills.push('');
    }

    setSkills(finalSkills);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSkillClick = (skill: string) => {
    if (!skill) return; // Ignore empty skill slots

    setSelectedSkills(prev => ({
      ...prev,
      [skill]: !prev[skill]
    }));
  };

  const getSkillClassName = (skill: string) => {
    if (!skill) return 'bg-gray-100'; // Empty slot

    const isSelected = selectedSkills[skill];
    
    if (isSelected) {
      if (initialSkillsData.softSkills.includes(skill)) {
        return 'bg-green-500 text-gray font-bold';
      }
      if (initialSkillsData.problemSolving.includes(skill)) {
        return 'bg-yellow-500 text-gray font-bold';
      }
      if (initialSkillsData.communication.includes(skill)) {
        return 'bg-blue-500 text-gray font-bold';
      }
    }
    return 'bg-gray-200 text-gray-800';
  };

  const renderSkillGrid = () => (
    <div className="w-full flex justify-center items-center">
      <div 
        className="grid grid-cols-4 gap-2"
        style={{
          maxWidth: '80vw',
          maxHeight: '80vh',
          aspectRatio: '1 / 1'
        }}
      >
        {skills.map((skill, index) => (
          skill ? (
            <motion.div
              key={skill}
              className={`aspect-square flex items-center justify-center p-2 rounded-lg text-center cursor-pointer transition-all duration-300 ease-in-out ${getSkillClassName(skill)}`}
              onClick={() => handleSkillClick(skill)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs sm:text-sm md:text-base">{skill}</span>
            </motion.div>
          ) : (
            <div key={`empty-${index}`} className="aspect-square bg-gray-100 rounded-lg"></div>
          )
        ))}
      </div>
    </div>
  );

  const renderSkillList = () => (
    <div className="space-y-6">
      {Object.entries(initialSkillsData).map(([category, categorySkills]) => (
        <div key={category} className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3 capitalize">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {categorySkills.map((skill) => (
              <div
                key={skill}
                className={`p-2 rounded-lg text-center ${getSkillClassName(skill)}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8">
      <header className="text-center mb-8">
      </header>

      {isMobile ? renderSkillList() : renderSkillGrid()}
    </div>
  );
};

export default TeamSkills;