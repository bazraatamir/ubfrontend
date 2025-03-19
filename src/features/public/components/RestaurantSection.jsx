import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";

const RestaurantSection = ({ restaurants }) => {
  return (
    <div className="w-[100%] px-[56px] py-4 box-border">
      <h2 className="text-[20px] font-[Futuris] mb-3 text-white uppercase tracking-wider ml-[5px]">
        ИТАЛИ РЕСТОРАН
      </h2>
      <div className="flex gap-6 justify-start relative group">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          freeMode={true}
          grabCursor={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="w-full"
        >
          {restaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id} className="flex-1 w-[304px]">
              <RestaurantCard restaurant={restaurant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RestaurantSection;