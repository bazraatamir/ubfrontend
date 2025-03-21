"use client";
import React from "react";


const AddRestaurantPage = () => {
  return (
    <div className="flex min-h-screen bg-[#0E1B21]">
      {/* Sidebar (assuming it's a component) */}

      {/* Main Content */}
      <div className="flex-1 ml-[80px] p-4 md:p-6 lg:p-11">
        {/* Header */}
        <div className="mb-4 md:mb-6 lg:mb-8">
          <h1 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-3">
            Салбарын мэдээлэл засах
          </h1>
          <p className="text-white text-sm md:text-base max-w-full md:max-w-[923px]">
            Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах боломжтой. 
            Хэрвээ та салбар нэмэх бол <span className="font-bold">салбар нэмэх</span> товчин дээр дарна уу.
          </p>
        </div>

        {/* Add Branch Button */}
        <button className="flex items-center gap-2 bg-[#2F323C] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg mb-4 md:mb-6 lg:mb-8">
          <span className="text-[#8CC63F] text-lg md:text-xl">+</span>
          <span className="text-xs md:text-sm font-medium">Салбар нэмэх</span>
        </button>
      </div>
    </div>
  );
};

export default AddRestaurantPage;