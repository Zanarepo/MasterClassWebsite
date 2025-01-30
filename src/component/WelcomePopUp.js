import React, { useState, useEffect } from "react";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96 animate-fadeIn">
        <h2 className="text-2xl font-bold text-blue-600">Welcome to Zee Master-Class!</h2>
        <p className="text-gray-700 mt-2">Get ready to enhance your product management skills.</p>
      </div>
    </div>
  );
}
