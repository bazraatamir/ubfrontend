import React, {useState} from "react";
import RestaurantfilterCard from "../components/restaurantsfilterCard";
import SideFilter from "../components/sideFilter";
import EventTags from "../components/EventTags";
import RestaurantCard from "../components/RestaurantCard";
const WebFilterRestaurant = () => {
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  console.log(categoryParam);
  const [filters, setFilters] = useState({
    bayanzurkh: false,
    sukhbaatar: false,
    chingeltei: false,
  });

  const [activeStates, setActiveStates] = useState({
    wedding: true, // Хурим
    charity: false, // Буяны арга хэмжээ
    karaoke: false, // Караоке
    birthday: false, // Төрсөн өдөр
    familyReunion: false, // Ургийн баяр
    engagement: false, // Хонхны баяр
    newYear: false, // Шинэ жил
    date: false, // Болзоо
    kidsEvent: false, // Хүүхдэд зориулсан арга хэмжээ
    specialEvent: false, // Онцлох арга хэмжээ
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for mobile filter toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  const restaurantss = [
    {
      id: 1,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
      eventTags: ["wedding", "event"],
    },
    {
      id: 2,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
      eventTags: ["wedding", "event"],
    },
    {
      id: 3,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["date", "newYear"],
    },
    {
      id: 4,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["event"],
    },
    {
      id: 5,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"],
    },
    {
      id: 6,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"],
    },
    {
      id: 7,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"],
    },
    {
      id: 8,
      name: "City Bistro",
      image: "/images/restaurant1.png",
      location: "Сүхбаатар дүүрэг",
      eventTags: ["wedding", "date"],
    },
  ];

  const filteredRestaurants = restaurantss.filter((restaurant) => {
    const noLocationFilters =
      !filters.bayanzurkh && !filters.sukhbaatar && !filters.chingeltei;
    const locationMatch =
      noLocationFilters ||
      (filters.bayanzurkh && restaurant.location === "Баянзүрх дүүрэг") ||
      (filters.sukhbaatar && restaurant.location === "Сүхбаатар дүүрэг") ||
      (filters.chingeltei && restaurant.location === "Чингэлтэй дүүрэг");

    const activeTags = Object.keys(activeStates).filter(
      (key) => activeStates[key]
    );
    const noEventFilters = activeTags.length === 0;
    const eventMatch =
      noEventFilters ||
      activeTags.some((tag) => restaurant.eventTags.includes(tag));

    return locationMatch && eventMatch;
  });

  // Function to handle "go back" navigation
  const handleGoBack = () => {
    window.history.back();
  };

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen bg-[#0D1A20] relative'>
      {/* Side Filter - Always visible on desktop, toggleable on mobile */}
      <div className='hidden md:block md:w-64 lg:w-80 p-4 md:p-0 shrink-0 shadow-2xl '>
        <div className='hidden md:block md:w-64 lg:w-80 p-4 md:p-0 shrink-0  fixed'>
          <SideFilter
            filters={filters}
            setFilters={setFilters}
            activeStates={activeStates}
            setActiveStates={setActiveStates}
          />
        </div>
      </div>

      {/* Mobile Filter Toggle Button with Left-Pointing Arrow SVG */}
      <button
        onClick={handleGoBack} // Goes back in history
        className='md:hidden fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='17'
          fill='none'
          viewBox='0 0 16 17'
          className='inline-block'>
          <path
            fill='#fff'
            d='M10.707 1.945a1 1 0 0 1 0 1.414L5.757 8.309l4.95 4.95a1 1 0 0 1-1.414 1.414L3.636 9.016a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 0Z'
          />
        </svg>
      </button>

      {/* Mobile SideFilter Overlay */}
      {isFilterOpen && (
        <div className='md:hidden fixed   inset-0 z-50 '>
          <div
            className='absolute inset-0 bg-black/50'
            onClick={() => setIsFilterOpen(false)}
          />
          <SideFilter
            filters={filters}
            setFilters={setFilters}
            activeStates={activeStates}
            setActiveStates={setActiveStates}
            onClose={() => setIsFilterOpen(false)}
          />
        </div>
      )}

      {/* Main Content Container */}
      <div className='flex-1 relative px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <img
          className='relative left-1/2 top-4 -translate-x-1/2 w-32 h-16 sm:w-40 sm:h-20 md:w-[300px] md:h-[100px] object-contain'
          src='https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/96e23556c599a4c63754cbf31aac9d5fe15ff941a73db90cd8b27e09e692f152?placeholderIfAbsent=true'
          alt='logo'
        />

        {/* Header with Bayanzurkh on Left and Menu SVG on Right */}
        <div className='relative top-8 flex items-center justify-between text-white px-4 sm:px-6 lg:px-8'>
          {/* Left Side: Bayanzurkh with Arrow */}
          <div className='flex items-center gap-2'>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>
              Баянзүрх
            </h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block'>
              <path
                fill='#fff'
                d='M10 18a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414L14.586 12l-4.586 5.586A1 1 0 0 0 10 18Z'
              />
            </svg>
          </div>

          {/* Right Side: Menu SVG with Dropdown */}
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='25'
              fill='none'
              viewBox='0 0 24 25'
              className='inline-block cursor-pointer'
              onClick={toggleMenu}>
              <path
                fill='#fff'
                d='M22 19.165a.75.75 0 0 1-.75.75h-5.1a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h7.74a2.93 2.93 0 0 1 5.66 0h5.1a.75.75 0 0 1 .75.75Zm0-13.21a.75.75 0 0 1-.75.75H18.8a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 0 1 0-1.5h10.39a2.93 2.93 0 0 1 5.66 0h2.45a.74.74 0 0 1 .75.75Zm0 6.6a.74.74 0 0 1-.75.75H9.55a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h1.14a2.93 2.93 0 0 1 5.66 0h11.7a.75.75 0 0 1 .75.75Z'
              />
            </svg>

            {/* Dropdown Menu - Hidden on Desktop */}
            {isMenuOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-50 md:hidden'>
                <ul className='py-2'>
                  <li
                    className='px-4 py-2 hover:bg-gray-700 cursor-pointer'
                    onClick={() => {
                      console.log("Help clicked");
                      setIsMenuOpen(false); // Close menu after click
                    }}>
                    Help
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-700 cursor-pointer'
                    onClick={() => {
                      console.log("Settings clicked");
                      setIsMenuOpen(false);
                    }}>
                    Settings
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-700 cursor-pointer'
                    onClick={() => {
                      console.log("Contact clicked");
                      setIsMenuOpen(false);
                    }}>
                    Contact
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* EventTags - Visible only on mobile under the logo */}
        <div className='md:hidden mt-16 sm:mt-20 px-0 sm:px-4'>
          <EventTags
            activeStates={activeStates}
            setActiveStates={setActiveStates}
          />
        </div>

        {/* Restaurant Cards Grid */}
        {/* <div className='pt-20 sm:pt-24 md:pt-32 lg:pt-36 pb-6'>
          {filteredRestaurants.length === 0 ? (
            <div className='text-white text-center text-base sm:text-lg md:text-xl'>
              No restaurants found with current filters
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6'>
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default WebFilterRestaurant;
