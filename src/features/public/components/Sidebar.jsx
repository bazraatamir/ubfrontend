import React from "react";
import {IoSearchOutline, IoCloseOutline} from "react-icons/io5";
import {motion} from "framer-motion";
import {Link} from "react-router";

const sidebarVariants = {
  hidden: {x: "100%"},
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 25,
      duration: 0.8, // Нээлтийн хөдөлгөөн
    },
  },
  exit: {x: "100%", opacity: 0, transition: {ease: "easeInOut", duration: 0.6}},
};
const districts = [
  "Сүхбаатар",
  "Чингэлтэй",
  "Баянгол",
  "Баянзүрх",
  "Сонгино хайрхан",
];

const Sidebar = ({onClose}) => {
  return (
    <motion.div
      className='fixed inset-0 bg-[#0E1B21] text-white z-50 overflow-y-auto'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={sidebarVariants}>
      <div className='h-full flex flex-col sm:flex-row'>
        {/* Left Content */}
        <div className='flex-1 flex flex-col sm:ml-12 md:ml-16 lg:ml-24 pt-6 sm:pt-8 lg:pt-12 px-4 sm:px-6 lg:px-0'>
          {/* Menu Items */}
          <nav className='flex-1 flex flex-col justify-start space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-11'>
            {districts.map((district) => (
              <Link to='/restaurants_filter' onClick={onClose} key={district}>
                <div className='text-[32px] sm:text-[36px] md:text-[45px] lg:text-[60px] xl:text-[70px] font-[Mon_University] hover:text-[#7CFF6B] transition-colors cursor-pointer'>
                  {district}
                </div>
              </Link>
            ))}
          </nav>
        </div>

        {/* Vertical Divider - Only show on sm screens and up */}
        <div className='hidden sm:block w-[1px] sm:w-[2px] h-[820px] self-center bg-white/10 mx-4 sm:mx-8 lg:mr-[200px]' />

        {/* Right Content */}
        <div className='w-full sm:w-[400px] md:w-[450px] lg:w-[550px] pt-6 sm:pt-8 lg:pt-15 px-4 sm:px-6 lg:pr-15 flex flex-col'>
          <div className='flex items-center justify-between sm:justify-end'>
            <div className='relative w-full sm:w-[300px] md:w-[350px] lg:w-[450px] sm:mr-4 lg:mr-8'>
              <input
                type='text'
                placeholder='Хайх...'
                className='w-full bg-[white] text-black text-sm py-2 sm:py-2.5 pl-4 pr-10 rounded-lg focus:outline-none'
              />
              <IoSearchOutline
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                size={18}
              />
            </div>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-white ml-2 sm:ml-4 lg:ml-0'>
              <IoCloseOutline size={32} className='sm:w-10 sm:h-10' />
            </button>
          </div>

          {/* Contact Info */}
          <div className='mt-6 sm:mt-8 lg:mt-auto pb-6 sm:pb-8 lg:pb-20 font-[Mon_University]'>
            <div className='space-y-1 text-white/60'>
              <p className='text-[18px] sm:text-[20px] lg:text-[25px]'>Хаяг :</p>
              <p className='text-[14px] sm:text-[16px] lg:text-[20px] leading-relaxed'>
                WY75+7V5 Ard Ayush Ave, БЦД - 13 Microcc, Ulaanbaatar 16091
              </p>
              <p className='text-[18px] sm:text-[20px] lg:text-[25px] mt-3 sm:mt-4'>Холбоо барих :</p>
              <p className='text-[14px] sm:text-[16px] lg:text-[20px]'>+97690009810 +97680731017</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
