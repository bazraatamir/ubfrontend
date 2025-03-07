import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Neriinhool from "./modules/RestaurantOwner/components/neriinhool";
import RestaurantPage from "./pages/RestaurantPage";
import AuthPage from "./pages/authPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/RestPage" element={<RestaurantPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/Login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
