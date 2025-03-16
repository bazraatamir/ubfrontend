import React from "react";

function HeroSection() {
  return (
    <section className="flex relative flex-col items-center w-full bg-[#0E1B21]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4403dd2d1543134213ab63c015420cd4372ad679"
        className="object-cover w-full h-[832px] max-sm:h-[400px]"
        alt="Restaurant interior"
      />
      <article className="relative mx-auto my-16 max-w-[1179px]">
        <p className="mb-8 text-xl leading-snug text-white max-sm:text-base">
          Манай ресторан бол амт, чанар, тав тухыг нэг дор цогцлоосон онцгой
          орчин юм. Бид үйлчлүүлэгч бүрийн сэтгэл ханамжийг дээдэлж, шинэхэн
          орц, төгс амт бүхий хоолыг мэргэжлийн түвшинд бэлтгэн хүргэхийг
          зорьдог.Манай туршлагатай тогоочид олон улсын болон үндэсний шилдэг
          жоруудыг ашиглан өвөрмөц амтыг мэдрүүлэхийн төлөө ажилладаг. Та манай
          ресторанаас Монголын уламжлалт хоол, Европын нарийн амттан, Азийн
          амтлаг зоог зэрэг олон төрлийн хоолыг амтлах боломжтой. Ресторанын
          тохилог орчин, дотно уур амьсгал нь таны гэр бүл, найз нөхөд, .
        </p>
        <div className="w-full h-px bg-stone-400" aria-hidden="true" />
      </article>
    </section>
  );
}

export default HeroSection;
