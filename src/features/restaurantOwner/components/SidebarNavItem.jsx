"use client";
import React from "react";

const SidebarNavItem = ({icon, label, isActive}) => {
  return isActive ? (
    <div className='flex gap-3 px-3.5 py-2.5 rounded-xl bg-zinc-300 bg-opacity-20 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] w-[92px]'>
      <img
        src={icon}
        className='object-contain shrink-0 aspect-[0.69] w-[11px]'
        alt=''
      />
      <span>{label}</span>
    </div>
  ) : (
    <div className='flex gap-2 w-[59px]'>
      {icon && (
        <img
          src={icon}
          className='object-contain shrink-0 aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[21px]'
          alt=''
        />
      )}
      <span className='my-auto'>{label}</span>
    </div>
  );
};

export default SidebarNavItem;
