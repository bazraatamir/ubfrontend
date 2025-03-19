import React, {useEffect, useState} from "react";
import MenuSection from "../components/MenuSection";
import ImgSection from "../components/ImgSection";
import AboutSection from "../components/aboutSection";
import ReviewsSection from "../components/ReviewsSection";
import LocationSection from "../components/LocationSection";
import MenuButton from "../components/MenuButton";
import AOS from "aos";
import "aos/dist/aos.css";

function RestaurantPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: false, // Ensures animation runs only once
      offset: 50, // Offset (in px) before animation starts
    });
  }, []);
  return (
    <div className='  w-full min-h-screen bg-[#0E1B21] ' id='smooth-wrapper'>
      <div className='max-w-[1980px] mx-auto' id='smooth-content'>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        />

        <main className='w-full text-white'>
          <AboutSection />

          <MenuSection />

          <MenuButton></MenuButton>
          <ImgSection></ImgSection>
          <ReviewsSection></ReviewsSection>
          <LocationSection></LocationSection>
        </main>
      </div>
    </div>
  );
}

export default RestaurantPage;
