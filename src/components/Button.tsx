import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold 
      text-white bg-green-600 rounded-lg border border-green-600 transition-all duration-300 
      hover:bg-white hover:text-green-600 transform hover:scale-105 active:scale-95 
      animate-bounce-custom ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
