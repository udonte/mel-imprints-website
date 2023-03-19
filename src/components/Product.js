import React from 'react';
//import data
import { product } from '../data';
import Grid from './Grid';

const Product = () => {
  //destructure product data
  const { title, subtitle, productImages } = product;
  return (
    <section className='section'>
      <div className="container mx-auto">
        {/* title & subtitle */}
        <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20 text-center'>
          <h2
            className='section-title lg:text-left'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'>{title}
          </h2>
          <p
            className='lead lg:max-w-[350px] text-center lg:text-left text-accent'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='400'>{subtitle}
          </p>
        </div>
        <Grid productImages={productImages} />
      </div>
    </section>
  )
};

export default Product;
