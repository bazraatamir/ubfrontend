import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-[#0e1b21]" data-aos="fade-up">
      <section className="relative flex flex-col items-center w-full text-center ">
        <div className="relative w-full ">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4403dd2d1543134213ab63c015420cd4372ad679"
            className="object-cover w-full h-[90vh] "
            alt="Restaurant interior"
          />
          <div className="absolute inset-0"></div>
        </div>
        <article
          data-aos="fade-up"
          className="relative w-full max-w-[1179px] px-4 sm:px-6 md:px-8 my-8 md:my-16"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-[50px] mt-4 md:mt-[20px] text-white font-bold">
            Манай Тухай
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-snug text-gray-200">
            Манай ресторан бол амт, чанар, тав тухыг нэг дор цогцлоосон онцгой
            орчин юм. Бид үйлчлүүлэгч бүрийн сэтгэл ханамжийг дээдэлж, шинэхэн
            орц, төгс амт бүхий хоолыг мэргэжлийн түвшинд бэлтгэн хүргэхийг
            зорьдог.Манай туршлагатай тогоочид олон улсын болон үндэсний шилдэг
            жоруудыг ашиглан өвөрмөц амтыг мэдрүүлэхийн төлөө ажилладаг. Та
            манай ресторанаас Монголын уламжлалт хоол, Европын нарийн амттан,
            Азийн амтлаг зоог зэрэг олон төрлийн хоолыг амтлах боломжтой.
          </p>
          <p className="mb-8 text-base sm:text-lg md:text-xl leading-snug text-gray-200">
            Рестораны тохилог орчин, дотно уур амьсгал нь таны гэр бүл, найз
            нөхөд, .
          </p>
        </article>
      </section>
    </div>
  );
};

export default AboutSection;
