import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="flex  w-[100%] h-[80vh] relative MasterFooter pt-10">
      <div className="w-[50%] h-auto flex justify-start items-end p-8 text-5xl text-white">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 60"
          fill="white"
          className="w-[50%] h-auto"
        >
          <text
            x="0"
            y="48"
            fontFamily="Times New Roman, serif"
            fontSize="48"
            letterSpacing="8"
          >
            M
          </text>
          <text
            x="38"
            y="39"
            fontFamily="Times New Roman, serif"
            fontSize="48"
            letterSpacing="8"
          >
            c
          </text>
          <text
            x="58"
            y="48"
            fontFamily="Times New Roman, serif"
            fontSize="48"
            letterSpacing="8"
          >
            ALPINE
          </text>
        </svg>
      </div>
      <div>
        <div className="MyNavFooter w-auto h-[50%] text-6xl text-white overflow-hidden max-sm:text-2xl max-sm:h-auto max-sm:mb-5 ">
          <p>Project</p>
          <p>Philosophy</p>
          <p>Team</p>
          <p>Books&Press</p>
          <p>Furniture Lines</p>
        </div>
        <div className="DirectNavFooter w-full h-[25%] gap-72 flex justify-end items-end ml-3 max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <div className="w-[50%] h-[50%] text-white text-base max-sm:w-full max-sm:text-xs">
            <p>Instagram</p>
            <p>FaceBook</p>
            <p>09152087822</p>
          </div>
          <div className="w-[50%] h-[50%] text-white text-base max-sm:w-full max-sm:text-xs">
            <p>Instagram</p>
            <p>FaceBook</p>
            <p>09152087822</p>
          </div>
        </div>
        <div className="w-[150%] h-[15%] ml-3 mt-10 flex justify-center items-strat text-white flex-col DirectNavFooter2   items-start  max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-3">
           <p>Instagram</p>
            <p>FaceBook</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
