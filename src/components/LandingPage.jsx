import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index == 1 && (
                  <img className="ml-[0.4vw] mr-[0.5vw] w-[6.2vw] h-[4.2vw] rounded-md relative -top-[0.3vw] object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                )}
                <h1 className="uppercase text-[6vw] leading-[5.5vw] tracking-tighter font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none" key={index}>
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <div className="uppercase px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
