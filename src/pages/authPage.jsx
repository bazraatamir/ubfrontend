import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const AuthPage = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg text-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
      <nav className="mb-6">
        <Link
          to="/login"
          className="text-blue-500 font-medium hover:underline mx-2"
        >
          Login
        </Link>
        <span className="text-gray-500">|</span>
        <Link
          to="/signup"
          className="text-blue-500 font-medium hover:underline mx-2"
        >
          Sign Up
        </Link>
      </nav>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthPage;
