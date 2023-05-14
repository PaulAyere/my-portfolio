import React from "react";

const Resume = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-3/5 relative">
          <div className="line"></div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">PROFESSIONAL EXPERIENCE</h3>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-blue-500">FRAUNHOFER SCAI</h4>
            <p className="text-gray-600 mb-1">Position Held: Junior Frontend Developer</p>
            <p className="text-gray-600 mb-4">Year: Sept 2022 - March 2023</p>
            <ul className="list-disc ml-6">
              <li className="mb-2">Job Description 1</li>
              <li className="mb-2">Job Description 2</li>
              <li className="mb-2">Job Description 3</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-blue-500">SPACE INNOVATION CONSULTING LTD </h4>
            <p className="text-gray-600 mb-1">Position Held: Junior Frontend Web Developer</p>
            <p className="text-gray-600 mb-4">Year: March 2021 - August 2022</p>
            <ul className="list-disc ml-6">
              <li className="mb-2">Job Description 1</li>
              <li className="mb-2">Job Description 2</li>
              <li className="mb-2">Job Description 3</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-blue-500">DANGOTE CEMENT </h4>
            <p className="text-gray-600 mb-1">Position Held: Logistic Analyst</p>
            <p className="text-gray-600 mb-4">Year: June 2016 - Sept 2019</p>
            <ul className="list-disc ml-6">
              <li className="mb-2">Job Description 1</li>
              <li className="mb-2">Job Description 2</li>
              <li className="mb-2">Job Description 3</li>
            </ul>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="line"></div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">EDUCATION</h3>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-blue-500">TECHLABS BOOTCAMP DORTMUND</h4>
            <p className="text-gray-600 mb-1">Degree: Web Development</p>
            <p className="text-gray-600 mb-4">Year: Oct 2021 - April 2022</p>
            <ul className="list-disc ml-6">
              <li className="mb-2">HTML and CSS</li>
              <li className="mb-2">JavaScript</li>
              <li className="mb-2">React</li>
              <li className="mb-2">Fundamentals of Web Desinging</li>
              <li className="mb-2">Advance Web Designing</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-blue-500">TECHINAL UNIVERSITY DARMSTADT</h4>
            <p className="text-gray-600 mb-1">Degree: M.Sc. Tropical Hydrogeology and Environmental Engineering</p>
            {/* <p className="text-gray-600 mb-4">Year: </p> */}
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2 text-blue-500">FEDERAL UNIVERSITY OF TECHNOLOGY, AKURE</h4>
            <p className="text-gray-600 mb-1">Degree: B.Tech. Applied Geophysics</p>
            {/* <p className="text-gray-600 mb-4">Year: </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
