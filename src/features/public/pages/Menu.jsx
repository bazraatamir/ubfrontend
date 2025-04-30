import React, {useState, useRef, useEffect} from "react";
import axiosInstance from "../../../shared/axios";

export default function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const scrollerRef = useRef(null);
  const containerRef = useRef(null);
  const textWrapRef = useRef(null);
  const panelWrapRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const [textPanels, setTextPanels] = useState([]);
  const [imagePanels, setImagePanels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [menusRes, menuItemsRes] = await Promise.all([
          axiosInstance.get("/menus"),
          axiosInstance.get("/menuitems"),
        ]);

        const menus = menusRes.data;
        const menuItems = menuItemsRes.data;
        const formattedMenuData = menus.map((menu) => {
          const items = menuItems
            .filter((item) => item.menuId === menu.id)
            .map((item) => ({
              id: item.id,
              title: item.name,
              image: item.imageUrl || "/images/placeholder.jpg",
              description: item.description,
              textColor: menu.name === "Хоол" ? "text-white" :
                         menu.name === "Уух зүйлс" ? "text-white" :
                         menu.name === "Дессерт" ? "text-white" :
                         "text-white",
            }));

          return {
            category: menu.name,
            items: items,
          };
        });

        setMenuData(formattedMenuData);
      } catch (err) {
        console.error("Failed to fetch menu data:", err);
        setError("Мэдээллийг татахад алдаа гарлаа. Та дараа дахин оролдоно уу."); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []); // Empty dependency array means run once on mount

  // Компонент ачаалагдах үед refs тохируулах
  useEffect(() => {
    // Ensure menuData is loaded and refs are available
    if (!loading && menuData.length > 0 && textWrapRef.current && panelWrapRef.current) {
      // Update panels based on active category's items
      const currentItems = menuData[activeCategoryIndex]?.items || [];

      setTextPanels(
        Array.from(textWrapRef.current.querySelectorAll(".panel-text"))
      );
      setImagePanels(
        Array.from(panelWrapRef.current.querySelectorAll(".panel"))
      );

       // Re-apply z-index when panels change
       const currentTextPanels = Array.from(textWrapRef.current.querySelectorAll(".panel-text"));
       currentTextPanels.forEach((panel, i) => {
         panel.style.zIndex = currentTextPanels.length - i;
       });

       const currentImagePanels = Array.from(panelWrapRef.current.querySelectorAll(".panel"));
       currentImagePanels.forEach((panel, i) => {
         panel.style.zIndex = currentImagePanels.length - i;
       });
    }
     // Add dependencies: loading, menuData, activeCategoryIndex
  }, [loading, menuData, activeCategoryIndex, textPanels.length, imagePanels.length]); // Rerun when data or category changes

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
  }, [activeCategoryIndex]); // Depend on activeCategoryIndex

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
    if (index !== activeCategoryIndex) {
      setActiveCategoryIndex(index);

      // Скролл байрлалыг эхлэлд нь авчрах
      if (scrollerRef.current) {
        scrollerRef.current.scrollTop = 0;
      }
    }
  };

  // Show loading indicator
  if (loading) {
    return <div className="h-screen flex items-center justify-center bg-[#0e1b21] text-white">Ачааллаж байна...</div>;
  }

  // Show error message
  if (error) {
    return <div className="h-screen flex items-center justify-center bg-[#0e1b21] text-white text-red-500">{error}</div>;
  }

  // Ensure menuData has loaded and has content for the active category
  if (!menuData || menuData.length === 0 || !menuData[activeCategoryIndex]) {
     return <div className="h-screen flex items-center justify-center bg-[#0e1b21] text-white">Цэс олдсонгүй.</div>;
  }

  return (
    <div className='h-screen flex bg-[#0e1b21] text-white font-serif overflow-hidden'>
      {/* Side Menu - Updated to use menuData length and index */}
      <div className='flex flex-col'>
        <div className='flex flex-col h-screen fixed justify-center gap-[10px] left-0 z-50'>
          {menuData.map((menu, index) => (
            <button
              key={menu.category}
              onClick={() => handleCategoryClick(index)}
              className={`${
                activeCategoryIndex === index ? "bg-lime-500" : "bg-[#1d2d34]"
              } text-white py-2 px-2 rounded-r-xl h-[170px] transition-all duration-300 hover:bg-lime-400 active:scale-95`}
              style={{writingMode: "vertical-rl", textOrientation: "mixed"}}>
              {menu.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content with Scroll */}
      <div ref={containerRef} className='w-full h-screen'>
        <div ref={scrollerRef} className='h-screen w-full overflow-y-auto'>
          {/* Render content only if items exist for the active category */}
          {menuData[activeCategoryIndex].items && menuData[activeCategoryIndex].items.length > 0 ? (
            <>
              <div className='black-section flex '>
                {/* Текст панелуудын хэсэг */}
                <div ref={textWrapRef} className='text-wrap flex-2'>
                  {menuData[activeCategoryIndex].items.map((item, index) => (
                    <div
                      key={`text-${item.id}-${index}`} // Use index for unique key if ids repeat
                      className={`panel-text text-[#fff] ${item.textColor || 'text-white'}`} // Apply textColor
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
                  {menuData[activeCategoryIndex].items.map((item, index) => (
                    <div
                      key={`panel-${item.id}-${index}`} // Use index for unique key if ids repeat
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
              {menuData[activeCategoryIndex].items.map((item, index) => (
                <div
                  key={`section-${item.id}-${index}`} // Use index for unique key if ids repeat
                  className='scroll-section h-screen'
                />
              ))}
            </>
          ) : (
             <div className="h-screen flex items-center justify-center text-gray-400">Энэ ангилалд хоол/ундаа олдсонгүй.</div>
          )}
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
