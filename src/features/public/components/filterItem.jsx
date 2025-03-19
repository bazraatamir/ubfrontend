// FilterItem.jsx
import React from "react";

const FilterItem = ({ name, checked, onChange }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="text-[22px] font-bold text-white">{name}</h3>
      <label className="flex items-center">
        <input
          type="checkbox"
          name={name.toLowerCase()}
          checked={checked}
          onChange={onChange}
          className="h-5 w-5 text-blue-600 border-gray-300 rounded"
        />
      </label>
    </div>
  );
};

export default FilterItem;
