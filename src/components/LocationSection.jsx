"use client";
import React from "react";
import SaveButton from "./icons/SaveButton";
import PlusIcon from "./icons/PlusIcon";




function LocationSection() {
  return (
    <section className="mt-4">
      <button className="flex flex-col justify-center items-start px-5 py-2.5 max-w-full text-sm font-bold text-white bg-gray-800 rounded-md w-[203px]">
        <div className="flex gap-3.5 items-center">
          <span className="self-stretch my-auto">Байршил нэмэх</span>
          <div className="w-6 h-6 bg-[#8CBC01] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4">
                      <PlusIcon></PlusIcon>
                    </div>
                  </div>
        </div>
        
      </button>
      <div className="flex flex-wrap gap-10 px-7 py-3.5 mt-3 max-w-full text-xs text-white rounded-xl bg-zinc-900 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[529px] max-md:pr-5 max-md:mr-2.5">
        <input
          type="text"
          placeholder="Байршил оруулах..."
          className="grow shrink-0 px-4 py-2 bg-gray-800 rounded-md basis-0 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-fit max-md:pr-5"
        />
       <SaveButton/>
      </div>
    </section>
  );
}

export default LocationSection;


