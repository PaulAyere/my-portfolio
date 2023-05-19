import React from 'react';
import image from './image/Image1/hero3.png';

const Hero = () => {
  return (
    <div id="home" className="bg-black min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center mx-auto">
  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-in-right">
    Hi, I am <span className="text-red-500">Paulinus</span>
  </h1>
  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 animate-slide-in-right">
    I am a Web <span className="text-purple-500">Developer</span>
  </h2>
  <p className="text-white text-lg md:text-xl animate-slide-in-right">
    Welcome to my portfolio website! I am a highly skilled frontend web developer with 2 years of experience,
    I specialize in creating visually stunning and user-friendly websites using cutting-edge
    technologies such as HTML, CSS, Bootstrap, JavaScript, Angular, React, Recoil, GraphQL,
    Reactplotly, and Threejs. I excel at translating business requirements into effective
    and efficient code and have a proven track record of delivering successful projects.
    I am always eager to take on new challenges and stay up-to-date with the latest
    trends and best practices in web development. My passion for innovation and exceptional
    user experiences makes me a valuable asset to any team.!
  </p>
</div>

    </div>
  );
};

export default Hero;
