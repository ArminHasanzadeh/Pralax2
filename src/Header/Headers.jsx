import React, { useState } from "react";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="BoxHeader h-auto flex items-center pt-10 left-10 gap-4 fixed top-0 z-50 w-full ">
      {/* لوگو و آیکن منو کنار هم */}
      <div className="flex items-center gap-4 relative z-10 top-2 left-5">
        <div className="LogoMc w-[40px] h-[40px] flex justify-center items-center text-2xl">
          <span className="MC">MC</span>
        </div>

        {/* آیکن منو */}
        <button
          onClick={() => setOpen(!open)}
          className={`w-10 h-10 flex justify-center items-center rounded-full bg-white  ${
            open ? "croxx " : ""
          }`}
        >
          {/* دو خط مساوی که به ضربدر تبدیل می‌شود */}
          <div className="flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
                open ? "rotate-45 translate-x-0 translate-y-0.5  bg-white" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out mt-1 ${
                open
                  ? "-rotate-45 -translate-x-0.6 -translate-y-1 bg-white "
                  : ""
              }`}
            ></span>
          </div>
        </button>
      </div>
      <div
        className={`w-[60rem] h-[50rem] bg-gray-700 absolute left-0 top-4 flex justify-center items-center Navbar transition-all duration-500 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-[80rem]"}`}
      >
        <div className="BoxNav1 w-[30%] h-full flex-col"></div>
        <div className="BoxNav2 w-[70%] h-[95%] border-l">
          <div className="MyNav w-auto  h-[50%]  text-6xl text-white overflow-hidden ">
            <p className={` ${open ? "-translate-x-0" : "-translate-x-50"}`}>
              Project
            </p>
            <p>Philosophy</p>
            <p>Team</p>
            <p>Books&Press</p>
            <p>Furniture Lines</p>
          </div>
          <div className="DirectNav w-auto h-[50%] flex justify-end items-end ml-3 ">
            <div className="w-[50%] h-[25%]  text-white">
              <p>Instagram</p>
              <p>FaceBook</p>
              <p>09152087822</p>
            </div>
            <div className="w-[50%] h-[25%]  text-white">
              <p>Instagram</p>
              <p>FaceBook</p>
              <p>09152087822</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
