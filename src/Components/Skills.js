import React from 'react';
import { skills } from '../assets/data';

const Skills = () => {
   const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="w-full md:w-1/3 p-4">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
          {renderSkillItems(skill.items)}
        </div>
      </div>
    ));
  };

  const renderSkillItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-600">{item.name}</p>
          <p className="text-sm text-gray-600 ml-2">
            {item.percentage ? `${item.percentage}%` : item.proficiency}
          </p>
        </div>
        <div className="bg-gray-300 h-2 rounded-full">
          <div className="bg-gradient-to-r from-fuchsia-900 to-pink-400 h-full rounded-full" style={{ width: item.percentage ? `${item.percentage}%` : '100%' }}></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {renderSkills(skills)}
      </div>
    </div>
  );
};

export default Skills;