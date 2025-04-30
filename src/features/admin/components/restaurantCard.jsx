import {FaTrash, FaEdit} from "react-icons/fa";
import axiosInstance from "../../../shared/axios";
import { useState, useEffect } from "react";

export default function RestaurantCard({restaurant}) {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axiosInstance.get(`/restaurants/${restaurant.id}`);
        setRestaurantData(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    if (restaurant.id) {
      fetchRestaurantData();
    }
  }, [restaurant.id]);

  const handleToggleStatus = async () => {
    try {
      // First get the highlight for this restaurant
      const highlightsResponse = await axiosInstance.get('/highlights', {
        params: {
          restaurantId: restaurant.id
        }
      });
      
      if (highlightsResponse.data?.length > 0) {
        const highlight = highlightsResponse.data[0];
        
        // Toggle between APPROVED and REJECTED
        if (highlight.status === "APPROVED") {
          await axiosInstance.post(`/highlights/${highlight.id}/reject`);
          alert("Амжилттай татгалзлаа!");
        } else {
          await axiosInstance.post(`/highlights/${highlight.id}/approve`);
          alert("Амжилттай баталгаажууллаа!");
        }
      } else {
        // If no highlight exists, create one and approve it
        const createResponse = await axiosInstance.post('/highlights', {
          restaurantId: restaurant.id
        });
        
        if (createResponse.data?.id) {
          await axiosInstance.post(`/highlights/${createResponse.data.id}/approve`);
          alert("Амжилттай баталгаажууллаа!");
        }
      }
    } catch (error) {
      console.error("Error toggling highlight status:", error);
      const errorMessage = error.response?.data?.error || "Статус өөрчлөхөд алдаа гарлаа!";
      alert(errorMessage);
    }
  };

  const handleDelete = async () => {
    try {
      // First get the highlight for this restaurant
      const highlightsResponse = await axiosInstance.get('/highlights', {
        params: {
          restaurantId: restaurant.id
        }
      });
      
      if (highlightsResponse.data?.length > 0) {
        const highlight = highlightsResponse.data[0];
        if (window.confirm("Та энэ онцлохыг устгахдаа итгэлтэй байна уу?")) {
          await axiosInstance.delete(`/highlights/${highlight.id}`);
          alert("Амжилттай устгалаа!");
        }
      } else {
        alert("Онцлох олдсонгүй!");
      }
    } catch (error) {
      console.error("Error deleting highlight:", error);
      alert("Устгахад алдаа гарлаа!");
    }
  };

  return (
    <div className='bg-[#1F2A35] rounded px-4 py-3 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <img
          src={restaurantData?.imageUrl ? `http://localhost:3000/uploads/${restaurantData.imageUrl.split('\\').pop()}` : 'https://via.placeholder.com/40'}
          alt='Restaurant'
          className='w-10 h-10 rounded-full object-cover object-center'
        />
        <div>
          <div className='font-semibold'>{restaurantData?.name || restaurant.name}</div>
          <div className='text-xs opacity-60'>restaurant</div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <button 
          onClick={handleToggleStatus}
          className='bg-lime-500 text-black font-semibold text-sm px-3 py-1 rounded'>
          {restaurant.type === "special" ? "Тусгай" : "Онцлох"}
        </button>
        <button className='bg-[#FF6B00] text-white p-2 rounded'>
          <FaEdit size={14} />
        </button>
        <button 
          onClick={handleDelete}
          className='bg-[#FF6B00] text-white p-2 rounded'>
          <FaTrash size={14} />
        </button>
      </div>
    </div>
  );
}