import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 bg-green-500 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
    >
      <AiOutlineWhatsApp className="w-8 md:w-10 h-8 md:h-10" />
    </a>
  );
};

export default WhatsAppButton;
