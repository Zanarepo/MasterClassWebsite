import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/2349167690043"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-green-500 text-white text-lg py-3 px-5 rounded-full flex items-center space-x-3 shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:block">ChatWithZee</span>
    </a>
  );
}
