import React from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import CostOfInefficiency from "./components/CostOfInefficiency";
import MarketingSection from "./components/MarketingSection";
import FeaturesSection from "./components/FeaturesSection";
import GameChangerSection from "./components/GameChangerSection";
import Marketing from "./components/Marketing";
import WhatsGrowNextSection from "./components/WhatsgrowNext";
import BenefitsSection from "./components/BenefitsSection";
import PricingSection from "./components/PricingSection";
import JoinVistaSection from "./components/JoinVistaSection";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import WhatsAppButton from "./components/WhatsappButton";
import ChatButton from "./components/ChatButton";
import PopupNotification from "./components/PopupNotification";
import ClaimPopup from "./components/ClaimPopup";

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
      <Marketing />
      <WhatsGrowNextSection />
      <BenefitsSection />
      <PricingSection />
      <JoinVistaSection />
      <Footer />
      <FooterBottom />
      <WhatsAppButton />
      <ChatButton />
      <PopupNotification />
      <ClaimPopup firstPopupClosed={true} />
    </>
  );
};

export default App;
