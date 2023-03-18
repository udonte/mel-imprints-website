import React from 'react';
import { overview } from '../data';

const Overview = () => {
  //destructure overview data
  const { productImg } = overview;
  return (
    <section className='lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className='container mx-auto flex justify-center overflow-hidden'>
        <div
          className='rounded-t-[5rem] overflow-hidden .blue__gradient border-b-8' >
        <img src={productImg} alt=""
          data-aos='fade-up' data-aos-offset='300'
          />
          </div>
      </div>
    </section>
  );
};

export default Overview;
