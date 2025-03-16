"use client";
import React from "react";

/**
 * NavItem component for sidebar navigation
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {string} props.label - Text label for the navigation item
 * @param {boolean} props.active - Whether the item is active
 * @param {function} props.onClick - Click handler
 */
const NavItem = ({ icon, label, active = false, onClick }) => {
  return (
    <button
      className={`flex gap-4 items-center p-4 text-sm text-lime-50 rounded-xl cursor-pointer w-full ${active ? "bg-gray-800 bg-opacity-20" : ""}`}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      <div className="flex justify-center items-center h-[21px] w-[21px]">
        {icon}
      </div>
      <span className="text-lime-50">{label}</span>
    </button>
  );
};

export default NavItem;
