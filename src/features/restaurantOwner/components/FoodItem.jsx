import React from "react";

const FoodItem = ({ name, icon }) => {
  const handleDelete = () => {
    console.log(`Deleting ${name}`);
  };

  return (
    <article className="mb-4">
      <div className="flex gap-12 items-center">
        <div className="flex gap-6 items-center self-stretch my-auto text-base text-white">
          <img
            src={icon}
            alt={`${name} icon`}
            className="object-contain rounded-none "
          />
          <div className="self-stretch my-auto w-[400px] rounded-md">
            <div className="px-6 py-3 bg-gray-800 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              {name}
            </div>
          </div>
        </div>
        <button
          onClick={handleDelete}
          aria-label={`Delete ${name}`}
          className="flex gap-2.5 items-center self-stretch p-3 my-auto bg-gray-800 rounded-md h-[36px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[36px]"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afb842ba41b12d00367e97cc1b77b43cada45f124e691cdecc51ab10540dc28f?placeholderIfAbsent=true&apiKey=8947fdbc91b3418387184c18824db628"
            alt="Delete icon"
            className="object-contain self-stretch my-auto aspect-square w-[16px]"
          />
        </button>
      </div>
      <div className="mt-3 w-full min-h-0 border-stone-300" />
    </article>
  );
};

export default FoodItem;
