import React from "react";
import "swiper/css";
import ProductCarousel from "./ProductCarousel";

const Slider = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] mt-24 " id="portfolio">
      {/* heading */}
      <span className="text-black text-5xl font-bold items-center justify-center fuzzy-bubbles-bold">Recent Selections</span>
      <span className="text-orange-500 text-4xl font-bold fuzzy-bubbles-bold">Best Buys</span>

      {/* slider */}
      <div className="w-full max-w-5xl mx-auto mt-10">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Slider;
