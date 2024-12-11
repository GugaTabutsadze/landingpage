"use client"
import React, { useEffect, useState } from 'react'
import { text } from 'stream/consumers';

const Contactus = () => {

  const [selectedOption, setSelectedOption] = useState<string>("Say hi");
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");


  useEffect(() => {
    setIsHydrated(true); // Ensure hydration is complete
  }, []);
  if (!isHydrated) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSelectedOption(e.target.value);
    setMessage(e.target.value);
  };
  

  
  
  return (
    <div className='flex items-center justify-between px-24 py-14 bg-morebisque rounded-2xl mt-20'>
      <form className='flex flex-col max-w-[500px] w-full gap-10'>
        <div className='flex gap-8'>
           <label className='flex gap-3'>
              <input 
                 className='w-[28px]'
                 name='contactOption'
                 value="Say hi"
                 checked={selectedOption === "Say hi"}
                 type='radio' 
                 onChange={handleChange}
                 />
               <span className='font-mono text-[18px]'>Say hi</span>
           </label>
           <label className='flex gap-3'>
            <input 
               className='w-[28px]'
               name='contactOption'
               value="Get a quote"
               checked={selectedOption === "Get a quote"}
               type='radio' 
               onChange={handleChange}
               />
            <span className='font-mono text-[18px]'>Get a Quote</span>
           </label>
        </div>
        <div className='flex flex-col gap-7 items-start'>
            <label className='flex flex-col gap-2 max-w-[500px] w-full'>
                <span className='font-mono'>Name:</span>
                 <input 
                   className='max-w-[496px] py-[18px] px-[30px] border border-black rounded-2xl w-full focus:placeholder:opacity-0' placeholder='name' type='text' alt='/' />
            </label>
            <label className='flex flex-col gap-2 max-w-[500px] w-full'>
                <span className='font-mono'>Email:</span>
                 <input className='max-w-[496px] py-[18px] px-[30px] border border-black rounded-2xl w-full focus:placeholder:opacity-0' placeholder='email' type='email' alt='/' />
            </label>
            <label className="flex flex-col gap-2 max-w-[500px] w-full">
                 <span className='font-mono'>Message:</span>
                 <textarea
                   className="max-w-[496px] w-full h-[154px] py-[18px] px-[30px] border border-black rounded-2xl resize-none focus:placeholder:opacity-0"
                   placeholder='Message'
                   value=""
                   onChange={handleChange}
                 >
                 </textarea>
            </label>
             <button className='py-5 px-9 rounded-[14px] bg-black text-white font-mono max-w-[496px] w-full hover:bg-[rgb(50,50,50)]'>
                Send Message
             </button>
        </div>
      </form>
      <img  className='w-1/3' src='/images/operator.png' alt='operator.png' />
    </div>
  )
}

export default Contactus
