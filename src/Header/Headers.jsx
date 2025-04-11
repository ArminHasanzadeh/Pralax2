import React from "react";

function header(props) {
  return (
    <header className="BoxHeader h-auto flex justify-center items-center pt-10 left-10 gap-4 fixed top-0  z-50">
      <div className="LogoMc w-[40px] h-[40px] flex justify-center items-center text-2xl">
        <span className="MC">MC</span>
      </div>
      <div className="Hamberger w-[38px] h-[38px] flex justify-center items-center text-2xl bg-white">
        <span className="cross1 ">|</span>
        <span className="cross2">|</span>
      </div>
    </header>
  );
}

export default header;
