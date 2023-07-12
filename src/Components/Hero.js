import React from 'react';
import image from '../assets/Image/hero3.png';

const Hero = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-black to-pink-500 min-h-screen flex flex-col md:flex-row">

      
      <div className="md:w-1/2 mt-8 , ml-8 md:mt-0 flex flex-col justify-center mx-auto">
  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-in-right">
    Hi, I am <span className="text-red-500">Paulinus</span>
  </h1>
  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 animate-slide-in-right">
    I am a Web <span className="text-purple-500">Developer</span>
  </h2>
  <p className="text-white text-lg md:text-xl animate-slide-in-right">
  I have over 2 years of experience in software developement.
  My focus lies primarily in web application development.
  I possess a strong proficiency in utilizing modern technologies such as React,
  Tailwind CSS, Next.js, and GraphQL. These technologies have become my passion,
  and I thoroughly enjoy working with them to create robust and scalable web applications.
  </p>
</div>
<div className="md:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt="Hero"
          className="w-full h-auto mr-10 mb-0"
        />
      </div>

    </div>
  );
};

export default Hero;
