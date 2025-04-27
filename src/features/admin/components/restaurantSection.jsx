import {useState} from "react";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantSection({title, type, status}) {
  const [showAll, setShowAll] = useState(false);

  const allRestaurants = [
    {
      name: "Modern Nomads",
      type: "featured",
      status: "approved",
      image: "/img.jpg",
    },
    {
      name: "Modern Nomads",
      type: "featured",
      status: "pending",
      image: "/img.jpg",
    },
    {
      name: "Modern Nomads",
      type: "special",
      status: "approved",
      image: "/img.jpg",
    },
    {
      name: "Modern Nomads",
      type: "special",
      status: "pending",
      image: "/img.jpg",
    },
  ];

  const filtered = allRestaurants.filter(
    (r) => r.type === type && r.status === status
  );
  const visible = showAll ? filtered : filtered.slice(0, 4);

  return (
    <div className='bg-[#2E3C49] rounded p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-semibold text-lg'>{title}</h2>
        <button
          className='text-lime-400 font-semibold'
          onClick={() => setShowAll(!showAll)}>
          Бүгд үзэх
        </button>
      </div>
      <div className='space-y-4'>
        {visible.map((r, i) => (
          <RestaurantCard key={i} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
