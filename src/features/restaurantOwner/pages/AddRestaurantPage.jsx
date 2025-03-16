"use client";
import React, { useState } from "react";
import PlusIcon from "../../../shared/icons/PlusIcon";
import SideBar from "../layouts/SideBar";

/**
 * AddRestaurantPage component - Main dashboard for branch management
 * @returns {JSX.Element} The rendered component
 */
const AddRestaurantPage = () => {
  const [activeNavItem, setActiveNavItem] = useState("branch");

  const handleNavItemClick = (itemId) => {
    setActiveNavItem(itemId);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleAddBranch = () => {
    console.log("Add branch clicked");
  };

  return (
    <>
      <link
        rel="stylesheet preload"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        as="style"
      />
      <main className="flex min-h-screen bg-gray-900 max-sm:flex-col">
        <SideBar
          activeItem={activeNavItem}
          onNavItemClick={handleNavItemClick}
          onLogout={handleLogout}
        />

        <section className="flex-1 px-5 py-7 max-md:px-4 max-md:py-5 max-sm:p-4">
          <div className="space-y-6">
            <header>
              {/* Салбар нэмэх товч */}
              <div className="w-[170px] h-10 bg-[#2F323C] rounded-[5px] shadow-inner">
                <div className="flex items-center justify-between px-4 h-full">
                  <span className="text-white text-[14px] font-bold">
                    Салбар нэмэх
                  </span>
                </div>
              </div>

              <p className="text-sm text-white max-w-[923px] max-sm:text-sm mt-4">
                Энэхүү хэсэгт та салбарын мэдээлэл нэмэх, засах, устгах боломжтой. 
                Хэрвээ та салбар нэмэх бол{" "}
                <span className="font-bold">салбар нэмэх</span> товчин дээр дарна уу.
              </p>
            </header>

            <button 
              onClick={handleAddBranch}
              className="focus:outline-none"
              aria-label="Add branch"
            >
              <PlusIcon />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddRestaurantPage;
