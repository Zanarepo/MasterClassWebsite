import React, { useState } from 'react';
import TransferDetails from './TransferDetails';
import { FaCalendarAlt, FaClock, FaTag, FaWhatsapp, FaGift } from "react-icons/fa";

export default function Registration() {
  const [referred, setReferred] = useState(false); // Tracks if the user has a referral
  const [referralSuccess, setReferralSuccess] = useState(false); // Tracks if referral was successful

  const originalPrice = 15000; // Original price for the masterclass
  const discount = 0.15; // 20% referral discount
  const finalPrice = referred ? originalPrice * (1 - discount) : originalPrice;

  // Function to generate WhatsApp referral message
  const handleReferral = () => {
    const message = encodeURIComponent(
      "Hey! I just found an amazing Product Masterclass, and you can get 15% off by using my referral! Register here: https://zee-masterclass.netlify.app/"
    );
    const whatsappLink = `https://wa.me/?text=${message}`;
    window.open(whatsappLink, "https://zee-masterclass.netlify.app/");
    setReferralSuccess(true);
  };

  return (
    <section className="bg-white w-full rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
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
            <strong>Evening Session:</strong> 4:00 PM - 6:00 PM (Tuesdays, Wednesdays, and Fridays)
          </p>
          <p className="text-lg text-gray-800">
            <strong>Flexible Schedule or 1-on-1 Session?</strong> We offer that too, get in touch with us. <br/>
        <strong>(It attracts an additional fee).</strong>  
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <FaTag className="text-blue-600" />
            <span>Pricing</span>
          </h3>
          <p className="text-lg text-gray-800">
            Standard Price: <span className="line-through">₦{originalPrice.toLocaleString()}</span>{" "}
            <span className="font-semibold text-green-600">₦{finalPrice.toLocaleString()}</span>
          </p>
          <p className="text-sm text-gray-600">
            Paying now? 
          </p>
          <TransferDetails/>
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
            <span className="text-lg">Early Bird Price?</span>
     
          </label>
        </div>
        {/* Referral Bonus Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center space-x-2">
            <FaGift className="text-blue-600" />
            <span>Refer & Earn 15% Bonus</span>
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Invite a friend to register, and you'll receive 15% of their registration fee as a bonus!
          </p>
          <button
            onClick={handleReferral}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
          >
            Refer a Friend
          </button>

          {referralSuccess && (
            <p className="text-green-600 mt-3 font-semibold">
              🎉 Your referral link has been shared!
            </p>
          )}
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
