import React from 'react';
import {facts} from '../assets/data'

const Facts = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">
          Facts About Me
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-fuchsia-900 to-pink-400 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4"
          >
            <div className="flex items-center justify-center mb-2">
              <div className="border border-fuchsia-900 rounded-full p-2">
                <i className={`${fact.icon} text-blue-500 text-4xl hover:text-fuchsia-900`}></i>
              </div>
            </div>
            <p className="text-center">
              <span className="border-b border-fuchsia-900 inline-block">
                {fact.text}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
