import Link from 'next/link'
import React from 'react'

const logos = [
    {id: 1, src: "/images/amazon.png", alt: "amazon.png", link: "https://www.amazon.com"},
    {id: 2, src: "/images/dribble.png", alt: "dribble.png", link: "https://dribbble.com"},
    {id: 3, src: "/images/hotspot.png", alt: "hotspot.png", link: "https://www.hubspot.com"},
    {id: 4, src: "/images/netflix.png", alt: "netflix.png", link: "https://www.netflix.com/ge/"},
    {id: 5, src: "/images/notion.png", alt: "notion.png", link: "https://www.notion.so"},
    {id: 6, src: "/images/zoom.png", alt: "zoom.png", link: "https://www.zoom.com"},
]

const Logotypes = () => {
  return (
    <div className='flex px-24 mt-[70px]'>
      <ul className='flex justify-between w-full'>
       {
        logos.map(logo => 
           <li key={logo.id} className='cursor-pointer transform transition
               duration-300 hover:scale-125'>
              <Link href={logo.link} target='blank'>
                <img 
                  src={logo.src}
                  alt={logo.alt}
                 />
              </Link>  
        </li>)
       }
      </ul>
    </div>
  )
}

export default Logotypes
