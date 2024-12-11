import React from 'react'


const Casestudies = () => {
    const casies = [
        {id:1, text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."},
        {id:2, text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."},
        {id:3, text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."},
    ]
    return (
        <div className="flex items-center justify-center mt-20 mx-24 border bg-black rounded-[45px]">
          <div className="grid grid-cols-3 gap-16 px-16 py-14">
            {casies.map((caseitem, index) => (
              <div
                key={caseitem.id}
                className={`flex flex-col items-start justify-between gap-5 text-white max-w-[286px] w-full`}
              >
                <div>{caseitem.text}</div>
                <button className="flex items-center gap-4 text-green-400">
                  Learn more
                  <img src="/images/Iconarrow1.png" alt="/" />
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Casestudies
