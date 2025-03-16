<<<<<<< HEAD
import React, {useState} from "react";
import {FaPencil} from "react-icons/fa6";
import {RiHome2Line} from "react-icons/ri";
import {IoLocationOutline} from "react-icons/io5";
=======
import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";
>>>>>>> 9846dfee1e6b5a45dce19bda4478f807871b8730

import Footer from "./Footer";
import Logo from "../../../shared/icons/Logo";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("Нүүр");
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
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
=======
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-30 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 bg-gradient-to-b from-[#2E2E2E] to-[#1A1A1A] text-white shadow-lg flex flex-col justify-between p-4 z-20 transition-all duration-300 
        ${isOpen ? "w-64" : "w-20"} lg:w-64`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Logo className="w-8 h-8" />
        </div>

        {/* Navigation with even smaller width */}
        <nav
          className={`flex flex-col gap-2 mb-auto bg-[#2F323C] rounded-[16px] py-4 px-2 font-thin 
          transition-all duration-300 ${
            isOpen ? "w-40" : "w-14"
          } lg:w-40 self-center`}
        >
          <NavItem
            icon={<RiHome2Line size={20} />}
            text="Нүүр"
            active={activeItem === "Нүүр"}
            onClick={() => setActiveItem("Нүүр")}
            isOpen={isOpen}
          />
          <NavItem
            icon={<FaPencil size={18} />}
            text="Засвар"
            active={activeItem === "Засвар"}
            onClick={() => setActiveItem("Засвар")}
            isOpen={isOpen}
          />
          <NavItem
            icon={<IoLocationOutline size={20} />}
            text="Салбар"
            active={activeItem === "Салбар"}
            onClick={() => setActiveItem("Салбар")}
            isOpen={isOpen}
          />
        </nav>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

const NavItem = ({ icon, text, active, onClick, isOpen }) => {
>>>>>>> 9846dfee1e6b5a45dce19bda4478f807871b8730
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 
      ${
        active
          ? "text-white bg-gray-700"
          : "text-gray-300 hover:text-white hover:bg-gray-700"
<<<<<<< HEAD
      } transition-all duration-300 px-4 py-3 rounded-lg cursor-pointer text-sm font-medium`}
      onClick={onClick}>
=======
      }`}
      onClick={onClick}
    >
>>>>>>> 9846dfee1e6b5a45dce19bda4478f807871b8730
      {icon}
      <span
        className={`whitespace-nowrap transition-all duration-300 ${
          isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
        } lg:opacity-100 lg:w-auto`}
      >
        {text}
      </span>
    </div>
  );
};

export default SideBar;
