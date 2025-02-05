// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage"; // Import HomePage
import APITaskComponent from "./component/Task/APITaskComponent"
//import BlueOceanStrategy from './component/BlueOceanStrategy'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route to HomePage */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/task" element={<  APITaskComponent/>} />
      

        
      
      </Routes>
    </Router>
  );
};

export default App;
