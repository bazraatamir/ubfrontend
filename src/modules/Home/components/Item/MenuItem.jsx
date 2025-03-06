import React from "react";

function MenuItem({ name, description, image, altText, reversed = false }) {
  const ContentSection = () => (
    <div className="flex flex-col gap-8 w-[559px] max-md:w-full max-md:text-center">
      <h3 className="text-3xl font-bold text-white max-sm:text-2xl">{name}</h3>
      <p className="text-xl text-stone-400 max-sm:text-base">{description}</p>
    </div>
  );

  const ImageSection = () => (
    <img
      src={image}
      className="object-cover h-[450px] w-[450px] max-sm:w-full max-sm:h-auto"
      alt={altText}
    />
  );

  return (
    <article className="flex gap-12 items-center mb-8 max-md:flex-col max-md:gap-8 max-md:items-center">
      {reversed ? (
        <>
          <ImageSection />
          <ContentSection />
        </>
      ) : (
        <>
          <ContentSection />
          <ImageSection />
        </>
      )}
    </article>
  );
}

export default MenuItem;
