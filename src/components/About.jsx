import React from "react";

const About = () => {
  return (
    <div className="w-full bg-[#CDEA68] font-neue-montreal rounded-tl-3xl rounded-tr-3xl text-zinc-800">
      <div className="content pt-20 pb-10 px-16">
        <h1 className="text-[4.3vw] leading-[4vw] tracking-tight">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>

      <div className="w-full border-t-[1px] pb-24 px-16 text-[1.1vw] text-[#474747] border-[#a1b562] flex justify-between">
        <div className="w-[20vw] pt-6 mr-[13vw]">
          <p>What you can expect:</p>
        </div>
        <div className="w-[19vw] pt-6">
          <h1>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it's live or digital,
            delivered for one or a hundred people.
            <br /> <br /> <br />
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h1>
        </div>
        <div className="w-[20vw] mt-[7.9rem]">
          <p>
            S: <br />
            <br /> Instagram <br /> Behance <br /> Facebook <br /> Linkedin
          </p>
        </div>
      </div>

      <div className="w-full flex gap-5 border-t-[1px] pt-5 px-16 border-[#a1b562] pb-10 ">
        <div className="w-1/2">
            <h1 className="text-7xl">Our approach:</h1>
            <button className="uppercase justify-center flex items-center gap-10 px-7 py-4 bg-zinc-900 text-white mt-10 rounded-full">Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2">
        <img className="rounded-2xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  );
};

export default About;
