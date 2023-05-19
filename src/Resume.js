import React from "react";
import resumeFile from './assets/Paulinus_CV.pdf';
import { experiences, education } from './assets/data';

const Resume = () => {
  const handleDownload = () => {
    window.open(resumeFile, "_blank");
  };

  const renderResponsibilities = (responsibilities) => {
    return (
      <ul className="list-disc ml-6">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="mb-2">{responsibility}</li>
        ))}
      </ul>
    );
  };

  const renderExperiences = () => {
    return (
      <div className="md:w-3/5 relative">
        <div className="line"></div>
        <h3 className="text-xl font-semibold mb-4 text-blue-500">PROFESSIONAL EXPERIENCE</h3>
        {experiences.map((experience, index) => (
          <div className="mb-8" key={index}>
            <h4 className="text-lg font-semibold mb-2 text-blue-500">{experience.company}</h4>
            <p className="text-gray-600 mb-1">Position Held: {experience.position}</p>
            <p className="text-gray-600 mb-4">Year: {experience.year}</p>
            {renderResponsibilities(experience.responsibilities)}
          </div>
        ))}
      </div>
    );
  };

  const renderCourses = (courses) => {
    return (
      <ul className="list-disc ml-6">
        {courses.map((course, index) => (
          <li key={index} className="mb-2">{course}</li>
        ))}
      </ul>
    );
  };

  const renderEducation = () => {
    return (
      <div className="md:w-2/5">
        <div className="line"></div>
        <h3 className="text-xl font-semibold mb-4 text-blue-500">EDUCATION</h3>
        {education.map((edu, index) => (
          <div className="mb-8" key={index}>
            <h4 className="text-lg font-semibold mb-2 text-blue-500">{edu.institution}</h4>
            <p className="text-gray-600 mb-1">Degree: {edu.degree}</p>
            {edu.year && <p className="text-gray-600 mb-4">Year: {edu.year}</p>}
            {edu.courses && renderCourses(edu.courses)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="flex flex-col md:flex-row justify-between">
        {renderExperiences()}
        {renderEducation()}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownload}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
