// FilterList.jsx
"use client";

import React, { useState } from "react";
import FilterItem from "./FilterItem";

const FilterList = () => {
  const cuisines = ["Үндэсний", "Хятад", "Солонгос", "Итали", "Lounge"];

  const [selectedCuisines, setSelectedCuisines] = useState({
    үндэсний: false,
    хятад: false,
    солонгос: false,
    итали: false,
    lounge: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedCuisines((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <nav
      className="flex flex-col gap-4 sm:gap-6 items-start mt-6 sm:mt-10 w-full max-w-[210px]"
      aria-label="Cuisine selection"
    >
      {cuisines.map((cuisine) => (
        <FilterItem
          key={cuisine}
          name={cuisine}
          checked={selectedCuisines[cuisine.toLowerCase()]}
          onChange={handleCheckboxChange}
        />
      ))}
    </nav>
  );
};

export default FilterList;