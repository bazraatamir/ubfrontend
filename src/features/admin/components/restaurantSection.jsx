import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import axiosInstance from "../../../shared/axios";

export default function RestaurantSection({title, type, status}) {
  const [showAll, setShowAll] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await axiosInstance.get("/highlights/");
        const filtered = response.data
          .filter(h => h.status.toLowerCase() === status.toLowerCase())
          .map(h => ({
            id: h.restaurant.id,
            name: h.restaurant.name,
            type: type,
            status: h.status,
            image: h.restaurant.imageUrl,
            location: h.restaurant.location,
            description: h.restaurant.description
          }));
        setRestaurantData(filtered);
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    };

    fetchHighlights();
  }, [type, status]);

  const visible = showAll ? restaurantData : restaurantData.slice(0, 4);

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
          <RestaurantCard key={i} restaurant={r}/>
        ))}
      </div>
    </div>
  );
}
