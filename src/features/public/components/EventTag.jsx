"use client";

import React from "react";

const EventTag = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`gap-2 px-4 py-2 text-base font-bold text-white rounded transition-colors
        ${isActive ? "bg-lime-500" : "bg-slate-800"}
        hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isActive ? "focus:ring-lime-500" : "focus:ring-slate-800"}`}
      onClick={onClick}
      role="button"
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default EventTag;
