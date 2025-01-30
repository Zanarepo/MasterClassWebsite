import React, { useEffect, useState } from "react";
import {
  FaChartLine,
  FaUsers,
  FaDatabase,
  FaClipboardList,
  FaTasks,
  FaLightbulb,
  FaProjectDiagram,
  FaFigma,
  FaCodeBranch,
  FaCogs,
  FaHandshake,
  FaLayerGroup,
  FaFileAlt,
  FaCog
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Agile Development", level: 90, icon: <FaChartLine /> },
    { name: "Cross-Functional Collaboration", level: 85, icon: <FaUsers /> },
    { name: "API Knowledge & Testing (Postman)", level: 75, icon: <FaDatabase /> },
    { name: "Data Analysis", level: 80, icon: <FaClipboardList /> },
    { name: "Data-Driven Mindset", level: 85, icon: <FaLightbulb /> },
    { name: "Decision-Making", level: 80, icon: <FaTasks /> },
    { name: "Feature Prioritization", level: 85, icon: <FaLayerGroup /> },
    { name: "Figma (UI/UX)", level: 50, icon: <FaFigma /> },
    { name: "KPI Management", level: 75, icon: <FaClipboardList /> },
    { name: "Market Research", level: 80, icon: <FaChartLine /> },
    { name: "Product Analysis", level: 85, icon: <FaCogs /> },
    { name: "Product Lifecycle Management", level: 85, icon: <FaProjectDiagram /> },
    { name: "Project Management Tools", level: 90, icon: <FaTasks /> },
    { name: "Roadmap Development", level: 85, icon: <FaLayerGroup /> },
    { name: "Stakeholder Management", level: 80, icon: <FaHandshake /> },
    { name: "System Architecture", level: 45, icon: <FaDatabase /> },
    { name: "Technical Communication", level: 85, icon: <FaLightbulb /> },
    { name: "Technical Documentation", level: 60, icon: <FaFileAlt /> },
    { name: "Understanding Databases", level: 75, icon: <FaDatabase /> },
    { name: "Version Control (Git)", level: 45, icon: <FaCodeBranch /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length); // Loops back to the start
    }, 3000);
  
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [skills.length]); // Add skills.length as a dependency
  
  return (
    <section className="mb-12 bg-white p-6 rounded-2xl shadow-lg w-full px-4 mt-16">
       <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
        <FaCog className="inline-block text-blue-600 mr-2" /> {/* Icon for the skills section */}
        Skills
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl text-blue-600">{skill.icon}</span>
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
