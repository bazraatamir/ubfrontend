import React, {useState, useRef, useEffect} from "react";

const menuData = [
  {
    category: "Хоол",
    items: [
      {
        id: "tsuyvan",
        title: "Цуйван",
        image:
          "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Амтат гоймонгийн шөлтэй хоол.",
        textColor: "text-blue-600",
      },
      {
        id: "banshtai",
        title: "Банштай шөл",
        image:
          "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Махтай банш орсон халуун шөл.",
        textColor: "text-red-600",
      },
      {
        id: "huushuur",
        title: "Хуушуур",
        image: "/images/food3.jpg",
        description: "Шарсан махтай гурилан хоол.",
        textColor: "text-orange-500",
      },
      {
        id: "banshtai",
        title: "Банштай шөл",
        image:
          "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Махтай банш орсон халуун шөл.",
        textColor: "text-red-600",
      },
    ],
  },
  {
    category: "Уух зүйлс",
    items: [
      {
        id: "smoothie",
        title: "Ногоон смүүти",
        image: "/images/drink1.jpg",
        description: "Шинэхэн ногооны амтат смүүти.",
        textColor: "text-green-500",
      },
      {
        id: "coffee",
        title: "Амтат кофе",
        image: "/images/drink2.jpg",
        description: "Сэргээх амтат кофены ундаа.",
        textColor: "text-yellow-700",
      },
    ],
  },
  {
    category: "Дессерт",
    items: [
      {
        id: "cake",
        title: "Шоколадтай бялуу",
        image: "/images/dessert1.jpg",
        description: "Чихэрлэг шоколадтай амтат бялуу.",
        textColor: "text-purple-600",
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const scrollerRef = useRef(null);
  const containerRef = useRef(null);
  const textWrapRef = useRef(null);
  const panelWrapRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Текст панелууд болон зургийн панелууд
  const [textPanels, setTextPanels] = useState([]);
  const [imagePanels, setImagePanels] = useState([]);

  // Компонент ачаалагдах үед refs тохируулах
  useEffect(() => {
    // Текст панелуудыг олж авах
    if (textWrapRef.current) {
      setTextPanels(
        Array.from(textWrapRef.current.querySelectorAll(".panel-text"))
      );
    }

    // Зургийн панелуудыг олж авах
    if (panelWrapRef.current) {
      setImagePanels(
        Array.from(panelWrapRef.current.querySelectorAll(".panel"))
      );
    }

    // Z-индекс тохируулах
    if (textPanels.length > 0) {
      textPanels.forEach((panel, i) => {
        panel.style.zIndex = textPanels.length - i;
      });
    }

    if (imagePanels.length > 0) {
      imagePanels.forEach((panel, i) => {
        panel.style.zIndex = imagePanels.length - i;
      });
    }
  }, [activeCategory, textPanels.length, imagePanels.length]);

  // Скролл мөшгөгч
  useEffect(() => {
    const handleScroll = () => {
      if (scrollerRef.current) {
        setScrollY(scrollerRef.current.scrollTop);
      }
    };

    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.addEventListener("scroll", handleScroll);

      // Эхлэлд авчрах
      scroller.scrollTop = 0;
    }

    return () => {
      if (scroller) {
        scroller.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeCategory]);

  // Текст панелууд болон зургийн панелуудын анимэйшн
  useEffect(() => {
    if (
      scrollerRef.current &&
      textPanels.length > 0 &&
      imagePanels.length > 0
    ) {
      const windowHeight = window.innerHeight;

      // Текст панелуудын анимэйшн
      textPanels.forEach((panel, i) => {
        // Анимэйшн эхлэх скролл позиц
        const startPosition = windowHeight * i;
        // Анимэйшн дуусах скролл позиц
        const endPosition = startPosition + windowHeight;

        if (scrollY >= startPosition && scrollY <= endPosition) {
          // Скролл прогресс (0-1 хооронд)
          const progress = (scrollY - startPosition) / windowHeight;

          // Текст харагдах, дараа нь арилах анимэйшн
          if (progress < 0.33) {
            // 0-0.33 хооронд opacity нэмэгдэх, дээшээ хөдлөх
            const opacity = progress / 0.33;
            const yPos = 50 - (progress / 0.33) * 50;
            panel.style.opacity = opacity;
            panel.style.transform = `translateY(${yPos}%)`;
          } else if (progress < 0.66) {
            // 0.33-0.66 хооронд бүрэн харагдах
            panel.style.opacity = 1;
            panel.style.transform = `translateY(0%)`;
          } else {
            // 0.66-1.0 хооронд opacity буурах, доошоо хөдлөх
            const opacity = 1 - (progress - 0.66) / 0.34;
            const yPos = ((progress - 0.66) / 0.34) * -50;
            panel.style.opacity = opacity;
            panel.style.transform = `translateY(${yPos}%)`;
          }
        } else {
          // Харагдах хэсгээс гадуур бол харагдахгүй
          panel.style.opacity = 0;
        }
      });

      // Зургийн панелуудын анимэйшн
      imagePanels.forEach((panel, i) => {
        // Скролл позиц панелийн хязгаарт хүрсэн эсэх
        const triggerPosition = windowHeight * (i + 0.5);

        if (scrollY > triggerPosition) {
          // Скролл хэтэрвэл панелийн өндрийг 0 болгох
          panel.style.height = "0";
        } else {
          // Эсрэг тохиолдолд бүтэн өндөртэй
          panel.style.height = "100%";
        }
      });
    }
  }, [scrollY, textPanels, imagePanels]);

  const handleCategoryClick = (index) => {
    if (index !== activeCategory) {
      setActiveCategory(index);

      // Скролл байрлалыг эхлэлд нь авчрах
      if (scrollerRef.current) {
        scrollerRef.current.scrollTop = 0;
      }
    }
  };

  return (
    <div className='h-screen flex bg-[#0e1b21] text-white font-serif overflow-hidden'>
      {/* Side Menu */}
      <div className='flex flex-col'>
        <div className='flex flex-col h-screen fixed justify-center gap-[10px] left-0 z-50'>
          <button
            onClick={() => handleCategoryClick(0)}
            className={`${
              activeCategory === 0 ? "bg-lime-500" : "bg-[#1d2d34]"
            } text-white py-2 px-2 rounded-r-xl h-[170px] transition-all duration-300 hover:bg-lime-400 active:scale-95`}
            style={{writingMode: "vertical-rl", textOrientation: "mixed"}}>
            Хоол
          </button>
          <button
            onClick={() => handleCategoryClick(1)}
            className={`${
              activeCategory === 1 ? "bg-lime-500" : "bg-[#1d2d34]"
            } px-2 rounded-r-xl h-[170px] transition-all duration-300 hover:bg-lime-400 active:scale-95`}
            style={{writingMode: "vertical-rl", textOrientation: "mixed"}}>
            Уух зүйлс
          </button>
          <button
            onClick={() => handleCategoryClick(2)}
            className={`${
              activeCategory === 2 ? "bg-lime-500" : "bg-[#1d2d34]"
            } px-2 rounded-r-xl h-[170px] transition-all duration-300 hover:bg-lime-400 active:scale-95`}
            style={{writingMode: "vertical-rl", textOrientation: "mixed"}}>
            Дессерт
          </button>
        </div>
      </div>

      {/* Main Content with Scroll */}
      <div ref={containerRef} className='w-full h-screen'>
        <div ref={scrollerRef} className='h-screen w-full overflow-y-auto'>
          <div className='black-section flex '>
            {/* Текст панелуудын хэсэг */}
            <div ref={textWrapRef} className='text-wrap flex-2'>
              {menuData[activeCategory].items.map((item, index) => (
                <div
                  key={`text-${item.id}`}
                  className={`panel-text text-[#fff]`}
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    width: "100%",
                    height: "100%",
                    fontSize: "40px",
                    textTransform: "uppercase",
                    fontWeight: "900",
                    textAlign: "center",
                    transform:
                      index === 0 ? "translateY(0)" : "translateY(100%)",
                    opacity: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    justifyContent: "center",
                    transition:
                      "opacity 0.6s ease-out, transform 0.6s ease-out",
                  }}>
                  {item.title}
                </div>
              ))}
            </div>

            {/* Зураг панелууд */}
            <div ref={panelWrapRef} className='p-wrap flex-1 mx-4  h-screen'>
              {menuData[activeCategory].items.map((item, index) => (
                <div
                  key={`panel-${item.id}`}
                  className='panel'
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    width: "100%",
                    height: "100%",
                    transition: "height 0.5s ease-out",
                    overflow: "hidden",
                  }}>
                  <div className='w-full h-full flex flex-col items-center  relative justify-center  bg-gray-900'>
                    <div className='w-full h-screen h-full mb-4'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='w-full h-full object-cover rounded-lg '
                      />
                    </div>
                    <div className=' bg-gray-800 p-4 rounded-lg absolute bottom-[50px] left-[40px] right-[40px] '>
                      <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                      <p className='text-sm text-gray-300'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Скролл хийх хоосон хэсгүүд */}
          {menuData[activeCategory].items.map((item, index) => (
            <div
              key={`section-${item.id}`}
              className='scroll-section h-screen'
            />
          ))}
        </div>
      </div>

      {/* CSS стилийн нэмэлт */}
      <style jsx>{`
        .black-section {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100vh;
          position: sticky;
          top: 0;
        }

        .text-wrap,
        .p-wrap {
          position: relative;
          overflow: hidden;
          width: 450px;
          height: 100vh;
        }

        /* Скролл хийх хоосон хэсгүүд */
        .scroll-section {
          position: relative;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
