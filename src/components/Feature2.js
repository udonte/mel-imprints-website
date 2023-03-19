import React from 'react';
import { features } from '../data';

const Feature2 = () => {
  //destructure features
  const { feature2 } = features;
  //destructure features2
  const { pretitle, title, subtitle, image } = feature2;
  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
            <div>
            {/* image*/}
            <div className='flex-1 order-2 lg:order-1' data-aos='fade-right' data-aos-offset='300'>
              <img src={image} alt="" style={{width: '500px'}} />
            </div>
          </div>
          {/* text */}
            <div className='flex-1 order-1 lg:order-2' data-aos='fade-left' data-aos-offset='400'>
              <div className='pretitle text-accent'>{pretitle}</div>
              <h2 className='title'>{title}</h2>
              <p className='lead'>{subtitle}</p>
            </div>
        </div>
      </div>
    </section>
  )
};

export default Feature2;
