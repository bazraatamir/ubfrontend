import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css"; // FilePond styles
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import PlusIcon from "./icons/PlusIcon";
import ImageIcon from "./icons/ImageIcon";
import SideBar from "./SideBar";
import Search from "./Search";
import ImageUpload from "./ImageUpload";
import IUpload from "./ImageUpload";

// Register FilePond plugins
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const About = () => {
  const [files, setFiles] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  // Optional: Handle the file upload completion
  const handleFilePondInit = () => {
    console.log("FilePond has initialized");
  };

  return (
    <div className="min-h-screen w-full bg-[#1A1B1E] p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-7xl relative">
        {/* Sidebar */}
        <SideBar></SideBar>

        <div className="md:pl-16 lg:pl-52">
          {/* Header Search */}
          <Search></Search>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-6">
              {/* Add Introduction Section */}
              <div className="w-full h-14 bg-[#0E131D] rounded-[5px] shadow-inner">
                <div className="flex items-center justify-between px-4 py-2 h-full">
                  <span className="text-white font-bold text-base md:text-lg">
                    Танилцуулга нэмэх
                  </span>
                  <div className="w-6 h-6 bg-[#8CBC01] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4">
                      <PlusIcon></PlusIcon>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Areas */}
              <div className="w-full bg-[#0E131D] rounded-[10px] shadow-md p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <IUpload></IUpload>
                  <div className="w-full space-y-4">
                    <div className="w-full h-10 bg-[#2F323C] rounded-[5px]">
                      <input
                        type="text"
                        placeholder="Байгууллагын нэр"
                        className="w-full h-full bg-transparent text-white px-3 placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                    <div className="w-full min-h-[120px] bg-[#2F323C] rounded-[10px]">
                      <textarea
                        placeholder="Байгууллагын танилцуулга"
                        className="w-full h-full bg-transparent text-white p-3 placeholder-gray-400 focus:outline-none resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="w-full bg-[#2F323C] rounded-[10px] shadow-md p-4 md:p-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3">
                    <ImageIcon></ImageIcon>
                  </div>
                  <span className="text-white text-base">Бичлэг оруулах</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 md:space-y-6">
              {/* Add Environment Map Section */}
              <div className="w-full h-14 bg-[#2F323C] rounded-[5px] shadow-md">
                <div className="flex items-center justify-between px-4 py-2 h-full">
                  <span className="text-white font-bold text-base md:text-lg">
                    Орчны зураг нэмэх
                  </span>
                  <div className="w-6 h-6 bg-[#8CBC01] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4">
                      <PlusIcon></PlusIcon>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Grid Section */}
              <div className="w-full bg-[#0E131D] rounded-[10px] p-4 md:p-6">
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="aspect-square bg-[#2F323C] rounded-[10px] flex items-center justify-center hover:bg-[#3a3e4a] transition-colors duration-300"
                    >
                      <div className="w-8 md:w-10 h-8 md:h-10">
                        <IUpload></IUpload>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Save Button Section */}
          <div className="flex justify-center mt-6 md:mt-8">
            <button className="w-40 h-11 bg-[#8CBC01] rounded-[7px] text-white font-bold hover:bg-[#7aab01] transition-colors duration-300">
              Хадгалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
