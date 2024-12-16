import React from 'react'

const Header = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-28 px-24 my-16 bg-morebisque rounded-2xl'>
      <div className='hidden md:flex flex-col gap-5 lg:gap-0 lg:justify-evenly items-start'>
         <h1 className=' text-4xl font-mono font-bold'>Create Your Space</h1>
         <p className=' font-mono'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          At, totam quas ipsum repellendus enim aliquam reiciendis molestiae
          pariatur ratione temporibus, 
          magni maxime nisi facere eum possimus officia deserunt sapiente atque.
         </p>
         <button className='px-9 py-5 bg-black rounded-xl
               text-white font-mono hover:bg-[rgb(50,50,50)]
          duration-300 transition ease-in-out'>
           Book Consultation
         </button>
      </div>
      <div className='flex flex-col gap-7'>
         <img 
           className='rounded-2xl'
           src='/images/cosmos.png'
           alt='cosmos.png'
          />
          <button className='sm:hidden max-w-[500px] px-10 py-2 bg-black rounded-xl
               text-white font-mono hover:bg-[rgb(50,50,50)]
          duration-300 transition ease-in-out'>
           Book Consultation
         </button>
      </div>
    </div>
  )
}

export default Header

