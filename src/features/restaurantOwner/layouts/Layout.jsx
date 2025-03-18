// Layout.js
import React from "react";
import {Outlet} from "react-router-dom";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Layout = () => {
  return (
    <div>
      <SideBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
