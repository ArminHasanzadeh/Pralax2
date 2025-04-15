import React, { useState } from "react";

function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="BoxHeader h-auto flex items-center pt-10 left-10 gap-4 fixed top-0 z-50 w-full">
      {/* لوگو و آیکن منو کنار هم */}
      <div className="flex items-center gap-4">
        <div className="LogoMc w-[40px] h-[40px] flex justify-center items-center text-2xl">
          <span className="MC">MC</span>
        </div>

        {/* آیکن منو */}
        <button
          onClick={() => setOpen(!open)}  // تغییر وضعیت با کلیک
          className="w-10 h-10 flex justify-center items-center rounded-full bg-white"
        >
          {/* دو خط مساوی که به ضربدر تبدیل می‌شود */}
          <div className="flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out ${
                open ? "rotate-45 translate-x-0 translate-y-0.5 " : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out mt-1 ${
                open ? "-rotate-45 -translate-x-0.5 -translate-y-1" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
