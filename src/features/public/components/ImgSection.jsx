import React from "react";

const ImgSection = () => {
  return (
    <div className="w-full bg-[#0e1b21] relative mt-30">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-white max-w-[1180px] mx-auto p-2 sm:p-4">
        {/* Image 1 */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/34793b6e06935a346a24f52fd022e3a238f91f66"
          alt="Image 1"
          className="col-span-2 row-span-2 w-full h-auto object-cover border border-gray-700 aspect-[755/335]"
        />

        {/* Image 2 */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41"
          alt="Image 2"
          className="row-span-3 col-start-3 w-full h-auto object-cover border border-gray-700 aspect-[380/472]"
        />

        {/* Wrapper for Images 3 and 4 */}
        <div className="col-span-2 row-span-2 row-start-3 grid grid-cols-2 gap-2 sm:gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41"
            alt="Image 3"
            className="w-full h-auto object-cover border border-gray-700 aspect-[363/310]"
          />

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34793b6e06935a346a24f52fd022e3a238f91f66"
            alt="Image 4"
            className="w-full h-auto object-cover border border-gray-700 aspect-[363/310]"
          />
        </div>

        {/* Image 5 */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41"
          alt="Image 5"
          className="col-start-3 row-start-4 w-full h-auto object-cover border border-gray-700 aspect-[363/171]"
        />
      </div>
    </div>
  );
};

export default ImgSection;
