import React, {useState} from "react";
import axiosInstance from "../../../shared/axios";

const ContactForm = ({id}) => {
  const [formData, setFormData] = useState({
    restaurantId: id,
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form submission logic here

    // Reset form after submission
    setFormData({
      restaurantId: id,
      name: "",
      email: "",
      message: "",
    });
    console.log(formData);
    const res = await axiosInstance.post("/feedback", formData);
    console.log(res);
  };

  return (
    <div className='bg-[#0e1b21] text-white  p-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row mt-10 gap-10 justify-between'>
          <div className='md:w-1/2'>
            <div className='w-full h-96 rounded-lg overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24214.802390513367!2d106.90891716275635!3d47.91856236839566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925a855287eb%3A0xfe1df0a07d79e94!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2sus!4v1713957048232!5m2!1sen!2sus'
                className='w-full h-full border-0'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Google Maps'></iframe>
            </div>
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-3xl mb-8'>Сэтгэгдэл үлдээх</h2>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex-1'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    className='w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400'
                    required
                  />
                </div>
                <div className='flex-1'>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400'
                    required
                  />
                </div>
              </div>

              <div className='mt-4'>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your message'
                  rows='5'
                  className='w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 resize-none'
                  required></textarea>
              </div>

              <div className='flex justify-end mt-4'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300'>
                  Sent Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
