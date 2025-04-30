import React, {useRef, useEffect} from "react";
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Animation easing
      once: false, // Ensures animation runs only once
      offset: 50, // Offset (in px) before animation starts
    });
  }, []);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const swiperRef = useRef(null);

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
            <SwiperSlide>
              <video className='w-full h-full object-cover' autoPlay muted loop>
                <source
                  src='https://videos.pexels.com/video-files/2431225/2431225-uhd_2560_1440_24fps.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video className='w-full h-full object-cover' autoPlay muted loop>
                <source
                  src='https://videos.pexels.com/video-files/3768941/3768941-hd_1920_1080_25fps.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <video className='w-full h-full object-cover' autoPlay muted loop>
                <source
                  src='https://videos.pexels.com/video-files/1111420/1111420-hd_1920_1080_30fps.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
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