import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {IoMenuOutline} from "react-icons/io5";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='relative'>
      {/* Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className='fixed top-[56px] right-[56px] z-50 text-white hover:text-[#7CFF6B]'>
        <IoMenuOutline size={50} />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className='fixed inset-0 bg-black/80 z-40'
            onClick={() => setIsSidebarOpen(false)}
          />
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </>
      )}

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
