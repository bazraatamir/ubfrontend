import React from "react";

const Search = () => {
  return (
    <div className="w-full h-11 bg-[#2E3033] rounded-[10px] shadow-md mb-4 md:mb-6">
      <input
        type="text"
        placeholder="Хайх ..."
        className="w-full h-full bg-transparent text-white px-4 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default Search;
