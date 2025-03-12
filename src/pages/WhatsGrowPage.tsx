import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProblemCard from "../components/ProblemCard";
import ConsequenceCard from "../components/ConsequenceCard";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const problems = [
  { id: 1, title: "WhatsApp Blocks", description: "Getting blocked due to spam messages" },
  { id: 2, title: "High Message Volume", description: "Struggling to manage customer inquiries" },
];

const consequences = [
  { id: 1, title: "Lost Sales", description: "Missed opportunities due to poor communication" },
  { id: 2, title: "Customer Frustration", description: "Delayed responses reduce satisfaction" },
];

const features = [
  { id: 1, title: "AI Chatbots", description: "Automate responses with AI-powered bots" },
  { id: 2, title: "Bulk Messaging", description: "Send messages at scale efficiently" },
];

const WhatsGrowPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />

      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Common WhatsApp Problems</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} {...problem} />
          ))}
        </div>
      </section>

      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Consequences of Inefficiency</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {consequences.map((consequence) => (
            <ConsequenceCard key={consequence.id} {...consequence} />
          ))}
        </div>
      </section>

      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">WhatsGrow Features</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default WhatsGrowPage;
