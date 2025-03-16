import React from "react";
import MenuSection from "../modules/Home/components/Section/MenuSection";
import "../App.css";
import GirdImg from "../modules/Home/components/Section/ImgSection";
import ReviewsSection from "../modules/Home/components/Section/ReviewsSection";
import LocationSection from "../modules/Home/components/Section/LocationSection";
import AboutSection from "../modules/Home/components/Section/aboutSection";
import ImgSection from "../modules/Home/components/Section/ImgSection";

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
          <ImgSection></ImgSection>
          <ReviewsSection></ReviewsSection>
          <LocationSection></LocationSection>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
