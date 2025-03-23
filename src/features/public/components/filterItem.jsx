// FilterItem.jsx
import React from "react";

const FilterItem = ({ name, checked, onChange }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-white truncate">
        {name}
      </h3>
      <label className="flex items-center">
        <input
          type="checkbox"
          name={name.toLowerCase()}
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </label>
    </div>
  );
};

export default FilterItem;