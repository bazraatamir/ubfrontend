import React from "react";
import HomeIcon from "./icons/HomeIcon";
import LogoutIcon from "./icons/LogoutIcon";

const SideBar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-16 md:w-52 bg-gradient-to-b from-[rgba(80,79,79,0.08)] to-[rgba(182,181,181,0.02)] hidden md:block z-10">
      {/* Sidebar Navigation */}
      <div className="absolute w-14 md:w-36 left-3 md:left-8 top-1/3 bg-[#2E3033] rounded-[10px] shadow-md">
        <div className="flex flex-col items-center justify-center space-y-6 py-6">
          <div className="w-8 md:w-10 h-8 md:h-10">
            <HomeIcon></HomeIcon>
          </div>
          <div className="w-4 h-0.5 border-t border-white"></div>
          <div className="w-8 md:w-10 h-8 md:h-10">
            <LogoutIcon></LogoutIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
