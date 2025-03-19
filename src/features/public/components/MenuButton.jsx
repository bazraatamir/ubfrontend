import React from "react";

const MenuButton = () => {
  return (
    <div className="flex justify-center mt-7 relative top-[-20px] mt-[200px] mb-4">
      <div className="h-[10vh] w-full max-w-[90%] sm:max-w-[431px] flex items-center justify-center">
        <div className="relative text-lg sm:text-2xl lg:text-[32px] h-[60px] sm:h-[80px] lg:h-[90px] w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] border-2 border-[#ad9066] flex items-center justify-center">
          <svg
            className="absolute left-[-15px] sm:left-[-20px] rotate-180 bottom-[-15px] sm:bottom-[-20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            fill="none"
            viewBox="0 0 43 38"
          >
            <path stroke="#AD9066" d="M0 1h42.5v36.5" />
          </svg>
          <svg
            className="absolute right-[-15px] sm:right-[-20px] top-[-15px] sm:top-[-20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            fill="none"
            viewBox="0 0 43 38"
          >
            <path stroke="#AD9066" d="M0 1h42.5v36.5" />
          </svg>
          <p className="text-lg sm:text-2xl lg:text-[32px] font-['Mon_University'] text-[#f5f7dc] text-center px-4">
            Меню харах
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
