"use client";
import React from "react";

const MainContent = () => {
  return (
    <div className="ml-5 w-[79%] max-md:ml-0 max-md:w-full">
      <section className="flex flex-col items-start mt-7 text-xl font-bold text-white max-md:mt-10 max-md:max-w-full">
        <h1>Салбарын мэдээлэл засах</h1>

        <p className="self-stretch mt-2.5 text-sm max-md:max-w-full">
          Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах
          боломжтой.Хэрвээ та салбар нэмэх бол <strong>салбар нэмэх </strong>
          товчин дээр дарна уу.
        </p>

        <button className="flex flex-col justify-center px-7 py-4 mt-16 max-w-full bg-gray-800 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[232px] max-md:px-5 max-md:mt-10">
          <div className="flex gap-4 items-center">
            <span className="self-stretch my-auto">Салбар нэмэх</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/18f22851fead0be8d9a3106a74e136d9abb706232b6f558a1a9d1f843fe8f1ca?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
              alt="Add icon"
            />
          </div>
        </button>
      </section>
    </div>
  );
};

export default MainContent;
