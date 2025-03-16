import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../features/public/layouts/MainLayout";
import HomePage from "../../features/public/pages/Home";
import RestaurantDetail from "../../features/restaurantOwner/pages/RestaurantPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/sukhbaatar" element={<HomePage />} />
        <Route path="/bayangol" element={<HomePage />} />
        <Route path="/bayanzurkh" element={<HomePage />} />
        <Route path="/songino-khairkhan" element={<HomePage />} />
        <Route path="/khan-uul" element={<HomePage />} />
        <Route path="/chingeltei" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes; 