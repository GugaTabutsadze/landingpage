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
    <div className='flex justify-between items-center
         px-24 pb-3 pt-24 w-full bg-lightbisque'>
          <h1 className='text-3xl font-bold font-mono'>Here is Your space</h1>
      <div className='flex items-center space-x-10'>
        <ul className='font-mono font-semibold flex space-x-10'>
            {
              links.map(link => 
              <Link key={link.id} className='transform transition duration-500 hover:scale-110' href="">
                {link.href}
              </Link>)
            }
        </ul>
        <button className='px-9 py-3 bg-black rounded-2xl
               text-white font-mono hover:bg-[rgb(50,50,50)]
          duration-300 transition ease-in-out'>
           Request
         </button>
      </div>
    </div>
  )
}

export default Nav
