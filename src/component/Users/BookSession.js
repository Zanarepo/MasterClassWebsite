import React, { useState } from "react";

export default function BookSession() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mt-12 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">
        Not Sure Yet? Let's Talk!
      </h2>
      <p className="text-lg text-gray-800 mb-6">
        Book a free session to discuss your learning goals and see if this class is the right fit for you.
      </p>

      <button
        onClick={() => setIsChatOpen(true)}
        className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
      >
        Chat & Schedule a Session
      </button>

      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Chat with Me</h3>
            <p className="text-gray-700 mb-4">
              Send me a message, and we’ll schedule your free session.
            </p>
            <a
              href="https://wa.me/+2349167690043"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-800 transition duration-300"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={() => setIsChatOpen(false)}
              className="mt-4 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
