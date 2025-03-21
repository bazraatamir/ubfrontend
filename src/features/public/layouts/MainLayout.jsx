import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-[56px] right-[56px] z-50 text-white hover:text-[#7CFF6B]"
      >
        <IoMenuOutline size={50} />
      </button>
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </>
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;