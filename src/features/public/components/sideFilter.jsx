// SideFilter.jsx
import React from "react";
import EventTags from "./EventTags";
import FilterList from "./filterList";

const SideFilter = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-[rgba(23,57,72,0.2)] to-[rgba(13,26,32,0.1)] h-screen pl-17">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="40"
        fill="none"
        viewBox="0 0 41 40"
        className="mt-5"
      >
        <rect
          width="40"
          height="38.809"
          x=".5"
          y=".5"
          stroke="#F5F7DC"
          stroke-opacity=".8"
          rx="19.404"
        />
        <path
          fill="#F5F7DC"
          d="M22.707 26.268a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0-1.414-1.414l-5.657 5.657a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0Z"
        />
      </svg>
      <div className="flex items-center gap-5 mt-10">
        <h3 className="text-[39px] text-white font-bold">Баянзүрх</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25.5"
          fill="none"
          viewBox="0 0 16 17"
          className="mt-2"
        >
          <path
            fill="#fff"
            d="M5.293 1.945a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 1.414 1.414l5.657-5.657a1 1 0 0 0 0-1.414L6.707 1.945a1 1 0 0 0-1.414 0Z"
          />
        </svg>
      </div>

      <FilterList />
      <EventTags />
    </div>
  );
};

export default SideFilter;
