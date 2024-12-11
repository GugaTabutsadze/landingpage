import React from 'react'

const Team = () => {
 
    const members = [
        {id: 1, name: "Here is Your Team memeber", experience: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum similique nam officia dolore voluptatem"},
        {id: 2, name: "Here is Your Team memeber", experience: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum similique nam officia dolore voluptatem"},
        {id: 3, name: "Here is Your Team memeber", experience: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum similique nam officia dolore voluptatem"},
        {id: 4, name: "Here is Your Team memeber", experience: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum similique nam officia dolore voluptatem"},
        {id: 5, name: "Here is Your Team memeber", experience: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum similique nam officia dolore voluptatem"},
        {id: 6, name: "Here is Your Team memeber", experience: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum similique nam officia dolore voluptatem"},
    ]

  return (
    <div className='px-24'>
      <div className='grid grid-cols-3 gap-10 mt-20 font-mono'>
         {
           members.map((member, index) => 
           (
            <div key={index} className='px-8 py-10 bg-white border
                 shadow-bottom border-black rounded-[45px]'>
                <div className='flex items-center gap-10  border-b border-black pb-7'>
                   <h1 className='border w-1/2 bg-lightGreen'>{member.name}</h1>
                   <img width={100} height={100} src='/images/society.png' alt='society.png' />
                </div>
              <p className='pt-7'>{member.experience}</p>
            </div>
           )
          )
         }
      </div>
    </div>
  )
}

export default Team
