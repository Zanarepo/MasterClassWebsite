import React from "react";
import { FaDatabase, FaProjectDiagram,FaChalkboardTeacher, FaChartLine, FaCode, FaTasks, FaCodeBranch, FaCogs, FaShieldAlt, FaClipboardList, FaBalanceScale, FaRegClipboard, FaFileAlt, FaUsers } from "react-icons/fa";

export default function MasterClass() {
  const topics = [
    { name: "Understanding Databases as a PM", icon: <FaDatabase className="text-blue-600" /> },
    { name: "Understanding APIs and Different API Requests", icon: <FaCode className="text-blue-600" /> },
    { name: "Frontend and Backend for PMs", icon: <FaProjectDiagram className="text-blue-600" /> },
    { name: "Product Analysis", icon: <FaChartLine className="text-blue-600" /> },
    { name: "Data Analysis and User Surveys", icon: <FaClipboardList className="text-blue-600" /> },
    { name: "Understanding GitHub", icon: <FaCodeBranch className="text-blue-600" /> },
    { name: "System Architecture for TPMs", icon: <FaCogs className="text-blue-600" /> },
    { name: "Security Best Practices and Compliance", icon: <FaShieldAlt className="text-blue-600" /> },
    { name: "Understanding Load Balancing", icon: <FaBalanceScale className="text-blue-600" /> },
    { name: "Agile Methodology & Project Management", icon: <FaTasks className="text-blue-600" /> },
    { name: "Feature Feasibility & Trade-offs", icon: <FaRegClipboard className="text-blue-600" /> },
    { name: "Cost Management & Budgeting", icon: <FaFileAlt className="text-blue-600" /> },
    { name: "Monitoring & Metrics", icon: <FaChartLine className="text-blue-600" /> },
    { name: "Risk Management & Mitigation", icon: <FaShieldAlt className="text-blue-600" /> },
    { name: "User Flows & Wireframing", icon: <FaUsers className="text-blue-600" /> },
  ];

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4 flex items-center justify-center">
        <FaChalkboardTeacher className="mr-2 text-blue-600" /> Product MasterClass
      </h2>
      <p className="text-lg text-gray-800 mb-6 text-center">
        The Product MasterClass is a tailored class for product managers who want in-depth knowledge about product management and its technical aspects. This practical class will help you build technical expertise and enhance your product management skills.
      </p>
      
      {/* Topics as Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {topics.map((topic, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="mb-4 text-3xl">{topic.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{topic.name}</h3>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-lg text-gray-800 mb-4">
          Ready to take your product management skills to the next level? Book a session now to get started!
        </p>
        <a
          href="https://calendar.app.google/1F4kPffaTvCTQVt26"  // Replace with your actual calendar link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}
