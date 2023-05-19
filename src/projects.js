import React from 'react';
import {projectData} from './assets/data'

const Projects = () => {  

  return (
    <div className="flex flex-wrap justify-center">
      {projectData.map((project) => (
        <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src={project.imageSrc} alt="Project" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
          <div className="px-6 py-4 flex justify-between">
            <a href={project.githubLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Github
            </a>
            <a href={project.viewLink} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
