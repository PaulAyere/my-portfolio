import React, { useState } from 'react';
import { projectData } from './assets/data';

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All'); // State to keep track of active tag

  const tags = ['All', 'HTML/CSS', 'Javascript', 'React', 'Tailwind']; // List of tags

  const filteredProjects = activeTag === 'All' ? projectData : projectData.filter(project => project.tags.includes(activeTag));

  return (
    <div id="project" className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2> {/* Title */}
      <div className="flex space-x-4 mb-6">
        {/* Filter tags */}
        {tags.map(tag => (
          <button
            key={tag}
            className={`py-2 px-4 rounded font-bold ${
              tag === activeTag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Display filtered projects */}
        {filteredProjects.map(project => (
          <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={project.imageSrc} alt="Project" /> {/* Use the imported image source */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
              <p className="text-gray-500">
                Status: <strong>{project.status}</strong>
              </p> {/* Status */}
            </div>
            <div className="px-6 py-4 flex justify-between">
              <a
                href={project.githubLink}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-pink-500 to-red-300 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-2xl"
              >
                Github
              </a>
              <a
                href={project.viewLink}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-fuchsia-900 to-pink-400 hover:bg-blue-600 text-white font-bold py-1 px-6 rounded-2xl"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
