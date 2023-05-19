import React from 'react';
import profilePicture from './image/Image1/hero42.png';
import {contactInformation,personalInformation} from './assets/data'



const About = () => {
const renderInformation = (data) => {
    return data.map((item, index) => (
      <React.Fragment key={index}>
        <p className="font-bold text-lg mb-2">{item.label}</p>
        <p>{item.value}</p>
      </React.Fragment>
    ));
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="h-1 w-32 bg-blue-500 mx-auto mt-2"></div>
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Profile Picture */}
        <div className="flex items-center justify-center w-full sm:w-1/3 mx-2">
          <img
            src={profilePicture}
            alt="Profile"
            className="rounded-full w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-4 sm:mb-0"
          />
        </div>

        {/* Personal Information */}
        <div className="w-full sm:w-1/3 mx-2 mt-4 sm:mt-0">
          <h2 className="font-bold text-lg mb-2">Personal Information</h2>
          {renderInformation(personalInformation)}
        </div>

        {/* Contact Information */}
        <div className="w-full sm:w-1/3 mx-2 mt-4 sm:mt-0">
          <h2 className="font-bold text-lg mb-2">Contact Information</h2>
          {renderInformation(contactInformation)}
        </div>
      </div>
    </div>
  );
};

export default About;