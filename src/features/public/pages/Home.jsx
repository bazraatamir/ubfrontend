import React, {useRef, useEffect} from "react";
import RestaurantSection from "../components/RestaurantSection";
import Sidebar from "../components/Sidebar";
import {IoMenuOutline} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import {motion} from "framer-motion";
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
  const restaurants = [
    {
      id: 1,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
    {
      id: 2,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
    {
      id: 3,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
    {
      id: 4,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
    {
      id: 5,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
    {
      id: 6,
      name: "Modern Nomads",
      image: "/images/restaurant1.png",
      location: "Баянзүрх дүүрэг",
    },
  ];
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
              className='flex '
              variants={textVariants}
              animate='visible'>
              {Array(20) // 20 удаа давтаж UBFOODZONE текстийг гаргана
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className='text-[36px] font-[Godber-3lxoz] mx-5'
                    style={{color: colors[index % 2]}} // 2 өнгийг ээлжлүүлэх
                  >
                    UBFOODZONE
                  </span>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* Restaurant Section */}
      <RestaurantSection restaurants={restaurants} />
    </div>
  );
};

export default Home;
