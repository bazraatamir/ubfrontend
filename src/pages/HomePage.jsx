"use client";
import React from "react";
import HeroSection from "../modules/Home/components/Section/HeroSection";
import MenuSection from "../modules/Home/components/Section/MenuSection";

function HomePage() {
  return (
    <>
      <div className="w-1200px">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <main className="mx-auto my-0 w-full text-white bg-black min-w-[1486px]">
          <MenuSection />
        </main>
      </div>
    </>
  );
}

export default HomePage;
