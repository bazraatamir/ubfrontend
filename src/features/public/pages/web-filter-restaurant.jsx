import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import SideFilter from "../components/SideFilter"; // Fix typo in import (sideFilter -> SideFilter)

const WebFilterRestaurant = () => {
  const [filters, setFilters] = useState({
    bayanzurkh: false,
    sukhbaatar: false,
    chingeltei: false,
  });

  const [activeStates, setActiveStates] = useState({
    wedding: true,
    date: false,
    newYear: false,
    event: true,
  });

  const restaurantss = [
    {
      id: 1,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
      eventTags: ["wedding", "event"], // Added event tags
    },
    {
      id: 3,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["date", "newYear"], // Added event tags
    },
    {
      id: 4,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["event"], // Added event tags
    },
    {
      id: 5,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"], // Added event tags
    },
    {
      id: 6,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"], // Added event tags
    },
    {
      id: 7,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"], // Added event tags
    },
    {
      id: 8,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"], // Added event tags
    },
    // Duplicate entries omitted for brevity; ensure each has unique IDs and eventTags
  ];

  const filteredRestaurants = restaurantss.filter((restaurant) => {
    // Location filter logic
    const noLocationFilters =
      !filters.bayanzurkh && !filters.sukhbaatar && !filters.chingeltei;
    const locationMatch =
      noLocationFilters ||
      (filters.bayanzurkh && restaurant.location === "Баянзүрх дүүрэг") ||
      (filters.sukhbaatar && restaurant.location === "Сүхбаатар дүүрэг") ||
      (filters.chingeltei && restaurant.location === "Чингэлтэй дүүрэг");

    // Event tag filter logic
    const activeTags = Object.keys(activeStates).filter(
      (key) => activeStates[key]
    );
    const noEventFilters = activeTags.length === 0;
    const eventMatch =
      noEventFilters ||
      activeTags.some((tag) => restaurant.eventTags.includes(tag));

    // Restaurant must match both location and event filters
    return locationMatch && eventMatch;
  });

  return (
    <div className="flex w-full min-h-screen bg-[#0D1A20] relative">
      <div className="w-[20%]">
        <SideFilter
          filters={filters}
          setFilters={setFilters}
          activeStates={activeStates}
          setActiveStates={setActiveStates}
        />
      </div>

      <img
        className="absolute left-1/2 top-5 -translate-x-1/2 w-[200px] h-[100px]"
        src="/images/restaurant1.png"
        alt="logo"
      />

      <div className="grid grid-cols-4 w-[90%] mt-45 ml-5 gap-y-5">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default WebFilterRestaurant;
