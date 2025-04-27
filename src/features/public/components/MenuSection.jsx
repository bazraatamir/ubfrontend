import React from "react";
import MenuItem from "./MenuItem";

function MenuSection() {
  const menuItems = [
    {
      id: 1,
      name: "Үхрийн махан стейк",
      description:
        "Үхрийн стейкний мах – 250-300 гр (Рибай, Т-Боон, Филе Миньон, Нью Йорк стрип зэрэг өөхлөг, зөөлөн хэсэг байвал тохиромжтой)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/34793b6e06935a346a24f52fd022e3a238f91f66",
      altText: "Steak dish",
      reversed: true,
    },
    {
      id: 2,
      name: "Тахианы цээж махан хуурга",
      description:
        "Үхрийн стейкний мах – 250-300 гр (Рибай, Т-Боон, Филе Миньон, Нью Йорк стрип зэрэг өөхлөг, зөөлөн хэсэг байвал тохиромжтой)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41",
      altText: "Chicken dish",
      reversed: false,
    },
    {
      id: 3,
      name: "Тахианы цээж махан хуурга",
      description:
        "Үхрийн стейкний мах – 250-300 гр (Рибай, Т-Боон, Филе Миньон, Нью Йорк стрип зэрэг өөхлөг, зөөлөн хэсэг байвал тохиромжтой)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41",
      altText: "Chicken dish",
      reversed: true,
    },
  ];

  return (
    <div className='container m-auto bg-[#0e1b21]'>
      <section className='px-4 sm:px-6 md:px-8 lg:px-12 bg-transparent w-full relative min-h-screen'>
        {/* Vertical lines */}
        <div className='bg-white w-[1px] sm:w-[1.5px] md:w-[2px] h-full absolute left-[3%] hidden md:block'></div>
        <div className='bg-white w-[1px] sm:w-[1.5px] md:w-[2px] h-full absolute left-[98%] hidden md:block'></div>

        {/* Header */}
        <header className='flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 lg:mb-20'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-stone-400 font-bold'>
            Анзаар...
          </h2>
        </header>

        {/* Menu Items */}
        <div
          className='flex flex-col gap-1 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto'
          data-aos='fade-up'>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <MenuItem
                name={item.name}
                description={item.description}
                image={item.image}
                altText={item.altText}
                reversed={item.reversed}
              />
              {index < menuItems.length - 1 && (
                <div
                  className='w-full bg-[#AD9066] h-[2px] sm:h-[2.5px] md:h-[3px] mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5'
                  aria-hidden='true'
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuSection;
