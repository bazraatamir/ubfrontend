import React from "react";
import MenuSection from "../Section/MenuSection";
import ImgSection from "../Section/ImgSection";
import AboutSection from "../Section/aboutSection";
import ReviewsSection from "../Section/ReviewsSection";
import LocationSection from "../Section/LocationSection";
import MenuButton from "../button/MenuButton";

function HomePage() {
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

export default HomePage;
