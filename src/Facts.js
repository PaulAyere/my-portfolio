import React from 'react';

const Facts = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">
          Facts About Me
        </h2>
        <div className="h-1 w-32 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <div className="border border-blue-500 rounded-full p-2">
              <i className="fas fa-lightbulb text-blue-500 text-4xl"></i>
            </div>
          </div>
          <p className="text-center">
            <span className="border-b border-blue-500 inline-block">Open to New Challenges</span>
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <div className="border border-blue-500 rounded-full p-2">
              <i className="fas fa-brain text-blue-500 text-4xl"></i>
            </div>
          </div><p className="text-center">
            <span className="border-b border-blue-500 inline-block">Critical Thinker</span>
          </p>
          
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <div className="border border-blue-500 rounded-full p-2">
              <i className="fas fa-bolt text-blue-500 text-4xl"></i>
            </div>
          </div>
         <p className="text-center">
            <span className="border-b border-blue-500 inline-block">Learn Fast</span>
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <div className="border border-blue-500 rounded-lg p-2">
              <i className="fas fa-shield-alt text-blue-500 text-4xl"></i>
            </div>
          </div>
          <p className="text-center">
            <span className="border-b border-blue-500 inline-block">Strong and Resilient</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
