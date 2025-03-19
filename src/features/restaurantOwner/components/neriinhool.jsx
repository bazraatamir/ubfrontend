import { useState } from "react";
import { FaPlus, FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import IUpload from "../../../shared/ImageUpload";

export default function Neriinhool() {
  const [foods, setFoods] = useState([
    { id: 1, name: "Будаатай хуурга", description: "Будаатай хуурга", image: null },
    { id: 2, name: "Будаатай хуурга", description: "Будаатай хуурга", image: null },
  ]);

  const [selectedFoodId, setSelectedFoodId] = useState(null);

  const handleImageUpload = (id, imageUrl) => {
    setFoods(foods.map(food => 
      food.id === id ? { ...food, image: imageUrl } : food
    ));
    setSelectedFoodId(null);
  };

  return (
    <div className="w-[550px] bg-[#0E131D] rounded-[10px] p-4">
      

      {/* Food List */}
      <div className="space-y-4">
        {foods.map((food) => (
          <div
            key={food.id}
            className="flex items-center gap-3"
          >
            <div 
              className="w-16 h-16 bg-[#1E2028] flex items-center justify-center rounded-lg cursor-pointer overflow-hidden"
              onClick={() => setSelectedFoodId(food.id)}
            >
              {selectedFoodId === food.id ? (
                <div className="w-full h-full">
                  <IUpload onImageUpload={(url) => handleImageUpload(food.id, url)} />
                </div>
              ) : food.image ? (
                <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
              ) : (
                <div className="text-[#8CC63F] w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2" stroke="currentColor" fill="none" />
                    <polygon points="4,20 20,20 12,8" fill="currentColor" />
                    <circle cx="17" cy="7" r="2" fill="currentColor" />
                  </svg>
                </div>
              )}
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
              <div className="text-[#8CC63F] text-sm">
                <FaEdit />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between mt-6">
        <button className="text-white text-base">
          <FaChevronLeft />
        </button>
        <button className="text-white text-base">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}