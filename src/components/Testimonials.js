import React from "react";

const Testimonials = ({ items }) => {
  return (
    <section className="flex justify-center items-center px-4 md:px-6 py-8 bg-gradient-to-r from-gray-700 to-gray-950 text-white pt-8">
      <div className="flex justify-center items-center max-w-[1280px] w-full flex-col">
        <h2 className="font-bold text-3xl md:text-5xl leading-[32px] md:leading-[40px] text-center">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">
            Global Students
          </span>{" "}
          Say It Best
        </h2>
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              className="inline-block w-full rounded-[20px] p-6 bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-500"
              key={item.id}
            >
              <div className="w-full flex flex-row justify-between items-center mb-5">
                <div className="w-full flex-1 flex flex-row">
                  <div className="relative w-[48px] h-[48px] rounded-[24px] overflow-hidden flex justify-center items-center">
                    <span>
                      <img src={item.img} alt="" />
                    </span>
                  </div>
                  <div className="flex flex-col justify-center ml-2 mt-0">
                    <p className="font-semibold text-lg leading-[26px]">
                      {item.title}
                    </p>
                    <p className="font-normal text-sm leading-[20px] mt-1 text-[#A3B3BC]">
                      {item.source}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-[22px] font-normal text-[#A3B3BC]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
