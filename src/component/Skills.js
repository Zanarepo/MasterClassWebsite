import { useEffect, useRef } from "react";
import {
  FaChartLine, FaUsers, FaDatabase, FaClipboardList, FaTasks, FaLightbulb, FaProjectDiagram,
  FaFigma,FaUserCheck ,FaCodeBranch, FaList , FaSitemap , FaChartBar , FaCogs, FaHandshake, FaLayerGroup, FaFileAlt, FaCog
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Agile Development", level: 90, icon: <FaChartLine /> },
    { name: "Cross-Functional Collaboration", level: 85, icon: <FaUsers /> },
    { name: "API Skills & Testing (Postman)", level: 75, icon: <FaDatabase /> },
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
    { name: "User Research ", level: 75, icon: <FaUserCheck  /> },
    { name: "Market Research ", level: 75, icon: <FaChartBar  /> },
    { name: "Product Strategy  ", level: 75, icon: <FaSitemap   /> },
    { name: "Backlog Prioritization ", level: 85, icon: <FaList    /> },

     
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (slider) {
        scrollAmount += 1;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0; // Reset to create infinite loop effect
        }
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 30); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-12 bg-white p-6 rounded-2xl shadow-lg w-full px-4 mt-16">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
        <FaCog className="inline-block text-blue-800 mr-2" /> Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        <div ref={sliderRef} className="flex space-x-10 whitespace-nowrap overflow-hidden">
          {[...skills, ...skills].map((skill, index) => ( // Duplicate for infinite effect
            <div key={index} className="flex flex-col items-center min-w-[200px]">
              <div className="bg-white p-4 rounded-full text-blue-800 shadow-md">{skill.icon}</div>
              <p className="font-semibold mt-2">{skill.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mt-2">
                <div
                  className="bg-blue-700 h-3 rounded-full transition-all"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
