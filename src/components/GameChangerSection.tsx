import React from "react";
import Management from "../assets/Effortless-HR-Management.webp";

const GameChangerSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-32 flex flex-col lg:flex-row items-center gap-8 w-full">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={Management}
          alt="Game Changer"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl"
        />
      </div>

      <div className="w-full lg:w-1/2 text-left">
        <p className="mt-4 text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
          WhatsGrow is the game-changer for businesses, unlocking the full
          potential of WhatsApp marketing. It revolutionizes customer
          engagement, provides a competitive advantage, and maximizes ROI. By
          embracing WhatsGrow, businesses can future-proof their marketing
          efforts, transform their business, and achieve sustainable growth,
          increased revenue, and expanded market share.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <button
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-900 text-white font-semibold px-6 py-3 rounded-md shadow-md 
          hover:bg-orange-800 hover:text-black transition-all"
          >
            Get a Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameChangerSection;
