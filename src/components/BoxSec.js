import React from "react";
import chat from "../images/chat.svg";
import medal from "../images/medal.svg";
import computer from "../images/computer.svg";

const BoxSec = () => {
  return (
    <section className="relative justify-center items-center bg-gradient-to-r from-gray-700 to-gray-950 text-white pt-16 pb-16">
  <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col">
    <div className="flex justify-center items-center max-w-[1280px] w-full flex-col">
      <h1 className="font-bold text-2xl md:text-[48px] leading-[42px] md:leading-[54px] text-center">
        Ditch Theory-Driven Courses and <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
          Enter the World
        </span>{" "}
        of a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
          True Developer
        </span>
      </h1>
    </div>
  </div>

  {/* boxes */}
  <div className="flex flex-col md:flex-row max-w-5xl mx-auto justify-center items-center my-10 space-y-4 md:space-y-0 md:space-x-4">
    {/* box 1 */}
    <div className="rounded-md min-w-[370px] m-2 p-6 hover:bg-gray-900 transition-all duration-400">
      <div className="flex flex-col px-5 opacity-1">
        <div className="flex justify-center items-center rounded-full w-[70px] h-[70px] bg-[#2190FF]">
          <div className="relative rounded-full w-[32px] h-[32px]">
            <span className="box-border block overflow-hidden w-[32px] h-[32px] m-0 p-0 border-0 absolute ring-0">
              <img className="bg-[#2190FF]" src={chat} alt="" />
            </span>
          </div>
        </div>
        <h1 className="font-semibold text-[24px] leading-[30px] text-white my-5">
          Expert Coaching Support
        </h1>
        <p className="text-[20px] leading-[23px] text-[#A3B3BC]">
          Gain 24/7 access to a private community of coders looking to advance
          their knowledge and experience, as well as their careers.
        </p>
      </div>
    </div>

    {/* box 2 */}
    <div className="rounded-[10px] min-w-[370px] m-2 p-6 hover:bg-gray-800 transition-all duration-400">
      <div className="flex flex-col px-5 opacity-1">
        <div className="flex justify-center items-center rounded-full w-[70px] h-[70px] bg-[#d65858]">
          <div className="relative rounded-full w-[32px] h-[32px]">
            <span className="box-border block overflow-hidden w-[32px] h-[32px] m-0 p-0 border-0 absolute ring-0">
              <img className="bg-[#d65858]" src={medal} alt="" />
            </span>
          </div>
        </div>
        <h1 className="font-semibold text-[24px] leading-[30px] text-white my-5">
          Real-world experience
        </h1>
        <p className="text-[20px] leading-[23px] text-[#A3B3BC]">
          Theory will only get you so far, but building projects from the
          ground up will bolster your career in the software development space.
        </p>
      </div>
    </div>

    {/* box 3 */}
    <div className="rounded-[10px] min-w-[370px] m-2 p-6 hover:bg-gray-700 transition-all duration-400">
      <div className="flex flex-col px-5 opacity-1">
        <div className="flex justify-center items-center rounded-full w-[70px] h-[70px] bg-[#2190FF]">
          <div className="relative rounded-full w-[32px] h-[32px]">
            <span className="box-border block overflow-hidden w-[32px] h-[32px] m-0 p-0 border-0 absolute ring-0">
              <img className="bg-[#2190FF]" src={computer} alt="" />
            </span>
          </div>
        </div>
        <h1 className="font-semibold text-[24px] leading-[30px] text-white my-5">
          JSM Pro Certificates
        </h1>
        <p className="text-[20px] leading-[23px] text-[#A3B3BC]">
          Earn JSM Pro certification for each course you complete and show
          hiring managers and clients that you're a programming pro.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default BoxSec;
