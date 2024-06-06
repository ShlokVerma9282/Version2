import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import "./Slider.css";

function Carousel({ onReviewClick }) {
  return (
    <div className="max-w h-75 mt-10">
      <div className="mt-2 mb-16">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            modifier: 1,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        >
          {data.map((d, index) => (
            <SwiperSlide key={index} className="rounded-3xl">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center items-center w-full mt-2">
                <img
                  src={d.img}
                  alt=""
                  className="items-center h-70 w-80 rounded-lg border-black cursor-pointer"
                  onClick={() => onReviewClick(d.review)}
                />
              </div>
          
              <div
                className="bg-gray-50 h-22 w-full font-italic text-black rounded-xl flex flex-col items-center justify-center gap-7 mt-3 mb-2 border-black shadow-lg cursor-pointer"
                onClick={() => onReviewClick(d.review)}
              >
                <p className="text-center fuzzy-bubbles-bold text-orange-400 text-base">
                  {d.review}
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          
          ))}
        </Swiper>
        <div className="custom-pagination" style={{ marginTop: '40px', textAlign: 'center' }}></div>
      </div>
    </div>
  );
}

const data = [
  {
    img: img1,
    review:
      "Best Gift to Give this christmas.",
  },
  {
    img: img2,
    review:
      "Best Candy to give this Halloween.",
  },
  {
    img: img3,
    review:
      "Best Gift for this Valentine.",
  },
  {
    img: img1,
    review:
      "Best Gift to Give this christmas.",
  },
  {
    img: img2,
    review:
      "Best Candy to give this Halloween.",
  },
  {
    img: img3,
    review:
      "Best Gift for this Valentine.",
  },
];

export default Carousel;
