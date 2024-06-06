import React from "react";
import "./Services.css";
import Card from "./Card/Card";
import HeartEmoji from "../../img/gift.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/Sparkle.jpg";
import { motion } from "framer-motion";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="mt-24 ml-40">
      <div className="services" id="services">
        {/* right side */}
          <div className="cards">
            {/* first card */}
            <motion.div
              initial={{ left: "25rem" }}
              whileInView={{ left: "14rem" }}
              transition={transition}
            >
              <Card
                emoji={HeartEmoji}
                detail={"Explore our curated selection that is sure to delight"}
              />
            </motion.div>
            {/* second card */}
            <motion.div
              initial={{ left: "-11rem", top: "12rem" }}
              whileInView={{ left: "-4rem" }}
              transition={transition}
            >
              <Card
                emoji={Glasses}
                detail={"Discover gifts that sparkle with joy and make every moment memorable!"}
              />
            </motion.div>
            {/* 3rd */}
            <motion.div
              initial={{ top: "19rem", left: "25rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}
            >
              <Card
                emoji={Humble}
                detail={
                  "Gifts that glow with the warmth of  thousand stars!"
                }
                color="rgba(252, 166, 31, 0.45)"
              />
            </motion.div>
            <div
              className="blur s-blur2"
              style={{ background: "var(--purple)" }}
            ></div>
        </div>
        {/* left side */}
        <div className="w-3/5"></div>
        <div className="pt-40">
          <div className="awesome">
            <span className="mt-10 fuzzy-bubbles-bold">Our Awesome</span>
            <span className="fuzzy-bubbles-bold">services</span>
            <span className="open-sans-regular">
            Unlock the Art of Thoughtful Gifting at GiftGuru.co.in!
            <br/>Navigate our constellation of curated treasures and unveil
            <br/> the perfect gift with cosmic ease. Begin your journey today,
            <br/> where every click whispers a personalized surprise.
            </span>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
