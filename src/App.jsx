import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Neriinhool from "./modules/RestaurantOwner/components/neriinhool";
import RestaurantPage from "./pages/RestaurantPage";
import AuthPage from "./pages/authPage";

const App = () => {
  return (
    <div>
      <RestaurantPage></RestaurantPage>
    </div>
  );
};

export default App;
