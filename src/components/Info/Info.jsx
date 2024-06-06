import React from "react";
import PerfectPresent from "./PerfectPresent";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

const Info = () => {
  return (
    <div className="flex pt-20">
      <div className="w-1/2 pr-4 ml-10">
        <PerfectPresent />
      </div>
      <div className="w-1/2 pl-4">
      <div className="flex flex-1 relative">
            <div className=" min-h-screen flex justify-center items-center">
            <img src={Vector1} alt=""  />
            <img src={Vector2} alt="" className="absolute scale-75 -left-3 " />
            <img src={boy} alt="" className="absolute scale-125 left-28" />
            </div>
        </div>
        </div>
    </div>
  );
};

export default Info;
