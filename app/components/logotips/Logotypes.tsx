"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const logos = [
    {id: 1, src: "/images/amazon.png", alt: "amazon.png", link: "https://www.amazon.com"},
    {id: 2, src: "/images/dribble.png", alt: "dribble.png", link: "https://dribbble.com"},
    {id: 3, src: "/images/hotspot.png", alt: "hotspot.png", link: "https://www.hubspot.com"},
    {id: 4, src: "/images/netflix.png", alt: "netflix.png", link: "https://www.netflix.com/ge/"},
    {id: 5, src: "/images/notion.png", alt: "notion.png", link: "https://www.notion.so"},
    {id: 6, src: "/images/zoom.png", alt: "zoom.png", link: "https://www.zoom.com"},
]

const Logotypes = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Track the active logo index

  const handleNavigation = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div className="px-24 -mt-24 sm:mt-[70px]">
      {/* Slider for mobile screens */}
      <div className="md:hidden text-white relative h-64">
        {logos.map((logo, index) => (
          <div
            key={logo.id}
            className={`transition-all duration-500 ease-in-out transform ${
              index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            } absolute inset-0 flex items-center justify-center`}
          >
            <Link href={logo.link} target="_blank">
              <img src={logo.src} alt={logo.alt} className="w-32 h-32" />
            </Link>
          </div>
        ))}
        {/* Navigation points */}
        <div className="flex justify-center gap-4 mt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`w-4 h-4 rounded-full ${
                index === activeIndex ? 'bg-lightGreen' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Static grid for larger screens */}
      <div>
      <ul className="hidden md:flex justify-between">
        {logos.map((logo) => (
          <li
            key={logo.id}
            className="cursor-pointer transform transition duration-300 hover:scale-125"
          >
            <Link href={logo.link} target="_blank">
              <img src={logo.src} alt={logo.alt} />
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Logotypes;

