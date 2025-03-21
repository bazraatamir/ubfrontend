import React from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

const Sidebar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#0E1B21] text-white z-50 flex flex-col md:flex-row">
      <div className="h-full flex flex-col md:flex-row w-full">
        {/* Left Content */}
        <div className="flex-1 flex flex-col px-4 md:px-6 lg:ml-24 pt-6 md:pt-12">
          <nav className="flex-1 flex flex-col justify-start space-y-6 md:space-y-11">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Сүхбаатар
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Баянгол
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Баянзүрх
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Сонгино хайрхан
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Хан-уул
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Чингэлтэй
            </div>
          </nav>
        </div>

        {/* Divider - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block w-[2px] h-[80%] md:h-[820px] self-center bg-white/10 mx-4 lg:mr-[200px]" />

        {/* Right Content */}
        <div className="w-full md:w-[450px] lg:w-[550px] px-4 md:px-6 pt-6 md:pt-15 pb-6 md:pb-20 flex flex-col shrink-0">
          <div className="flex items-center justify-between md:justify-end">
            <div className="relative w-full md:w-[350px] lg:w-[450px] mr-0 md:mr-8">
              <input
                type="text"
                placeholder="Хайх..."
                className="w-full bg-white text-black text-sm py-2 pl-4 pr-10 rounded-lg focus:outline-none"
              />
              <IoSearchOutline
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white ml-4 md:ml-0"
            >
              <IoCloseOutline size={32} md:size={40} />
            </button>
          </div>
          <div className="mt-6 md:mt-auto font-[Mon_University]">
            <div className="space-y-1 text-white/60">
              <p className="text-lg md:text-[25px]">Хаяг :</p>
              <p className="text-sm md:text-[20px]">
                WY75+7V5 Ard Ayush Ave, БЦД - 13 Microcc, Ulaanbaatar 16091
              </p>
              <p className="text-lg md:text-[25px] mt-2 md:mt-4">Холбоо барих :</p>
              <p className="text-sm md:text-[20px]">+97690009810 +97680731017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;