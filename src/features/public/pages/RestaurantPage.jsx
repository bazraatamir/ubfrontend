import React, {useEffect, useState} from "react";
import MenuSection from "../components/MenuSection";
import ImgSection from "../components/ImgSection";
import AboutSection from "../components/aboutSection";
import ReviewsSection from "../components/ReviewsSection";
import LocationSection from "../components/LocationSection";
import MenuButton from "../components/MenuButton";
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "./../../../shared/axios";
import {useParams} from "react-router";
import ContactForm from "../components/contact";

function RestaurantPage() {
  const {id} = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const response = await axiosInstance.get(`/restaurants/${id}`); // энд өөрийн API URL бичээрэй

        setRestaurant(response); // өгөгдлийг хадгална
      } catch (error) {
        console.error("Failed to fetch restaurant:", error);
      }
    }

    fetchRestaurant();

    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: false,
      offset: 50,
    });
  }, []);
  return (
    <>
      {restaurant ? (
        <div
          className='  w-full min-h-screen bg-[#0E1B21] '
          id='smooth-wrapper'>
          <div className='max-w-[1980px] mx-auto' id='smooth-content'>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
            />

            <main className='w-full text-white'>
              <AboutSection
                text={restaurant.data.description}
                image={restaurant.data.hero[0].imageUrl}
              />

              <MenuSection />

              <MenuButton />
              <ImgSection image={restaurant.data.environment} />
              <ReviewsSection></ReviewsSection>
              <ContactForm />
              <LocationSection></LocationSection>
            </main>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default RestaurantPage;
