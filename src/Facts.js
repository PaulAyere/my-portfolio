import React from 'react';

const Facts = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold inline-block">
          Facts About Me
        </h2>
        <div className="h-1 w-42 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <i className="bi bi-check-circle-fill text-blue-500 text-4xl"></i>
          </div>
          <p className="text-center">Fact 1</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <i className="bi bi-heart-fill text-blue-500 text-4xl"></i>
          </div>
          <p className="text-center">Fact 2</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <i className="bi bi-star-fill text-blue-500 text-4xl"></i>
          </div>
          <p className="text-center">Fact 3</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex items-center justify-center mb-2">
            <i className="bi bi-lightning-fill text-blue-500 text-4xl"></i>
          </div>
          <p className="text-center">Fact 4</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
