import RestaurantSection from "../components/restaurantSection";
import { useState, useEffect } from "react";
import axiosInstance from "../../../shared/axios";

function SpecialRestaurant() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await axiosInstance.get("/highlights/");
        setHighlights(response.data);
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    };

    fetchHighlights();
  }, []);

  // Separate highlights by type and status
  const featuredApproved = highlights.filter(h => h.type === 'featured' && h.status === 'approved');
  const featuredPending = highlights.filter(h => h.type === 'featured' && h.status === 'pending');
  const specialApproved = highlights.filter(h => h.type === 'special' && h.status === 'approved');
  const specialPending = highlights.filter(h => h.type === 'special' && h.status === 'pending');

  return (
    <div className='flex bg-[#0F1A22] min-h-screen text-white'>
      <div className='flex-1 p-6 space-y-10 overflow-y-auto'>
        <h1 className='text-3xl font-bold mb-4'>Ресторан</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <RestaurantSection
            title='Онцлох рестораны жагсаалт'
            type='featured'
            status='approved'
            restaurants={featuredApproved}
          />
          <RestaurantSection
            title='Онцлох ресторанд хүлээгдэж буй рестораны жагсаалт'
            type='featured'
            status='pending'
            restaurants={featuredPending}
          />
          <RestaurantSection
            title='Тусгай рестораны жагсаалт'
            type='special'
            status='approved'
            restaurants={specialApproved}
          />
          <RestaurantSection
            title='Тусгай ресторанд хүлээгдэж буй рестораны жагсаалт'
            type='special'
            status='pending'
            restaurants={specialPending}
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialRestaurant;
