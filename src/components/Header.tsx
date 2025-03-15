import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/SVG-White.svg";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-16 transition-all duration-300">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Vista Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-5" : "h-7"
              }`}
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white z-50 transition-all duration-300 transform hover:scale-110"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`absolute top-16 left-0 w-full bg-white/20 backdrop-blur-lg shadow-md transition-all duration-300`}
          >
            <div className="flex flex-col space-y-4 py-6 text-center text-white">
              {["Staff Login", "Partner Login", "My Account"].map(
                (item, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="block text-lg hover:text-gray-300 transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
              <Link
                to="/"
                className="relative flex items-center justify-center text-lg hover:text-gray-300 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sales Partnership
                <span className="ml-2 bg-red-500 text-xs text-white font-bold px-1 py-0.5 rounded">
                  NEW
                </span>
              </Link>
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
