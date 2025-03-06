"use client";
import React, { useState } from "react";
import AddFoodHeader from "./AddFoodHeader";
import FoodList from "./FoodList";
import SaveButton from "./SaveButton";

const InputDesign = () => {
  const [foodItems] = useState([
    {
      id: 1,
      name: "Будаатай хуурга",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ea110805fbcf68cd3681bcf413f9659eaa4c656e3a3e327ed201164f3a248ef?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    },
    {
      id: 2,
      name: "Шарсан тахиа",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb6dd3de6f68745336978e455c903eb5bafddf8fe0e54f6779fcd41d073e4cf1?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    },
    {
      id: 3,
      name: "Бууз",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/313679dc466ae23b01495b48d733ba5fc586d9b05f3c92be72181307ac78b6f3?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    },
    {
      id: 4,
      name: "Цуйван",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/238aefebe203596ae6d493c6e434b4f31ea82f06e0fbe57a228d308e0263841d?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628",
    },
  ]);

  const handleSave = () => {
    console.log("Saving food items...");
  };

  return (
    <main className="rounded-none w-[610px]">
      <AddFoodHeader />
      <section className="flex flex-col px-6 pt-8 mt-6 w-full rounded-xl bg-zinc-900">
        <FoodList items={foodItems} />
        <SaveButton onClick={handleSave} />
      </section>
    </main>
  );
};

export default InputDesign;
