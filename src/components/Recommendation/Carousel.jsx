import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './swiper-overrides.css'; // Import the custom CSS

import { ServiceData } from './Constants';
import FlippingCard from './FlippingCard'; // Import the FlippingCard component

const Carousel = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 flex-col h-[600px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}  // Enable looping
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <FlippingCard backgroundImage={item.backgroundImage}  head={item.head} option1={item.option1} option2={item.option2} option3={item.option3} option4={item.option4} option5={item.option5}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
