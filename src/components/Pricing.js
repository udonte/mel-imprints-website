import React, { useState } from 'react';
//import data
import { pricing } from '../data';
//import icons

const Pricing = () => {
  //set index state
  const [index, setIndex] = useState(1);
  //destructure pricing
  const { title, cards } = pricing;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='section-title mb-8 text-center'
          data-aos='fade-up'
          data-aos-delay='200'
          >
          {title}</h2>
        {/* cards */}
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
          {cards.map((card, cardIndex) => {
            //destructure card
            const { icon, title, name, delay } = card;
            //card
            return <div
              data-aos='fade-up'
              data-aos-delay={delay}
              data-aos-offset='300'
              key={cardIndex}>
              <div
                onClick={() => setIndex(cardIndex)}
                className={`${index === cardIndex ? 'bg-white shadow-2xl' : 'border border-grey'}  w-[350px] rounded-[12px] p-[40px] cursor-pointer transition-all`}>
                {/* card icon */}
                <div className='mb-8 flex items-center justify-center'>
                  <img src={icon} alt="" />
                </div>
                {/* card title */}
                <div className='text-[32px] font-semibold mb-8 text-center text-accent'>
                  {title}</div>
                {/* card name */}
                <div className='flex flex-col gap-y-2 mb-6'>
                      <div className='flex items-center text-center gap-x-[10px]' key={index}>
                        <div className='text-[20px] font-medium text-[#541e8f]'>{name}</div>
                      </div>
                </div>

              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
};

export default Pricing;
