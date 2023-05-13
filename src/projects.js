import React from 'react';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      imageSrc: '/path_to_image_1.jpg',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project1',
      viewLink: 'https://project1.com',
    },
    {
      id: 2,
      imageSrc: '/path_to_image_2.jpg',
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
    },
    {
      id: 3,
      imageSrc: '/path_to_image_3.jpg',
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
    },
    {
      id: 4,
      imageSrc: '/path_to_image_4.jpg',
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
    },
    {
      id: 5,
      imageSrc: '/path_to_image_5.jpg',
      title: 'Project 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
    },
    {
      id: 6,
      imageSrc: '/path_to_image_6.jpg',
      title: 'Project 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
    },
    {
      id: 7,
      imageSrc: '/path_to_image_2.jpg',
      title: 'Project 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
    },
    {
      id: 8,
      imageSrc: '/path_to_image_2.jpg',
      title: 'Project 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/project2',
      viewLink: 'https://project2.com',
    },
    // Add two more project objects here
  ];

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
