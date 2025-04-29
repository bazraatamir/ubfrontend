import React, {useEffect, useState} from "react";
import MenuSection from "../../public/components/MenuSection";
import ImgSection from "../../public/components/ImgSection";
import AboutSection from "../../public/components/aboutSection";
import ReviewsSection from "../../public/components/ReviewsSection";
import LocationSection from "../../public/components/LocationSection";
import MenuButton from "../../public/components/MenuButton";
import AOS from "aos";
import "aos/dist/aos.css";
import axiosInstance from "../../../shared/axios";

import ContactForm from "../../public/components/contact";

function FaceRestaurantPage({restaurant}) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: false,
      offset: 50,
    });
  }, []);

  const handleHighlight = async () => {
    try {
      const response = await axiosInstance.post(`/highlights/`, {
        restaurantId: restaurant.data.id
      });
      
      if (response.status === 200, 201, 202 , 203, 204) {
        setIsHighlighted(true);
        alert("Ресторан амжилттай онцлох ресторан болголоо!");
      }
    } catch (error) {
      console.error("Error highlighting restaurant:", error);
      alert("Ресторан онцлох үед алдаа гарлаа!");
    }
  };

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
            <button 
              onClick={handleHighlight}
              disabled={isHighlighted}
              className={`bg-[#8CC63F] text-black px-8 py-2.5 self-end rounded-md text-sm font-medium hover:bg-opacity-90 transition-all my-[24px] max-w-[300px] ${isHighlighted ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {isHighlighted ? 'Онцлох ресторан болгосон' : 'Онцлох ресторан болгох'}
            </button>
            <main className='w-full text-white'>
              <AboutSection
                text={restaurant.data.description}
                image={restaurant.data.hero[0]?.imageUrl}
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

export default FaceRestaurantPage;
