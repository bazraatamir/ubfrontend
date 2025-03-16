import React, {useState} from "react";
import {FaPencil} from "react-icons/fa6";
import {RiHome2Line} from "react-icons/ri";
import {IoLocationOutline} from "react-icons/io5";

import Footer from "./Footer";
import Logo from "../../../shared/icons/Logo";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("Нүүр");

  return (
    <div className='fixed left-0 top-0 bottom-2 w-48 bg-gradient-to-b from-[#2E2E2E] to-[#1A1A1A] text-white shadow-lg flex flex-col justify-between p-4 z-20'>
      <div className='flex justify-center mb-4'>
        <Logo className='w-8 h-8' />
      </div>

      <nav className='flex flex-col gap-2 mb-[400px] bg-[#2F323C] rounded-[16px] py-[20px] px-[10px] font-thin'>
        <NavItem
          icon={<RiHome2Line size={20} />}
          text='Нүүр'
          active={activeItem === "Нүүр"}
          onClick={() => setActiveItem("Нүүр")}
        />
        <NavItem
          icon={<FaPencil size={18} />}
          text='Засвар'
          active={activeItem === "Засвар"}
          onClick={() => setActiveItem("Засвар")}
        />
        <NavItem
          icon={<IoLocationOutline size={20} />}
          text='Салбар'
          active={activeItem === "Салбар"}
          onClick={() => setActiveItem("Салбар")}
        />
      </nav>

      <Footer />
    </div>
  );
};

const NavItem = ({icon, text, active, onClick}) => {
  return (
    <div
      className={`flex items-center gap-3 ${
        active
          ? "text-white bg-gray-700"
          : "text-gray-300 hover:text-white hover:bg-gray-700"
      } transition-all duration-300 px-4 py-3 rounded-lg cursor-pointer text-sm font-medium`}
      onClick={onClick}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SideBar;
