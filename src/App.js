// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage"; // Import HomePage

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route to HomePage */}
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
