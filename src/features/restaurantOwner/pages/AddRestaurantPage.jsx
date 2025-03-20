"use client";
import React from "react";
import SideBar from "../layouts/SideBar";

const AddRestaurantPage = () => {
  return (
    <div className="min-h-screen bg-[#0E1B21]">

      {/* Main Content */}
      <div className="ml-[80px] p-11">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-2xl font-bold mb-3">
            Салбарын мэдээлэл засах
          </h1>
          <p className="text-white text-base max-w-[923px]">
            Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах боломжтой. 
            Хэрвээ та салбар нэмэх бол <span className="font-bold">салбар нэмэх</span> товчин дээр дарна уу.
          </p>
        </div>

        {/* Add Branch Button */}
        <button className="flex items-center gap-2 bg-[#2F323C] text-white px-4 py-2 rounded-lg mb-8">
          <span className="text-[#8CC63F] text-xl">+</span>
          <span className="text-sm font-medium">Салбар нэмэх</span>
        </button>
      </div>
    </div>
  );
};

export default AddRestaurantPage;
