import React from "react";
import MenuSection from "../components/MenuSection";
import ImgSection from "../components/ImgSection";
import AboutSection from "../components/aboutSection";
import ReviewsSection from "../components/ReviewsSection";
import LocationSection from "../components/LocationSection";
import MenuButton from "../components/MenuButton";

function RestaurantPage() {
  return (
    <div className="w-full min-h-screen bg-[#0E1B21]">
      <div className="max-w-[1980px] mx-auto">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />

        <main className="w-full text-white">
          <AboutSection></AboutSection>
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
