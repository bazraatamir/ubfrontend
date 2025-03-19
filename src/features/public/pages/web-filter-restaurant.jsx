// WebFilterRestaurant.jsx
import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import SideFilter from "../components/sideFilter";

const WebFilterRestaurant = () => {
  const [filters, setFilters] = useState({
    bayanzurkh: false,
    sukhbaatar: false,
    chingeltei: false,
  });

  const restaurantss = [
    {
      id: 1,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
    {
      id: 3,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
    },
    {
      id: 4,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
    },
    {
      id: 5,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
    },
    {
      id: 1,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
    {
      id: 3,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
    },
    {
      id: 4,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
    },
    {
      id: 5,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
    },
  ];

  const filteredRestaurants = restaurantss.filter((restaurant) => {
    if (!filters.bayanzurkh && !filters.sukhbaatar && !filters.chingeltei) {
      return true;
    }

    return (
      (filters.bayanzurkh && restaurant.location === "Баянзүрх дүүрэг") ||
      (filters.sukhbaatar && restaurant.location === "Сүхбаатар дүүрэг") ||
      (filters.chingeltei && restaurant.location === "Чингэлтэй дүүрэг")
    );
  });

  return (
    <div className="flex w-full min-h-screen bg-[#0D1A20] relative">
      <div className="w-[20%]">
        <SideFilter filters={filters} setFilters={setFilters} />
      </div>

      <img
        className="absolute left-1/2 top-5 -translate-x-1/2 w-[200px] h-[100px]"
        src="/images/restaurant1.png"
        alt="logo"
      />

      <div className="grid grid-cols-4 w-[90%] mt-45 ml-5">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default WebFilterRestaurant;
