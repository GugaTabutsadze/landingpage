import Link from 'next/link'
import React from 'react'

const links = [
  {id: 1, href: "About us"},
  {id: 2, href: "Services"},
  {id: 3, href: "Use Cases"},
  {id: 4, href: "Pricing"},
  {id: 5, href: "Blog"},
]

const Nav = () => {
  return (
    <div className='flex justify-between items-center py-2 px-6
         lg:px-24 lg:pb-3 lg:pt-24 w-full bg-lightbisque'>
      <h1 className='text-lg md:text-3xl font-bold font-mono'>logo</h1>
      <div className='flex items-center space-x-10'>
        <ul className='hidden font-mono font-semibold  lg:flex lg:space-x-10'>
         {
          links.map(link => 
            <Link key={link.id} className='transform transition duration-500 hover:scale-110' href="">
              {link.href}
            </Link>)
          }
        </ul>
        <div className='hidden lg:flex items-center'>
           <button className='px-9 py-3 bg-black rounded-2xl
               text-white font-mono hover:bg-[rgb(50,50,50)]
               duration-300 transition ease-in-out'>
               Request
           </button>
        </div>
         <img 
           className='lg:hidden'
           width={50} height={50}
           src='/images/menu.png' 
           alt='menu.png' />
      </div>
    </div>
  )
}

export default Nav
