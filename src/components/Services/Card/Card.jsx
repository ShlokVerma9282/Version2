import React from "react";
import "./Card.css";

const Card = ({emoji,detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{detail}</span>
    </div>
  );
};

export default Card;
