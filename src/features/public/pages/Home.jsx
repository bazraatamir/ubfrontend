import React, {useRef, useEffect} from "react";
import RestaurantSection from "../components/RestaurantSection";
import Sidebar from "../components/Sidebar";
import {IoMenuOutline} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import {motion} from "framer-motion";
import {toast} from "react-toastify";
import {Link} from "react-router";
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
          <div className='absolute inset-0 h-full'>
            <img
              src='/images/restaurant1.png'
              alt='Restaurant background'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/60' />
          </div>

          <div className='relative z-10 flex items-center justify-center h-full'>
            <h1 className='text-white text-5xl md:text-8xl font-[Mon_University] text-center px-4 tracking-wide leading-relaxed'>
              Хамгийн амттай шилдэг
              <br />
              хоол, төгс уур амьсгалтай
              <br />
              бүгд нэг дор
            </h1>
          </div>

          {/* UBFOODZONE Line - Тасралтгүй хөдлөх текст */}
          <div className='absolute bottom-0 w-full bg-[#F5F7DC] overflow-hidden'>
            <motion.div
              className='flex p-[25px]'
              variants={textVariants}
              animate='visible'>
              {Array(20) // 20 удаа давтаж UBFOODZONE текстийг гаргана
                .fill(0)
                .map((_, index) => (
                  <div className='flex gap-[10px]  mx-10'>
                    <p
                      key={index}
                      className='text-[40px] font-[Godber-3lxoz]   '
                      style={{color: colors[index % 2]}} // 2 өнгийг ээлжлүүлэх
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
