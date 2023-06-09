import React from 'react';
//import data
import { cta } from '../data';
//import icons
import whatsapp from '../assets/img/cta/whatsapp.png';

const Cta = () => {
  //destructure cta data
  const { title, subtitle, img1, img2} = cta;
  return (
    <section className='section bg-cta bg-cover bg-left-top' id='cta'>
      <div className='max-w-[1340px] mx-auto px-[25px]'>
        {/* text */}
        <div className='max-w-[920px] mx-auto text-center'>
          <h2
            className='h2 text-white mb-6'
            data-aos='fade-up'
            data-aos-delay='200'
          >{title}
          </h2>
          <p
            className='text-2xl lg:text-4xl text-white'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            {subtitle}
            </p>
        </div>
        {/* btn & images */}
        <div className='flex justify-between'>
          <img
            className='hidden xl:flex' src={img1}
            data-aos='zoom-out-right'
            data-aos-delay='700'
            alt="" />
          <div
            className='mt-[40px] mx-auto w-[100px]'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <a href='https://wa.me/2348141667571' target='_blank' rel="noopener noreferrer"><img src={whatsapp} style={{ width: '100px', cursor: 'pointer' }} alt="" /></a>
          </div>
          <img
            className='hidden xl:flex'
            src={img2}
            alt=""
            data-aos='zoom-out-left'
            data-aos-delay='200'
          />
        </div>
      </div>
    </section>
  )
};

export default Cta;
