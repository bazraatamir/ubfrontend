import React from "react";
import {Outlet} from "react-router";
export default function AuthLayout() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0A171F] px-4'>
      <div className='w-full max-w-md p-6 bg-[#0A171F] text-white rounded-lg shadow-lg'>
        <Outlet />
      </div>
    </div>
  );
}
