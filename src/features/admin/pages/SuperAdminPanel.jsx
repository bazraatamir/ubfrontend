import React, {useState} from "react";

const SuperAdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagInput, setTagInput] = useState("");

  const restaurantTypes = [
    {name: "Онцлох ресторан", count: 50},
    {name: "Түгсэй ресторан", count: 50},
    {name: "Бүх ресторан", count: 150},
    {name: "Бүх ресторан", count: 150},
  ];

  const restaurants = Array(9).fill({
    name: "Modern Nomads restaurant",
    image:
      "https://i.cbc.ca/1.7444601.1738164740!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/canadian-geographic.jpg?im=Resize%3D780",
  });

  return (
    <div className='h-screen w-full  text-white font-sans flex flex-col  '>
      <div className='flex-1 p-6 flex flex-col h-full'>
        <div className='mb-6'>
          <div className='flex justify-between'>
            <div className='flex items-center justify-between mb-4'>
              <h1 className='text-3xl font-bold tracking-wide text-gray-100'>
                Нүүр
              </h1>
            </div>
            <div className='p-4 rounded text-white w-[350px]'>
              <input
                type='text'
                placeholder='Ресторан хайх...'
                className='w-full py-2 px-4 bg-gray-800 border border-gray-70 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className='absolute right-3 top-2.5'>
                <svg
                  className='w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Restaurant Types Grid */}
          <div className='grid grid-cols-4 gap-4'>
            {restaurantTypes.map((type, index) => (
              <div
                key={index}
                className=' p-3 rounded-lg shadow-sm hover:bg-gray-700 transition-colors'
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(56, 113, 139, 0.1), rgba(15, 30, 37, 0.1))",
                }}>
                <div className='text-gray-300 text-sm'>{type.name}</div>
                <div className='text-right font-bold text-lg text-blue-400'>
                  {type.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main layout with 2 columns */}
        <div className='flex-1 flex gap-8'>
          {/* Left column */}
          <div className='w-1/3 flex flex-col h-[100%]  '>
            {/* Recent Restaurants */}
            <div className='flex-1'>
              <h2 className='text-xl font-semibold mb-4 text-gray-100'>
                Сүүлд нэмэгдсэн рестораны жагсаалт
              </h2>
              <div
                className='space-y-4 p-6 rounded-md shadow-lg h-[86%]'
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(56, 113, 139, 0.1), rgba(15, 30, 37, 0.1))",
                }}>
                {restaurants.slice(0, 4).map((restaurant, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-5  rounded-lg   hover:shadow-lg transition-all'>
                    <div className='flex items-center'>
                      <img
                        src={restaurant.image}
                        alt=''
                        className='w-14 h-14 rounded-full mr-4 border-2 border-gray-600'
                      />
                      <div className='text-gray-100 text-base font-medium'>
                        {restaurant.name}
                      </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <button className='text-gray-400 hover:text-blue-400 p-2 rounded-full hover:bg-gray-600 transition-colors'>
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
                      <button className='bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 transition-colors'>
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
          </div>

          {/* Right column */}
          <div className='w-2/3 flex flex-col '>
            <div className='flex-1  '>
              <h2 className='text-xl font-semibold mb-4 text-gray-100'>
                Бүртгэлийн хүсэлт хүлээгдэж буй рестораны жагсаалт
              </h2>
              <div
                className='space-y-4 p-6 rounded-md shadow-lg'
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(56, 113, 139, 0.1), rgba(15, 30, 37, 0.1))",
                }}>
                {restaurants.slice(0, 3).map((restaurant, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-4  hover:shadow-lg transition-all'>
                    <div className='flex items-center'>
                      <img
                        src={restaurant.image}
                        alt=''
                        className='w-14 h-14 rounded-full mr-4 border-2 border-gray-600'
                      />
                      <div className='text-gray-100 text-base font-medium'>
                        {restaurant.name}
                      </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <button className='bg-green-600 p-2 rounded-full text-white hover:bg-green-700 transition-colors'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </button>
                      <button className='bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 transition-colors'>
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
            <div className='flex-1   '>
              <h2 className='text-[22px] font-semibold mb-4 text-gray-100'>
                Бүртгэлийн хүсэлт хүлээгдэж буй рестораны жагсаалт
              </h2>
              <div
                className='space-y-4  p-6 rounded-md shadow-lg'
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(56, 113, 139, 0.1), rgba(15, 30, 37, 0.1))",
                }}>
                {restaurants.slice(0, 3).map((restaurant, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-4  hover:shadow-lg transition-all'>
                    <div className='flex items-center'>
                      <img
                        src={restaurant.image}
                        alt=''
                        className='w-14 h-14 rounded-full mr-4 border-2 border-gray-600'
                      />
                      <div className='text-gray-100 text-base font-medium'>
                        {restaurant.name}
                      </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <button className='bg-green-600 p-2 rounded-full text-white hover:bg-green-700 transition-colors'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </button>
                      <button className='bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 transition-colors'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPanel;
