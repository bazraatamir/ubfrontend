import React from "react";
import {FilePond, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import Layout from "../layouts/Layout";
import IUpload from "../../../shared/ImageUpload";
import TextAreaComponent from "../../../shared/TextAreaComponent";
import ImageIcon from "../../../shared/icons/ImageIcon";
import LocationSection from "../../../shared/LocationSection";
import Neriinhool from "../components/neriinhool";
import {useState, useEffect} from "react";
import axiosInstance from "../../../shared/axios";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const OwnerRestaurantPage = () => {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [locationName, setLocation] = useState("");
  const [districts, setDistricts] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState(null);
  const [selectTags, setSelectTag] = useState([]);
  const [selectTagId, setSelectTagId] = useState([]);
  const [tags, setTags] = useState(null);

  const handleClick = (districtName, id) => {
    setSelectedDistrict(districtName);
    setSelectedDistrictId(id);
  };

  const handleTag = (tag, id) => {
    setSelectTag(
      (prev) =>
        prev.includes(tag)
          ? prev.filter((t) => t !== tag)
          : [...prev, tag]
    );

    setSelectTagId((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [districtsResponse, tagsResponse] = await Promise.all([
          axiosInstance.get("/districts"),
          axiosInstance.get("/tags")
        ]);
        
        setDistricts(districtsResponse.data);
        setTags(tagsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Өгөгдөл ачаалахад алдаа гарлаа!");
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    if (!name || !locationName) {
      alert("Байгууллагын нэр болон байршил заавал оруулах шаардлагатай!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", text);
    formData.append("location", locationName);
    
    // Only append districtId if one is selected
    if (selectedDistrictId) {
      formData.append("districtId", selectedDistrictId);
    }
    
    // Only append tags if any are selected
    if (selectTagId.length > 0) {
      formData.append("tags", selectTagId.join(","));
    }
    
    if (file.length > 0) {
      // Log the file state structure
      console.log("File state before appending:", file);
      // Assuming IUpload provides an array of FilePond file item objects
      // Access the actual file object via file[0].file
      formData.append("file", file[0].file);
      // formData.append("file", file[0]); // Incorrect: appends the FilePond object
    }

    try {
      const response = await axiosInstance.post("/restaurants", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      console.log("Response: ", response.data);
      localStorage.setItem("restaurantId", response.data.id);
      alert("Мэдээллийг амжилттай хадгаллаа!");
    } catch (error) {
      console.error("Error: ", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Хадгалах үед алдаа гарлаа!");
      }
    }
  };

  return (
    <div className='min-h-screen w-full bg-[#0E1B21] px-4 sm:px-6 md:px-12 py-8 overflow-x-hidden'>
      <div className='max-w-[1300px] mx-auto'>
        <header className='mb-10 sm:mb-8'>
          <h1 className='mb-4 text-2xl font-bold text-white sm:text-xl'>
            Салбарын мэдээлэл засах
          </h1>
          <p className='text-lg text-white max-w-[950px] sm:text-base'>
            Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах боломжтой.
            Хэрвээ та салбар нэмэх бол{" "}
            <span className='font-bold'>салбар нэмэх</span> товчин дээр дарна
            уу.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 bg-[#0E131D] p-[24px] rounded-xl'>
          <div className='space-y-5 md:space-y-6'>
            <div className='w-full md:w-[210px] h-12 bg-[#2F323C] rounded-lg shadow-inner flex items-center px-4'>
              <span className='text-white text-base font-bold'>
                Танилцуулга нэмэх
              </span>
            </div>

            <div className='w-full flex flex-col bg-[#0E131D] rounded-xl shadow-md p-6 md:p-7'>
              <div className='flex flex-col md:flex-row items-center gap-5'>
                <div className='w-full max-w-[260px]'>
                  <IUpload getfile={setFile} text={"Лого оруулах"} />
                </div>
                <div className='w-full space-y-5'>
                  <div className='w-full h-12 bg-[#2F323C] rounded-lg'>
                    <input
                      type='text'
                      placeholder='Байгууллагын нэр'
                      onChange={(e) => setName(e.target.value)}
                      className='w-full h-full bg-transparent text-white px-4 placeholder-gray-400 focus:outline-none text-base'
                    />
                  </div>
                  <div className='w-full min-h-[140px] bg-[#2F323C] rounded-lg'>
                    <TextAreaComponent text={text} setText={setText} />
                  </div>
                </div>
              </div>

              <LocationSection locations={setLocation} />

              <div className='flex flex-wrap gap-2 my-[24px] h-28 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 rounded-lg p-3 bg-gray-800 shadow-md'>
                {districts && districts.map((el, index) => {
                  const isSelected = selectedDistrict === el.name;
                  const bgColor = isSelected ? "bg-[#8CC63F]" : "bg-[#0E1B21]";
                  return (
                    <div
                      key={index}
                      onClick={() => handleClick(el.name, el.id)}
                      className={`cursor-pointer flex items-center h-[40px] ${bgColor} rounded px-3 py-1 text-xs font-medium shadow-sm transition-colors`}>
                      <span className='text-white'>{el.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className='flex flex-wrap gap-2 my-[24px] h-28 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 rounded-lg p-3 bg-gray-800 shadow-md'>
                {tags && tags.map((el, index) => {
                  const isSelected = selectTags.includes(el.name);
                  const bgColor = isSelected ? "bg-[#8CC63F]" : "bg-[#0E1B21]";
                  return (
                    <div
                      key={index}
                      onClick={() => handleTag(el.name, el.id)}
                      className={`cursor-pointer flex items-center h-[40px] ${bgColor} rounded px-3 py-1 text-xs font-medium shadow-sm transition-colors`}>
                      <span className='text-white'>{el.name}</span>
                    </div>
                  );
                })}
              </div>

              <button
                className='bg-[#8CC63F] text-black px-8 py-2.5 self-end rounded-md text-sm font-medium hover:bg-opacity-90 transition-all my-[24px] max-w-[150px]'
                onClick={handleSave}>
                Хадгалах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerRestaurantPage;