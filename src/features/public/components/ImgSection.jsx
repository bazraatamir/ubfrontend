import React, {useState} from "react";
// import SimpleModal from "./imageModal";

const ImgSection = ({image}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleModal = (arg) => {
    setIsOpen(true);
    setImageUrl(arg);
  };
  return (
    <div
      className='container  m-auto bg-[#0e1b21] relative mt-30'
      data-aos='fade-up'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white  mx-auto p-4'>
        {/* Image 1 */}
        <img
          src={`http://localhost:3000/uploads/${image[0]?.imageUrl}`}
          alt='Image 1'
          className='md:col-span-2 md:row-span-2 w-full h-auto object-cover border border-gray-700 aspect-[2/1] md:aspect-[755/335] hover:scale-104 duration-200 cursor-pointer'
          onClick={() => handleModal(image[0]?.imageUrl)}
        />

        {/* Image 2 */}
        <img
          src={`http://localhost:3000/uploads/${image[1]?.imageUrl}`}
          alt='Image 2'
          className='md:row-span-3 md:col-start-3 w-full h-auto object-cover border border-gray-700 aspect-[1/1.5] md:aspect-[380/472] hover:scale-104 duration-200 cursor-pointer'
        />

        {/* Wrapper for Images 3 and 4 */}
        <div className='md:col-span-2 md:row-span-2 md:row-start-3 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <img
            src={`http://localhost:3000/uploads/${image[2]?.imageUrl}`}
            alt='Image 3'
            className='w-full h-auto object-cover border border-gray-700 aspect-[1/1] md:aspect-[363/310] hover:scale-104 duration-200 cursor-pointer'
          />

          <img
            src={`http://localhost:3000/uploads/${image[4]?.imageUrl}`}
            alt='Image 4'
            className='w-full h-auto object-cover border border-gray-700 aspect-[1/1] md:aspect-[363/310] hover:scale-104 duration-200 cursor-pointer'
          />
        </div>

        {/* Image 5 */}
        <img
          src={`http://localhost:3000/uploads/${image[4]?.imageUrl}`}
          alt='Image 5'
          className='md:col-start-3 md:row-start-4 w-full h-auto object-cover border border-gray-700 aspect-[2/1] md:aspect-[363/171] hover:scale-104 duration-200 cursor-pointer'
        />
      </div>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          {/* Modal Content */}
          <div className='bg-white p-8 rounded-lg shadow-lg w-full h-screen relative'>
            <img
              src={`http://localhost:3000/uploads/${imageUrl}`}
              alt=''
              className='w-full h-full  object-cover'
            />
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-3 right-3 text-gray-500 hover:text-gray-700'>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgSection;
