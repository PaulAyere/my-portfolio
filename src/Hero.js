import React from 'react';
import image from './image/Image1/hero3.png';

const Hero = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={image}
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-in-right">
         Hi, I am Paulinus
       </h1>
       <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 animate-slide-in-right">
         I am a Web Developer
       </h2>
       <p className="text-white text-lg md:text-xl animate-slide-in-right">
        Welcome to my portfolio website! I specialize in designing and developing
        modern web applications that deliver a seamless user experience. With a
        passion for coding and a keen eye for detail, I strive to create innovative
        and user-friendly solutions. My skills include front-end development,
        back-end programming, and database management. I enjoy collaborating
        with teams and turning ideas into reality. Let's build something
        amazing together!
        </p>

      </div>
    </div>
  );
};

export default Hero;
