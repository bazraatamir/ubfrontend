import React, {useState} from "react";

const restaurants = new Array(6).fill({
  name: "Modern Nomads",
  type: "ресторан",
  image: "https://via.placeholder.com/60", // Replace with actual restaurant image URLs
});

const RestaurantPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const restaurants = [
    {name: "Modern Nomads", status: "approved"},
    {name: "Pizza & Pasta", status: "pending"},
    {name: "Korean BBQ", status: "approved"},
    {name: "Nomads Express", status: "pending"},
  ];
  const filteredRestaurants = restaurants.filter((r) => {
    if (activeTab === "all") return true;
    return r.status === activeTab;
  });
  return (
    <div className='w-full h-full bg-gradient-to-b from-[#38718B1A] to-[#0F1E251A] p-6 text-white'>
      {/* Page Header */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Ресторан</h1>
        <input
          type='text'
          placeholder='Хайх...'
          className='px-4 py-2 rounded bg-white text-black w-[250px]'
        />
      </div>

      {/* Tabs */}
      <div className='flex gap-2 mb-6'>
        <button
          onClick={() => setActiveTab("all")}
          className={`px-6 py-2 rounded font-semibold transition-all duration-200 ${
            activeTab === "all"
              ? "bg-lime-500 text-black"
              : "bg-[#2E3C49] text-white"
          }`}>
          Бүх ресторан
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-6 py-2 rounded font-semibold transition-all duration-200 ${
            activeTab === "pending"
              ? "bg-lime-500 text-black"
              : "bg-[#2E3C49] text-white"
          }`}>
          Хүлээгдэж буй
        </button>
      </div>

      {/* Restaurant List Container */}
      <div className='bg-[#2E3C49] p-4 rounded-xl space-y-4'>
        {filteredRestaurants.map((restaurant, index) => (
          <div
            key={index}
            className='flex items-center justify-between py-3 border-b border-gray-600 last:border-0'>
            {/* Restaurant Info */}
            <div className='flex items-center gap-4'>
              <img
                src={restaurant.image}
                alt='restaurant'
                className='w-12 h-12 rounded-full object-cover'
              />
              <div>
                <div className='font-semibold'>{restaurant.name}</div>
                <div className='text-sm text-gray-300'>{restaurant.type}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex items-center gap-2'>
              <button className='bg-lime-500 text-black px-3 py-1 rounded font-semibold'>
                Онцлох
              </button>
              <button className='bg-[#1E2A31] px-3 py-1 rounded text-white'>
                Тусгай
              </button>
            </div>

            {/* Actions */}
            <div className='flex gap-2'>
              <button className='bg-[#1E2A31] p-2 rounded'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                  />
                </svg>
              </button>
              <button className='bg-[#E27928] p-2 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v2H9V4a1 1 0 011-1z'
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
