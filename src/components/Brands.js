import React from 'react';
//import data
import { overview } from '../data';

const Brands = () => {
  const { brands, brandText } = overview;
  return <section className='py-9 flex flex-col justify-center items-center gap-4'>
    <h2 className='text-xl text-center font-medium tracking-wider text-purple-800'>{brandText}</h2>
    <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6'>
      {/* brands */}
      {brands.map((item, index) => {
        //destructure item
        const { image, delay } = item;
        return (
          <div key={index} data-aos='fade-up' data-aos-delay={delay}>
            {/* brand img */}
            <img src={image} alt="company" />
          </div>
        );
      })}
    </div>
  </section>
};

export default Brands;