import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';  // Importing Icons for Education

export default function Education() {
  const education = [
    {
      degree: "B.Eng: Electrical/Electronic Engineering",
      institution: "Cross River University of Technology",
      dates: "2009 - 2015",
    },
  ];

  return (
    <section className="mb-12">
      {/* Education Header */}
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
        <FaGraduationCap className="inline-block text-blue-600 mr-2" /> Education
      </h2>

      {/* Degree Cards with Icons */}
      {education.map((edu, index) => (
        <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-2">
            {/* Degree Icon */}
            <FaGraduationCap className="text-blue-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
          </div>
          <div className="flex items-center space-x-2">
            {/* Institution Icon */}
            <FaUniversity className="text-gray-500 text-lg" />
            <p className="text-gray-600 mt-1">{edu.institution} | {edu.dates}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
