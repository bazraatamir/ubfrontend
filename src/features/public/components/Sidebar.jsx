import React from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';

const Sidebar = ({onClose}) => {
  return (
    <motion.div>
    <div className="fixed inset-0 bg-[#0E1B21] text-white z-50">
      <div className="h-full flex">
        {/* Left Content */}
        <div className="flex-1 flex flex-col ml-24 pt-12">
          {/* Menu Items */}
          <nav className="flex-1 flex flex-col justify-start space-y-11">
            <div className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Сүхбаатар
            </div>
            <div className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Баянгол
            </div>
            <div className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Баянзүрх
            </div>
            <div className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Сонгино хайрхан
            </div>
            <div className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Хан-уул
            </div>
            <div className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer">
              Чингэлтэй
            </div>
          </nav>
        </div>
        <div className="w-[2px] h-[820px] self-center bg-white/10 mr-[200px]" />
        {/* Right Content */}
        <div className="w-[550px] pt-15 pr-15 flex flex-col">
          <div className="flex items-center justify-end">
            <div className="relative w-[450px] mr-8">
              <input 
                type="text" 
                placeholder="Хайх..." 
                className="w-full bg-[white] text-black text-sm py-2.5 pl-4 pr-10 rounded-lg focus:outline-none"
              />
              <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <IoCloseOutline size={40} />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-auto pb-20 font-[Mon_University]">
            <div className="space-y-1 text-white/60">
              <p className="text-[25px]">Хаяг :</p>
              <p className="text-[20px]">
                WY75+7V5 Ard Ayush Ave, БЦД - 13 Microcc, Ulaanbaatar 16091
              </p>
              <p className="text-[25px] mt-4">Холбоо барих :</p>
              <p className="text-[20px]">
                +97690009810 +97680731017
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Sidebar; 