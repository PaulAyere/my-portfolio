import React from 'react';

const Softwares = () => {
return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl font-bold mb-6">Software</h2>
<div className="flex flex-wrap justify-center">
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
  <div className="flex flex-col items-center">
    <div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
      <i className="fas fa-figma text-white text-4xl"></i>
    </div>
    <p className="text-lg font-semibold mt-2">Figma</p>
    {/* <p className="text-sm text-gray-600">80%</p> */}
  </div>
</div>

<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
<div className="flex flex-col items-center">
<div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
<i className="fas fa-code text-white text-4xl"></i>
</div>
<p className="text-lg font-semibold mt-2">VSCode</p>
{/* <p className="text-sm text-gray-600">90%</p> */}
</div>
</div>
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
<div className="flex flex-col items-center">
<div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
<i className="fas fa-microphone text-white text-4xl"></i>
</div>
<p className="text-lg font-semibold mt-2">Miro</p>
{/* <p className="text-sm text-gray-600">70%</p> */}
</div>
</div>
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
<div className="flex flex-col items-center">
<div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
<i className="fab fa-gitlab text-white text-4xl"></i>
</div>
<p className="text-lg font-semibold mt-2">GitLab</p>
{/* <p className="text-sm text-gray-600">85%</p> */}
</div>
</div>
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
<div className="flex flex-col items-center">
<div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
<i className="fab fa-github text-white text-4xl"></i>
</div>
<p className="text-lg font-semibold mt-2">GitHub</p>
{/* <p className="text-sm text-gray-600">75%</p> */}
</div>
</div>
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
<div className="flex flex-col items-center">
<div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
<i className="fas fa-cogs text-white text-4xl"></i>
</div>
<p className="text-lg font-semibold mt-2">Maven</p>
{/* <p className="text-sm text-gray-600">65%</p> */}
</div>
</div>
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
              <i className="fab fa-slack text-white text-4xl "></i>
            </div>
            <p className="text-lg font-semibold mt-2">Slack</p>
            {/* <p className="text-sm text-gray-600">80%</p> */}
          </div>
        </div>
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
              <i className="fab fa-jira text-4xl text-white"></i>
            </div>
            <p className="text-lg font-semibold mt-2">Jira</p>
            {/* <p className="text-sm text-gray-600">70%</p> */}
          </div>
        </div>
<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
              <i className="fas fa-users-cog text-4xl text-white"></i>
            </div>
            <p className="text-lg font-semibold mt-2">Scrum</p>
            {/* <p className="text-sm text-gray-600">75%</p> */}
          </div>
        </div>
  <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-500 w-20 h-20 flex items-center justify-center">
              <i className="fab fa-google text-4xl text-white"></i>
            </div>
            <p className="text-lg font-semibold mt-2">Google Cloud</p>
            {/* <p className="text-sm text-gray-600">80%</p> */}
          </div>
        </div>
        {/* Add the remaining software items */}
        {/* ... */}
</div>
</div>
  );
};

export default Softwares;
