import React, {useState, useEffect} from "react";
import AddSalbar from "../components/AddSalbar";
import IUpload from "../../../shared/ImageUpload";
import axiosInstance from "../../../shared/axios";

// Placeholder for backend base URL - adjust if needed
const backendBaseUrl = "http://localhost:3000";

const AddMenu = () => {
  const [status, setStatus] = useState(false);
  // Form state
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("https://news.mn/wp-content/archive1/news/photo/2015/5/8/4b55a8ddb7dfcac61852cfcc819f5a4coriginal.jpg");

  // Menu items list state
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Available menu types state
  const [availableMenus, setAvailableMenus] = useState([]);
  const [loadingMenus, setLoadingMenus] = useState(false);

  // Editing state
  const [editingItemId, setEditingItemId] = useState(null);

  // Fetch menu items and available menus on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setLoadingMenus(true);
      setError(null);
      try {
        const [menuItemsResponse, availableMenusResponse] = await Promise.all([
          axiosInstance.get("/menuitems"),
          axiosInstance.get("/menus")
        ]);

        setMenuItems(menuItemsResponse.data);
        setAvailableMenus(availableMenusResponse.data);

        if (availableMenusResponse.data.length > 0 && !type) {
          setType(availableMenusResponse.data[0].id.toString());
        }

      } catch (err) {
        setError("Мэдээлэл татахад алдаа гарлаа.");
        console.error("Fetch data error:", err);
      } finally {
        setLoading(false);
        setLoadingMenus(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Add type to dependency array if needed, but initial load seems intended

  const fetchMenuItems = async () => { // Keep this separate if needed for refresh
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get("/menuitems");
      setMenuItems(response.data);
    } catch (err) {
      setError("Цэсний мэдээлэл татахад алдаа гарлаа.");
      console.error("Fetch menu items error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setName("");
    setType(availableMenus.length > 0 ? availableMenus[0].id.toString() : "");
    setDescription("");
    setPrice("");
    setImageFile(null);
    setPreviewImage("https://news.mn/wp-content/archive1/news/photo/2015/5/8/4b55a8ddb7dfcac61852cfcc819f5a4coriginal.jpg");
    setEditingItemId(null); // Reset editing state
    const fileInput = document.getElementById('imageUploadInput');
    if (fileInput) {
      fileInput.value = "";
    }
    setError(null); // Clear previous errors
  };

  const handleEditClick = (item) => {
      setEditingItemId(item.id);
      setName(item.name);
      setType(item.menuId.toString()); // Ensure it's a string for select value
      setDescription(item.description || "");
      setPrice(item.price?.toString() || ""); // Ensure it's a string for input value
      setPreviewImage(item.imageUrl ? `${backendBaseUrl}${item.imageUrl}` : "https://news.mn/wp-content/archive1/news/photo/2015/5/8/4b55a8ddb7dfcac61852cfcc819f5a4coriginal.jpg");
      setImageFile(null); // Reset image file, user must re-select to change
      window.scrollTo(0, 0); // Scroll to top to see the form
      setError(null);
  };

  const handleDelete = async (itemId) => {
    if (!window.confirm("Энэ цэсийг устгахдаа итгэлтэй байна уу?")) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
        const token = localStorage.getItem('authToken');
        await axiosInstance.delete(`/menuitems/${itemId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        // Remove the item from the list
        setMenuItems(menuItems.filter(item => item.id !== itemId));
    } catch (err) {
        setError("Цэс устгахад алдаа гарлаа.");
        console.error("Delete menu item error:", err.response ? err.response.data : err);
    } finally {
        setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!type) {
        setError("Цэсний төрлийг сонгоно уу.");
        setLoading(false);
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("menuId", type);
    formData.append("description", description);
    formData.append("price", price);

    // For UPDATE: Only append image if a new one was selected
    // For CREATE: Append image if selected
    if (imageFile) {
        // Backend expects 'imageUrl' for update, 'media' for create.
        // Send 'media' for create, 'imageUrl' for update.
        const imageKey = editingItemId ? 'imageUrl' : 'media';
        formData.append(imageKey, imageFile);
    }

    try {
      const token = localStorage.getItem('authToken');
      let response;

      if (editingItemId) {
        // --- UPDATE --- 
        response = await axiosInstance.put(`/menuitems/${editingItemId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          },
        });
        // Update the item in the list
        setMenuItems(menuItems.map(item => item.id === editingItemId ? response.data : item));

      } else {
        // --- CREATE --- 
        response = await axiosInstance.post("/menuitems", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          },
        });
        // Add the new item to the list
        setMenuItems([...menuItems, response.data]);
      }

      resetForm(); // Clear form and reset editing state

    } catch (err) {
      setError(editingItemId ? "Цэс шинэчлэхэд алдаа гарлаа." : "Цэс хадгалахад алдаа гарлаа.");
      console.error("Submit menu item error:", err.response ? err.response.data : err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get menu name by ID
  const getMenuNameById = (menuId) => {
      const menu = availableMenus.find(m => m.id === menuId);
      return menu ? menu.name : 'Тодорхойгүй';
  };


  return (
    <div className='min-h-screen bg-[#0E1B21] bg-opacity-95'>
      <div className='ml-[80px] p-8 sm:ml-0'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-white text-xl font-bold mb-2'>
            {editingItemId ? "Цэсний мэдээлэл засах" : "Шинэ цэс нэмэх"} {/* Dynamic Title */}
          </h1>
          <p className='text-white text-sm max-w-[800px] opacity-90'>
            Энэхүү хэсэгт та цэсний мэдээлэл нэмэх, засах, устгах боломжтой.
          </p>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className='bg-[#0E131D] bg-opacity-90 rounded-lg p-6'>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-8'>
            {/* Image Upload */}
            <div className='sm:col-span-1'>
              <label htmlFor="imageUploadInput" className='bg-[#1E2530] rounded-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-80 relative group'>
                <img
                  src={previewImage}
                  alt='Menu Item Preview'
                  className='w-full h-full object-cover rounded-lg absolute inset-0'
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                  <div className='text-center'>
                     <svg className="mx-auto h-12 w-12 text-gray-300" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='mt-1 text-sm text-gray-400'>Зураг сонгох</p>
                    <p className='text-xs text-gray-500'>PNG, JPG, GIF</p> {/* Removed size limit display */}
                  </div>
                </div>
                 <input id="imageUploadInput" name="media" type="file" className="sr-only" onChange={handleImageChange} accept="image/png, image/jpeg, image/gif"/>
              </label>
            </div>

            {/* Form Fields */}
            <div className='sm:col-span-3'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {/* Product Name */}
                <div>
                  <label htmlFor="productName" className='text-gray-400 text-sm mb-2 block'>
                    Бүтээгдэхүүний нэр
                  </label>
                  <input
                    id="productName"
                    type='text'
                    placeholder='Бүтээгдэхүүний нэр оруулах...'
                    className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Type Select - Dynamic */}
                <div>
                  <label htmlFor="productType" className='text-gray-400 text-sm mb-2 block'>
                    Төрөл сонгох
                  </label>
                  <select
                    id="productType"
                    className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none appearance-none'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    disabled={loadingMenus}
                  >
                    <option value="" disabled hidden={!loadingMenus && availableMenus.length > 0}>
                      {loadingMenus ? "Төрөл ачааллаж байна..." : "-- Сонгоно уу --"}
                    </option>
                    {availableMenus.map((menu) => (
                      <option key={menu.id} value={menu.id.toString()}>
                        {menu.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className='col-span-2'>
                  <label htmlFor="description" className='text-gray-400 text-sm mb-2 block'>
                    Тайлбар
                  </label>
                  <input
                    id="description"
                    type='text'
                    placeholder='Тайлбар оруулах...'
                    className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                {/* Price */}
                <div className='col-span-2'>
                  <label htmlFor="price" className='text-gray-400 text-sm mb-2 block'>
                    Үнэ
                  </label>
                  <input
                    id="price"
                    type='number'
                    placeholder='Үнэ оруулах...'
                    className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    min="0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className='flex justify-end mt-8 space-x-4'>
            {editingItemId && (
                <button type="button" onClick={resetForm} className='bg-gray-600 text-white px-8 py-2.5 rounded-md text-sm font-medium hover:bg-gray-700 transition-all disabled:opacity-50' disabled={loading}>
                 Цуцлах
                </button>
            )}
            <button type="submit" className='bg-[#8CC63F] text-black px-8 py-2.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all disabled:opacity-50' disabled={loading || loadingMenus}>
              {loading ? (editingItemId ? "Шинэчилж байна..." : "Хадгалж байна...") : (editingItemId ? "Шинэчлэх" : "Хадгалах")}
            </button>
          </div>
        </form>

        {/* Menu Item List */}
        <div className='mt-10'>
          <h2 className='text-white text-lg font-semibold mb-4'>Цэсний жагсаалт</h2>
          <div className='bg-[#0E131D] bg-opacity-90 rounded-lg overflow-hidden'>
             {loading && !menuItems.length ? (
                <p className="text-center text-gray-400 py-4">Ачааллаж байна...</p>
              ) : error && !menuItems.length ? (
                <p className="text-center text-red-500 py-4">{error}</p>
              ) : !menuItems.length ? (
                 <p className="text-center text-gray-400 py-4">Цэс одоогоор хоосон байна.</p>
              ) : (
            <table className='w-full'>
              <thead className='border-b border-gray-800'>
                <tr className='text-gray-400 text-sm'>
                  <th className='text-left py-4 px-4'>Зураг</th>
                  <th className='text-left px-4'>Бүтээгдэхүүний нэр</th>
                  <th className='text-left px-4'>Төрөл</th>
                  <th className='text-left px-4'>Үнэ</th>
                  <th className='text-right px-4'>Үйлдэл</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id} className='text-white text-sm hover:bg-[#1E2530] transition-colors'>
                    <td className='py-4 px-4'>
                      <img
                        src={item.imageUrl ? `${backendBaseUrl}${item.imageUrl}` : 'https://via.placeholder.com/150/000000/FFFFFF/?text=No+Image'}
                        alt={item.name}
                        className='w-12 h-12 object-cover rounded-md'
                      />
                    </td>
                    <td className='px-4'>{item.name}</td>
                    <td className='px-4'>{getMenuNameById(item.menuId)}</td>
                    <td className='px-4 text-gray-400'>{item.price?.toLocaleString()}₮</td>
                    <td className='px-4 text-right space-x-2'>
                      <button className='text-[#8CC63F] hover:text-[#7AB52F] transition-colors' onClick={() => handleEditClick(item)} disabled={loading}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 inline' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'/></svg>
                      </button>
                      <button className='text-red-500 hover:text-red-600 transition-colors' onClick={() => handleDelete(item.id)} disabled={loading}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 inline' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'/></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
