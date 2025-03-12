import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WhatsGrowPage from "../pages/WhatsGrowPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/whatsgrow" element={<WhatsGrowPage />} />
    </Routes>
  );
};

export default AppRoutes;
