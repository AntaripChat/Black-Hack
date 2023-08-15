import React, { useState } from "react";

const FAQ = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordian = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="flex justify-between max-w-7xl w-full flex-col items-center">
      <div className="w-full flex justify-center items-center flex-col mt-10 max-w max-w-5xl">
  <div className="w-full flex justify-center flex-col mt-10 max-w max-w-5xl">
    {items.map((item, index) => (
      <div
        className={`flex w-full justify-start items-start flex-col mb-6 pb-4 border-b ${
          index === activeIndex ? "active" : ""
        }`}
        key={item.id}
      >
        <div
          className="flex w-full justify-between items-center cursor-pointer"
          onClick={() => toggleAccordian(index)}
        >
          <h3 className="font-semibold text-lg md:text-2xl leading-6 text-[#d4ddec] flex-1">
            {item.title}
          </h3>
          <div
            className="relative ml-2 w-4 cursor-pointer text-[#FFFFFF]"
            aria-expanded={index === activeIndex}
          >
            <span className="box-border inline-block overflow-hidden opacity-1 border-0 p-0 m-0 relative">
              <span className="box-border block opacity-1 border-0 p-0 m-0 max-w-[100%] text-2xl md:text-4xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </span>
          </div>
        </div>
        <div
          className={`accordion-content ${
            index === activeIndex ? "open" : ""
          }`}
        >
          {index === activeIndex && (
            <div>
              <p className="text-base md:text-lg leading-6 text-[#bbc6d8] mt-2">
                {item.content}
              </p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default FAQ;

