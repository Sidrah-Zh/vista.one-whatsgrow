import React from "react";
import MarketingImage from "../assets/Marketingg.jpg";

const Marketing: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[400px] md:h-[500px] flex items-center justify-center text-center bg-fixed bg-center bg-cover px-4"
      style={{ backgroundImage: `url(${MarketingImage})` }}
    >
      <div
        className="rounded-lg w-[90%] h-[55%] md:w-[85%] text-white flex flex-col items-center justify-center p-6"
        style={{ backgroundColor: "rgba(200, 120, 70, 0.8)" }}
      >
        <h1 className=" pt-5 text-3xl md:text-3xl lg:text-4xl font-bold">
          Essential eBooks for Effective WhatsApp Marketing
        </h1>
        <p className="text-sm md:text-md mt-4 max-w-2xl">
          Gain valuable insights and best practices to enhance your business
          growth and efficiency with WhatsGrow.
        </p>
        <button className="mt-6 pb-6 bg-[#f25f2a] hover:bg-gray-900 text-white py-2 px-4 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold transition duration-300">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Marketing;
