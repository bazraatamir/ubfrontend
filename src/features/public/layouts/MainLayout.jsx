import React, {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {IoMenuOutline} from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import {AnimatePresence} from "framer-motion";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Скролл хийх үед өнгө солих функц
  useEffect(() => {
    const handleScroll = () => {
      // Тодорхой цэгт хүрсэн эсэхийг шалгах (жишээ нь: 100px доош скролл хийсэн үед)
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        // Тодорхой цэгээс илүү скролл хийсэн бол өнгө өөрчлөх
        setIsScrolled(true);
      } else {
        // Скролл хийсэн байрлал босгоос доош бол анхны өнгө рүү буцах
        setIsScrolled(false);
      }
    };

    // Scroll event listener нэмэх
    window.addEventListener("scroll", handleScroll);

    // Компонент устахад цэвэрлэгээ хийх
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Өнгөний class: скролл хийсэн эсэхээс хамаарна
  const bgColorClass = isScrolled ? "bg-lime-500" : "bg-transparent";
  const heightClass = isScrolled ? "h-12" : "h-24";

  return (
    <div className={`relative  `}>
      {/* Fixed Menu Button */}
      <div
        className={`w-full fixed top-[0px] right-[0px] flex justify-center  z-50  transition-colors duration-700 ${bgColorClass}`}>
        <div className='container flex justify-between items-center'>
          <img
            src='https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/96e23556c599a4c63754cbf31aac9d5fe15ff941a73db90cd8b27e09e692f152?placeholderIfAbsent=true'
            alt=''
            className={`w-[130px] md:w-[200px] ${heightClass} object-contain transition-all duration-700`}
          />
          <button
            onClick={() => setIsSidebarOpen(true)}
            className='p-2 md:p-3 text-white hover:text-[#7CFF6B]'>
            <IoMenuOutline size={40} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <div
              className='fixed inset-0 bg-black/80 z-40'
              onClick={() => setIsSidebarOpen(false)}
            />
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
