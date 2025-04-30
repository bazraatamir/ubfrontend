import React, {useEffect, useState} from "react";
import RestaurantCard from "../components/RestaurantCard";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import {FreeMode, Navigation} from "swiper/modules";
import axiosInstance from "../../../shared/axios";
import {Link} from "react-router";

const RestaurantSection = ({sectionTitle}) => {
  const [restaurants, setRestaurants] = useState();
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axiosInstance.get("/restaurants");

      setRestaurants([...response.data]);
    };
    fetchRestaurants();
  }, []);
  return (
    <div className='w-[100%] px-4 sm:px-8 md:px-[56px] py-8 sm:py-10 md:py-12 box-border' data-aos='fade-up'>
      <div
        className='flex items-center gap-[10px] '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <h2 className='text-xl sm:text-2xl md:text-[32px] font-[Futuris] mb-3 text-white uppercase tracking-wider ml-[5px] py-4 sm:py-6 md:py-[30px] font-[Mon_University]'>
          {sectionTitle}
        </h2>
        {isHovered && (
          <Link
            to={`/restaurants_filter?category=${sectionTitle}`} // Modify the route as needed
            className='flex items-center text-white font-medium hover:underline'>
            <span className='text-lime-500 text-sm sm:text-base md:text-[18px] items-center'>
              Бүгдийг үзэх
            </span>
            <span className='ml-2 text-lime-500 '>{">"}</span>
          </Link>
        )}
      </div>

      <div className='flex gap-6 justify-start relative group'>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          freeMode={true}
          grabCursor={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className='w-full'>
          {restaurants &&
            restaurants
              .filter((restaurant) =>
                restaurant.tags?.some((t) => t.tag?.name === sectionTitle)
              )
              .map((restaurant) => (
                <SwiperSlide key={restaurant.id} className='flex-1 w-[304px]'>
                  <RestaurantCard restaurant={restaurant} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RestaurantSection;
