import React from "react";
import MenuItem from "../Item/MenuItem";


function MenuSection() {
  const menuItems = [
    {
      id: 1,
      name: "Үхрийн махан стейк",
      description:
        "Үхрийн стейкний мах – 250-300 гр (Рибай, Т-Боун, Филе Миньон, Нью Йорк стрип зэрэг өөхлөг, зөөлөн хэсэг байвал тохиромжтой)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/34793b6e06935a346a24f52fd022e3a238f91f66",
      altText: "Steak dish",
      reversed: false,
    },
    {
      id: 2,
      name: "Тахианы цээж махан хуурга",
      description:
        "Үхрийн стейкний мах – 250-300 гр (Рибай, Т-Боун, Филе Миньон, Нью Йорк стрип зэрэг өөхлөг, зөөлөн хэсэг байвал тохиромжтой)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41",
      altText: "Chicken dish",
      reversed: true,
    },
  ];

  return (
    <section className="px-12 py-0 mb-24 max-md:px-8 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <header className="flex gap-5 justify-center items-center mb-20">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/177aa74ef9c52664d186c9a10ddf8fc6f310b593"
          className="w-16 h-24 max-md:w-12 max-md:h-[72px] max-sm:w-9 max-sm:h-[54px]"
          alt="Decorative icon"
        />
        <h2 className="text-6xl text-center text-stone-400 max-md:text-5xl max-sm:text-4xl">
          Нэрийн хоолнууд
        </h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af65bb8c1bf7e4081957d70105d420cebc86591"
          className="w-16 h-24 max-md:w-12 max-md:h-[72px] max-sm:w-9 max-sm:h-[54px]"
          alt="Decorative icon"
        />
      </header>

      <div className="flex flex-col gap-1">
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
                className="mx-0 my-8 w-full bg-stone-400 h-[3px]"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
