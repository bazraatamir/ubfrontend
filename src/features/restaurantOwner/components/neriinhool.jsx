import { useState } from "react";
import { FaPlus, FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Neriinhool() {
  const [foods, setFoods] = useState([
    { id: 1, name: "Будаатай хуурга", description: "Будаатай хуурга" },
    { id: 2, name: "Будаатай хуурга", description: "Будаатай хуурга" },
  ]);

  return (
    <div className="w-[550px] bg-[#0E131D] rounded-[10px] p-4">
      {/* Header */}
      <button className="flex items-center justify-between bg-[#1E2028] p-3 rounded-lg w-full mb-4">
        <span className="text-white font-medium">Нэрийн хоол нэмэх</span> 
        <div className="bg-[#8CC63F] rounded-full w-6 h-6 flex items-center justify-center">
          <FaPlus className="text-black text-xs" />
        </div>
      </button>

      {/* Food List */}
      <div className="space-y-4">
        {foods.map((food) => (
          <div
            key={food.id}
            className="flex items-center gap-3"
          >
            <div className="w-20 h-20 bg-[#1E2028] flex items-center justify-center rounded-lg">
              <div className="text-[#8CC63F] w-10 h-10">
                {/* Custom SVG that matches the provided image */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2" stroke="currentColor" fill="none" />
                  <polygon points="4,20 20,20 12,8" fill="currentColor" />
                  <circle cx="17" cy="7" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full bg-[#1E2028] p-2 px-4 rounded-lg text-white mb-1">
                {food.name}
              </div>
              <div className="w-full bg-[#1E2028] p-2 px-4 rounded-lg text-white">
                {food.description}
              </div>
            </div>
            <button className="bg-[#1E2028] p-2 rounded-lg self-start">
              <div className="text-[#8CC63F]">
                <FaEdit />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between mt-6">
        <button className="text-white text-xl">
          <FaChevronLeft />
        </button>
        <button className="text-white text-xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}