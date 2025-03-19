import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const RestaurantCard = ({ restaurant }) => {
  const { name, image, location } = restaurant;

  return (
<<<<<<< HEAD
    <div className='w-[304px] h-[392px] rounded-[20px] overflow-hidden  flex flex-col items-center justify-center relative cursor-pointer'>
      <div className='absolute inset-0 bg-gradient-to-b from-[#0D1B21] to-[#101E25]'></div>
      <div className='absolute inset-0 bg-[#13252D] [clip-path:polygon(0_70%,100%_0,100%_100%,0_100%)]'></div>
      <div className='relative z-2'>
        <div className='p-4'>
          <h3 className='text-white text-[18px] font-[Futuris] font-medium text-center'>
            {name}
          </h3>
          <p className='text-white text-[18px] font-[Futuris] text-center mt-1'>
=======
    <div className="w-[370px] h-[50vh] rounded-lg overflow-hidden flex flex-col relative cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B21] to-[#101E25]"></div>
      <div className="absolute inset-0 bg-[#13252D] [clip-path:polygon(0_70%,100%_0,100%_100%,0_100%)]"></div>
      <div className="relative z-10">
        <div className="p-6">
          <h3 className="text-white text-2xl font-[Futuris] font-medium text-center">
            {name}
          </h3>
          <p className="text-white text-2xl font-[Futuris] text-center mt-1">
>>>>>>> 46defc4772d021bd40aac0386f97e436ae08f72d
            ресторан
          </p>
        </div>

        <div className="flex justify-center items-center ">
          <img
            src={image}
            alt={name}
<<<<<<< HEAD
            className='w-[304px] h-[200px] object-cover'
=======
            className="w-[370px] h-[250px] object-cover"
>>>>>>> 46defc4772d021bd40aac0386f97e436ae08f72d
          />
        </div>

        <div className="flex flex-col my-6 px-4 gap-3">
          <div className="flex items-center text-gray-400 text-sm ">
            <IoLocationOutline className="mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">
              Болзоо
            </button>
            <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">
              Хурим найр
            </button>
            <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">
              Jazz хөгжим
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
