import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';

const RestaurantCard = ({ restaurant }) => {
  const { id, name, image, location } = restaurant;

  return (
    <div className="w-[370px] rounded-lg overflow-hidden h-[528px] flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B21] to-[#101E25]"></div>
      <div className="absolute inset-0 bg-[#13252D] [clip-path:polygon(0_70%,100%_0,100%_100%,0_100%)]"></div>
      <Link to={`/restaurant/${id}`} className="relative z-10">
        <div className="p-4">
          <h3 className="text-white text-2xl font-medium">{name} ресторан</h3>
        </div>
        
        <div className="flex justify-center items-center h-[360px]">
          <img
            src={image}
            alt={name}
            className="w-[370px] h-[301px] object-cover"
          />
        </div>

        <div className="p-4">
          <div className="flex items-center text-gray-400 text-sm mb-3">
            <IoLocationOutline className="mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">Болзоо</button>
            <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">Хурим найр</button>
            <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">Jazz хөгжим</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard; 