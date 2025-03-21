import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const RestaurantfilterCard = ({ restaurant }) => {
  const { name, image, location } = restaurant;

  return (
    <div className='w-full max-w-[370px] h-auto min-h-[400px] sm:h-[50vh] rounded-lg overflow-hidden flex flex-col relative cursor-pointer mx-auto'>
      {/* Background gradients */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#0D1B21] to-[#101E25]'></div>
      <div className='absolute inset-0 bg-[#13252D] [clip-path:polygon(0_70%,100%_0,100%_100%,0_100%)]'></div>
      
      <div className='relative z-10 flex flex-col h-full'>
        {/* Header section */}
        <div className='p-4 sm:p-6'>
          <h3 className='text-white text-lg sm:text-2xl font-[Futuris] font-medium text-center line-clamp-1'>
            {name}
          </h3>
          <p className='text-white text-lg sm:text-2xl font-[Futuris] text-center mt-1'>
            ресторан
          </p>
        </div>

        {/* Image section */}
        <div className='flex justify-center items-center px-4 sm:px-0'>
          <img
            src={image}
            alt={name}
            className='w-full max-w-[370px] h-48 sm:h-[250px] object-cover'
          />
        </div>

        {/* Details section */}
        <div className='flex flex-col my-4 sm:my-6 px-4 gap-3 flex-1'>
          <div className='flex items-center text-gray-400 text-xs sm:text-sm'>
            <IoLocationOutline className='mr-1 flex-shrink-0' />
            <span className='line-clamp-1'>{location}</span>
          </div>
          <div className='flex flex-wrap gap-2 sm:gap-3'>
            <button className='px-2 sm:px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43] whitespace-nowrap'>
              Болзоо
            </button>
            <button className='px-2 sm:px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43] whitespace-nowrap'>
              Хурим найр
            </button>
            <button className='px-2 sm:px-3 py-1 text-xs rounded bg-[#2A2F33] text-white hover:bg-[#3A3F43] whitespace-nowrap'>
              Jazz хөгжим
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantfilterCard;