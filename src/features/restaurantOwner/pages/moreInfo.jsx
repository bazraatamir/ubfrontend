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
import FileUpload from "../../../shared/fileUpload";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const AddMoreInfo = () => {
  const [file, setFile] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [locationName, setLocation] = useState("");
  const [districts, setDistricts] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState(null);
  const handleClick = (districtName, id) => {
    setSelectedDistrict(districtName); // зөвхөн нэг сонгох
    setSelectedDistrictId(id);
  };

  useEffect(() => {
    const fetchdistrict = async () => {
      const response = await axiosInstance.get("/districts");
      setDistricts([...response.data]);
    };
    fetchdistrict();
  }, []);

  const handleSave = async () => {
    if (file.length > 0) {
      formData.append("file", file[0].file); // FilePond-оос авсан файлыг илгээж байна
    }

    // Axios-ийг ашиглан серверт хүсэлт илгээх
    try {
      const response = await axiosInstance.post("/restaurants", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Файл илгээж байгаа тул multipart/form-data тохиргоо
        },
      });
      console.log("Response: ", response.data);
      // Хариу авах бол даруй дараах үйлдлийг хийнэ:
      alert("Мэдээллийг амжилттай хадгаллаа!");
    } catch (error) {
      console.error("Error: ", error);
      alert("Хадгалах үед алдаа гарлаа!");
    }
  };

  return (
    <div className='min-h-screen w-full bg-[#0E1B21] px-4 sm:px-6 md:px-12 py-8 overflow-x-hidden'>
      <div className='max-w-[1300px] mx-auto'>
        {/* Header Section */}
        <header className='mb-10 sm:mb-8'>
          <h1 className='mb-4 text-2xl font-bold text-white sm:text-xl'>
            Нэмэлт мэдээлэ оруулах
          </h1>
          <p className='text-lg text-white max-w-[950px] sm:text-base'>
            Энэхүү хэсэгт та өөрийн рестраний талаар дэлэгрэнгүй мэдээлэл
            оруулна мэдээлэл нэмэх, засах, устгах боломжтой. Хэрвээ та салбар
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 bg-[#0E131D] p-[24px] rounded-xl '>
          <div className='w-full bg-[#2F323C] rounded-lg shadow-md p-6 md:p-7  mt-5 flex items-center'>
            <FileUpload text='зураг ведио оруулна уу?' url='api/heros' />
          </div>

          {/* Right Column */}
          <div className='space-y-5 md:space-y-6'>
            <div className='w-full md:w-[210px] h-12 bg-[#2F323C] rounded-lg shadow-inner flex items-center px-4'>
              <span className='text-white font-bold text-base'>
                Орчны зураг нэмэх
              </span>
            </div>

            <div className='w-full  bg-[#0E131D] rounded-xl p-6 md:p-12'>
              <div className='grid grid-cols-3 gap-4 md:gap-5'>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <FileUpload
                    key={item}
                    className='aspect-square bg-[#2F323C] rounded-lg flex items-center justify-center hover:bg-[#3a3e4a] transition-colors duration-300'
                    text='зураг оруулна уу?'
                    url='api/environments'
                  />
                ))}
              </div>
            </div>

            <div className='w-full md:w-[210px] h-12 bg-[#2F323C] rounded-lg shadow-inner flex items-center px-4'>
              <span className='text-white text-base font-bold'>АНХААР</span>
            </div>

            <Neriinhool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoreInfo;
