import React from "react";
import herobg from "../images/herobg.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-700 to-gray-950 text-white pt-4">
      <div className="flex w:10/12 flex-col lg:flex-row justify-between items-center mx-auto">
        {/* Left Part */}
        <div className="gap-4 ml-7 space-y-8 ">
          <h2 className="font-bold text-[60px] leading-[1.2]">
            Unlock your Coding potential
          </h2>
          <h4 className="text-[20px] leading-[2] opacity-90">
            LEARN CREATE AND INNOVATE!
          </h4>
          <button className="bg-sky-600 hover:bg-sky-700 rounded-full font-bold py-4 px-4 transition-all duration-300   ">
            Explore Courses{" "}
          </button>
        </div>
        {/* right Part */}
        <div>
          <img className="lg:w-[720px] w-[400px] " src={herobg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
