import React from "react";
import Right from "../images/Right.svg";

const Join = () => {
  return (
    <section className="relative flex justify-center items-center px-6 py-12 bg-gradient-to-r from-gray-700 to-gray-950 text-white pt-8">
  <div className="flex justify-center items-center max-w-[1280px] w-full flex-col">
    <h2 className="font-bold text-3xl md:text-5xl leading-[1.5] text-center pb-5">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
        Launch Your Career
      </span>{" "}
      Today <br /> With{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
        JS Mastery Pro
      </span>
    </h2>
    <div className="flex justify-center items-center flex-wrap w-full">
      <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] m-4 min-w-[260px] min-h-[44px]">
        <button className="font-semibold text-sm md:text-base leading-[16px]">
          JawaScript Mastery course
        </button>
        <div className="relative w-[30px] h-[30px] ml-2">
          <span className="box-border block m-0 p-0">
            <img className="absolute inset-0 box-border invert p-0 m-auto block w-0 h-0 min-w-[100%] min-h-[100%] max-w-[100%] max-h-[100%]" src={Right} alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] m-4 min-w-[260px] min-h-[44px]">
        <button className="font-semibold text-sm md:text-base leading-[16px]">
          FilmPire Course
        </button>
        <div className="relative w-[30px] h-[30px] ml-2">
          <span className="box-border block m-0 p-0">
            <img className="absolute inset-0 box-border invert p-0 m-auto block w-0 h-0 min-w-[100%] min-h-[100%] max-w-[100%] max-h-[100%]" src={Right} alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] m-4 min-w-[260px] min-h-[44px]">
        <button className="font-semibold text-sm md:text-base leading-[16px]">
          NFT MarketPlace Course
        </button>
        <div className="relative w-[30px] h-[30px] ml-2">
          <span className="box-border block m-0 p-0">
            <img className="absolute inset-0 box-border invert p-0 m-auto block w-0 h-0 min-w-[100%] min-h-[100%] max-w-[100%] max-h-[100%]" src={Right} alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] m-4 min-w-[260px]  min-h-[44px]">
        <button className="font-semibold text-sm md:text-base leading-[16px]">
          JSM Masterclass Experience
        </button>
        <div className="relative w-[30px] h-[30px] ml-2">
          <span className="box-border block m-0 p-0">
            <img className="absolute inset-0 box-border invert p-0 m-auto block w-0 h-0 min-w-[100%] min-h-[100%] max-w-[100%] max-h-[100%]" src={Right} alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Join;
