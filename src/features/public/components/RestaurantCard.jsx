import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';

const RestaurantCard = ({ restaurant }) => {
  const { id, name, image, location } = restaurant;

  return (
    <div className="bg-[#111315] rounded-lg overflow-hidden">
      <Link to={`/restaurant/${id}`}>
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
            <h3 className="text-white text-lg font-medium mb-2">{name}</h3>
            <div className="flex items-center text-gray-400 text-sm mb-3">
              <IoLocationOutline className="mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex gap-1">
              <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">Болзоо</button>
              <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">Хурим найр</button>
              <button className="px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43]">Jazz хөгжим</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard; 