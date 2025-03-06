import React from "react";

const NavigationItem = ({ icon, label }) => {
  return (
    <button
      className="flex gap-2 items-center hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg p-1"
      aria-label={label}
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-square w-[19px]"
          aria-hidden="true"
        />
      )}
      <span className="my-auto">{label}</span>
    </button>
  );
};

export default NavigationItem;
