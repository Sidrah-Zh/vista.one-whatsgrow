import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from "../assets/SVG-White.svg";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showHeader) return null;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed pt-4 pb-3 top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/20 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 pr-6 transition-all duration-300">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Vista Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-5" : "h-7"
              }`}
            />
          </Link>

          <nav
            className="hidden md:flex space-x-6 text-lg"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {["Staff Login", "Partner Login", "My Account"].map(
              (item, index) => (
                <Link
                  key={index}
                  to="/"
                  className="relative text-white hover:text-gray-300 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              )
            )}
            <Link
              to="/"
              className="relative flex items-center text-white hover:text-gray-300 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              Sales Partnership
              <span className="ml-2 bg-red-500 text-xs text-white font-bold px-1 py-0.5 rounded">
                NEW
              </span>
            </Link>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="relative text-white z-50 ml-9 transition-all duration-300 transform hover:scale-110"
            >
              {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </motion.header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
