import React from 'react'

const FooterHero = () => {
  return (
    <div className='flex items-center justify-between gap-[154px] mt-16 pb-12 font-mono border-b border-white '>
      <div className='flex flex-col items-start gap-[27px] max-w-[332px] w-full'>
         <div>
           <h2 className='text-xl bg-lightGreen font-medium text-black p-1 rounded-xl'>Contact Us:</h2>
         </div>
         <div className='flex flex-col gap-5'>
          <span>Email: info@positivus.com</span>
          <span>Phone: 555-567-8901</span>
          <span>Address: 1234 Main St
          Moonstone City, Stardust State 12345</span>
         </div>
      </div>
      <div className='flex items-center justify-center gap-5 max-w-[644px] rounded-xl bg-lightBlack py-14 px-10 w-full'>
        <input className='py-5 px-9 max-w-[285px] w-full bg-transparent border text-white
             border-white rounded-xl outline-none focus:placeholder:opacity-0' type='text' placeholder='Email' />
        <button className=' py-5 px-9 max-w-[249px] w-full bg-lightGreen text-black font-medium rounded-xl'>Subscribe to News</button>
      </div>
    </div>
  )
}

export default FooterHero
