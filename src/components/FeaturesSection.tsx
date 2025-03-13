import React from "react";
import {
  FaCogs,
  FaComments,
  FaRegClipboard,
  FaUsers,
  FaChartBar,
  FaShareSquare,
} from "react-icons/fa";
import Card from "./Card";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaCogs className="text-4xl text-white" />,
      title: "Automate and Streamline WhatsApp Marketing",
      description:
        "WhatsGrow helps businesses automate and streamline their WhatsApp marketing efforts, saving time and resources. With features like bulk messaging, auto-replies, and conversation tracking, businesses can focus on strategy and creativity.",
    },
    {
      icon: <FaComments className="text-4xl text-white" />,
      title: "Personalize Customer Engagement",
      description:
        "WhatsGrow enables businesses to personalize customer engagement with targeted and segmented messaging. By using customer data and behavior, businesses can create relevant and timely messages that drive conversions and loyalty.",
    },
    {
      icon: <FaChartBar className="text-4xl text-white" />,
      title: "Measure and Optimize Performance",
      description:
        "WhatsGrow provides businesses with detailed analytics and insights on their WhatsApp marketing performance. By tracking metrics like delivery rates, open rates, and response rates, businesses can optimize their campaigns and improve ROI.",
    },
    {
      icon: <FaRegClipboard className="text-4xl text-white" />,
      title: "Enhance Customer Experience",
      description:
        "WhatsGrow helps businesses provide exceptional customer experiences through timely and responsive messaging. By using features like auto-replies and conversation tracking, businesses can ensure that customer inquiries are addressed promptly and efficiently.",
    },
    {
      icon: <FaUsers className="text-4xl text-white" />,
      title: "Scale and Grow Customer Base",
      description:
        "WhatsGrow enables businesses to scale and grow their customer base through effective WhatsApp marketing. By leveraging features like bulk messaging and group messaging, businesses can reach new customers and expand their market share.",
    },
    {
      icon: <FaShareSquare className="text-4xl text-white" />,
      title: "Decreased Customer Engagement",
      description:
        "Inefficient WhatsApp marketing can lead to a decrease in customer engagement, resulting in a loss of customer loyalty and retention, ultimately affecting the bottom line.",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 sm:px-16 lg:px-32 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4">
        <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight sm:text-right">
          <div>Here's What Makes</div>
          <div>Your Ultimate Marketing Solution</div>
        </div>
        <div className="text-3xl sm:text-4xl lg:text-5xl  mr-[70px]  font-bold text-[#E44D26] sm:ml-4">
          WHATS<span className="block sm:inline">GROW</span>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
