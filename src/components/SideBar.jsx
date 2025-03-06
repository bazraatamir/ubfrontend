import React from "react";
import { FaPencil } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "./Logo";
import Footer from "./footer";

const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-60 bg-gradient-to-b from-[#2E2E2E] to-[#1A1A1A] text-white shadow-lg flex flex-col justify-between p-6 z-20">
      <div className="flex justify-center mb-6">
        <Logo></Logo>
      </div>

      <nav className="flex flex-col gap-8 mb-[200px] bg-[2F323C]">
        <NavItem icon={<RiHome2Line size={28} />} text="Нүүр" />
        <NavItem icon={<FaPencil size={26} />} text="Засвар" />
        <NavItem icon={<IoLocationOutline size={28} />} text="Салбар" />
      </nav>

      <Footer></Footer>
    </div>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 px-6 py-4 rounded-xl cursor-pointer text-xl font-semibold">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SideBar;
