import {useState} from "react";
import {FaPlus, FaEdit, FaChevronLeft, FaChevronRight, FaSave} from "react-icons/fa";
import IUpload from "../../../shared/ImageUpload";
import axiosInstance from "../../../shared/axios";

export default function Neriinhool() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      title: "",
      notice: "",
      image: null,
    },
  ]);

  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleImageUpload = (id, imageUrl) => {
    setFoods(
      foods.map((food) => (food.id === id ? {...food, image: imageUrl} : food))
    );
    setSelectedFoodId(null);
  };

  const handleInputChange = (id, field, value) => {
    setFoods(
      foods.map((food) => 
        food.id === id ? {...food, [field]: value} : food
      )
    );
  };

  const handleAddNew = () => {
    const newId = foods.length > 0 ? Math.max(...foods.map(f => f.id)) + 1 : 1;
    setFoods([
      ...foods,
      {
        id: newId,
        title: "",
        notice: "",
        image: null,
      }
    ]);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Create FormData for each notice
      const formData = new FormData();
      
      // Add each notice's data
      foods.forEach((food, index) => {
        formData.append(`notices[${index}][title]`, food.title);
        formData.append(`notices[${index}][notice]`, food.notice);
        if (food.image) {
          // Convert base64 to blob if needed
          if (food.image.startsWith('data:')) {
            const base64Data = food.image.split(',')[1];
            const byteCharacters = atob(base64Data);
            const byteArrays = [];
            for (let i = 0; i < byteCharacters.length; i++) {
              byteArrays.push(byteCharacters.charCodeAt(i));
            }
            const byteArray = new Uint8Array(byteArrays);
            const blob = new Blob([byteArray], { type: 'image/jpeg' });
            formData.append(`notices[${index}][image]`, blob, `image_${index}.jpg`);
          } else {
            // If it's already a file object
            formData.append(`notices[${index}][image]`, food.image);
          }
        }
      });

      const response = await axiosInstance.post("/api/notices", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log("Saved successfully:", response.data);
      alert("Мэдээллийг амжилттай хадгаллаа!");
    } catch (error) {
      console.error("Error saving:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      alert("Хадгалах үед алдаа гарлаа: " + (error.response?.data?.message || error.message));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className='w-full bg-[#0E131D] rounded-[10px] p-3 sm:p-4'>
      {/* Food List */}
      <div className='space-y-3 sm:space-y-4'>
        {foods.map((food) => (
          <div
            key={food.id}
            className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
            <div
              className='w-14 h-14 sm:w-16 sm:h-16 bg-[#1E2028] flex items-center justify-center rounded-lg cursor-pointer overflow-hidden'
              onClick={() => setSelectedFoodId(food.id)}>
              {selectedFoodId === food.id ? (
                <div className='w-full h-full'>
                  <IUpload
                    onImageUpload={(url) => handleImageUpload(food.id, url)}
                  />
                </div>
              ) : food.image ? (
                <img
                  src={food.image}
                  alt={food.title}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='text-[#8CC63F] w-6 h-6 sm:w-8 sm:h-8'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'>
                    <rect
                      x='2'
                      y='2'
                      width='20'
                      height='20'
                      rx='2'
                      strokeWidth='2'
                      stroke='currentColor'
                      fill='none'
                    />
                    <polygon points='4,20 20,20 12,8' fill='currentColor' />
                    <circle cx='17' cy='7' r='2' fill='currentColor' />
                  </svg>
                </div>
              )}
            </div>
            <div className='flex-1 w-full sm:w-auto'>
              <input
                type="text"
                value={food.title}
                onChange={(e) => handleInputChange(food.id, 'title', e.target.value)}
                placeholder="Гарчиг"
                className='w-full bg-[#1E2028] p-1.5 sm:p-2 px-3 sm:px-4 rounded-lg text-white mb-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8CC63F]'
              />
              <input
                type="text"
                value={food.notice}
                onChange={(e) => handleInputChange(food.id, 'notice', e.target.value)}
                placeholder="Анхаар"
                className='w-full bg-[#1E2028] p-1.5 sm:p-2 px-3 sm:px-4 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8CC63F]'
              />
            </div>
            <button 
              className='bg-[#1E2028] p-1.5 sm:p-2 rounded-lg self-start'
              onClick={() => setIsEditing(!isEditing)}
            >
              <div className='text-[#8CC63F] text-xs sm:text-sm'>
                <FaEdit />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className='flex justify-between mt-4 sm:mt-6'>
        <button 
          onClick={handleAddNew}
          className='bg-[#8CC63F] hover:bg-[#7AB32E] text-white px-4 py-2 rounded-lg flex items-center gap-2'
        >
          <FaPlus />
          Нэмэх
        </button>
        <button 
          onClick={handleSave}
          disabled={saving}
          className='bg-[#8CC63F] hover:bg-[#7AB32E] text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {saving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Хадгалж байна...
            </>
          ) : (
            <>
              <FaSave />
              Хадгалах
            </>
          )}
        </button>
      </div>
    </div>
  );
}
