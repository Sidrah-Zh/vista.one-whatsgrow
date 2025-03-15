import { motion } from "framer-motion";
import { FaRegPauseCircle, FaListUl, FaBullseye } from "react-icons/fa";

const cards = [
  {
    title: "Lost Sales Opportunities",
    content:
      "By not utilizing WhatsApp marketing, businesses may miss out on potential sales opportunities, as customers may not be receiving timely and personalized messages, leading to a loss of revenue.",
    icon: <FaRegPauseCircle className="text-orange-500 text-4xl mt-1" />,
  },
  {
    title: "Less Customer Engagement",
    content:
      "Inefficient social media management can lead to missed insights and analytics, making it difficult to measure the effectiveness of your social media efforts and make data-driven decisions.",
    icon: <FaListUl className="text-orange-500 text-4xl mt-1" />,
  },
  {
    title: "Wasted Resources",
    content:
      "Ineffective social media management can lead to increased marketing costs, as you may need to spend more money to achieve your goals or repair damage to your brand reputation.",
    icon: <FaBullseye className="text-orange-500 text-4xl mt-1" />,
  },
  {
    title: "Poor Brand Reputation",
    content:
      "Inefficient WhatsApp marketing can lead to a poor brand reputation, as customers may view the business as unresponsive, unorganized, or unprofessional, damaging the brand’s image.",
    icon: <FaRegPauseCircle className="text-orange-500 text-4xl mt-1" />,
  },
  {
    title: "Missed Feedback and Insights",
    content:
      "By not leveraging WhatsApp marketing, businesses may miss out on valuable customer feedback and insights, which could be used to improve products, services, and overall customer experience.",
    icon: <FaListUl className="text-orange-500 text-4xl mt-1" />,
  },
  {
    title: "Competitive Disadvantage",
    content:
      "Not utilizing WhatsApp marketing can put businesses at a competitive disadvantage, as competitors who are using WhatsApp marketing effectively may be able to attract and retain customers more efficiently.",
    icon: <FaBullseye className="text-orange-500 text-4xl mt-1" />,
  },
];

const CostOfInefficiency = () => {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-24 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2161298305/photo/big-data-technology-background.jpg?s=1024x1024&w=is&k=20&c=biIaxDWhBtCOPwK2wcGNp20UJTIu_EMCU0DdoNu9sBk=')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          The Cost of Inefficiency ⚠️
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex items-start gap-3 border-2 border-gray-700 w-full sm:w-[320px] md:w-[340px] lg:w-[360px] h-auto min-h-[280px]"
            >
              <div className="flex-shrink-0">{card.icon}</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-sm md:text-md text-gray-300">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CostOfInefficiency;
