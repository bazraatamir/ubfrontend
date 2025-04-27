import React, {useState} from "react";

const PaymentModal = ({isOpen, onClose, status}) => {
  if (!isOpen) return null;
  const handleStatus = () => {
    status(true);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-[#0E1B21] rounded-xl p-6 w-[90%] sm:w-[600px] relative'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute right-3 top-3 text-gray-400 hover:text-white'>
          ✕
        </button>

        {/* Content */}
        <div className='text-white space-y-4'>
          <p className='text-sm sm:text-[15px] leading-relaxed'>
            Та салбарын мэдээлэлээ бөглөхийн өмнө{" "}
            <span className='font-bold text-white'>Хаан банк</span>{" "}
            <span className='font-bold text-white'>
              5133198163 Нармандах Түвшин
            </span>{" "}
            дансанд <span className='font-bold text-white'>80000</span>
            төгрөг хийгээд гүйлгээний утган дээр{" "}
            <span className='font-bold text-white'>...</span> оруулан{" "}
            <span className='bg-[#8CC63F] text-black px-3 py-1 rounded-md text-sm'>
              Шалгах
            </span>{" "}
            товчийг дарна уу.
          </p>
          <p className='text-gray-400 text-sm'>
            Таны хүсэлт 5-10мин хооронд идэвхжинэ.
          </p>

          {/* Check Button */}
          <div className='flex justify-end pt-2'>
            <button
              className='bg-[#8CC63F] text-black px-4 py-1.5 rounded-md text-sm hover:bg-opacity-90'
              onClick={handleStatus}>
              Шалгах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentModal;
