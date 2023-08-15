import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center p-8 px-6 py-12 border-t bg-gradient-to-r from-gray-700 to-gray-950 text-white">
      <div className="flex justify-center items-center max-w-[1280px] w-full flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full pb-10 lg:ml-32">
          <div className="flex justify-start items-start flex-1 w-full lg:mt-0 mt-16 flex-wrap lg:flex-no-wrap flex-col lg:w-[210px]">
            <p className="font-semibold xs:text-[20px] xs:leading-[26px]">
              Courses
            </p>
            <div className="mt-8">
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Filmpire
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Cryptoket
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                JavaScript
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Bootcamp
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start flex-1 w-full lg:mt-0 mt-16 flex-wrap lg:flex-no-wrap flex-col lg:w-[210px]">
            <p className="font-semibold xs:text-[20px] xs:leading-[26px]">
            JS Mastery
            </p>
            <div className="mt-8">
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
              Our Story
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Careers at JSM
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Contact Us
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Terms of Use
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start flex-1 w-full lg:mt-0 mt-16 flex-wrap lg:flex-no-wrap flex-col lg:w-[210px]">
            <p className="font-semibold xs:text-[20px] xs:leading-[26px]">
              Resources
            </p>
            <div className="mt-8">
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Knowledge Base
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Youtube Videos
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Free Guides
              </p>
              <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal cursor-pointer mb-4">
                Useful Links
              </p>
            </div>
          </div>
          {/* 4th Part */}
          <div className="flex justify-start items-start lg:flex-3 flex-1 w-full m-4 flex-wrap lg:flex-no-wrap flex-col lg:w-[75%]">
            <div className="w-full mt-4">
              <h3 className="font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] text-left">
                Get the 2022 Front-End Web Developer Roadmap
              </h3>
              <p className="xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal text-left mt-2 dark:text-[#A3B3BC]">
                This roadmap will provide you with a step-by-step journey and
                project ideas that will accelerate your career.
              </p>
              <div className="mt-6 flex flex-col lg:flex-row justify-start items-start lg:items-center">
                <input
                  type="text"
                  placeholder="Your Name"
                  className=" xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal md:max-w-[250px] max-w-full md:mb-0 mb-5 flex-1 px-5 py-3 outline-none rounded-full mr-2 dark:text-[#A3B3BC] text-pro-w-gray dark:bg-[#212933] bg-pro-w-blue"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className=" xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal md:max-w-[250px] max-w-full md:mb-0 mb-5 flex-1 px-5 py-3 outline-none rounded-full mr-2 dark:text-[#A3B3BC] text-pro-w-gray dark:bg-[#212933] bg-pro-w-blue"
                />
                <div className="flex flex-col xs:flex-row justify-start items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190FF] xs:min-h-[50px] min-w-[150px] xs:w-auto">
                  <button className="font-semibold xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
