import { FaPlay } from "react-icons/fa";
const BenefitsSection = () => {
  return (
    <section className="bg-[#eeeaea] py-16 px-6 text-center">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Discover how <span className="text-[#E44D26]">WhatsGrow</span>{" "}
          software can revolutionize marketing
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Discover how{" "}
          <span className="font-semibold text-black">WhatsGrow</span> can
          revolutionize your marketing strategy! Automate messages, manage large
          volumes of conversations, and boost customer engagement effortlessly.
          Take your WhatsApp marketing to the next level!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-gray-300 transition-transform duration-300 hover:scale-105 text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {benefit.title}
            </h3>
            <ul className="text-gray-600 space-y-2">
              {benefit.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2 m-2">
                  <span className="text-[#E44D26] mt-[4px]">
                    <FaPlay size={12} />
                  </span>
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

const benefits = [
  {
    title: "General Benefits",
    points: [
      "Increase customer engagement by 70%",
      "Boost sales by 40%",
      "Improve customer satisfaction by 90%",
      "Reduce marketing costs by 30%",
    ],
  },
  {
    title: "Marketing Benefits",
    points: [
      "Greater reach than ever:",
      "Direct customer reach into their mobile",
      "Increase brand awareness by 50%",
      "Personalize customer interactions",
    ],
  },
  {
    title: "Owners Benefits",
    points: [
      "Personalize customer interactions",
      "Full monitoring and analytics",
      "Data-driven decision making",
      "Scalability and flexibility",
    ],
  },
];

export default BenefitsSection;
