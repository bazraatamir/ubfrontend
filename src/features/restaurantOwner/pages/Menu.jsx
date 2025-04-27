import React, {useState} from "react";
import AddSalbar from "../components/AddSalbar";
const AddMenu = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className='min-h-screen bg-[#0E1B21] bg-opacity-95'>
      <div className='ml-[80px] p-8 sm:ml-0'>
        {/* Header */}
        <div className='mb-6'>
          <h1 className='text-white text-xl font-bold mb-2'>
            Цэсний мэдээлэл засах
          </h1>
          <p className='text-white text-sm max-w-[800px] opacity-90'>
            Энэхүү хэсэгт та цэсний мэдээлэл нэмэх, засах, устгах боломжтой.
          </p>
        </div>

        {/* Add Branch Button */}

        {/* Form Section */}
        <div className='bg-[#0E131D] bg-opacity-90 rounded-lg p-6'>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-8'>
            {/* Image Upload */}
            <div className='sm:col-span-1'>
              <div className='bg-[#1E2530] rounded-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-80 relative'>
                {/* Preview Image */}
                <img
                  src='https://news.mn/wp-content/archive1/news/photo/2015/5/8/4b55a8ddb7dfcac61852cfcc819f5a4coriginal.jpg'
                  alt='Branch'
                  className='w-full h-full object-cover rounded-lg absolute inset-0'
                />

                {/* Upload Overlay */}
                <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center group-hover:bg-opacity-50 transition-all'>
                  <div className='text-[#8CC63F]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-8 w-8'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className='sm:col-span-3'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {/* Branch Name */}
                <div>
                  <label className='text-gray-400 text-sm mb-2 block'>
                    Бүтээгдэхүүний нэр
                  </label>
                  <input
                    type='text'
                    placeholder='Бүтээгдэхүүний нэр оруулах...'
                    className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none'
                  />
                </div>

                {/* Branch Location */}
                <div>
                  <label className='text-gray-400 text-sm mb-2 block'>
                    Төрөл сонгох
                  </label>
                  <select className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none appearance-none'>
                    <option value=''>Хоол</option>
                    <option value='Уух зүйлс'>Уух зүйлс</option>
                    <option value='Дессерт'>Дессерт</option>
                  </select>
                </div>

                {/* Branch Address */}
                <div className='col-span-2'>
                  <label className='text-gray-400 text-sm mb-2 block'>
                    Тайлбар
                  </label>
                  <input
                    type='text'
                    placeholder='Тайлбар оруулах...'
                    className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none'
                  />
                </div>
                <div className='col-span-2'>
                  <label className='text-gray-400 text-sm mb-2 block'>
                    Үнэ
                  </label>
                  <input
                    type='number'
                    placeholder='Үнэ оруулах...'
                    className='w-full bg-[#1E2530] text-white rounded-md px-4 py-2.5 text-sm border border-transparent focus:border-[#8CC63F] focus:outline-none'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className='flex justify-end mt-8'>
            <button className='bg-[#8CC63F] text-black px-8 py-2.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all'>
              Хадгалах
            </button>
          </div>
        </div>

        {/* Branch List */}
        <div className='mt-10'>
          <h2 className='text-white text-lg font-semibold mb-4'>Салбарууд</h2>
          <div className='bg-[#0E131D] bg-opacity-90 rounded-lg overflow-hidden'>
            <table className='w-full'>
              <thead className='border-b border-gray-800'>
                <tr className='text-gray-400 text-sm'>
                  <th className='text-left py-4 px-4'>Зураг</th>
                  <th className='text-left px-4'>Бүтээгдэхүүний нэр</th>
                  <th className='text-left px-4'>Төрөл</th>
                  <th className='text-left px-4'>Үнэ</th>
                  <th className='text-right px-4'></th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-white text-sm hover:bg-[#1E2530] transition-colors'>
                  <td className='py-4 px-4'>
                    <img
                      src='https://news.mn/wp-content/archive1/news/photo/2015/5/8/4b55a8ddb7dfcac61852cfcc819f5a4coriginal.jpg'
                      alt='Branch'
                      className='w-12 h-12 object-cover rounded-md'
                    />
                  </td>
                  <td className='px-4'>Цуйван</td>
                  <td className='px-4'>Хоол</td>
                  <td className='px-4 text-gray-400'> 14000</td>
                  <td className='px-4 text-right space-x-2'>
                    <button className='text-[#8CC63F] hover:text-[#7AB52F] transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 inline'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                        />
                      </svg>
                    </button>
                    <button className='text-red-500 hover:text-red-600 transition-colors'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 inline'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
