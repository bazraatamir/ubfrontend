import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Modern Nomads',
      image: '/images/restaurant1.png',
      location: 'Баянзүрх дүүрэг',
    },
    {
      id: 2,
      name: 'Modern Nomads',
      image: '/images/restaurant1.png',
      location: 'Баянзүрх дүүрэг',
    },
    {
      id: 3,
      name: 'Modern Nomads',
      image: '/images/restaurant1.png',
      location: 'Баянзүрх дүүрэг',
    },
    {
      id: 4,
      name: 'Modern Nomads',
      image: '/images/restaurant1.png',
      location: 'Баянзүрх дүүрэг',
    },
  ];

  return (
    <div className="min-h-screen bg-[#111315]">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/restaurant1.png" 
            alt="Restaurant background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-6xl font-mon-university text-center px-4 tracking-wide leading-relaxed">
            Хамгийн амттай шилдэг<br />хоол, төгс уур амьсгалтай<br />бүгд нэг дор
          </h1>
        </div>

        {/* UBFOODZONE line */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#111315]/80">
          <div className="flex">
            <div className="flex-1 text-[#7CFF6B] text-[10px] py-1 text-center tracking-wider">
              UBFOODZONE
            </div>
            <div className="flex-1 text-[#7CFF6B] text-[10px] py-1 text-center tracking-wider">
              UBFOODZONE
            </div>
            <div className="flex-1 text-[#7CFF6B] text-[10px] py-1 text-center tracking-wider">
              UBFOODZONE
            </div>
            <div className="flex-1 text-[#7CFF6B] text-[10px] py-1 text-center tracking-wider">
              UBFOODZONE
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Grid Section */}
      <div className="container mx-auto px-3 py-4">
        <h2 className="text-[20px] font-mon-futuris mb-3 text-white uppercase tracking-wider">ИТАЛИ РЕСТОРАН</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>

      {/* Second Restaurant Grid Section */}
      <div className="container mx-auto px-3 py-4">
        <h2 className="text-[10px] font-mon-futuris mb-3 text-white uppercase tracking-wider">ИТАЛИ РЕСТОРАН</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard 
              key={`second-${restaurant.id}`} 
              restaurant={{...restaurant, id: restaurant.id + 4}} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 