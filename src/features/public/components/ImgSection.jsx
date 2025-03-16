import React from "react";

const ImgSection = () => {
  return (
    <div className="w-full bg-[#0e1b21] relative">
      <div className="grid grid-cols-3 grid-rows-4 gap-4 text-white max-w-[1180px] mx-auto">
        {/* Image 1 */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/34793b6e06935a346a24f52fd022e3a238f91f66"
          alt="Image 1"
          className="col-span-2 row-span-2 object-cover  border border-gray-700"
          style={{ width: "755px", height: "335px" }}
        />

        {/* Image 2 */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41"
          alt="Image 2"
          className="flex  row-span-3 col-start-3 object-cover border border-gray-700"
          style={{ width: "380px", height: "472px" }}
        />

        {/* Wrapper for Images 3 and 4 */}
        <div className="col-span-2 row-span-2 row-start-3 grid grid-cols-2 gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41"
            alt="Image 3"
            className="max-w-full max-h-full object-cover border border-gray-700"
            style={{ width: "363px", height: "310px" }}
          />

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34793b6e06935a346a24f52fd022e3a238f91f66"
            alt="Image 4"
            className="max-w-full max-h-full object-cover border border-gray-700"
            style={{ width: "363px", height: "310px" }}
          />
        </div>

        {/* Image 5 */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1687c430392050cdab903a5397cbc1d7b31f41"
          alt="Image 5"
          className="col-start-3 row-start-4 object-cover relative top-[-47.5px] border border-gray-700 flex align-center justify-center"
          style={{ width: "363px", height: "171px" }}
        />
      </div>
    </div>
  );
};

export default ImgSection;
