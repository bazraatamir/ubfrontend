import React from "react";
import MenuItem from "../Item/MenuItem";
import GirdImg from "./ImgSection";

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
      reversed: false,
    },
    {
      id: 2,
      name: "Тахианы цээж махан хуурга",
      description:
        "Үхрийн стейкний мах – 250-300 гр (Рибай, Т-Боон, Филе Миньон, Нью Йорк стрип зэрэг өөхлөг, зөөлөн хэсэг байвал тохиромжтой)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41",
      altText: "Chicken dish",
      reversed: true,
    },
    {
      id: 3,
      name: "Тахианы цээж махан хуурга",
      description:
        "Үхрийн стейкний мах – 250-300 гр (Рибай, Т-Боон, Филе Миньон, Нью Йорк стрип зэрэг өөхлөг, зөөлөн хэсэг байвал тохиромжтой)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41",
      altText: "Chicken dish",
      reversed: false,
    },
  ];

  // Optional images array for grid (uncomment and adjust if needed)
  const images = [
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxyfVaysd9IWKJDXH4hnU4PK8C9eWXhdBtw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGawC4ToKE3wCtMfBzuBq4RI-x9m-Ir-Iww&s",
  ];

  return (
    <div className="w-full bg-[#0e1b21] ">
      <section className="px-4 sm:px-8 md:px-12 bg-transparent w-full relative min-h-screen">
        <div className="bg-white w-[1px] h-full absolute left-[170px] hidden md:block"></div>
        <div className="bg-white w-[1px] h-full absolute left-[1720px] hidden md:block"></div>
        <header className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center mb-10 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-center text-stone-400 font-bold">
            Анзаар
          </h2>
        </header>
        <div className="flex flex-col gap-1 w-full max-w-[1179px] mx-auto">
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
                  className="w-full bg-stone-400 h-[3px] my-4 md:my-8"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Centered Menu Button */}
        <div className="flex justify-center mt-7 relative top-[-20px]">
          <div className="h-[109px] w-[431px] flex items-center justify-center">
            <div className="relative h-[77px] w-[400px] border-2 border-[#ad9066] flex items-center justify-center">
              <svg
                className="absolute left-[-20px] rotate-180 top-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="38"
                fill="none"
                viewBox="0 0 43 38"
              >
                <path stroke="#AD9066" d="M0 1h42.5v36.5" />
              </svg>
              <svg
                className="absolute right-[-20px] top-[-20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="38"
                fill="none"
                viewBox="0 0 43 38"
              >
                <path stroke="#AD9066" d="M0 1h42.5v36.5" />
              </svg>
              <p className="text-[32px] font-['Mon_University'] text-[#f5f7dc] text-center">
                Меню харах
              </p>
            </div>
          </div>
        </div>
        {/* Uncomment and adjust the grid section if needed */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                src={src}
                className="w-full h-auto object-cover rounded-lg"
                alt={`Menu image ${index + 1}`}
              />
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
}

export default MenuSection;
