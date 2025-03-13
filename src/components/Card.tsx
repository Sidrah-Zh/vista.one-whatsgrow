import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="bg-gradient-to-b from-[#232526] to-[#E44D26] text-white p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col text-left"
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-3">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default Card;
