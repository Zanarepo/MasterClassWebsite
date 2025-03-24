import React from "react";

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
      I’m a an Experienced  Product Manager with 3 years of experience managing product
      lifecycles—from planning to launch. Skilled in creating roadmaps, managing
      backlogs, and translating business needs into actionable tasks.
    </p>
  </header>
);

// Simplified Navbar component with only a title
const Navbar = () => (
  <nav className="bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center">
      <div className="text-xl font-bold">My Portfolio</div>
    </div>
  </nav>
);

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar at the top */}
      <Navbar />
      {/* Header Section */}
      <Header />
      {/* Additional content sections can be added here if needed */}
    </div>
  );
};

export default HomePage;
