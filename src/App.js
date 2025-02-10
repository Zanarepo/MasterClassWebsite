// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage"; // Import HomePage
import APITaskComponent from "./component/Task/APITaskComponent";
import usePageTracking from "./component/usePageTracking";

const PageTracker = () => {
  usePageTracking();
  return null;
};

const App = () => {
  return (
    <Router>
      {/* PageTracker must be inside the Router so that useLocation works */}
      <PageTracker />
      <Routes>
        {/* Route to HomePage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/task" element={<APITaskComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
