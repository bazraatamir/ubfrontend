import React from "react";

const SaveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="self-end px-10 mt-6 font-bold text-white bg-lime-500 rounded-lg min-h-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      aria-label="Save changes"
    >
      Хадгалах
    </button>
  );
};

export default SaveButton;
