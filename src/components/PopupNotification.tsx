import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const PopupNotification: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center">
          <div className="bg-sky-950 text-white rounded-b-xl shadow-lg w-[400px] h-[350px] p-6 relative animate-slideDown mt-0">
            <button
              className="absolute top-3 right-3 text-white hover:text-gray-300"
              onClick={() => setShowPopup(false)}
            >
              <IoClose size={24} />
            </button>

            <div className="text-center mt-2">
              <div className="text-6xl sm:text-7xl mb-6">⏳</div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Limited Time Offer
              </h2>
              <p className="mt-2 text-sm sm:text-base px-2">
                Schedule{" "}
                <span className="font-bold text-yellow-400">
                  FREE CONSULTATION
                </span>{" "}
                with our experts to see how we can solve your pain points.
              </p>

              <button className="mt-4 bg-[#e1782d] hover:bg-white hover:text-black text-white px-6 py-2 rounded-lg transition duration-300 w-full max-w-[250px]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupNotification;
