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
        console.log(response.data);
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
      <div className='flex-1 p-3 xs:p-4 sm:p-6 space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 overflow-y-auto'>
        <h1 className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4'>Ресторан</h1>

        <div className='grid grid-cols-1 gap-3 xs:gap-4 sm:gap-6 md:gap-8'>
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
          <RestaurantSection
            title='Хүлээгдэж буй видеонууд'
            type='video'
            status='pending'
          />
          <RestaurantSection
            title='Баталгаажсан видеонууд'
            type='video'
            status='approved'
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialRestaurant;
