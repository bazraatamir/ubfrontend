import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ items }) => {
  return (
    <div className="" role="list">
      {items.map((item) => (
        <FoodItem key={item.id} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default FoodList;
