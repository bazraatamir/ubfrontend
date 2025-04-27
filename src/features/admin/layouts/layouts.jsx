// Layout.js
import React from "react";
import {Outlet} from "react-router-dom";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <div className='flex min-h-screen bg-[#0E1B21]'>
      <SideBar />
      <main className='flex-1 p-4 bg-[#0E1B21]'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
