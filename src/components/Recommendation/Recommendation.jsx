import React from "react";
import Carousel from "./Carousel";

const Recommendation = () => {
  

  return (
    <div className="ml-10">
      <div>
        <div className="mt-10 pt-10 ">
          <span className="text-3xl text-black fuzzy-bubbles-bold">Our Curated </span>
          <span className="text-3xl  text-orange-400 fuzzy-bubbles-bold">best list </span>
          <span className="text-3xl  text-black fuzzy-bubbles-bold">for...</span>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Recommendation;
