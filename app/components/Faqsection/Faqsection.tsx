"use client"
import React, { useState } from 'react'

interface FaqItem {
  id: number;
  num: string;
  title: string;
  answer: string;
}

const Faqsection = () => {
 
    const faqs = [
        {id: 1, num: "01", title: "Consultation", answer: "Lorem ipsum dolor sit amet consectetur, hic, consectetur laudantium sed labore dolores nostrum eaque accusamus minima aut."},
        {id: 2, num: "02", title: "Research and Strategy Development", answer: "Lorem ipsum dolor sit amet consectetur, hic, consectetur laudantium sed labore dolores nostrum eaque accusamus minima aut."},
        {id: 3, num: "03", title: "Inmplementation", answer: "Lorem ipsum dolor sit amet consectetur, hic, consectetur laudantium sed labore dolores nostrum eaque accusamus minima aut."},
        {id: 4, num: "04", title: "Monitoring and Optimization", answer: "Lorem ipsum dolor sit amet consectetur, hic, consectetur laudantium sed labore dolores nostrum eaque accusamus minima aut."},
        {id: 5, num: "05", title: "Reporting and Comunication", answer: "Lorem ipsum dolor sit amet consectetur, hic, consectetur laudantium sed labore dolores nostrum eaque accusamus minima aut."},
        {id: 6, num: "06", title: "Continual improvment", answer: "Lorem ipsum dolor sit amet consectetur, hic, consectetur laudantium sed labore dolores nostrum eaque accusamus minima aut."},
    ]

    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const handleOpen = (id: number): void => {
      setFaqOpen((prev) => (prev === id ? null : id));
    };
  
  return (
    <div className='md:px-24 mt-20'>
      <div>
        <ul className='flex flex-col gap-7'>
            {
             faqs.map((faqitem) => (
               <li key={faqitem.id} 
                 className={`px-3 py-5 md:px-14 md:py-10 border font-mono shadow-bottom border-black rounded-[45px] ${faqOpen === faqitem.id ? "bg-lightGreen" : ""}`}>
                 <div className='flex items-center gap-2 md:gap-0  justify-between pb-1 md:pb-7'>
                    <div className='flex items-center font-medium gap-6'>
                      <h1 className='text-sm md:text-6xl'>{faqitem.num}</h1>
                      <h2 className='text-sm md:text-3xl'>{faqitem.title}</h2>
                    </div>
                    <div className='flex'>
                     {faqOpen === faqitem.id ? <img 
                       onClick={() => handleOpen(faqitem.id)}
                       className='cursor-pointer'
                       src='/images/minusicon.png' alt='minusicon.png' />
                       : 
                       <img 
                       onClick={() => handleOpen(faqitem.id)}
                       src="/images/Plusicon.png"
                       alt="plusicon"
                       className="cursor-pointer"
                     />
                     }
                    </div>
                 </div>
                 {
                   faqOpen === faqitem.id &&
                   <div className='border-t text-sm md:text-base border-black pt-7'>
                      <p>{faqitem.answer}</p>
                   </div>
                  }
                </li>
             ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Faqsection
