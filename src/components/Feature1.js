import React from 'react';
import { features } from '../data';

const Feature1 = () => {
  //destructure features
  const { feature1 } = features;
  //destructure features1
  const { pretitle, title, subtitle,  image } = feature1;
  return (
    <section className='section' id='about'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
            {/* text */}
            <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
              <div className='pretitle text-accent'>{pretitle}</div>
              <h2 className='title'>{title}</h2>
              <p className='lead text-left'>{subtitle}</p>
            </div>
            <div className='flex-1'>
            {/* image*/}
            <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>
              <img src={image} alt="" style={{width: '500px'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Feature1;
