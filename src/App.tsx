import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import ProblemsSection from "./components/ProblemsSection";
import CostOfInefficiency from "./components/CostOfInefficiency";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Hero />
      <ProblemsSection /> 
      <CostOfInefficiency />
    </>
  );
};

export default App;
