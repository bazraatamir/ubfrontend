import {FaTrash, FaEdit} from "react-icons/fa";
import axiosInstance from "../../../shared/axios";

export default function RestaurantCard({restaurant}) {
  const handleApprove = async () => {
    try {
      await axiosInstance.patch(`/highlights/${restaurant.id}/approve`);
      // You might want to add a success message or refresh the data here
      alert("Амжилттай баталгаажууллаа!");
    } catch (error) {
      console.error("Error approving highlight:", error);
      alert("Баталгаажуулахад алдаа гарлаа!");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Та энэ рестораныг устгахдаа итгэлтэй байна уу?")) {
      try {
        await axiosInstance.delete(`/highlights/${restaurant.id}`);
        alert("Амжилттай устгалаа!");
        // You might want to add a refresh function here
      } catch (error) {
        console.error("Error deleting highlight:", error);
        alert("Устгахад алдаа гарлаа!");
      }
    }
  };

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
        <button 
          onClick={handleApprove}
          className='bg-lime-500 text-black font-semibold text-sm px-3 py-1 rounded'>
          {restaurant.type === "special" ? "Тусгай" : "Онцлох"}
        </button>
        <button className='bg-[#FF6B00] text-white p-2 rounded'>
          <FaEdit size={14} />
        </button>
        <button 
          onClick={handleDelete}
          className='bg-[#FF6B00] text-white p-2 rounded'>
          <FaTrash size={14} />
        </button>
      </div>
    </div>
  );
}