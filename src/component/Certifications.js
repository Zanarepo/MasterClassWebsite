import React from 'react';
import { FaCertificate, FaCheckCircle } from 'react-icons/fa';  // Importing Icons for Certifications

export default function Certifications() {
  const certifications = [
    "Certified Scrum Product Owner (CSPO)",
    "Building Product Strategy",
    "Building a Product Roadmap",
    "Scrum Master Certification",
  ];

  return (
    <section className="mb-12">
      {/* Certifications Header */}
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
        <FaCertificate className="inline-block text-blue-800 mr-2" /> Certifications
      </h2>

      {/* Certifications Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-2">
              {/* Check Circle Icon */}
              <FaCheckCircle className="text-green-500 text-xl" />
              <p className="text-gray-800">{cert}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
