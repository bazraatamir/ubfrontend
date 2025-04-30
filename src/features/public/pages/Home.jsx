import React, {useRef, useEffect, useState} from "react";
import RestaurantSection from "../components/RestaurantSection";
import Sidebar from "../components/Sidebar";
import {IoMenuOutline} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import {motion} from "framer-motion";
import {toast} from "react-toastify";
import {Link} from "react-router";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import axiosInstance from "../../../shared/axios";

const textVariants = {
  hidden: {x: "100%"}, // Start position (offscreen right)
  visible: {
    x: "-100%", // End position (offscreen left)
    transition: {
      type: "tween",
      ease: "linear",
      duration: 60, // Duration of one cycle (adjust to your preference)
      repeat: Infinity, // Repeat the animation infinitely
      repeatType: "loop", // Loop the animation back to the start
    },
  },
};

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });

    const fetchVideos = async () => {
      try {
        console.log("Fetching approved videos...");
        const response = await axiosInstance.get("/home/approved");
        console.log("Full API Response:", response);
        console.log("Response data:", response.data);
        console.log("Response data.data:", response.data.data);
        
        if (response.data) {
          // Check if data is in the expected format
          const videoData = Array.isArray(response.data) ? response.data : 
                          (response.data.data ? response.data.data : []);
          
          console.log("Processed videoData:", videoData);
          console.log("Number of videos:", videoData.length);
          
          if (videoData.length > 0) {
            console.log("First video object:", videoData[0]);
            console.log("First video URL:", videoData[0].videoUrl);
          }
          
          setVideos(videoData);
          
          if (videoData.length === 0) {
            console.log("No approved videos found in response");
          }
        } else {
          console.error("No data in response");
          toast.error("Баталгаажсан видео мэдээлэл олдсонгүй");
        }
      } catch (error) {
        console.error("Error fetching approved videos:", error);
        console.error("Error details:", error.response?.data || error.message);
        toast.error("Баталгаажсан видео ачаалахад алдаа гарлаа");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const colors = ["#8CBC01", "#FDDD2C"];

  return (
    <div className='min-h-screen bg-[#111315]' id='smooth-wrapper'>
      <div className='h-screen bg-[#111315] relative' id='smooth-wrapper'>
        <div className='relative h-full' data-aos='fade-up'>
          {/* Background image with overlay */}
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className='w-full h-[89vh]'>
            {loading ? (
              <SwiperSlide>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500"></div>
                </div>
              </SwiperSlide>
            ) : videos.length > 0 ? (
              videos.map((video) => {
                console.log("Rendering video:", video);
                return (
                  <SwiperSlide key={video.id}>
                    <video className='w-full h-full object-cover' autoPlay muted loop>
                      <source
                        src={`http://localhost:3000${video.videoUrl}`}
                        type='video/mp4'
                      />
                      Your browser does not support the video tag.
                    </video>
                  </SwiperSlide>
                );
              })
            ) : (
              <SwiperSlide>
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <p className="text-white text-xl">Видео оруулаагүй байна</p>
                </div>
              </SwiperSlide>
            )}
          </Swiper>

          {/* UBFOODZONE Line - Тасралтгүй хөдлөх текст */}
          <div className='absolute bottom-0 w-full bg-[#F5F7DC] overflow-hidden'>
            <motion.div
              className='flex p-4 sm:p-6 md:p-[25px]'
              variants={textVariants}
              animate='visible'>
              {Array(20) // 20 удаа давтаж UBFOODZONE текстийг гаргана
                .fill(0)
                .map((_, index) => (
                  <div className='flex gap-[10px] mx-4 sm:mx-6 md:mx-10' key={index}>
                    <p
                      className='text-2xl sm:text-3xl md:text-[40px] mt-10 font-[Godber-3lxoz] whitespace-nowrap'
                      style={{color: colors[index % 2]}}
                    >
                      UBFOODZONE
                    </p>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Restaurant Section */}
      <RestaurantSection sectionTitle={"ОНЦЛОХ РЕСТОРАН"} />
      <RestaurantSection sectionTitle={"Караоке"} />
      <RestaurantSection sectionTitle={"Хүүхдэд зориулсан арга хэмжээ"} />
      <RestaurantSection sectionTitle={"Болзоо"} />
      <RestaurantSection sectionTitle={"Төрсөн өдөр"} />
      <RestaurantSection sectionTitle={"Шинэ жил"} />
      <RestaurantSection sectionTitle={"Хурим"} />
      <RestaurantSection sectionTitle={"Буяны арга хэмжээ"} />
      <RestaurantSection sectionTitle={"Ургийн баяр"} />
      <RestaurantSection sectionTitle={"Хонхны баяр"} />
    </div>
  );
};

export default Home;