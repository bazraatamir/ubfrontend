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
        <Link to={"/owner/face"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <HomeIcon />
            </div>
            <span className='text-sm sm:text-base'>home</span>
          </div>
        </Link>
        <Link to={"managerestaurant"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <SettingsIcon />
            </div>
            <span className='text-sm sm:text-base'>Засвар</span>
          </div>
        </Link>
        <Link to={"addMoreInfo"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <InfoIcon />
            </div>
            <span className='text-sm sm:text-base'>Нэмэлт</span>
          </div>
        </Link>
        <Link to={"addMenu"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <MenuIcon />
            </div>
            <span className='text-sm sm:text-base'>Меню</span>
          </div>
        </Link>
        <Link to={"nemsensalbar"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <BranchIcon />
            </div>
            <span className='text-sm sm:text-base'>Салбар</span>
          </div>
        </Link>
        <Link to={"comments"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <CommentIcon />
            </div>
            <span className='text-sm sm:text-base'>Сэтгэгдэл</span>
          </div>
        </Link>
        <Link to={"videos"}>
          <div className='flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#2A2F38]'>
            <div className='w-5 h-5'>
              <VideoIcon />
            </div>
            <span className='text-sm sm:text-base'>Видео</span>
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

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const BranchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const CommentIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" 
    />
  </svg>
);

const VideoIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" 
    />
  </svg>
);

export default SideBar;
