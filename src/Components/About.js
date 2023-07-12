import React from 'react';

const About = () => {
  return (
    <div id="about" className="text-center">
      <h1 className="text-3xl font-bold mb-1 mt-20">About Me</h1>
      <div className="h-1 w-32 bg-gradient-to-r from-fuchsia-900 to-pink-400 mx-auto mt-0"></div>
      <div className="p-8 rounded-lg border border-gray-300 mx-auto w-3/4">
        <h3 className="text-m font-normal mb-1 mt-20">
          As a web developer, I am passionate about crafting software applications and web apps that deliver exceptional user experiences. With expertise in JavaScript, TypeScript, React, Angular, HTML, CSS, and Tailwind CSS, I possess a strong skill set to create visually appealing and functional interfaces. I specialize in developing RESTful web services and prioritize software testing using tools like Cypress to ensure high quality and reliability. Continuously staying updated with the latest industry trends and technologies, I am committed to delivering cutting-edge solutions. Feel free to explore my portfolio to see examples of my work and reach out to discuss any potential collaborations.
        </h3>
      </div>
    </div>
  );
};

export default About;
