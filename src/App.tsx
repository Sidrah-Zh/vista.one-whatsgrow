import React from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import CostOfInefficiency from "./components/CostOfInefficiency";
import MarketingSection from "./components/MarketingSection";
import FeaturesSection from "./components/FeaturesSection";
import GameChangerSection from "./components/GameChangerSection";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProblemsSection />
      <CostOfInefficiency />
      <MarketingSection />
      <FeaturesSection />
      <GameChangerSection />
    </>
  );
};

export default App;
