import React from 'react';
//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
//import swiper styles
import 'swiper/css'


const ClientSlider = ({clients}) => {
  return (
    <Swiper slidesPerView={1} spaceBetween={30} grabCursor={true} loop={true} breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }}
    >
      {clients.map((client, index) => {
        //destructure client
        const { message, image, name, position, borderColor } = client;
        //slide
        return (
          <SwiperSlide
            key={index}
            style={{ borderColor: borderColor }}
            className='border-t-[10px] rounded-t-[12px]'
          >
            {/* card */}
            <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] min-h-[500px] rounded-[12px] border border-grey py-6 px-[30px]'>
            {/* client message */}
            <div className='mb-[30px] text-center min-h-100 w-full'>{message}</div>
            {/* client name, img & position */}
              <div className='flex gap-x-[10px] max-w-50 max-h-50'>
                <div className='rounded-full w-[50px] h-[50px] overflow-hidden' style={{borderRadius: '50%', width: '50px', height: '50px'}}>
                  <img src={image} alt="" className='rounded-full object-cover' />
                </div>
                <div className='flex flex-col gap-y-2'>
                <div className='font-bold'>{name}</div>
              <div className='text-light'>{position}</div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default ClientSlider;
