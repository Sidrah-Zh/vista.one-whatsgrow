import { FaCheckCircle } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className="bg-[#F8F8F8] py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-gray-500 text-lg">
          Affordable Plans Tailored for You
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
          Our <span className="text-[#E44D26]">Pricing Plans</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Choose the Perfect Plan to Fit Your Needs and Budget
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 md:px-0">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200 text-left flex flex-col items-center relative"
          >
            <div className="absolute top-[25px] transform -translate-y-1/2 bg-gradient-to-r from-[#E44D26] to-gray-900 text-white px-10 py-3 rounded-bl-xl rounded-br-xl text-lg font-bold">
              {plan.name}
            </div>
            <h3 className="text-3xl font-bold text-[#E44D26] mt-10 mb-3">
              {plan.price}
            </h3>
            <button className="mt-4 bg-gray-900 hover:bg-[#E44D26] text-white px-[60px] py-3 w-full rounded-xl text-lg font-bold ">
              Buy Now
            </button>
            <div className="w-full mt-7">
              <h4 className="text-xl font-bold text-[#E44D26] mb-2">
                Features
              </h4>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="text-gray-600 text-sm space-y-2 mt-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <FaCheckCircle className="text-[#E44D26] mt-[2px] text-sm" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const plans = [
  {
    name: "FREE",
    price: "FREE",
    description: "Everything you need for a basic plan:",
    features: [
      "1 Contact",
      "1 Campaign Per Month",
      "5 Bot Replies",
      "2 Bot Flows",
      "2 Contact Custom Fields",
      "2 Team Members/Agents",
      "AI Chat Bot",
      "API and Webhook Access",
    ],
  },
  {
    name: "STANDARD",
    price: "3000 pkr",
    description: "Everything you need for a premium plan:",
    features: [
      "5 Contacts",
      "10 Campaigns Per Month",
      "20 Bot Replies",
      "20 Bot Flows",
      "5 Contact Custom Fields",
      "5 Team Members/Agents",
      "AI Chat Bot",
      "API and Webhook Access",
    ],
  },
  {
    name: "PREMIUM",
    price: "5750 pkr",
    description: "Everything you need for a premium plan:",
    features: [
      "15 Contacts",
      "20 Campaigns Per Month",
      "50 Bot Replies",
      "50 Bot Flows",
      "10 Contact Custom Fields",
      "5 Team Members/Agents",
      "AI Chat Bot",
      "API and Webhook Access",
    ],
  },
  {
    name: "ULTIMATE",
    price: "8550 pkr",
    description: "Everything you need for a standard plan:",
    features: [
      "Unlimited Contacts",
      "Unlimited Campaigns Per Month",
      "Unlimited Bot Replies",
      "Unlimited Bot Flows",
      "Unlimited Contact Custom Fields",
      "Unlimited Team Members/Agents",
      "AI Chat Bot",
      "API and Webhook Access",
    ],
  },
];

export default PricingSection;
