import React from 'react';
import { hero } from '../data'
import {  HiOutlinePhone } from 'react-icons/hi'



const Hero = () => {
  //destructure hero data
  const { title, subtitle, btnText, compText, image } = hero;
  return (
    <section className='min-h-[900px] py-12'>
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className='flex flex-col lg:gap-x-[50px] gap-y-8 lg-gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/* text */}
          <div className='flex-1'>
            <h1 className='title mb-2 lg:mb-5'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {title}</h1>
            <p className='lead mb-5 lg:mb-10'
              data-aos='fade-down'
              data-aos-delay='600'
            >{subtitle}</p>
            {/* btn & comp text*/}
            <div className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              <a href="tel:2348141667571">
              <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                 <HiOutlinePhone />
                {btnText}
                </button>
                </a>
              <span className='text-light lg:lead lg:mb-0'>{compText}</span>
            </div>
          </div>
          {/* image */}
          <div className='shadow-2xl flex item-center justify-end flex-1 bg-accent py-10 rounded-bl-[20rem]'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )

};

export default Hero;
