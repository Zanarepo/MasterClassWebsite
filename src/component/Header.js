import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Header() {
  const name = "Prince Zana";
  const title = "Technical Agile Product Manager";
  const bio =
    "I’m a proactive Product Manager with 3 years of experience managing product lifecycles, from planning to launch. Skilled in creating roadmaps, managing backlogs, and translating business needs into actionable tasks.";
  const contact = {
    email: "princegekpenyong@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    phone: "234-9167690043",
  };
  const picture = "images/Linkedin.jpg"; // Replace with actual path

  return (
    <header className="mb-12 bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto mt-8">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src={picture}
          alt={name}
          className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6"
        />
      </div>

      {/* Name & Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
        <p className="text-xl text-blue-600 font-medium mt-2">{title}</p>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto px-4">
        {bio}
      </p>

      {/* Contact Info */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center space-x-2 bg-gray-100 hover:bg-blue-100 text-gray-700 px-6 py-3 rounded-lg shadow-sm transition duration-300"
        >
          <FaEnvelope className="text-blue-600" />
          <span>{contact.email}</span>
        </a>

        {/* LinkedIn */}
        <a
          href={contact.linkedin}
          className="flex items-center space-x-2 bg-gray-100 hover:bg-blue-100 text-gray-700 px-6 py-3 rounded-lg shadow-sm transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-600" />
          <span>LinkedIn</span>
        </a>

        {/* Phone */}
        <div className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg shadow-sm">
          <FaPhone className="text-green-600" />
          <span>{contact.phone}</span>
        </div>
      </div>
    </header>
  );
}