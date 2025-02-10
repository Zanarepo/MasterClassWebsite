import React, { useState } from "react";

// Simple Header component
const Header = () => (
  <header id="header" className="bg-white p-4 rounded-2xl shadow-lg mb-8">
    <div className="flex justify-center">
      <img
        src="images/profileee.jpg"
        alt="Prince Ekpenyong"
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />
    </div>
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-800">Prince Ekpenyong</h1>
      <p className="text-xl text-blue-600 font-medium mt-2">
        Technical Agile Product Manager
      </p>
    </div>
    <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto px-4">
      I’m a proactive Product Manager with 3 years of experience managing product
      lifecycles—from planning to launch. Skilled in creating roadmaps, managing
      backlogs, and translating business needs into actionable tasks.
    </p>
  </header>
);

// Dummy Registration component
const Registration = () => (
  <section id="registration" className="p-4">
    <h2 className="text-2xl font-bold mb-2">Registration</h2>
    <p>
      This is the Registration page. Here users can sign up and create their
      accounts.
    </p>
  </section>
);

// Dummy Resources component
const Resources = () => (
  <section id="resources" className="p-4">
    <h2 className="text-2xl font-bold mb-2">Resources</h2>
    <p>
      This is the Resources page. Here you can find valuable guides and documents.
    </p>
  </section>
);

// Dummy Test component
const Test = () => (
  <section id="test" className="p-4">
    <h2 className="text-2xl font-bold mb-2">Test</h2>
    <p>
      This is the Test page. Try out interactive demos and experiments here.
    </p>
  </section>
);

// Navbar component that switches active content
const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ["Registration", "Resources", "Test"];
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-xl font-bold">My Portfolio</div>
        {/* Desktop Navbar Buttons */}
        <div className="hidden md:flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab ? "bg-blue-800" : "hover:bg-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Mobile select dropdown */}
        <div className="md:hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="bg-blue-600 text-white p-2 rounded"
          >
            {tabs.map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Registration");

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Registration":
        return <Registration />;
      case "Resources":
        return <Resources />;
      case "Test":
        return <Test />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar at the top */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Header Section */}
      <Header />
      {/* Dynamic content based on active tab */}
      <div className="max-w-7xl mx-auto p-4">{renderContent()}</div>
      {/* Additional content sections can be added here if needed */}
    </div>
  );
};

export default HomePage;
