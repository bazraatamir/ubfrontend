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
import {useParams} from "react-router-dom";
import ContactForm from "../components/contact";

function RestaurantPage() {
  const {id} = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRestaurant() {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(`/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error("Failed to fetch restaurant:", error);
        setError("Рестораны мэдээлэл татахад алдаа гарлаа.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
       fetchRestaurant();
    }

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#0E1B21] text-white">Ачааллаж байна...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center bg-[#0E1B21] text-red-500">{error}</div>;
  }

  if (!restaurant) {
     return <div className="min-h-screen flex items-center justify-center bg-[#0E1B21] text-white">Ресторан олдсонгүй.</div>;
  }

  const restaurantId = parseInt(id, 10);

  return (
    <div
      className='w-full min-h-screen bg-[#0E1B21]'
      id='smooth-wrapper'>
      <div className='max-w-[1980px] mx-auto' id='smooth-content'>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        />

        <main className='w-full text-white'>
          <AboutSection
            text={restaurant.description}
            image={restaurant.hero?.[0]?.imageUrl}
          />

          <MenuSection restaurantId={restaurantId} />

          <MenuButton />
          <ImgSection image={restaurant.environment} />
          {restaurantId && <ReviewsSection restaurantId={restaurantId} />}
          <ContactForm id={id} />
          <LocationSection></LocationSection>
        </main>
      </div>
    </div>
  );
}

export default RestaurantPage;
