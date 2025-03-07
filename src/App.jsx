import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Neriinhool from "./modules/RestaurantOwner/components/neriinhool";
import RestaurantPage from "./pages/RestaurantPage";
import AuthPage from "./pages/authPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RestaurantPage />} />
        <Route path="/Auth" element={<AuthPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
