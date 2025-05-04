import React, { useState } from "react";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="BoxHeader h-auto flex items-center pt-10 left-10 gap-4 fixed top-0 z-50 w-full max-sm:flex-col max-sm:items-start max-sm:pt-5 max-sm:left-0">
      {/* لوگو و آیکن منو کنار هم */}
      <div className="flex items-center gap-4 relative z-10 top-2 left-5 max-sm:static max-sm:ml-5">
        <div className="LogoMc w-[40px] h-[40px] flex justify-center items-center text-2xl max-sm:w-[30px] max-sm:h-[30px] max-sm:text-xl">
          <span className="MC">MC</span>
        </div>

        {/* آیکن منو */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-10 h-10 flex justify-center items-center rounded-full bg-white max-sm:w-8 max-sm:h-8 ${
            open ? "croxx" : ""
          }`}
        >
          {/* دو خط مساوی که به ضربدر تبدیل می‌شود */}
          <div className="flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
                open ? "rotate-45 translate-x-0 translate-y-0.5 bg-white" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out mt-1 ${
                open
                  ? "-rotate-45 -translate-x-0.6 -translate-y-1 bg-white"
                  : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Navbar که باز و بسته میشه */}
      <div
        className={`w-[60rem] h-[50rem] bg-gray-700 absolute left-0 top-4 flex justify-center items-center Navbar transition-all duration-500 ease-in-out max-sm:w-[20rem] max-sm:h-[30rem] ${
          open ? "translate-x-0" : "-translate-x-[80rem]"
        }`}
      >
        {/* BoxNav1 حذف بشه تو موبایل */}
        <div className="BoxNav1 w-[30%] h-full flex-col max-sm:hidden"></div>

        {/* BoxNav2 تو موبایل flex-col بشه */}
        <div className="BoxNav2 w-[70%] h-[95%] flex flex-col justify-between items-start max-sm:w-full max-sm:border-0 max-sm:px-5 max-sm:justify-end ">
          <div className="MyNav w-auto h-[50%] text-6xl text-white overflow-hidden max-sm:text-2xl max-sm:h-auto max-sm:mb-5 ">
            <p className={`${open ? "-translate-x-0" : "-translate-x-50"}`}>
              Project
            </p>
            <p>Philosophy</p>
            <p>Team</p>
            <p>Books&Press</p>
            <p>Furniture Lines</p>
          </div>

          <div className="DirectNav w-full h-[50%] flex justify-end items-end  max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
            <div className="w-[50%] h-[25%] text-white text-base max-sm:w-full max-sm:text-xs">
            <div> <a href={"https://www.instagram.com/armin__hasnzadeh?igsh=cndnejBxcXo5cTh6"}>Instagram</a></div>
            <div>  <a href={"https://github.com/ArminHasanzadeh?tab=overview&from=2025-05-01&to=2025-05-03"}>Github</a></div>
              <p>09152087822</p>
            </div>
            <div className="w-[50%] h-[25%] text-white text-base max-sm:w-full max-sm:text-xs">
              <div> <a href={"https://www.instagram.com/armin__hasnzadeh?igsh=cndnejBxcXo5cTh6"}>Instagram</a></div>
              <div>  <a href={"https://github.com/ArminHasanzadeh?tab=overview&from=2025-05-01&to=2025-05-03"}>Github</a></div>
              <p>09152087822</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
