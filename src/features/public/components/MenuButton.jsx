import React from "react";

const MenuButton = () => {
  return (
    <div className="flex justify-center mt-7 relative top-[-20px] mt-[200px]">
      <div className="h-[109px] w-[431px] flex items-center justify-center">
        <div className="relative h-[77px] w-[400px] border-2 border-[#ad9066] flex items-center justify-center">
          <svg
            className="absolute left-[-20px] rotate-180 top-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="38"
            fill="none"
            viewBox="0 0 43 38"
          >
            <path stroke="#AD9066" d="M0 1h42.5v36.5" />
          </svg>
          <svg
            className="absolute right-[-20px] top-[-20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="38"
            fill="none"
            viewBox="0 0 43 38"
          >
            <path stroke="#AD9066" d="M0 1h42.5v36.5" />
          </svg>
          <p className="text-[32px] font-['Mon_University'] text-[#f5f7dc] text-center">
            Меню харах
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
