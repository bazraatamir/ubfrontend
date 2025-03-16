"use client";
import React from "react";

/**
 * LogoutButton component
 *
 * @param {Object} props - Component props
 * @param {function} props.onClick - Click handler for logout action
 */
const LogoutButton = ({ onClick }) => {
  return (
    <button
      className="flex justify-center items-center mt-auto bg-gray-800 rounded-md cursor-pointer h-[35px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[119px]"
      onClick={onClick}
      aria-label="Гарах"
    >
      <div className="flex justify-center items-center h-[19px] w-[19px]">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="799:1029" layer-name="line-md:logout" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="logout-svg">
            <path d="M9.49967 15.833L15.0413 15.833C15.4768 15.833 15.833 15.4768 15.833 15.0413L15.833 3.95801C15.833 3.52259 15.4768 3.16634 15.0413 3.16634L9.49967 3.16634" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M11.875 9.5L2.77083 9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M5.54102 12.2705L2.77018 9.49967L5.54102 6.72884" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>`,
          }}
        />
      </div>
    </button>
  );
};

export default LogoutButton;
