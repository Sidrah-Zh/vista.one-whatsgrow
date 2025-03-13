import React from "react";
import Management from "../assets/Effortless-HR-Management.webp";

const GameChangerSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-16 lg:px-32 flex flex-col lg:flex-row items-center gap-13">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={Management}
          alt="Game Changer"
          className="w-[90%] max-w-md sm:max-w-lg lg:max-w-xl"
        />
      </div>

      <div className="w-[90%] lg:w-1/2 text-left">
        <p className="mt-4 text-gray-700 leading-relaxed text-2xl">
          WhatsGrow is the game-changer for businesses, unlocking the full
          potential of WhatsApp marketing. It revolutionizes customer
          engagement, provides a competitive advantage, and maximizes ROI. By
          embracing WhatsGrow, businesses can future-proof their marketing
          efforts, transform their business, and achieve sustainable growth,
          increased revenue, and expanded market share.
        </p>
        <div className="mt-6">
          <button className="w-[500px] bg-gray-900 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-orange-800 hover:text-black transition-all">
            Get a Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameChangerSection;
