import React from "react";
import { FaChalkboardTeacher, FaUsers, FaTasks, FaHandsHelping } from "react-icons/fa";

const Mentorship = () => {
  return (
    <div className="mb-12 p-6 rounded-2xl w-full min-h-screen bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Mentorship
      </h2>

      {/* Mentorship at InternPulse */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <FaChalkboardTeacher className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Mentoring at InternPulse
            </h3>
            <p className="text-gray-600 mt-2">
              For the past year, I have been mentoring at InternPulse, where I groom young product enthusiasts on their tech journey. I help them build their careers and guide them to become successful product managers.
            </p>
          </div>
        </div>

        {/* Key Activities */}
        <div className="flex items-start space-x-4">
          <FaUsers className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Key Activities
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Mentored over 500 interns across different cohorts.</li>
              <li>Organized regular check-in sessions to track progress.</li>
              <li>Provided tasks and clarification calls to ensure understanding.</li>
              <li>Conducted feedback sessions to evaluate achievements and areas for improvement.</li>
              <li>Helped interns build product knowledge and capacity.</li>
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="flex items-start space-x-4">
          <FaHandsHelping className="w-8 h-8 text-purple-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Outcomes
            </h3>
            <p className="text-gray-600 mt-2">
              Many of the interns I mentored have gone on to secure great jobs and excel in the field of product management. Their success is a testament to the impact of structured mentorship and guidance.
            </p>
          </div>
        </div>

        {/* Personal Masterclass */}
        <div className="flex items-start space-x-4">
          <FaTasks className="w-8 h-8 text-orange-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Personal Masterclass
            </h3>
            <p className="text-gray-600 mt-2">
              I also offer a personal masterclass for those who want to specialize in specific product fields, such as Technical Product Management. This program provides in-depth knowledge and hands-on experience to help participants excel in their chosen area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;