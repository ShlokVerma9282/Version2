import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span className="fuzzy-bubbles-bold">Works with All these</span>
          <span className="fuzzy-bubbles-bold">Brands & Clients</span>
            <span className="open-sans-regular ">
              Trusted by Top Brands We’re proud to collaborate with global giants 
              <br />
              like Shopify and Amazon to bring you an array of choices from the best in 
              <br />
              the business.Whether it’s a birthday bash or a token of appreciation, find
              <br /> the ideal gift with ease and confidence.
            </span>
        </div>
      </div>
      <div className="w-1/6"></div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
