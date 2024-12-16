"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Testimonial {
  id: number;
  name: string;
  text: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Your first Testimonial",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis earum sapiente eos recusandae obcaecati ab tempora saepe modi quasi eligendi, ratione sed quia facere eveniet sequi quae dolorum!",
    },
    {
      id: 2,
      name: "Your second Testimonial",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis earum sapiente eos recusandae obcaecati ab tempora saepe modi quasi eligendi, ratione sed quia facere eveniet sequi quae dolorum!",
    },
    {
      id: 3,
      name: "Your third Testimonial",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis earum sapiente eos recusandae obcaecati ab tempora saepe modi quasi eligendi, ratione sed quia facere eveniet sequi quae dolorum!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNavigation = (index: number): void => {
    setActiveIndex(index);
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setActiveIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setActiveIndex((prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
      ),
  });

  return (
    <div className="md:px-24 mt-5 md:mt-20">
      {/* Add swipe handlers to the container */}
      <div
        {...swipeHandlers}
        className="bg-black rounded-[45px] text-white relative overflow-hidden h-64"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`md:w-1/2 py-7 md:py-0 transition-all duration-500 ease-in-out transform ${
              index === activeIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            } absolute inset-0 left-[5%] md:left-[25%] md:top-[15%]`}
          >
            <h1 className="md:text-2xl font-bold text-lightGreen pb-10">
              {testimonial.name}
            </h1>
            <p className="md:text-lg mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation points */}
      <div className="flex justify-center gap-4 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-lightGreen" : "bg-morebisque"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
