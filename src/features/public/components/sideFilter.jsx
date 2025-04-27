import React, {useState, useEffect} from "react";
import EventTags from "./EventTags";
import FilterList from "./FilterList";

const SideFilter = ({
  filters,
  setFilters,
  activeStates,
  setActiveStates,
  onClose,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div
      className={`fixed inset-y-0 left-0 w-3/4 sm:w-2/3 md:w-64 lg:w-80 bg-gradient-to-b from-[rgba(23,57,72,0.2)] to-[rgba(13,26,32,0.1)] h-full 
        px-4 py-6 sm:px-6 md:static md:h-auto md:p-4 lg:p-6 transform transition-transform duration-300 md:translate-x-0 z-50 `}>
      {/* Mobile close button */}
      {isMobile && (
        <div className='flex justify-end md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 41 40'
            className='cursor-pointer'
            onClick={onClose}>
            <rect
              width='40'
              height='38.809'
              x='.5'
              y='.5'
              stroke='#F5F7DC'
              stroke-opacity='.8'
              rx='19.404'
            />
            <path
              fill='#F5F7DC'
              d='M22.707 26.268a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0-1.414-1.414l-5.657 5.657a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0Z'
            />
          </svg>
        </div>
      )}

      {/* Title section with arrow SVG - always visible */}
      <div className='mt-4 sm:mt-6 md:mt-8 flex items-center gap-2 sm:gap-3 lg:gap-4'>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-[39px] text-white font-bold'>
          Баянзүрх
        </h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='13'
          fill='none'
          viewBox='0 0 16 17'
          className='mt-1 sm:mt-1.5 lg:mt-2'>
          <path
            fill='#fff'
            d='M5.293 1.945a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 1.414 1.414l5.657-5.657a1 1 0 0 0 0-1.414L6.707 1.945a1 1 0 0 0-1.414 0Z'
          />
        </svg>
      </div>

      {/* Filter content */}
      <div className='mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-6'>
        {/* <FilterList /> */}
        <EventTags
          activeStates={activeStates}
          setActiveStates={setActiveStates}
        />
      </div>
    </div>
  );
};

export default SideFilter;
