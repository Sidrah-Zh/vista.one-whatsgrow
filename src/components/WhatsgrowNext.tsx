import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import WhatsGrowBackground from "../assets/whatsappmarketing.jpg";
import WhatsGrowSideImage from "../assets/working.jpg";
import Button from "./Button";

const WhatsGrowNextSection: React.FC = () => {
  return (
    <div
      className="relative w-full flex items-center justify-center text-left bg-fixed bg-center bg-cover py-16 px-8 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${WhatsGrowBackground})` }}
    >
      <div className="flex flex-col md:flex-row bg-gray-900 bg-opacity-80 text-white rounded-lg w-[90%] h-auto md:min-h-[450px] items-stretch overflow-hidden">
        <div className="w-full md:w-3/4 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Don’t Miss Out on the Opportunity to Revolutionize Your WhatsApp
            Marketing
          </h2>
          <ul className="list-none space-y-3 text-sm m-3">
            <li className="flex items-start gap-2">
              <FaRegDotCircle className="text-white mt-1" /> With WhatsGrow, you
              can unlock the full potential of WhatsApp marketing and stay ahead
              of the competition.
            </li>
            <li className="flex items-start gap-2">
              <FaRegDotCircle className="text-white mt-1" /> Transform Your
              Business with WhatsGrow! Achieve growth, boost revenue, and expand
              your market. Don’t miss out!
            </li>
            <li className="flex items-start gap-2">
              <FaRegDotCircle className="text-white mt-1" /> Limited Time Offer!
              Start today and enjoy priority support, free onboarding, and a
              dedicated account manager. Don’t miss out!
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Don’t just keep up. Get ahead with WhatsGrow.
          </p>
          <div className="mt-6">
            <Button
              text="Let’s Get In Touch"
              className="bg-purple-600 border-purple-600 hover:bg-white hover:text-purple-600"
            />
          </div>
        </div>

        <div className="w-full md:w-1/4 flex justify-center items-center overflow-hidden">
          <img
            src={WhatsGrowSideImage}
            alt="WhatsGrow Marketing"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsGrowNextSection;
