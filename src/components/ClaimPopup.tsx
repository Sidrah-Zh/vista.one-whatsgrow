import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { GiQueenCrown } from "react-icons/gi";

const ClaimPopup: React.FC<{ firstPopupClosed: boolean }> = ({
  firstPopupClosed,
}) => {
  const [showClaimPopup, setShowClaimPopup] = useState(false);

  useEffect(() => {
    if (firstPopupClosed) {
      const timer = setTimeout(() => {
        setShowClaimPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [firstPopupClosed]);

  return (
    <>
      {showClaimPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div
            className="bg-gradient-to-b from-[#e9499c] to-[#ff9c66] text-white 
           sm:w-[90%] sm:max-w-[450px] sm:h-auto rounded-2xl shadow-2xl p-16 relative flex flex-col items-center text-center"
          >
            <button
              className="absolute top-5 right-5 text-white hover:text-gray-300"
              onClick={() => setShowClaimPopup(false)}
            >
              <IoClose size={28} />
            </button>

            <GiQueenCrown className="text-8xl mb-6" />

            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-wide">
              Start Claiming <br />
              <span className="text-white">Free Resources!</span>
            </h2>

            <p className="mt-3 text-sm px-3 font-light">
              Get premium tips & tools to grow any type of business, straight to
              your inbox!
            </p>

            <input
              type="text"
              placeholder="Mobile Number"
              className="mt-6 w-full p-3 rounded-full text-white text-sm border border-white outline-none placeholder-white text-center bg-transparent"
            />

            <button
              className="mt-5 w-full rounded-xl bg-[#722991]  
                text-white py-2 font-bold text-lg transition duration-300 hover:bg-white hover:text-[#722991]"
            >
              CLAIM NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClaimPopup;
