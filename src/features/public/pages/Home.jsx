import React, {useRef, useEffect} from "react";
import RestaurantSection from "../components/RestaurantSection";
import Sidebar from "../components/Sidebar";
import {IoMenuOutline} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

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

  return (
    <div className='min-h-screen bg-[#111315]' id='smooth-wrapper'>
      {/* <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-[57px] right-[58px] z-50 text-white hover:text-[#7CFF6B] transition-colors"
      >
        <IoMenuOutline size={40} />
      </button> */}

      {/* {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />} */}

      {/* Hero Section */}
      <div className='relative h-screen' data-aos='fade-up'>
        {/* Background image with overlay */}
        <div className='absolute inset-0'>
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

        {/* UBFOODZONE line */}
        <div className='absolute bottom-0 left-0 right-0 bg-[#F5F7DC]'>
          <div className='flex'>
            <div className='flex-1 text-[#8CBC01] text-[30px] font-[Godber-3lxoz] py-5 text-center tracking-wider'>
              UBFOODZONE
            </div>
            <div className='flex-1 text-[#FDDD2C] text-[30px] font-[Godber-3lxoz] py-5 text-center tracking-wider'>
              UBFOODZONE
            </div>
            <div className='flex-1 text-[#8CBC01] text-[30px] font-[Godber-3lxoz] py-5 text-center tracking-wider'>
              UBFOODZONE
            </div>
            <div className='flex-1 text-[#FDDD2C] text-[30px] font-[Godber-3lxoz] py-5 text-center tracking-wider'>
              UBFOODZONE
            </div>
            <div className='flex-1 text-[#8CBC01] text-[30px] font-[Godber-3lxoz] py-5 text-center tracking-wider'>
              UBFOODZONE
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Section */}
      <RestaurantSection restaurants={restaurants} />
    </div>
  );
};

export default Home;
