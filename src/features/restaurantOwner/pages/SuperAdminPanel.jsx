import React, { useState } from 'react';

const SuperAdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([
    'Болсоо', 'Хурим найр', 'Болсоо', 'Jazz хөгжим', 'Event',
    'Болсоо', 'Хурим найр', 'Шинэ жил', 'Jazz хөгжим', 'Event',
    'Болсоо', 'Хурим найр', 'Болсоо', 'Jazz хөгжим', 'Event',
  ]);

  const restaurantTypes = [
    { name: 'Онцлох ресторан', count: 50 },
    { name: 'Түгсэй ресторан', count: 50 },
    { name: 'Бүх ресторан', count: 150 },
    { name: 'Бүх ресторан', count: 150 },
  ];

  const restaurants = Array(9).fill({
    name: 'Modern Nomads restaurant',
    image: 'https://i.cbc.ca/1.7444601.1738164740!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/canadian-geographic.jpg?im=Resize%3D780',
  });

  const addTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="h-screen w-full bg-[#0E1B21] text-white font-sans flex flex-col">
      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col h-full">
        {/* Header section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold tracking-wide text-gray-100">Нүүр</h1>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Ресторан хайх..."
              className="w-full py-2 px-4 bg-gray-800 border border-gray-70 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-3 top-2.5">
              <svg className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Restaurant Types Grid */}
          <div className="grid grid-cols-4 gap-4">
            {restaurantTypes.map((type, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-lg shadow-sm hover:bg-gray-700 transition-colors">
                <div className="text-gray-300 text-sm">{type.name}</div>
                <div className="text-right font-bold text-lg text-blue-400">{type.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main layout with 2 columns */}
        <div className="flex-1 flex gap-8">
          {/* Left column */}
          <div className="w-1/2 flex flex-col">
            {/* Recent Restaurants */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Сүүлд нэмэгдсэн рестораны жагсаалт</h2>
              <div className="space-y-4">
                {restaurants.slice(0, 4).map((restaurant, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-5 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center">
                      <img src={restaurant.image} alt="" className="w-14 h-14 rounded-full mr-4 border-2 border-gray-600" />
                      <div className="text-gray-100 text-base font-medium">{restaurant.name}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-400 hover:text-blue-400 p-2 rounded-full hover:bg-gray-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                      <button className="bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="w-1/2 flex flex-col">
            {/* Tags Section */}
            <div className="mb-6 flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Таг нэмэх</h2>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Tag бичих..."
                  className="flex-1 py-2 px-4 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                />
                <button
                  className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                  onClick={addTag}
                >
                  <span className="text-lg font-bold">+</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2 h-28 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 rounded-lg p-3 bg-gray-800 shadow-md">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-blue-600 rounded-full px-3 py-1 text-xs font-medium shadow-sm hover:bg-blue-700 transition-colors"
                  >
                    <span>{tag}</span>
                    <button
                      className="ml-2 text-white hover:text-gray-200 font-bold"
                      onClick={() => removeTag(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Restaurants */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Бүртгэлийн хүсэлт хүлээгдэж буй рестораны жагсаалт</h2>
              <div className="space-y-4">
                {restaurants.slice(0, 3).map((restaurant, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center">
                      <img src={restaurant.image} alt="" className="w-14 h-14 rounded-full mr-4 border-2 border-gray-600" />
                      <div className="text-gray-100 text-base font-medium">{restaurant.name}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button className="bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
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