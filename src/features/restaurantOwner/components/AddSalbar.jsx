import React, {useState} from "react";
import PaymentModal from "./modal";

const AddSalbar = ({status}) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {/* Main Content */}
      <div className='ml-[20px] p-5 sm:p-11'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-white text-2xl sm:text-3xl font-bold mb-3'>
            Салбарын мэдээлэл засах
          </h1>
          <p className='text-white text-base sm:text-lg max-w-[923px]'>
            Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах боломжтой.
            Хэрвээ та салбар нэмэх бол{" "}
            <span className='font-bold'>салбар нэмэх</span> товчин дээр дарна
            уу.
          </p>
        </div>

        {/* Add Branch Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className='flex items-center gap-2 bg-[#2F323C] text-white px-4 py-2 rounded-lg mb-8'>
          <span className='text-[#8CC63F] text-xl'>+</span>
          <span className='text-sm font-medium'>Салбар нэмэх</span>
        </button>

        {/* Content Area */}
        <div className='bg-[#0E131D] rounded-xl p-6'>
          <div className='text-white text-center py-20'>
            Та төлбөр төлснөөр салбарын мэдээлэл оруулах боломжтой болно
          </div>
        </div>

        {/* Payment Modal */}
        <PaymentModal
          status={status}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default AddSalbar;
