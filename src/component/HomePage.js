// HomePage.js
import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Interests from "./Interests";
import Mentorship from "./Mentorship"
import MasterClass from "./MasterClass"
import Registration from "./Registration"
import Reviews from "./Reviews"
import ChatWithZee from "./ChatWithZee"
//import CountDown from "./CountDown"
import WelcomePopUp from "./WelcomePopUp"
import BookSession from "./Users/BookSession"
//import RegistrationForm from  "./Users/RegistrationForm";




// Contact from "./Contact";
import Features from "./Features";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <Header />
 
 {/* Interests Section */}
 <MasterClass />
 {/* Interests Section */}
 <Registration />

 <BookSession/>

      {/* Experience Section */}
      <Experience />
        {/* Skills Section */}
        <Skills />
{/* Interests Section */}
<Mentorship />
      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />

      {/* Projects Section */}
      <Projects />
        {/* Skills Section */}
        <Features />

      {/* Interests Section */}
      <Interests />

      

      
      {/* Interests Section */}
      <ChatWithZee />
       {/* Interests Section */}

       <Reviews />
      <WelcomePopUp/>
     
     {/*  <CountDown/>
      Contact Section 
      <Contact />*/}
    </div>
  );
};

export default HomePage;
