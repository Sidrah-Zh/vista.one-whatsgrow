import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import sidebarlogo from "../assets/sidebar logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 sm:w-80 max-w-xs bg-white text-black shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <img
            src={sidebarlogo}
            alt="Vista Logo"
            className="h-10 mx-auto mt-9 mb-2"
          />
          <button onClick={onClose} className="text-gray-600 mb-14">
            <X size={28} />
          </button>
        </div>

        <nav className="p-4 flex-grow">
          <ul className="space-y-3 text-lg font-medium text-gray-700">
            {[
              "Navigate to Success",
              "About Us",
              "Product / Services",
              "Get a Free Quote",
              "Work With Us",
            ].map((item, index) => (
              <li key={index}>
                <Link to="/" className="hover:text-gray-900">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-5 space-y-3 text-gray-600 text-lg">
            {["Contact Us", "Navigate to Success", "Give Your Feedback"].map(
              (item, index) => (
                <li key={index}>
                  <Link to="/" className="hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="p-4">
          <a
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-black w-full text-lg"
          >
            <FaWhatsapp className="mr-2 text-lg" /> Chat On WhatsApp
          </a>
        </div>

        <div className="p-4">
          <div className="flex justify-center space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-gray-700 text-xl hover:text-blue-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-700 text-xl hover:text-pink-500" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-700 text-xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
