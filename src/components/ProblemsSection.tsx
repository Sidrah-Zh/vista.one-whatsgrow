import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const problemsData = [
  {
    title: "WhatsApp blocked for spam messages.",
    points: [
      "Marketers face WhatsApp blocks due to spam or unsolicited messages.",
      "Sending messages without recipient consent leads to restrictions.",
      "Overly promotional or irrelevant messages trigger flags.",
      "Blocked accounts struggle to reach their target audience.",
    ],
  },
  {
    title: "WhatsApp marketing effectiveness challenge.",
    points: [
      "Measuring WhatsApp marketing effectiveness is challenging.",
      "Tracking messages, conversions, and sales is difficult.",
      "No built-in analytics like email or social media.",
      "Hard to determine ROI and make data-driven decisions.",
    ],
  },
  {
    title: "Handling high WhatsApp message volume.",
    points: [
      "Managing high message volumes on WhatsApp is challenging.",
      "Large customer base or multiple campaigns cause delays.",
      "Leads to missed messages and poor customer experience.",
      "Can harm brand reputation and customer satisfaction.",
    ],
  },
];

const ProblemsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 sm:px-12 lg:px-16">
      <div className="text-center mb-12">
        <h3 className="text-xl font-semibold font-[Poppins] text-orange-700 tracking-wider">
          Discover what majority of the companies face usually
        </h3>
        <h2 className="text-3xl font-bold text-black mt-2 relative inline-block group font-[Oswald]">
          <span className="relative">
            <span className="relative z-10">Problems</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500 scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </span>{" "}
          That Add To Your Bottom Line
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {problemsData.map((problem, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <h3 className=" text-xl font-semibold text-gray-900 mb-4 flex-1">
              {problem.title}
            </h3>
            <ul className="text-gray-700 space-y-3 flex-1">
              {problem.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <FaArrowCircleRight className="text-orange-600 text-lg mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemsSection;
