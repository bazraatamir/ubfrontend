import React from "react";

const AboutSection = ({text, image}) => {
  return (
    <div className='w-full bg-[#0e1b21]' data-aos='fade-up'>
      <section className='relative flex flex-col items-center w-full text-center '>
        <div className='relative w-full '>
          <img
            src={`http://localhost:3000/uploads/${image}`}
            className='object-cover w-full h-[90vh] '
            alt='Restaurant interior'
          />
          <div className='absolute inset-0'></div>
        </div>
        <article
          data-aos='fade-up'
          className='relative w-full max-w-[1179px] px-4 sm:px-6 md:px-8 my-8 md:my-16'>
          <p className='text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-[50px] mt-4 md:mt-[20px] text-white font-bold'>
            Манай Тухай
          </p>
          <p className='text-base sm:text-lg md:text-xl leading-snug text-gray-200'>
            {text}
          </p>
        </article>
      </section>
    </div>
  );
};

export default AboutSection;
