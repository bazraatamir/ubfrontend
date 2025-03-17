"use client";
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RestaurantPage from "./RestaurantPage";

const RestaurantPage = () => {
  return (
    <div className="pr-20 bg-gray-900 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default RestaurantPage;
