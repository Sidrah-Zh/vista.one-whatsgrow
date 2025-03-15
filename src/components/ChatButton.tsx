import React, { useState, useEffect } from "react";
import { HiChatAlt } from "react-icons/hi";
import { motion } from "framer-motion";

const ChatButton: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://yourchatlink.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 flex items-center space-x-2 z-50"
    >
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          className="bg-white text-black rounded-xl px-3 md:px-4 py-1.5 md:py-2 shadow-md text-xs md:text-sm font-medium flex items-center space-x-1"
        >
          <span>Chat with us</span> <span className="text-base md:text-lg">👋</span>
        </motion.div>
      )}
      <div className="bg-[#0F172A] text-white rounded-full p-2 md:p-3 shadow-lg">
        <HiChatAlt className="w-6 md:w-7 h-6 md:h-7" />
      </div>
    </a>
  );
};

export default ChatButton;
