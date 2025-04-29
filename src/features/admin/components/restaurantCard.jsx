import {FaTrash, FaEdit} from "react-icons/fa";

export default function RestaurantCard({restaurant}) {
  return (
    <div className='bg-[#1F2A35] rounded px-4 py-3 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <img
          src={restaurant.image}
          alt='Restaurant'
          className='w-10 h-10 rounded-full'
        />
        <div>
          <div className='font-semibold'>{restaurant.name}</div>
          <div className='text-xs opacity-60'>restaurant</div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <span className='bg-lime-500 text-black font-semibold text-sm px-3 py-1 rounded'>
          {restaurant.type === "special" ? "Тусгай" : "Онцлох"}
        </span>
        <button className='bg-[#FF6B00] text-white p-2 rounded'>
          <FaEdit size={14} />
        </button>
        <button className='bg-[#FF6B00] text-white p-2 rounded'>
          <FaTrash size={14} />
        </button>
      </div>
    </div>
  );
}