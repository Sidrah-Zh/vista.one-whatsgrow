import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import UKFlag from "../assets/ukflag.png";

const FooterBottom = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="mt-6 border-t bg-white py-6 border-gray-300  w-full flex flex-col md:flex-row md:items-center md:justify-between text-center text-lg space-y-2 md:space-y-0">
      <div className="flex items-center justify-center mx-auto space-x-4">
        <p>Copyright © 2024 Vista</p>
        <div
          className="relative flex items-center space-x-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-gray-900 font-semibold">English</span>
          <img src={UKFlag} alt="English" className="w-5 h-5" />
          <FaChevronDown className="text-gray-600" />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute bottom-12 bg-white shadow-lg rounded-md p-2">
          <p className="text-gray-700">Other Languages (Static for now)</p>
        </div>
      )}
    </div>
  );
};

export default FooterBottom;
