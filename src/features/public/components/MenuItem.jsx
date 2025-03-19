import React from "react";

function MenuItem({ name, description, image, altText, reversed }) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-25 items-center ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 ">
        <img
          src={image}
          alt={altText}
          className="w-full h-[43vh] object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-white">
        <h3 className="text-5xl font-bold">{name}</h3>
        <p className="mt-10 text-xl text-[#AD9066]">{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;
