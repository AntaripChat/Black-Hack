import React from "react";
import movie from "../images/movie.jpg";
import NFT from "../images/NFT.jpg";

const CardHero = () => {
  return (
    <section className="relative justify-center items-center bg-gradient-to-r from-gray-700 to-gray-950 text-white pt-4 sm:p-16 xs:p-8 px-6 py-12">
  <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col">
    <div className="flex flex-col items-center max-w-[1280px] space-y-8">
      <h1 className="text-pro-w-black font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
        Comprehensive{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          Project-Based
        </span>{" "}
        Courses to Help You Become a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          JavaScript Master
        </span>
      </h1>
      <p className="xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal sm:w-[75%] w-[100%] text-center">
        Want to master React.js or create a stunning Web 3.0 blockchain app?
        Join other professional developers inside Filmpire where you'll build
        a Netflix clone streaming app or NFT Marketplace where you'll develop
        Cryptoket, a fully-functioning NFT platform.
      </p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-auto justify-center space-y-4 md:space-y-0 md:space-x-4">
    <div className="p-4 max-w-md">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="h-48 w-full object-cover object-center"
          src={movie}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-cyan-200 text-center mb-3">
            Build an AI powered movie application using react
          </h1>
          <p className="leading-relaxed mb-3 text-center">
            Kiss theory-driven courses goodbye and build an interactive movie app that showcases your development prowess
          </p>
          <div className="flex items-center justify-center">
            <button className="text-white rounded-full border px-4 py-2 bg-blue-500 inline-flex items-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 max-w-md">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="h-48 w-full object-cover object-center"
          src={NFT}
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-cyan-200 text-center mb-3">
            Build an NFT Marketplace and Dive Into the World of Web 3.0
          </h1>
          <p className="leading-relaxed text-center mb-3">
            Create your own blockchain-based marketplace app where users can discover, create, purchase, and sell NFTs
          </p>
          <div className="flex items-center justify-center">
            <button className="text-white rounded-full border px-4 py-2 bg-blue-500 inline-flex items-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default CardHero;
