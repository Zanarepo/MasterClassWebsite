import React, { useState, useEffect, useCallback } from "react";
import { FaTimes } from "react-icons/fa"; // Close button icon

export default function OngoingRegistration() {
  const [endTimestamp] = useState(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 8); // Registration ends in 8 days
    return endDate.getTime();
  });

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = endTimestamp - now;

    if (difference <= 0) return null; // Countdown finished

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [endTimestamp]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (!newTimeLeft) {
        clearInterval(timer);
        setVisible(false); // Hide banner when countdown ends
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft || !visible) return null; // Hide when countdown ends or dismissed

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 text-white py-3 px-6 flex justify-between items-center text-sm md:text-base z-50 animate-fadeIn">
      <p className="font-semibold">
        Registration Ongoing! Ends in:{" "}
        <span className="font-bold">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </p>
      <div className="flex items-center space-x-4">
        <a
          href="https://wa.me/2349167690043"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Register Now
        </a>
        <button onClick={() => setVisible(false)} className="text-white hover:text-gray-300 transition">
          <FaTimes className="text-lg" />
        </button>
      </div>
    </div>
  );
}
