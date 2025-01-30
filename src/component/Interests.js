import React from 'react';
import { FaChessKing, FaBook, FaChalkboardTeacher, FaBrain } from 'react-icons/fa'; // Importing icons

export default function Interests() {
  const interests = [
    { name: "Chess", icon: <FaChessKing /> },
    { name: "Reading", icon: <FaBook /> },
    { name: "Mentoring", icon: <FaChalkboardTeacher /> },
    { name: "Brainstorming", icon: <FaBrain /> },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        <span className="text-blue-600">My Interests</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span className="mr-2 text-xl">{interest.icon}</span>
            {interest.name}
          </div>
        ))}
      </div>
    </section>
  );
}
