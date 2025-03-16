import React from "react";

const AddFoodHeader = () => {
  return (
    <button
      className="flex flex-col justify-center px-10 py-4 max-w-full text-lg font-bold text-white bg-gray-800 rounded-md min-h-[48px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px]"
      aria-label="Add named dish"
    >
      <div className="flex gap-4 w-full items-center">
        <span className="grow">Нэрийн хоол нэмэх</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d83e99ac73f3370c6741c020585fde56c7b0a51dfbf51b18593b6bb0e3fc1694?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
          alt="Add icon"
          className="w-[38px]"
        />
      </div>
    </button>
  );
};

export default AddFoodHeader;
