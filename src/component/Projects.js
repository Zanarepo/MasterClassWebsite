import React from 'react';
import { FaCode, FaDatabase, FaMobileAlt, FaLink, FaProjectDiagram, FaPenSquare } from 'react-icons/fa'; // Importing Icons

export default function Projects() {
  const projects = [
    {
      name: "Just2Kleen",
      description:
        "A web application connecting cleaners with clients based on geographical location. Has the Admin Dashbaord, the client Dashboard, and the Cleaners Dashboard for all the different users in the App.",
      link: "http://just2kleen.netlify.app/sign",
      icons: [<FaMobileAlt />, <FaDatabase />, <FaCode />, <FaPenSquare />], // Adding relevant icons
    },
    {
      name: "Mydatafy-website",
      description:
        "A platform to improve operational efficiencies and transparency in government parastatals.",
      link: "https://mydatafy.netlify.app/",
      icons: [<FaProjectDiagram />, <FaDatabase />, <FaCode />, <FaPenSquare />], // Adding relevant icons
    },
  ];

  return (
    <section className="mb-12">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
      
        <FaProjectDiagram className="inline-block text-blue-800 mr-2" />
        <span>Personal Projects</span>
      </h2>
      
      {/* Description */}
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
        <span className="font-semibold text-blue-600">I personally conceived the idea</span>, 
        and handled all aspects including the <span className="font-semibold text-blue-600">Back-end</span>, 
        <span className="font-semibold text-blue-600"> API design and implementation</span>, 
        <span className="font-semibold text-blue-600"> database management</span>, 
        and <span className="font-semibold text-blue-600">frontend development</span> for these projects.
      </p>

      {/* Projects Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>

            {/* Icons indicating work done */}
            <div className="flex space-x-4 mt-4">
              {project.icons.map((icon, i) => (
                <span key={i} className="text-blue-500">{icon}</span>
              ))}
            </div>

            {/* Link to the project */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
            >
              <FaLink className="inline-block mr-2" />
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
