import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 overflow-hidden border-zinc-300 gap-10 flex whitespace-nowrap">
        <h1 className="text-[17vw] tracking-tighter leading-none font-bold pb-4 uppercase">we are ochi</h1>
        <h1 className="text-[17vw] tracking-tighter leading-none font-bold pb-4 uppercase">we are ochi</h1>
      </div>
    </div>
  );
};

export default Marquee;
