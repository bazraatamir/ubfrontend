import React, { useState } from "react";

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#0E1B21] rounded-xl p-6 w-[90%] sm:w-[600px] relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-white space-y-4">
          <p className="text-sm sm:text-[15px] leading-relaxed">
            Та салбарын мэдээлэлээ бөглөхийн өмнө{" "}
            <span className="font-bold text-white">Хаан банк</span>{" "}
            <span className="font-bold text-white">5133198163 Нармандах Түвшин</span>{" "}
            дансанд{" "}
            <span className="font-bold text-white">80000</span>
            төгрөг хийгээд гүйлгээний утган дээр{" "}
            <span className="font-bold text-white">...</span>{" "}
            оруулан{" "}
            <span className="bg-[#8CC63F] text-black px-3 py-1 rounded-md text-sm">
              Шалгах
            </span>{" "}
            товчийг дарна уу.
          </p>
          <p className="text-gray-400 text-sm">
            Таны хүсэлт 5-10мин хооронд идэвхжинэ.
          </p>

          {/* Check Button */}
          <div className="flex justify-end pt-2">
            <button className="bg-[#8CC63F] text-black px-4 py-1.5 rounded-md text-sm hover:bg-opacity-90">
              Шалгах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddSalbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0E1B21]">

      {/* Main Content */}
      <div className="ml-[20px] p-5 sm:p-11">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Салбарын мэдээлэл засах
          </h1>
          <p className="text-white text-base sm:text-lg max-w-[923px]">
            Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах боломжтой. 
            Хэрвээ та салбар нэмэх бол <span className="font-bold">салбар нэмэх</span> товчин дээр дарна уу.
          </p>
        </div>

        {/* Add Branch Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#2F323C] text-white px-4 py-2 rounded-lg mb-8"
        >
          <span className="text-[#8CC63F] text-xl">+</span>
          <span className="text-sm font-medium">Салбар нэмэх</span>
        </button>

        {/* Content Area */}
        <div className="bg-[#0E131D] rounded-xl p-6">
          <div className="text-white text-center py-20">
            Та төлбөр төлснөөр салбарын мэдээлэл оруулах боломжтой болно
          </div>
        </div>

        {/* Payment Modal */}
        <PaymentModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default AddSalbar;
