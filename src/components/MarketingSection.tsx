import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-5 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold 
      text-white bg-[#E44D26] rounded-lg border border-[#E44D26] transition-all duration-300 
      hover:bg-white hover:text-[#E44D26] transform hover:scale-105 active:scale-95 shadow-md ${className}`}
    >
      {text}
    </button>
  );
};

const MarketingSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-8 md:px-12 lg:px-32 flex flex-col lg:flex-row items-center gap-8 w-full">
      <div className="lg:w-1/2 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          What If You Could do{" "}
          <span className="text-[#E44D26]">Effective Marketing</span> at
          WhatsApp?
        </h2>
        <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Mastering WhatsApp marketing can transform your customer engagement
          and sales. By leveraging this platform, you elevate customer
          satisfaction, foster loyalty, and enhance retention, giving you a
          powerful competitive edge. Increased revenue and expanded market share
          naturally follow, as does your establishment as a thought leader with
          a strong brand reputation. This effective use of WhatsApp improves
          customer service by reducing response times and increasing engagement.
        </p>
        <Button text="Get a Free Trial" className="mt-6" />
      </div>

      <div className="lg:w-1/2 flex justify-center w-full">
        <iframe
          className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-48 sm:h-56 md:h-64 lg:h-72"
          src="https://www.youtube.com/embed/g4Swp9GB8qY"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default MarketingSection;
