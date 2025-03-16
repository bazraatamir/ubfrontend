import { useState } from "react";
import { FaPlus, FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Neriinhool = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: "Будаатай хуурга", description: "Будаатай хуурга" },
    { id: 2, name: "Будаатай хуурга", description: "Будаатай хуурга" },
  ]);
  return (
    <div className="bg-gray-900 p-4 rounded-lg text-white">
      {/* Header */}
      <button className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg w-full mb-4">
        <span className="font-bold">Нэрийн хоол нэмэх</span> <FaPlus />
      </button>

      {/* Food List */}
      <div className="bg-gray-800 p-4 rounded-lg space-y-4">
        {foods.map((food) => (
          <div
            key={food.id}
            className="flex items-center gap-2 bg-gray-700 p-3 rounded-lg"
          >
            <div className="w-16 h-16 bg-gray-600 flex items-center justify-center rounded-lg">
              <span className="text-green-400">🖼️</span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={food.name}
                className="w-full bg-gray-600 p-2 rounded-lg text-white outline-none"
                readOnly
              />
              <input
                type="text"
                value={food.description}
                className="w-full bg-gray-600 p-2 rounded-lg text-white outline-none mt-1"
                readOnly
              />
            </div>
            <button className="text-green-400">
              <FaEdit />
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between mt-4">
        <button className="text-white text-xl">
          <FaChevronLeft />
        </button>
        <button className="text-white text-xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Neriinhool;
