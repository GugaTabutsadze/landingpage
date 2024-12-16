"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Casestudies = () => {
  const casies = [
    {
      id: 1,
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      id: 2,
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handle swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNavigation((activeIndex + 1) % casies.length),
    onSwipedRight: () =>
      handleNavigation((activeIndex - 1 + casies.length) % casies.length),
  });

  const handleNavigation = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* Mobile Slider */}
      <div
        {...swipeHandlers}
        className="md:hidden flex flex-col items-center justify-center mt-20 px-6 py-6 sm:px-0 mx-5 md:mx-24 bg-black rounded-[45px] relative md:p-10"
      >
        {/* Cases Container */}
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
          {casies.map((caseitem, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between sm:p-10 text-white transition-transform duration-700 ease-in-out ${
                index === activeIndex
                  ? "translate-x-0 opacity-100"
                  : index < activeIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="md:text-xl">{caseitem.text}</div>
              <button className="flex items-center gap-4 text-green-400">
                Learn more
                <img src="/images/arrowgreen.png" alt="arrow" />
              </button>
            </div>
          ))}
        </div>

        {/* Navigation points */}
        <div className="flex justify-center gap-4 mt-8">
          {casies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === activeIndex ? "bg-lightGreen" : "bg-morebisque"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Static grid for larger screens */}
      <div className="hidden md:flex items-center justify-center mt-20 mx-24 border bg-black rounded-[45px]">
        <div className="grid grid-cols-3 gap-16 px-16 py-14">
          {casies.map((caseitem) => (
            <div
              key={caseitem.id}
              className="flex flex-col items-start justify-between gap-5 text-white max-w-[286px] w-full"
            >
              <div>{caseitem.text}</div>
              <button className="flex items-center gap-4 text-green-400">
                Learn more
                <img src="/images/arrowgreen.png" alt="/" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Casestudies;
