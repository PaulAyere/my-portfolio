import React from 'react';
import profilePicture from './image/Image1/hero42.png';



const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col sm:flex-row justify-between">

         {/* Profile Picture */}
        <div className="flex items-center justify-center w-full sm:w-1/3 mx-2">
          <img src={profilePicture} alt="Profile" className="rounded-full w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-4 sm:mb-0" />
        </div>
        
         {/* Personal Information */}
        <div className="w-full sm:w-1/3 mx-2 mt-4 sm:mt-0">
          <h2 className="font-bold text-lg mb-2">Personal Information</h2>
          <p className="font-bold text-lg mb-2">Surname:</p>
          <p>Aghughu</p>
          <p className="font-bold text-lg mb-2">First Name:</p>
          <p>Paulinus Ayere</p>
          <p className="font-bold text-lg mb-2">Proffesion:</p>
          <p>Frontend Web Developer</p>
          <p className="font-bold text-lg mb-2">Education Level:</p>
          <p>Master's Degree (In view)</p>
          <p className="font-bold text-lg mb-2">Place of Residence:</p>
          <p>Darmstadt, Germany</p>
          <p className="font-bold text-lg mb-2">Relocation possible?:</p>
          <p>Yes</p>
        </div>      

       

        {/* Contact Information */}
        <div className="w-full sm:w-1/3 mx-2 mt-4 sm:mt-0">
          <h2 className="font-bold text-lg mb-2">Contact Information</h2>
          <p className="font-bold text-lg mb-2">Phone Number:</p>
          <p>+49 15752801414</p>
          <p className="font-bold text-lg mb-2">Email Address:</p>
          <p>paulinusaghughu@gmail.com</p>
          <p className="font-bold text-lg mb-2">Open to work?:</p>
          <p>Yes</p>
          <p className="font-bold text-lg mb-2">Interested in:</p>
          <p>Remote Work. Office or Hybrid work arrangement</p>
          <p className="font-bold text-lg mb-2">LinkedIn:</p>
          <p><a href="https://www.linkedin.com/in/paulinusaghughu">https://www.linkedin.com/in/paulinusaghughu</a></p>
          <p className="font-bold text-lg mb-2">GitHub:</p>
          <p><a href="https://github.com/PaulAyere">https://github.com/PaulAyere</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
