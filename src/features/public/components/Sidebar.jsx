import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';

const Sidebar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#0E1B21] text-white z-50">
      <div className="h-full flex">
        {/* Left Content */}
        <div className="flex-1 flex flex-col ml-24 pt-12">
          {/* Menu Items */}
          <nav className="flex-1 flex flex-col justify-start space-y-11">
            <Link to="/sukhbaatar" onClick={onClose} className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors">
              Сүхбаатар
            </Link>
            <Link to="/bayangol" onClick={onClose} className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors">
              Баянгол
            </Link>
            <Link to="/bayanzurkh" onClick={onClose} className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors">
              Баянзүрх
            </Link>
            <Link to="/songino-khairkhan" onClick={onClose} className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors">
              Сонгино хайрхан
            </Link>
            <Link to="/khan-uul" onClick={onClose} className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors">
              Хан-уул
            </Link>
            <Link to="/chingeltei" onClick={onClose} className="text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors">
              Чингэлтэй
            </Link>
          </nav>
        </div>

        {/* Right Content */}
        <div className="w-[550px]  pt-18 pr-30 flex flex-col">
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
              <IoCloseOutline size={24} />
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
  );
};

export default Sidebar; 