import {useState} from "react";
import {FilePond, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css"; // FilePond styles
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import Layout from "../layouts/Layout"; // Assuming this is the path to your Layout component
import IUpload from "../../../shared/ImageUpload";
import TextAreaComponent from "../../../shared/TextAreaComponent";
import ImageIcon from "../../../shared/icons/ImageIcon";
import LocationSection from "../../../shared/LocationSection";
import Neriinhool from "../components/neriinhool";

// Register FilePond plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const OwnerRestaurantPage = () => {
  return (
    <div className='min-h-screen w-full bg-[#0E1B21] p-12 ml-[10px]'>
      <div className='max-w-[1300px] mx-auto'>
        <div className='w-auto'>
          {/* Header Section */}
          <header className='mb-16 max-sm:mb-8'>
            <h1 className='mb-4 text-2xl font-bold text-white max-sm:text-xl'>
              Салбарын мэдээлэл засах
            </h1>
            <p className='text-lg text-white max-w-[950px] max-sm:text-base'>
              <span>
                Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах
                боломжтой. Хэрвээ та салбар нэмэх бол
              </span>
              <span className='font-bold'> салбар нэмэх </span>
              <span>товчин дээр дарна уу.</span>
            </p>
          </header>

          <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
            <div className='space-y-5 md:space-y-6'>
              {/* taniltsuulga nemeh */}
              <div className='w-[210px] h-12 bg-[#2F323C] rounded-lg shadow-inner'>
                <div className='flex items-center justify-between px-7 h-full'>
                  <span className='text-white text-base font-bold'>
                    Танилцуулга нэмэх
                  </span>
                </div>
              </div>

              {/* baiguulgiin logo */}
              <div className='w-full bg-[#0E131D] rounded-xl shadow-md p-6 md:p-7'>
                <div className='flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-7'>
                  <div className='w-[550px]'>
                    <IUpload />
                  </div>
                  {/* baiguulga ner text */}
                  <div className='w-full space-y-5 mb-5'>
                    <div className='w-full h-12 bg-[#2F323C] rounded-lg'>
                      <input
                        type='text'
                        placeholder='Байгууллагын нэр'
                        className='w-full h-full bg-transparent text-white px-4 placeholder-gray-400 focus:outline-none text-base'
                      />
                    </div>
                    <div className='w-full min-h-[140px] bg-[#2F323C] rounded-lg'>
                      <TextAreaComponent />
                    </div>
                  </div>
                </div>
                {/* bichleg oruulah */}
                <div className='w-full bg-[#2F323C] rounded-lg shadow-md p-6 md:p-7 h-[230px] mt-7'>
                  <div className='flex items-center'>
                    <div className='w-9 h-9 mr-3'>
                      <ImageIcon />
                    </div>
                    <span className='text-white text-base'>
                      Бичлэг , зураг оруулах
                    </span>
                  </div>
                </div>
              </div>
              <LocationSection />
            </div>
            <div className='space-y-5 md:space-y-6'>
              <div className='w-[210px] h-12 bg-[#2F323C] rounded-lg shadow-inner'>
                <div className='flex items-center justify-between px-6 h-full'>
                  <span className='text-white font-bold text-base'>
                    Орчны зураг нэмэх
                  </span>
                </div>
              </div>

              {/* Image Grid Section */}
              <div className='w-[600px] bg-[#0E131D] rounded-xl md:p-12'>
                <div className='grid grid-cols-3 gap-4 md:gap-5'>
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <IUpload
                      key={item}
                      className='aspect-square bg-[#2F323C] rounded-lg flex items-center justify-center hover:bg-[#3a3e4a] transition-colors duration-300'
                    />
                  ))}
                </div>
              </div>
              <div className='w-[210px] h-12 bg-[#2F323C] rounded-lg shadow-inner'>
                <div className='flex items-center justify-between px-6 h-full'>
                  <span className='text-white text-base font-bold'>
                    Нэрийн Хоол Нэмэх
                  </span>
                </div>
              </div>
              <Neriinhool />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerRestaurantPage;
