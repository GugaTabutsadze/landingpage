import Link from 'next/link'
import React from 'react'
import FooterHero from './footerhero/FooterHero'

const Footer = () => {

    const links = [
        {id: 1, href: "About us"},
        {id: 2, href: "Services"},
        {id: 3, href: "Use Cases"},
        {id: 4, href: "Pricing"},
        {id: 5, href: "Blog"},
      ]
      const socials = [
        {id:6, src: "/images/linkedin.png"},
        {id:7, src: "/images/facebook.png"},
        {id:8, src: "/images/twitter.png"},
      ]

  return (
    <div className='px-24 py-14 mt-[140px] max-w-[1440px] w-full bg-black rounded-t-[45px] text-white'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-mono'>Here Is Your Logo</h1>
        <div className='flex items-center gap-10 font-mono underline'>
        {
           links.map(link => 
             <Link key={link.id} className='transform transition duration-500 hover:scale-125' href="">
               {link.href}
             </Link>)
          }
        </div>
        <div className='flex items-center gap-5'>
        {
           socials.map(social => 
             <Link key={social.id} className='transform transition duration-500 hover:scale-125' href="">
               <img src={social.src} alt='sociallink' />
             </Link>)
          }
        </div>
      </div>
      <FooterHero />
      <div className='flex items-center gap-10 pt-12'>
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p className='underline'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
