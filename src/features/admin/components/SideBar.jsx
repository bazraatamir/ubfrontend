import React from "react";
import {Link} from "react-router";
function SideBar() {
  return (
    <div className='sticky top-0 left-0 bottom-0 w-[250px] sm:w-[200px] bg-[#132025] text-white shadow-lg flex flex-col justify-between py-6 px-6 z-20 border-r border-[#1E2A38] h-screen'>
      {/* Header */}
      <div className='flex flex-col items-center text-sm text-lime-50'>
        <img
          src='https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/96e23556c599a4c63754cbf31aac9d5fe15ff941a73db90cd8b27e09e692f152?placeholderIfAbsent=true'
          alt='Logo header'
          className='object-contain w-[150px] mb-6'
        />
      </div>

      {/* Navigation */}
      <nav className='flex flex-col gap-7 bg-[#2F323C] rounded-xl py-5 px-4 sm:px-3 text-lg w-full'>
        <Link to={"/admin/dashboard"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <HomeIcon />
            </div>
            <span className='text-sm sm:text-base'>Нүүр</span>
          </div>
        </Link>
        <Link to={"restaurants"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <SettingsIcon />
            </div>
            <span className='text-sm sm:text-base'>Ресторан</span>
          </div>
        </Link>
        <Link to={"special"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <LocationIcon />
            </div>
            <span className='text-sm sm:text-base'>Онцлох</span>
          </div>
        </Link>
        <Link to={"contacts"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <ContactIcon />
            </div>
            <span className='text-sm sm:text-base'>Харилцах</span>
          </div>
        </Link>
      </nav>

      {/* Logout */}
      <div className='mt-auto pb-6 flex justify-center'>
        <img
          src='https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/6c26e885fa661b99c7b81afea694bd445c17746b58ae2aad8387056ffa550295?placeholderIfAbsent=true'
          alt='Footer logo'
          className='object-contain w-[100px]'
        />
      </div>
    </div>
  );
}

// const NavItem = ({icon, text}) => {
//   return (

//   );
// };

// Icons
const HomeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
    />
  </svg>
);

export default SideBar;
