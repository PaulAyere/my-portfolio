import React from 'react';
import { softwareItems } from './assets/data';

const Softwares = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-200">
      <h2 className="text-3xl font-bold mb-6">Software</h2>
      <div className="flex flex-wrap justify-center">
        {softwareItems.map((item, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 hover:bg-fuchsia-600 w-20 h-20 flex items-center justify-center">
                <i className={`${item.icon} text-white text-4xl`}></i>
              </div>
              <p className="text-lg font-semibold mt-2">{item.name}</p>
              {/* <p className="text-sm text-gray-600">Percentage</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Softwares;
