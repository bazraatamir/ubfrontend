import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home";
import RestaurantPage from "../../pages/RestaurantPage";
import AuthPage from "../../pages/authPage";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import HomePage from "../../pages/HomePage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes; 