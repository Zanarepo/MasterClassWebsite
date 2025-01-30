import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaTag, FaWhatsapp } from "react-icons/fa";

export default function Registration() {
  const [referred, setReferred] = useState(false); // Tracks if the user has a referral
  
  const originalPrice = 15000; // Original price for the masterclass
  const discount = 0.25; // 25% referral discount
  const finalPrice = referred ? originalPrice * (1 - discount) : originalPrice;

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg mt-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
        Product MasterClass Registration
      </h2>

      <div className="space-y-8">
        {/* Masterclass Details */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaTag className="text-blue-600" />
            <span>Masterclass Details</span>
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            Join our 6-week Product MasterClass where you'll gain in-depth knowledge of product management and its technical aspects. This class is designed for product managers looking to expand their skill set and technical expertise.
          </p>
        </div>

        {/* Class Duration */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-600" />
            <span>Class Duration</span>
          </h3>
          <p className="text-lg text-gray-800">6 Weeks</p>
        </div>

        {/* Session Timings */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaClock className="text-blue-600" />
            <span>Session Timings</span>
          </h3>
          <p className="text-lg text-gray-800">
            <strong>Afternoon Session:</strong> 12:30 PM - 2:30 PM
          </p>
          <p className="text-lg text-gray-800">
            <strong>Evening Session:</strong> 7:00 PM - 9:00 PM (Tuesdays, Wednesdays, and Fridays)
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaTag className="text-blue-600" />
            <span>Pricing</span>
          </h3>
          <p className="text-lg text-gray-800">
            Early Bird Price: <span className="line-through">₦{originalPrice.toLocaleString()}</span>{" "}
            <span className="font-semibold text-green-600">₦{finalPrice.toLocaleString()}</span>
          </p>
          <p className="text-sm text-gray-600">
            *If you refer a friend, you get a 25% discount on your registration!
          </p>
        </div>

        {/* Referral Discount Toggle */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              checked={referred} 
              onChange={() => setReferred(!referred)} 
              className="form-checkbox text-blue-600"
            />
            <span className="text-lg">I have a referral</span>
          </label>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 p-8 rounded-lg shadow-md text-center text-white">
          <p className="text-xl font-semibold mb-4">
            Ready to join the class? Don't miss out on this opportunity!
          </p>
          <a
            href="https://wa.me/2349167690043"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
          >
            <FaWhatsapp className="inline-block mr-2" />
            Contact Me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
