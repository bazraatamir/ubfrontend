"use client";

import React from "react";

const EventTag = ({label, isActive, onClick}) => {
  return (
    <button
      className={`flex  items-center gap-1.5 px-2 sm:px-3 md:px-4 py-1 sm:py-2 
        text-xs sm:text-sm md:text-base font-bold text-white rounded 
        transition-colors duration-200
        ${isActive ? "bg-lime-500" : "bg-slate-800"}
        hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isActive ? "focus:ring-lime-500" : "focus:ring-slate-800"}
        whitespace-nowrap`}
      onClick={onClick}
      role='button'
      aria-pressed={isActive}>
      {label}
    </button>
  );
};

export default EventTag;
