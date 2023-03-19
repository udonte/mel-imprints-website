import React from 'react';
import { features } from '../data';

const Feature3 = () => {
  //destructure features
  const { feature3 } = features;
  //destructure features2
  const { pretitle, title, subtitle, image } = feature3;
  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
            <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
              <div className='pretitle text-accent'>{pretitle}</div>
              <h2 className='title'>{title}</h2>
              <p className='lead'>{subtitle}</p>
          </div>
          {/* image*/}
            <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
              <img src={image} alt="" style={{width: '500px'}} />
            </div>
        </div>
      </div>
    </section>
  )
};

export default Feature3;
