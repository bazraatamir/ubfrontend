import {useState} from "react";
import {FilePond, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css"; // FilePond styles
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import SideBar from "../modules/RestaurantOwner/sideBar/SideBar";
import Search from "../shared/Search";
import IUpload from "../shared/ImageUpload";
import TextAreaComponent from "../shared/TextAreaComponent";
import ImageIcon from "../shared/icons/ImageIcon";
import LocationSection from "../shared/LocationSection";
import InputDesign from "../modules/RestaurantOwner/components/InputDesign";
import Neriinhool from "../modules/RestaurantOwner/components/neriinhool";

// Register FilePond plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const RestaurantPage = () => {
  return (
    <div className='min-h-screen w-full bg-[#1A1B1E] p-4 sm:p-6 md:p-8'>
      <div className='container mx-auto max-w-7xl relative'>
        {/* Sidebar */}
        <SideBar></SideBar>

        <div className='md:pl-16  w-[1400px]'>
          {/* Header Search */}
          <Search></Search>

          <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
            <div className='space-y-4 md:space-y-6'>
              {/* taniltsuulga nemeh  */}
              <div className='w-[170px] h-10 bg-[#2F323C] rounded-[5px] shadow-inner'>
                <div className='flex items-center justify-between px-4 h-full'>
                  <span className='text-white text-[14px] font-bold text-base '>
                    Танилцуулга нэмэх
                  </span>
                </div>
              </div>

              {/* baiguulgiin logo  */}
              <div className='w-full bg-[#0E131D] rounded-[10px] shadow-md p-4 md:p-6 '>
                <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 '>
                  <div className='w-[500px]'>
                    <IUpload></IUpload>
                  </div>
                  {/* baiguulga ner text */}
                  <div className='w-full space-y-4 mb-[18px]'>
                    <div className='w-full h-10 bg-[#2F323C] rounded-[5px]'>
                      <input
                        type='text'
                        placeholder='Байгууллагын нэр'
                        className='w-full h-full bg-transparent text-white px-3 placeholder-gray-400 focus:outline-none'
                      />
                    </div>
                    <div className='w-full min-h-[120px] bg-[#2F323C] rounded-[10px]'>
                      <TextAreaComponent></TextAreaComponent>
                    </div>
                  </div>
                </div>
                {/* bichleg oruulah */}
                <div className='w-full bg-[#2F323C] rounded-[10px] shadow-md p-4 md:p-6 h-[200px]'>
                  <div className='flex items-center'>
                    <div className='w-8 h-8 mr-3'>
                      <ImageIcon></ImageIcon>
                    </div>
                    <span className='text-white text-base'>
                      Бичлэг , зураг оруулах
                    </span>
                  </div>
                </div>
              </div>
              <LocationSection></LocationSection>

              {/* Description Section */}
            </div>
            <div className='space-y-4 md:space-y-6'>
              <div className='w-[170px] h-10   bg-[#2F323C] rounded-[5px] shadow-inner'>
                <div className='flex items-center justify-between px-4 h-full'>
                  <span className='text-white font-bold text-base text-[14px]'>
                    Орчны зураг нэмэх
                  </span>
                </div>
              </div>

              {/* Image Grid Section */}
              <div className='w-[550px] bg-[#0E131D] rounded-[10px] md:p-12'>
                <div className='grid grid-cols-3 gap-3 md:gap-4'>
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <IUpload
                      key={item}
                      className='aspect-square bg-[#2F323C] rounded-[10px] flex items-center justify-center hover:bg-[#3a3e4a] transition-colors duration-300'></IUpload>
                  ))}
                </div>
              </div>
              <Neriinhool></Neriinhool>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
