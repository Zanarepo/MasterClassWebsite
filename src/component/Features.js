import React from 'react';
import { FaChartBar, FaUserShield, FaUsers, FaClipboard, FaComments, FaCogs } from 'react-icons/fa';

const projectFeatures = [
  {
    name: "Just2Kleen Features",
    image: "path-to-your-just2kleen-image.jpg",  // Add your image path
    sections: [
      {
        title: "Admin Dashboard",
        description: "Manage all users (clients and cleaners), oversee notifications, and bid request updates from clients.",
        icon: <FaUserShield />,
      },
      {
        title: "Clients Dashboard",
        description: "Request quotes, book cleaners, manage bids, search for verified cleaners, and manage cleaning schedules.",
        icon: <FaUsers />,
      },
      {
        title: "Cleaners Dashboard",
        description: "Manage cleaning requests, place bids, track deliverables and progress.",
        icon: <FaClipboard />,
      },
      {
        title: "Chat Feature",
        description: "Direct communication between clients and admin for instant responses about cleaning services.",
        icon: <FaComments />,
      },
    ],
  },
  {
    name: "Mydatafy Web App Features",
    image: "path-to-your-mydatafy-image.jpg",  // Add your image path
    sections: [
      {
        title: "Admin Dashboard",
        description: "Manage all employees, oversee daily activities, and approve vacation requests.",
        icon: <FaChartBar />,
      },
      {
        title: "Super Admin Dashboard",
        description: "Full system oversight and permissions management for admins and the entire web app.",
        icon: <FaCogs />,
      },
      {
        title: "Employee Dashboard",
        description: "Manage tasks, schedules, attendance, and leave requests while receiving notifications for approvals and updates.",
        icon: <FaUsers />,
      },
      {
        title: "BuzzMe Chat App",
        description: "Facilitate easy communication and real-time collaboration across departments and teams.",
        icon: <FaComments />,
      },
    ],
  },
];

export default function Features() {
  return (
    <section className="mb-12">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
        <span className="text-blue-800">Project Features</span>
      </h2>

      {projectFeatures.map((project, index) => (
        <div key={index} className="mb-12">
          {/* Project Title and Image */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
           
          </div>

          {/* Feature Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.sections.map((section, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 text-3xl">{section.icon}</span>
                  <h4 className="text-xl font-semibold text-gray-800">{section.title}</h4>
                </div>
                <p className="text-gray-600 mt-2">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
