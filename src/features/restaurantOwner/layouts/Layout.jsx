// Layout.js
import React from "react";
import {Outlet} from "react-router-dom";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Layout = () => {
  return (
    <div className="flex bg-[#0E1B21]">
      <SideBar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
