import React from 'react'

const services = [
    {id: 1, job: "Search Engine Optimazing", src: "/images/optimization.png"},
    {id: 2, job: "Pay-Per-Click Advertising", src: "/images/payperclick.png"},
    {id: 3, job: "Social Media Marketing", src: "/images/digital-marketing.png"},
    {id: 4, job: "Email Marketing", src: "/images/email-marketing.png"},
    {id: 5, job: "Content Creation", src: "/images/content-creator.png"},
    {id: 6, job: "Analytics and Tracking", src: "/images/monitoring.png"},
]

const Services = () => {

    return (
      <div className='grid grid-cols-2 gap-10 px-24 pt-20'>
        {
          services.map(service => (
              <div 
                   className={`flex  mx-auto border max-w-[600px]
                      border-black w-full p-12 rounded-[40px]
                       ${[2,3,6].includes(service.id) ?
                         "bg-black text-white"
                         : "bg-morebisque text-black"
                        }`}
                   key={service.id}>
                  <div className='container flex flex-col items-start gap-10'>
                      <h1 className={`font-medium font-mono p-1 ${[2,3,6].includes(service.id) ? "bg-lightGreen text-black" : "bg-white"}`}>{service.job}</h1>
                      <button className='flex items-center gap-[15px]'>
                      {service.id === 2 || service.id === 3 || service.id === 6 ? (
                         <img src="/images/Iconarrow1.png" alt="iconarrow1.png" />
                         ) : (
                         <img src="/images/Iconarrow2.png" alt="iconarrow2.png" />
                      )}
                          Learn more
                      </button>
                  </div>
                  <img width={100} height={100} src={service.src} alt='/' />
              </div>
          ))
        }
      </div>
    )
  }
  
  export default Services
