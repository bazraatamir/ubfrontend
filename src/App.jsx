import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Neriinhool from "./modules/RestaurantOwner/components/neriinhool";
import RestaurantPage from "./pages/RestaurantPage";
import AuthPage from "./pages/authPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
