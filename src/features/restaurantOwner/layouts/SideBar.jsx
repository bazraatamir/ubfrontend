import React from "react";

function SideBar() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-50 bg-[#0F1624] text-white shadow-lg flex flex-col justify-between py-4 px-2 z-20 border-r border-[#1E2A38]">
      {/* Header */}
      <div className="flex flex-col grow text-sm text-lime-50 whitespace-nowrap max-md:mt-5">
        <div className="flex flex-col items-center px-0 pt-6 w-full pb-[50px] max-md:px-5 max-md:pb-24">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/96e23556c599a4c63754cbf31aac9d5fe15ff941a73db90cd8b27e09e692f152?placeholderIfAbsent=true"
            alt="Logo header"
            className="object-contain self-stretch w-full aspect-[2.63]"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-1 bg-[#2F323C] rounded-2xl py-0 px-4 text-lg w-[150px] ml-4">


          <NavItem
            imgSrc="https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/711fe2b8d03f38d29166207ff82d46cc3ac8782826736691343a1135295e645a?placeholderIfAbsent=true"
            text="Нүүр"
          />
          <NavItem
            imgSrc="https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/96e23556c599a4c63754cbf31aac9d5fe15ff941a73db90cd8b27e09e692f152?placeholderIfAbsent=true"
            className="object-contain shrink-0 aspect-[0.69] w-[11px]"
            text="Засвар"
          />
          <NavItem
            imgSrc="https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/c91726d255026d3a822d5b6883dcabf6a238e92f0295cf2a79940bec4f9f4a7e?placeholderIfAbsent=true"
            text="Салбар"
          />
        </nav>

        {/* Logout Button */}
        <div className="flex flex-col items-center mt-auto pb-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4f560f3098894f68b3412840c0587797/6c26e885fa661b99c7b81afea694bd445c17746b58ae2aad8387056ffa550295?placeholderIfAbsent=true"
          alt="Footer logo"
          className="object-contain max-w-full rounded-none aspect-[3.4] w-[119px]"
        />
      </div>
      </div>
    </div>
  );
}

const NavItem = ({ imgSrc, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full px-4 py-3 rounded-xl cursor-pointer text-base font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-gray-700">
      <img src={imgSrc} alt={text} className="w-6 h-6" />
      <span>{text}</span>
    </div>
  );
};

export default SideBar;
